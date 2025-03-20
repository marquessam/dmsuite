// src/tools/DungeonMapMaker/mapGenerator.js
import seedrandom from 'seedrandom';

// Map Generation Logic
export function generateDungeon(settings) {
  // Create a seeded random number generator
  const rng = seedrandom(settings.seed.toString());
  
  // Set up dungeon dimensions based on dungeon size
  let gridSize, width, height;
  
  switch(settings.dungeonSize) {
    case 'small':
      gridSize = 25;
      width = height = 500;
      break;
    case 'large':
      gridSize = 40;
      width = height = 800;
      break;
    case 'medium':
    default:
      gridSize = 30;
      width = height = 600;
      break;
  }
  
  // Create grid representation of the dungeon
  const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
  
  // Room size constraints based on settings
  let minRoomSize, maxRoomSize;
  
  switch(settings.maxRoomSize) {
    case 'small':
      minRoomSize = 3;
      maxRoomSize = 5;
      break;
    case 'large':
      minRoomSize = 5;
      maxRoomSize = 10;
      break;
    case 'medium':
    default:
      minRoomSize = 4;
      maxRoomSize = 8;
      break;
  }
  
  // Generate rooms
  const numRooms = settings.numRooms;
  const rooms = [];
  
  // Try to place rooms without overlap
  let attempts = 0;
  const maxAttempts = 500;
  
  while (rooms.length < numRooms && attempts < maxAttempts) {
    attempts++;
    
    // Random room dimensions
    const roomWidth = Math.floor(rng() * (maxRoomSize - minRoomSize + 1)) + minRoomSize;
    const roomHeight = Math.floor(rng() * (maxRoomSize - minRoomSize + 1)) + minRoomSize;
    
    // Random room position
    const roomX = Math.floor(rng() * (gridSize - roomWidth - 2)) + 1;
    const roomY = Math.floor(rng() * (gridSize - roomHeight - 2)) + 1;
    
    // Check for overlap with existing rooms (including buffer space)
    let overlaps = false;
    for (let x = roomX - 1; x < roomX + roomWidth + 1; x++) {
      for (let y = roomY - 1; y < roomY + roomHeight + 1; y++) {
        if (x < 0 || y < 0 || x >= gridSize || y >= gridSize || grid[x][y] === 1) {
          overlaps = true;
          break;
        }
      }
      if (overlaps) break;
    }
    
    if (!overlaps) {
      // Place room in grid
      for (let x = roomX; x < roomX + roomWidth; x++) {
        for (let y = roomY; y < roomY + roomHeight; y++) {
          grid[x][y] = 1;
        }
      }
      
      // Add room to list
      rooms.push({
        id: rooms.length + 1,
        x: (roomX / gridSize) * 100,
        y: (roomY / gridSize) * 100,
        width: (roomWidth / gridSize) * 100,
        height: (roomHeight / gridSize) * 100,
        gridX: roomX,
        gridY: roomY,
        gridWidth: roomWidth,
        gridHeight: roomHeight
      });
    }
  }
  
  // Connect rooms with corridors
  const corridors = [];
  
  // Sort rooms to make connections more logical (e.g., by position)
  const sortedRooms = [...rooms].sort((a, b) => {
    // Sort primarily by x, then by y
    if (Math.abs(a.gridX - b.gridX) > 5) {
      return a.gridX - b.gridX;
    }
    return a.gridY - b.gridY;
  });
  
  // Connect each room to the next room in the sorted list
  for (let i = 0; i < sortedRooms.length - 1; i++) {
    const roomA = sortedRooms[i];
    const roomB = sortedRooms[i + 1];
    
    // Find center points of rooms
    const roomACenterX = roomA.gridX + roomA.gridWidth / 2;
    const roomACenterY = roomA.gridY + roomA.gridHeight / 2;
    const roomBCenterX = roomB.gridX + roomB.gridWidth / 2;
    const roomBCenterY = roomB.gridY + roomB.gridHeight / 2;
    
    // Create a corridor between them (simplified)
    corridors.push({
      start: {
        x: (roomACenterX / gridSize) * 100,
        y: (roomACenterY / gridSize) * 100
      },
      end: {
        x: (roomBCenterX / gridSize) * 100,
        y: (roomBCenterY / gridSize) * 100
      }
    });
    
    // Also connect 30% of rooms to a random other room for more complex layouts
    if (rng() < 0.3 && sortedRooms.length > 3) {
      let randomIndex;
      do {
        randomIndex = Math.floor(rng() * sortedRooms.length);
      } while (randomIndex === i || randomIndex === i + 1);
      
      const randomRoom = sortedRooms[randomIndex];
      const randomCenterX = randomRoom.gridX + randomRoom.gridWidth / 2;
      const randomCenterY = randomRoom.gridY + randomRoom.gridHeight / 2;
      
      corridors.push({
        start: {
          x: (roomACenterX / gridSize) * 100,
          y: (roomACenterY / gridSize) * 100
        },
        end: {
          x: (randomCenterX / gridSize) * 100,
          y: (randomCenterY / gridSize) * 100
        }
      });
    }
  }
  
  // To ensure all rooms are connected, make one last connection
  if (sortedRooms.length > 2) {
    const firstRoom = sortedRooms[0];
    const lastRoom = sortedRooms[sortedRooms.length - 1];
    
    const firstCenterX = firstRoom.gridX + firstRoom.gridWidth / 2;
    const firstCenterY = firstRoom.gridY + firstRoom.gridHeight / 2;
    const lastCenterX = lastRoom.gridX + lastRoom.gridWidth / 2;
    const lastCenterY = lastRoom.gridY + lastRoom.gridHeight / 2;
    
    corridors.push({
      start: {
        x: (firstCenterX / gridSize) * 100,
        y: (firstCenterY / gridSize) * 100
      },
      end: {
        x: (lastCenterX / gridSize) * 100,
        y: (lastCenterY / gridSize) * 100
      }
    });
  }
  
  // Place doors based on settings
  const doors = [];
  
  // Determine number of doors based on door density
  let doorCount;
  switch(settings.doorDensity) {
    case 'low':
      doorCount = Math.ceil(corridors.length * 0.3);
      break;
    case 'high':
      doorCount = corridors.length * 2;
      break;
    case 'medium':
    default:
      doorCount = corridors.length;
      break;
  }
  
  // Place doors along corridors
  for (let i = 0; i < doorCount; i++) {
    const corridor = corridors[i % corridors.length];
    
    // Place door somewhere along the corridor
    const t = rng(); // position along the corridor (0 to 1)
    const doorX = corridor.start.x + (corridor.end.x - corridor.start.x) * t;
    const doorY = corridor.start.y + (corridor.end.y - corridor.start.y) * t;
    
    // Determine door type based on settings
    let doorType = 'normal';
    
    // Locked doors probability
    if (rng() < 0.3) {
      doorType = 'locked';
    }
    
    // Secret doors based on density
    if (settings.secretDoorDensity !== 'none') {
      let secretProbability;
      switch(settings.secretDoorDensity) {
        case 'low':
          secretProbability = 0.05;
          break;
        case 'high':
          secretProbability = 0.2;
          break;
        case 'medium':
        default:
          secretProbability = 0.1;
          break;
      }
      
      if (rng() < secretProbability) {
        doorType = 'secret';
      }
    }
    
    // Trapped doors based on density
    if (settings.trapDensity !== 'none') {
      let trapProbability;
      switch(settings.trapDensity) {
        case 'low':
          trapProbability = 0.05;
          break;
        case 'high':
          trapProbability = 0.2;
          break;
        case 'medium':
        default:
          trapProbability = 0.1;
          break;
      }
      
      if (rng() < trapProbability && doorType !== 'secret') {
        doorType = 'trapped';
      }
    }
    
    doors.push({
      x: doorX,
      y: doorY,
      type: doorType
    });
  }
  
  // Add elevation changes if enabled
  const elevationChanges = [];
  
  if (settings.addElevation && rooms.length > 3) {
    // Randomly select 20% of rooms to have elevation changes
    const numElevationChanges = Math.ceil(rooms.length * 0.2);
    const roomsWithElevation = new Set();
    
    while (roomsWithElevation.size < numElevationChanges) {
      const roomIndex = Math.floor(rng() * rooms.length);
      roomsWithElevation.add(roomIndex);
    }
    
    // Add up/down elevation markers to selected rooms
    roomsWithElevation.forEach(roomIndex => {
      const room = rooms[roomIndex];
      const isUp = rng() > 0.5;
      
      elevationChanges.push({
        x: room.x + room.width * 0.75,
        y: room.y + room.height * 0.75,
        type: isUp ? 'up' : 'down'
      });
    });
  }
  
  // Generate special features
  const specialFeatures = [];
  
  // Add a few archways
  const numArchways = Math.ceil(rooms.length * 0.15);
  for (let i = 0; i < numArchways; i++) {
    const corridor = corridors[Math.floor(rng() * corridors.length)];
    
    const t = rng();
    const archX = corridor.start.x + (corridor.end.x - corridor.start.x) * t;
    const archY = corridor.start.y + (corridor.end.y - corridor.start.y) * t;
    
    // Make sure it's not too close to a door
    const minDistance = 5;
    let tooClose = false;
    
    for (const door of doors) {
      const dx = door.x - archX;
      const dy = door.y - archY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < minDistance) {
        tooClose = true;
        break;
      }
    }
    
    if (!tooClose) {
      specialFeatures.push({
        x: archX,
        y: archY,
        type: 'archway'
      });
    }
  }
  
  // Return the dungeon data
  return {
    width,
    height,
    gridSize,
    rooms,
    corridors,
    doors,
    elevationChanges,
    specialFeatures
  };
}
