// src/tools/DungeonMapMaker/DungeonMapMaker.js
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { generateDungeon } from './mapGenerator';
import MapLegend from './MapLegend';
import { dungeonSizes, roomSizes, doorDensities, trapDensities, secretDoorDensities, dungeonThemes } from '../../data/dungeonMapData';

export default function DungeonMapMaker() {
  const canvasRef = useRef(null);
  const [dungeon, setDungeon] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [activeTool, setActiveTool] = useState('select');
  const [selectedElement, setSelectedElement] = useState(null);
  const [customLabels, setCustomLabels] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showRoomDescriptions, setShowRoomDescriptions] = useState(false);
  const [roomNotes, setRoomNotes] = useState({});
  const [mapSettings, setMapSettings] = useState({
    dungeonSize: 'medium',
    numRooms: 5,
    maxRoomSize: 'medium',
    doorDensity: 'medium',
    secretDoorDensity: 'low',
    trapDensity: 'low',
    addElevation: true,
    theme: 'classic',
    seed: Math.floor(Math.random() * 1000000)
  });
  const [expandedSettings, setExpandedSettings] = useState(false);
  const [saveSlots, setSaveSlots] = useState(
    JSON.parse(localStorage.getItem('dungeonMapSaveSlots')) || 
    [null, null, null, null, null]
  );

  // Function to generate a new dungeon
  const generateNewDungeon = useCallback(() => {
    setGenerating(true);
    setSelectedElement(null);
    setCustomLabels([]);
    setRoomNotes({});
    
    // Small delay to allow UI to update before intensive operation
    setTimeout(() => {
      try {
        const newDungeon = generateDungeon(mapSettings);
        setDungeon(newDungeon);
      } catch (error) {
        console.error("Error generating dungeon:", error);
        alert("There was an error generating the dungeon. Please try different settings.");
      } finally {
        setGenerating(false);
      }
    }, 50);
  }, [mapSettings]);

  // Helper drawing functions using useCallback to avoid recreation on each render
  const drawHatchedBackground = useCallback((ctx, width, height) => {
    // Background pattern varies based on theme
    const theme = mapSettings.theme;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    
    // Define hatch spacing & style based on theme
    let spacing = 5;
    ctx.strokeStyle = theme === 'cavern' ? '#333333' : '#000000';
    ctx.lineWidth = 0.5;
    
    if (theme === 'classic') {
      // Classic hatching pattern
      for (let i = 0; i < width + height; i += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(i, 0);
        ctx.stroke();
      }
      
      for (let i = -height; i < width; i += spacing) {
        ctx.beginPath();
        ctx.moveTo(i + height, height);
        ctx.lineTo(i, 0);
        ctx.stroke();
      }
    } else if (theme === 'cavern') {
      // Random dots for cavern texture
      ctx.fillStyle = '#333333';
      for (let i = 0; i < width * height / 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (theme === 'temple') {
      // Geometric pattern for temple
      ctx.strokeStyle = '#333333';
      spacing = 20;
      for (let i = 0; i < width; i += spacing) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let i = 0; i < height; i += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }
    }
  }, [mapSettings.theme]);
  
  const drawRooms = useCallback((ctx, rooms) => {
    // Draw each room
    rooms.forEach((room, index) => {
      // Convert percentage to pixel coordinates
      const x = room.x * ctx.canvas.width / 100;
      const y = room.y * ctx.canvas.height / 100;
      const w = room.width * ctx.canvas.width / 100;
      const h = room.height * ctx.canvas.height / 100;
      
      // Draw room background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x, y, w, h);
      
      // Draw selection highlight if this room is selected
      if (selectedElement && selectedElement.type === 'room' && selectedElement.id === index) {
        ctx.strokeStyle = '#ff9900';
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y, w, h);
      }
      
      // Draw room grid
      ctx.strokeStyle = '#cccccc';
      ctx.lineWidth = 0.5;
      
      const gridSize = 20;
      
      for (let gx = x; gx <= x + w; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, y);
        ctx.lineTo(gx, y + h);
        ctx.stroke();
      }
      
      for (let gy = y; gy <= y + h; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, gy);
        ctx.lineTo(x + w, gy);
        ctx.stroke();
      }
      
      // Add room number
      ctx.fillStyle = '#000000';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(index + 1, x + w / 2, y + h / 2);
      
      // Add room note indicator if present
      if (roomNotes[index] && roomNotes[index].trim() !== '') {
        ctx.fillStyle = '#0066cc';
        ctx.beginPath();
        ctx.arc(x + w - 10, y + 10, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Show note if descriptions are enabled
        if (showRoomDescriptions) {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
          ctx.fillRect(x, y + h + 5, w, 40);
          
          ctx.fillStyle = '#ffffff';
          ctx.font = '12px Arial';
          ctx.textAlign = 'left';
          
          // Truncate text if necessary
          let noteText = roomNotes[index];
          if (noteText.length > 50) {
            noteText = noteText.substring(0, 47) + '...';
          }
          
          ctx.fillText(noteText, x + 5, y + h + 25);
        }
      }
    });
  }, [selectedElement, roomNotes, showRoomDescriptions]);
  
  const drawCorridors = useCallback((ctx, corridors) => {
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 10;
    ctx.lineCap = 'square';
    
    corridors.forEach((corridor, index) => {
      const startX = corridor.start.x * ctx.canvas.width / 100;
      const startY = corridor.start.y * ctx.canvas.height / 100;
      const endX = corridor.end.x * ctx.canvas.width / 100;
      const endY = corridor.end.y * ctx.canvas.height / 100;
      
      // Draw selection highlight if this corridor is selected
      if (selectedElement && selectedElement.type === 'corridor' && selectedElement.id === index) {
        ctx.strokeStyle = '#ff9900';
        ctx.lineWidth = 12;
      } else {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 10;
      }
      
      // Create a two-segment path (L-shaped corridor)
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      // Decide which direction to go first (horizontal or vertical)
      if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
        // Go horizontal first
        ctx.lineTo(endX, startY);
        ctx.lineTo(endX, endY);
      } else {
        // Go vertical first
        ctx.lineTo(startX, endY);
        ctx.lineTo(endX, endY);
      }
      
      ctx.stroke();
    });
  }, [selectedElement]);
  
  const drawDoors = useCallback((ctx, doors) => {
    doors.forEach((door, index) => {
      const x = door.x * ctx.canvas.width / 100;
      const y = door.y * ctx.canvas.height / 100;
      
      // Draw selection highlight if this door is selected
      if (selectedElement && selectedElement.type === 'door' && selectedElement.id === index) {
        ctx.fillStyle = '#ff9900';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.fillStyle = '#000000';
      
      switch(door.type) {
        case 'normal':
          // Regular door
          ctx.fillRect(x - 5, y - 5, 10, 10);
          break;
        case 'locked':
          // Locked door
          ctx.beginPath();
          ctx.rect(x - 5, y - 5, 10, 10);
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'secret':
          // Secret door
          ctx.fillStyle = '#888888';
          ctx.beginPath();
          ctx.rect(x - 5, y - 5, 10, 10);
          ctx.fill();
          break;
        case 'trapped':
          // Trapped door
          ctx.beginPath();
          ctx.rect(x - 5, y - 5, 10, 10);
          ctx.fill();
          ctx.fillStyle = '#ff0000';
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        default:
          ctx.beginPath();
          ctx.rect(x - 4, y - 4, 8, 8);
          ctx.fill();
      }
    });
  }, [selectedElement]);
  
  const drawElevationChanges = useCallback((ctx, elevationChanges) => {
    if (!elevationChanges) return;
    
    elevationChanges.forEach((change, index) => {
      const x = change.x * ctx.canvas.width / 100;
      const y = change.y * ctx.canvas.height / 100;
      
      // Draw selection highlight if this elevation change is selected
      if (selectedElement && selectedElement.type === 'elevation' && selectedElement.id === index) {
        ctx.fillStyle = '#ff9900';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.fillStyle = '#000000';
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      if (change.type === 'up') {
        // Upward stairs
        ctx.fillText('↑', x, y);
      } else {
        // Downward stairs
        ctx.fillText('↓', x, y);
      }
    });
  }, [selectedElement]);
  
  const drawSpecialFeatures = useCallback((ctx, features) => {
    if (!features) return;
    
    features.forEach((feature, index) => {
      const x = feature.x * ctx.canvas.width / 100;
      const y = feature.y * ctx.canvas.height / 100;
      
      // Draw selection highlight if this feature is selected
      if (selectedElement && selectedElement.type === 'feature' && selectedElement.id === index) {
        ctx.fillStyle = '#ff9900';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.fillStyle = '#000000';
      
      switch(feature.type) {
        case 'archway':
          // Draw archway
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI, true);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();
          break;
        case 'trap':
          // Draw trap
          ctx.fillStyle = '#ff0000';
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 1;
          ctx.stroke();
          break;
        case 'treasure':
          // Draw treasure
          ctx.fillStyle = '#ffcc00';
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 1;
          ctx.stroke();
          break;
        case 'monster':
          // Draw monster marker
          ctx.fillStyle = '#cc0000';
          ctx.beginPath();
          ctx.moveTo(x, y - 5);
          ctx.lineTo(x + 5, y + 5);
          ctx.lineTo(x - 5, y + 5);
          ctx.closePath();
          ctx.fill();
          break;
        default:
          // Other features
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
      }
    });
  }, [selectedElement]);
  
  const drawCustomLabels = useCallback((ctx) => {
    customLabels.forEach((label, index) => {
      const x = label.x * ctx.canvas.width / 100;
      const y = label.y * ctx.canvas.height / 100;
      
      // Draw selection highlight if this label is selected
      if (selectedElement && selectedElement.type === 'label' && selectedElement.id === index) {
        ctx.fillStyle = '#ff9900';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw label text
      ctx.font = label.fontSize + 'px ' + (label.fontStyle || 'Arial');
      ctx.fillStyle = label.color || '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label.text, x, y);
    });
  }, [customLabels, selectedElement]);

  // Main drawing function with useCallback
  const drawDungeon = useCallback((ctx, dungeon, width, height) => {
    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    
    // Draw hatched background based on theme
    drawHatchedBackground(ctx, width, height);
    
    if (!dungeon) return;
    
    // Draw rooms
    drawRooms(ctx, dungeon.rooms);
    
    // Draw corridors
    drawCorridors(ctx, dungeon.corridors);
    
    // Draw doors and other features
    drawDoors(ctx, dungeon.doors);
    drawElevationChanges(ctx, dungeon.elevationChanges);
    drawSpecialFeatures(ctx, dungeon.specialFeatures);
    
    // Draw custom labels
    drawCustomLabels(ctx);
    
    // If in edit mode and a specific tool is active, show cursor indicator
    if (editMode && mousePosition.x > 0) {
      switch(activeTool) {
        case 'door':
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.fillRect(mousePosition.x - 5, mousePosition.y - 5, 10, 10);
          break;
        case 'room':
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.lineWidth = 2;
          ctx.strokeRect(mousePosition.x - 20, mousePosition.y - 20, 40, 40);
          break;
        case 'text':
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.font = '14px Arial';
          ctx.fillText('T', mousePosition.x, mousePosition.y);
          break;
        case 'feature':
          ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
          ctx.beginPath();
          ctx.arc(mousePosition.x, mousePosition.y, 5, 0, Math.PI * 2);
          ctx.fill();
          break;
        default:
          break;
      }
    }
  }, [
    drawHatchedBackground, 
    drawRooms, 
    drawCorridors, 
    drawDoors, 
    drawElevationChanges, 
    drawSpecialFeatures, 
    drawCustomLabels,
    editMode,
    activeTool,
    mousePosition
  ]);

  // Draw the dungeon map when dungeon data changes
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    
    // Clear the canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Draw the dungeon on the canvas
    drawDungeon(ctx, dungeon, width, height);
    
  }, [dungeon, drawDungeon, editMode, activeTool, selectedElement, customLabels, showRoomDescriptions]);
  
  // Initialize the dungeon on first render
  useEffect(() => {
    generateNewDungeon();
  }, [generateNewDungeon]);
  
  // Handle setting changes
  const handleSettingChange = (setting, value) => {
    setMapSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };
  
  // Toggle expanded settings
  const toggleExpandedSettings = () => {
    setExpandedSettings(!expandedSettings);
  };
  
  // Regenerate with random seed
  const regenerateWithRandomSeed = () => {
    setMapSettings(prev => ({
      ...prev,
      seed: Math.floor(Math.random() * 1000000)
    }));
  };
  
  // Handle export as PNG
  const exportAsPNG = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    
    // Create a download link
    const link = document.createElement('a');
    link.download = `dungeon-map-${mapSettings.seed}.png`;
    link.href = image;
    link.click();
  };
  
  // Save the dungeon to local storage
  const saveDungeon = (slotIndex) => {
    if (!dungeon) return;
    
    const saveData = {
      dungeon,
      customLabels,
      roomNotes,
      mapSettings,
      timestamp: new Date().toISOString(),
      preview: canvasRef.current.toDataURL("image/png", 0.1)
    };
    
    const newSaveSlots = [...saveSlots];
    newSaveSlots[slotIndex] = saveData;
    
    setSaveSlots(newSaveSlots);
    localStorage.setItem('dungeonMapSaveSlots', JSON.stringify(newSaveSlots));
    
    alert(`Dungeon saved to slot ${slotIndex + 1}`);
  };
  
  // Load the dungeon from local storage
  const loadDungeon = (slotIndex) => {
    if (!saveSlots[slotIndex]) {
      alert("No dungeon saved in this slot");
      return;
    }
    
    const saveData = saveSlots[slotIndex];
    setDungeon(saveData.dungeon);
    setCustomLabels(saveData.customLabels || []);
    setRoomNotes(saveData.roomNotes || {});
    setMapSettings(saveData.mapSettings);
    
    alert(`Dungeon loaded from slot ${slotIndex + 1}`);
  };
  
  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
    setSelectedElement(null);
    setActiveTool('select');
  };
  
  // Handle canvas click in edit mode
  const handleCanvasClick = (e) => {
    if (!editMode || !canvasRef.current || !dungeon) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert to percentage coordinates
    const percentX = (x / canvas.width) * 100;
    const percentY = (y / canvas.height) * 100;
    
    // Handle click based on active tool
    switch(activeTool) {
      case 'select':
        // Select element under the cursor
        selectElementAtPosition(x, y);
        break;
      case 'text':
        // Add new text label
        const labelText = prompt("Enter label text:", "");
        if (labelText && labelText.trim() !== "") {
          const newLabel = {
            x: percentX,
            y: percentY,
            text: labelText,
            fontSize: 16,
            fontStyle: 'Arial',
            color: '#000000'
          };
          setCustomLabels(prev => [...prev, newLabel]);
        }
        break;
      case 'door':
        // Add new door
        const doorType = window.confirm("Make this a locked door?") ? 'locked' : 'normal';
        const newDoor = {
          x: percentX,
          y: percentY,
          type: doorType
        };
        const updatedDoors = [...dungeon.doors, newDoor];
        setDungeon(prev => ({...prev, doors: updatedDoors}));
        break;
      case 'room':
        // Add new room
        const roomWidth = 10; // Default size in percentage
        const roomHeight = 10;
        const newRoom = {
          id: dungeon.rooms.length + 1,
          x: percentX - roomWidth/2,
          y: percentY - roomHeight/2,
          width: roomWidth,
          height: roomHeight,
          gridX: Math.floor(((percentX - roomWidth/2) / 100) * dungeon.gridSize),
          gridY: Math.floor(((percentY - roomHeight/2) / 100) * dungeon.gridSize),
          gridWidth: Math.floor((roomWidth / 100) * dungeon.gridSize),
          gridHeight: Math.floor((roomHeight / 100) * dungeon.gridSize)
        };
        const updatedRooms = [...dungeon.rooms, newRoom];
        setDungeon(prev => ({...prev, rooms: updatedRooms}));
        break;
      case 'feature':
        // Add new special feature (default to trap)
        const featureType = window.confirm("Is this a treasure?") ? 'treasure' : 'trap';
        const newFeature = {
          x: percentX,
          y: percentY,
          type: featureType
        };
        const specialFeatures = dungeon.specialFeatures || [];
        const updatedFeatures = [...specialFeatures, newFeature];
        setDungeon(prev => ({...prev, specialFeatures: updatedFeatures}));
        break;
      case 'delete':
        // Delete the selected element
        if (selectedElement) {
          deleteSelectedElement();
        } else {
          // Try to select and then delete in one go
          selectElementAtPosition(x, y);
          if (selectedElement) {
            deleteSelectedElement();
          }
        }
        break;
      default:
        break;
    }
  };
  
  // Function to select an element under the cursor
  const selectElementAtPosition = (x, y) => {
    if (!dungeon) return;
    
    // Convert to percentage
    const percentX = (x / canvasRef.current.width) * 100;
    const percentY = (y / canvasRef.current.height) * 100;
    
    // Check proximity (how close user clicked to an element)
    const proximityThreshold = 10; // pixels
    
    // First, check custom labels
    for (let i = 0; i < customLabels.length; i++) {
      const label = customLabels[i];
      const labelX = (label.x / 100) * canvasRef.current.width;
      const labelY = (label.y / 100) * canvasRef.current.height;
      
      const distance = Math.sqrt(Math.pow(labelX - x, 2) + Math.pow(labelY - y, 2));
      if (distance < proximityThreshold) {
        setSelectedElement({ type: 'label', id: i });
        return;
      }
    }
    
    // Check rooms
    for (let i = 0; i < dungeon.rooms.length; i++) {
      const room = dungeon.rooms[i];
      const roomX = (room.x / 100) * canvasRef.current.width;
      const roomY = (room.y / 100) * canvasRef.current.height;
      const roomW = (room.width / 100) * canvasRef.current.width;
      const roomH = (room.height / 100) * canvasRef.current.height;
      
      if (x >= roomX && x <= roomX + roomW && y >= roomY && y <= roomY + roomH) {
        setSelectedElement({ type: 'room', id: i });
        return;
      }
    }
    
    // Check doors
    for (let i = 0; i < dungeon.doors.length; i++) {
      const door = dungeon.doors[i];
      const doorX = (door.x / 100) * canvasRef.current.width;
      const doorY = (door.y / 100) * canvasRef.current.width;
      
      const distance = Math.sqrt(Math.pow(doorX - x, 2) + Math.pow(doorY - y, 2));
      if (distance < proximityThreshold) {
        setSelectedElement({ type: 'door', id: i });
        return;
      }
    }
    
    // Check special features
    if (dungeon.specialFeatures) {
      for (let i = 0; i < dungeon.specialFeatures.length; i++) {
        const feature = dungeon.specialFeatures[i];
        const featureX = (feature.x / 100) * canvasRef.current.width;
        const featureY = (feature.y / 100) * canvasRef.current.width;
        
        const distance = Math.sqrt(Math.pow(featureX - x, 2) + Math.pow(featureY - y, 2));
        if (distance < proximityThreshold) {
          setSelectedElement({ type: 'feature', id: i });
          return;
        }
      }
    }
    
    // If nothing was selected, clear selection
    setSelectedElement(null);
  };
  
  // Function to delete the selected element
  const deleteSelectedElement = () => {
    if (!selectedElement || !dungeon) return;
    
    switch(selectedElement.type) {
      case 'room':
        // Cannot delete rooms (would break corridors)
        alert("Rooms cannot be deleted directly.");
        break;
      case 'door':
        const updatedDoors = dungeon.doors.filter((_, index) => index !== selectedElement.id);
        setDungeon(prev => ({...prev, doors: updatedDoors}));
        break;
      case 'feature':
        const updatedFeatures = dungeon.specialFeatures.filter((_, index) => index !== selectedElement.id);
        setDungeon(prev => ({...prev, specialFeatures: updatedFeatures}));
        break;
      case 'label':
        const updatedLabels = customLabels.filter((_, index) => index !== selectedElement.id);
        setCustomLabels(updatedLabels);
        break;
      default:
        break;
    }
    
    setSelectedElement(null);
  };
  
  // Handle mouse move for edit mode
  const handleMouseMove = (e) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    
    // Handle dragging
    if (isDragging && selectedElement && draggedElement) {
      const percentX = (x / canvas.width) * 100;
      const percentY = (y / canvas.height) * 100;
      
      switch(selectedElement.type) {
        case 'label':
          const updatedLabels = [...customLabels];
          updatedLabels[selectedElement.id] = {
            ...updatedLabels[selectedElement.id],
            x: percentX,
            y: percentY
          };
          setCustomLabels(updatedLabels);
          break;
        case 'door':
          const updatedDoors = [...dungeon.doors];
          updatedDoors[selectedElement.id] = {
            ...updatedDoors[selectedElement.id],
            x: percentX,
            y: percentY
          };
          setDungeon(prev => ({...prev, doors: updatedDoors}));
          break;
        case 'feature':
          const updatedFeatures = [...dungeon.specialFeatures];
          updatedFeatures[selectedElement.id] = {
            ...updatedFeatures[selectedElement.id],
            x: percentX,
            y: percentY
          };
          setDungeon(prev => ({...prev, specialFeatures: updatedFeatures}));
          break;
        default:
          break;
      }
    }
  };
  
  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    if (!editMode || !selectedElement || activeTool !== 'select') return;
    
    setIsDragging(true);
    
    switch(selectedElement.type) {
      case 'label':
        setDraggedElement(customLabels[selectedElement.id]);
        break;
      case 'door':
        setDraggedElement(dungeon.doors[selectedElement.id]);
        break;
      case 'feature':
        setDraggedElement(dungeon.specialFeatures[selectedElement.id]);
        break;
      default:
        setDraggedElement(null);
        break;
    }
  };
  
  // Handle mouse up for dragging
  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedElement(null);
  };
  
  // Add a note to a room
  const addRoomNote = () => {
    if (!selectedElement || selectedElement.type !== 'room') {
      alert("Please select a room first");
      return;
    }
    
    const roomId = selectedElement.id;
    const currentNote = roomNotes[roomId] || '';
    
    const newNote = prompt("Enter room description:", currentNote);
    if (newNote !== null) {
      setRoomNotes(prev => ({
        ...prev,
        [roomId]: newNote
      }));
    }
  };
  
  // Toggle visibility of room descriptions
  const toggleRoomDescriptions = () => {
    setShowRoomDescriptions(!showRoomDescriptions);
  };
  
  // Export the dungeon with notes
  const exportWithNotes = () => {
    if (!dungeon) return;
    
    let noteText = "# Dungeon Map Notes\n\n";
    noteText += `Seed: ${mapSettings.seed}\n`;
    noteText += `Theme: ${mapSettings.theme}\n\n`;
    
    // Add room notes
    noteText += "## Room Descriptions\n\n";
    Object.keys(roomNotes).forEach(roomId => {
      if (roomNotes[roomId] && roomNotes[roomId].trim() !== '') {
        noteText += `### Room ${parseInt(roomId) + 1}\n${roomNotes[roomId]}\n\n`;
      }
    });
    
    // Add special features
    if (dungeon.specialFeatures && dungeon.specialFeatures.length > 0) {
      noteText += "## Special Features\n\n";
      dungeon.specialFeatures.forEach((feature, index) => {
        noteText += `- ${feature.type.charAt(0).toUpperCase() + feature.type.slice(1)} #${index + 1}\n`;
      });
      noteText += "\n";
    }
    
    // Add custom labels
    if (customLabels.length > 0) {
      noteText += "## Custom Labels\n\n";
      customLabels.forEach(label => {
        noteText += `- "${label.text}"\n`;
      });
    }
    
    // Create a download link for the text file
    const element = document.createElement("a");
    const file = new Blob([noteText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `dungeon-notes-${mapSettings.seed}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-stone-800 rounded-lg shadow-lg border border-amber-900/30 text-gray-100 max-w-4xl">
      <h1 className="text-2xl font-bold text-amber-200 mb-4">Dungeon Map Maker</h1>
      
      {/* Map Controls */}
      <div className="flex flex-col md:flex-row mb-4 gap-4">
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold text-amber-100 mb-3">Map Settings</h2>
          
          <div className="mb-4">
            <label className="block text-amber-200 text-sm font-medium mb-1">Dungeon Size</label>
            <select 
              value={mapSettings.dungeonSize} 
              onChange={(e) => handleSettingChange('dungeonSize', e.target.value)}
              className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              disabled={editMode}
            >
              {dungeonSizes.map(size => (
                <option key={size.id} value={size.id}>{size.name}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-amber-200 text-sm font-medium mb-1">Number of Rooms</label>
            <input 
              type="number" 
              min="3" 
              max="20" 
              value={mapSettings.numRooms} 
              onChange={(e) => handleSettingChange('numRooms', parseInt(e.target.value))}
              className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              disabled={editMode}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-amber-200 text-sm font-medium mb-1">Room Size</label>
            <select 
              value={mapSettings.maxRoomSize} 
              onChange={(e) => handleSettingChange('maxRoomSize', e.target.value)}
              className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              disabled={editMode}
            >
              {roomSizes.map(size => (
                <option key={size.id} value={size.id}>{size.name}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-amber-200 text-sm font-medium mb-1">Dungeon Theme</label>
            <select 
              value={mapSettings.theme} 
              onChange={(e) => handleSettingChange('theme', e.target.value)}
              className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              disabled={editMode}
            >
              {dungeonThemes.map(theme => (
                <option key={theme.id} value={theme.id}>{theme.name}</option>
              ))}
            </select>
          </div>
          
          <div 
            className="flex justify-between items-center text-amber-200 cursor-pointer mb-2"
            onClick={toggleExpandedSettings}
          >
            <span className="font-medium">Advanced Settings</span>
            <span className="text-xs">
              {expandedSettings ? 'Hide' : 'Show'}
            </span>
          </div>
          
          {expandedSettings && (
            <>
              <div className="mb-4">
                <label className="block text-amber-200 text-sm font-medium mb-1">Door Density</label>
                <select 
                  value={mapSettings.doorDensity} 
                  onChange={(e) => handleSettingChange('doorDensity', e.target.value)}
                  className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                  disabled={editMode}
                >
                  {doorDensities.map(density => (
                    <option key={density.id} value={density.id}>{density.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-amber-200 text-sm font-medium mb-1">Secret Door Density</label>
                <select 
                  value={mapSettings.secretDoorDensity} 
                  onChange={(e) => handleSettingChange('secretDoorDensity', e.target.value)}
                  className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                  disabled={editMode}
                >
                  {secretDoorDensities.map(density => (
                    <option key={density.id} value={density.id}>{density.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-amber-200 text-sm font-medium mb-1">Trap Density</label>
                <select 
                  value={mapSettings.trapDensity} 
                  onChange={(e) => handleSettingChange('trapDensity', e.target.value)}
                  className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                  disabled={editMode}
                >
                  {trapDensities.map(density => (
                    <option key={density.id} value={density.id}>{density.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label className="flex items-center text-amber-200 text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={mapSettings.addElevation}
                    onChange={(e) => handleSettingChange('addElevation', e.target.checked)}
                    className="mr-2 rounded border-amber-600"
                    disabled={editMode}
                  />
                  Include Elevation Changes
                </label>
              </div>
              
              <div className="mb-4">
                <label className="block text-amber-200 text-sm font-medium mb-1">Map Seed</label>
                <div className="flex">
                  <input 
                    type="number" 
                    value={mapSettings.seed} 
                    onChange={(e) => handleSettingChange('seed', parseInt(e.target.value))}
                    className="w-full bg-stone-800 border border-amber-900/50 rounded-l-lg p-2 text-amber-100"
                    disabled={editMode}
                  />
                  <button
                    onClick={regenerateWithRandomSeed}
                    className="bg-amber-800 hover:bg-amber-700 text-amber-100 px-3 rounded-r-lg border border-amber-900/50 disabled:opacity-50"
                    title="Random Seed"
                    disabled={editMode}
                  >
                    🎲
                  </button>
                </div>
              </div>
            </>
          )}
          
          <div className="mt-4 flex flex-col gap-2">
            <button 
              className="w-full py-3 px-4 bg-gradient-to-r from-stone-700 to-amber-900 text-amber-100 text-lg font-semibold rounded-lg shadow-lg border border-amber-800/50 hover:from-stone-800 hover:to-amber-950 disabled:opacity-50"
              onClick={generateNewDungeon}
              disabled={generating || editMode}
            >
              {generating ? 'Generating...' : 'Generate New Dungeon'}
            </button>
            
            <button
              className={`w-full py-2 px-4 ${editMode ? 'bg-green-700 hover:bg-green-600' : 'bg-blue-700 hover:bg-blue-600'} text-amber-100 rounded-lg border border-amber-800/30 disabled:opacity-50`}
              onClick={toggleEditMode}
              disabled={generating || !dungeon}
            >
              {editMode ? 'Exit Edit Mode' : 'Edit Dungeon'}
            </button>
            
            <div className="grid grid-cols-2 gap-2">
              <button 
                className="w-full py-2 px-4 bg-stone-700 text-amber-100 rounded-lg border border-amber-800/30 hover:bg-stone-600 disabled:opacity-50"
                onClick={exportAsPNG}
                disabled={generating || !dungeon}
              >
                Export as PNG
              </button>
              
              <button 
                className="w-full py-2 px-4 bg-stone-700 text-amber-100 rounded-lg border border-amber-800/30 hover:bg-stone-600 disabled:opacity-50"
                onClick={exportWithNotes}
                disabled={generating || !dungeon}
              >
                Export with Notes
              </button>
            </div>
            
            {/* Save/Load Controls */}
            <div className="mt-2 border-t border-amber-900/30 pt-2">
              <p className="text-amber-100 text-sm mb-2">Save/Load Dungeons:</p>
              <div className="grid grid-cols-5 gap-1 mb-2">
                {saveSlots.map((slot, index) => (
                  <button
                    key={index}
                    className={`p-1 text-xs rounded ${slot ? 'bg-amber-800 hover:bg-amber-700' : 'bg-stone-700 hover:bg-stone-600'}`}
                    onClick={() => slot ? loadDungeon(index) : saveDungeon(index)}
                    disabled={generating || (slot === null && !dungeon)}
                    title={slot ? `Slot ${index + 1}: Load dungeon` : `Slot ${index + 1}: Save current dungeon`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 bg-stone-900 p-2 rounded-lg border border-amber-900/30">
          {/* Editing toolbar */}
          {editMode && (
            <div className="bg-stone-800 p-2 mb-2 rounded border border-amber-900/30 flex flex-wrap gap-2">
              <button 
                className={`px-2 py-1 rounded text-sm ${activeTool === 'select' ? 'bg-amber-700' : 'bg-stone-700 hover:bg-stone-600'}`}
                onClick={() => setActiveTool('select')}
                title="Select Tool"
              >
                Select
              </button>
              <button 
                className={`px-2 py-1 rounded text-sm ${activeTool === 'text' ? 'bg-amber-700' : 'bg-stone-700 hover:bg-stone-600'}`}
                onClick={() => setActiveTool('text')}
                title="Text Label Tool"
              >
                Add Label
              </button>
              <button 
                className={`px-2 py-1 rounded text-sm ${activeTool === 'door' ? 'bg-amber-700' : 'bg-stone-700 hover:bg-stone-600'}`}
                onClick={() => setActiveTool('door')}
                title="Door Tool"
              >
                Add Door
              </button>
              <button 
                className={`px-2 py-1 rounded text-sm ${activeTool === 'room' ? 'bg-amber-700' : 'bg-stone-700 hover:bg-stone-600'}`}
                onClick={() => setActiveTool('room')}
                title="Room Tool"
              >
                Add Room
              </button>
              <button 
                className={`px-2 py-1 rounded text-sm ${activeTool === 'feature' ? 'bg-amber-700' : 'bg-stone-700 hover:bg-stone-600'}`}
                onClick={() => setActiveTool('feature')}
                title="Feature Tool"
              >
                Add Feature
              </button>
              <button 
                className={`px-2 py-1 rounded text-sm ${activeTool === 'delete' ? 'bg-red-700' : 'bg-stone-700 hover:bg-stone-600'}`}
                onClick={() => setActiveTool('delete')}
                title="Delete Tool"
              >
                Delete
              </button>
              
              <div className="border-l border-amber-900/30 ml-1 pl-2">
                <button 
                  className="px-2 py-1 rounded text-sm bg-stone-700 hover:bg-stone-600"
                  onClick={addRoomNote}
                  title="Add note to selected room"
                  disabled={!selectedElement || selectedElement.type !== 'room'}
                >
                  Add Room Note
                </button>
                <button 
                  className={`px-2 py-1 rounded text-sm ml-1 ${showRoomDescriptions ? 'bg-amber-700' : 'bg-stone-700 hover:bg-stone-600'}`}
                  onClick={toggleRoomDescriptions}
                  title="Toggle room descriptions"
                >
                  {showRoomDescriptions ? 'Hide Notes' : 'Show Notes'}
                </button>
              </div>
            </div>
          )}
          
          <div className="relative w-full aspect-square bg-white">
            {generating && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                Generating your dungeon...
              </div>
            )}
            <canvas 
              ref={canvasRef} 
              width={800} 
              height={800} 
              className="w-full h-full"
              onClick={handleCanvasClick}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            ></canvas>
          </div>
          
          <MapLegend />
          
          {/* Property panel for selected element */}
          {editMode && selectedElement && (
            <div className="mt-2 p-2 bg-stone-800 rounded border border-amber-900/30">
              <h3 className="text-amber-200 text-sm font-medium mb-1">
                {selectedElement.type.charAt(0).toUpperCase() + selectedElement.type.slice(1)} Properties
              </h3>
              
              {selectedElement.type === 'door' && (
                <div className="flex items-center mt-1">
                  <label className="text-xs mr-2">Door Type:</label>
                  <select 
                    value={dungeon.doors[selectedElement.id].type} 
                    onChange={(e) => {
                      const updatedDoors = [...dungeon.doors];
                      updatedDoors[selectedElement.id] = {
                        ...updatedDoors[selectedElement.id],
                        type: e.target.value
                      };
                      setDungeon(prev => ({...prev, doors: updatedDoors}));
                    }}
                    className="bg-stone-700 text-xs p-1 rounded"
                  >
                    <option value="normal">Normal</option>
                    <option value="locked">Locked</option>
                    <option value="secret">Secret</option>
                    <option value="trapped">Trapped</option>
                  </select>
                </div>
              )}
              
              {selectedElement.type === 'label' && (
                <div className="grid grid-cols-2 gap-1 mt-1">
                  <div>
                    <label className="text-xs block">Text:</label>
                    <input 
                      type="text" 
                      value={customLabels[selectedElement.id].text} 
                      onChange={(e) => {
                        const updatedLabels = [...customLabels];
                        updatedLabels[selectedElement.id] = {
                          ...updatedLabels[selectedElement.id],
                          text: e.target.value
                        };
                        setCustomLabels(updatedLabels);
                      }}
                      className="bg-stone-700 text-xs p-1 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs block">Font Size:</label>
                    <input 
                      type="number" 
                      min="8" 
                      max="36" 
                      value={customLabels[selectedElement.id].fontSize || 16} 
                      onChange={(e) => {
                        const updatedLabels = [...customLabels];
                        updatedLabels[selectedElement.id] = {
                          ...updatedLabels[selectedElement.id],
                          fontSize: parseInt(e.target.value)
                        };
                        setCustomLabels(updatedLabels);
                      }}
                      className="bg-stone-700 text-xs p-1 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs block">Color:</label>
                    <input 
                      type="color" 
                      value={customLabels[selectedElement.id].color || '#000000'} 
                      onChange={(e) => {
                        const updatedLabels = [...customLabels];
                        updatedLabels[selectedElement.id] = {
                          ...updatedLabels[selectedElement.id],
                          color: e.target.value
                        };
                        setCustomLabels(updatedLabels);
                      }}
                      className="bg-stone-700 p-0 w-full h-6 rounded"
                    />
                  </div>
                </div>
              )}
              
              {selectedElement.type === 'feature' && (
                <div className="flex items-center mt-1">
                  <label className="text-xs mr-2">Feature Type:</label>
                  <select 
                    value={dungeon.specialFeatures[selectedElement.id].type} 
                    onChange={(e) => {
                      const updatedFeatures = [...dungeon.specialFeatures];
                      updatedFeatures[selectedElement.id] = {
                        ...updatedFeatures[selectedElement.id],
                        type: e.target.value
                      };
                      setDungeon(prev => ({...prev, specialFeatures: updatedFeatures}));
                    }}
                    className="bg-stone-700 text-xs p-1 rounded"
                  >
                    <option value="trap">Trap</option>
                    <option value="treasure">Treasure</option>
                    <option value="archway">Archway</option>
                    <option value="monster">Monster</option>
                  </select>
                </div>
              )}
              
              {selectedElement.type === 'room' && (
                <div className="mt-1">
                  <div className="flex items-center">
                    <label className="text-xs mr-2">Room Number:</label>
                    <span className="bg-stone-700 px-2 py-1 rounded text-xs">{selectedElement.id + 1}</span>
                    
                    <button 
                      className="ml-2 px-2 py-1 text-xs bg-stone-700 hover:bg-stone-600 rounded"
                      onClick={addRoomNote}
                    >
                      {roomNotes[selectedElement.id] ? 'Edit Note' : 'Add Note'}
                    </button>
                  </div>
                  
                  {roomNotes[selectedElement.id] && (
                    <div className="mt-1 p-1 bg-stone-700 rounded text-xs max-h-16 overflow-y-auto">
                      {roomNotes[selectedElement.id]}
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-2 flex justify-end">
                <button 
                  className="px-2 py-1 rounded text-xs bg-red-700 hover:bg-red-600"
                  onClick={deleteSelectedElement}
                  disabled={selectedElement.type === 'room'}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
