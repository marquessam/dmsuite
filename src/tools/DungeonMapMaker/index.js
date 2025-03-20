// src/tools/DungeonMapMaker/index.js
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { generateDungeon } from './mapGenerator';
import MapLegend from './MapLegend';
import { dungeonSizes, roomSizes, doorDensities, trapDensities, secretDoorDensities } from '../../data/dungeonMapData';

export default function DungeonMapMaker() {
  const canvasRef = useRef(null);
  const [dungeon, setDungeon] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [mapSettings, setMapSettings] = useState({
    dungeonSize: 'medium', // small, medium, large
    numRooms: 5,
    maxRoomSize: 'medium', // small, medium, large
    doorDensity: 'medium', // low, medium, high
    secretDoorDensity: 'low', // none, low, medium, high
    trapDensity: 'low', // none, low, medium, high
    addElevation: true,
    seed: Math.floor(Math.random() * 1000000)
  });
  const [expandedSettings, setExpandedSettings] = useState(false);

  // Function to generate a new dungeon
  const generateNewDungeon = useCallback(() => {
    setGenerating(true);
    
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

  // Draw the dungeon map when dungeon data changes
  useEffect(() => {
    if (!dungeon || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    
    // Clear the canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Draw the dungeon on the canvas
    drawDungeon(ctx, dungeon, width, height);
    
  }, [dungeon, canvasRef]);
  
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

  // The drawing function would be defined here or imported from a utility file
  const drawDungeon = (ctx, dungeon, width, height) => {
    // This is a placeholder for the actual drawing logic
    // The real implementation would draw walls, rooms, doors, etc. based on the dungeon data
    
    // Draw the background hatch pattern
    drawHatchPattern(ctx, width, height);
    
    // Draw rooms, corridors, and features
    drawRooms(ctx, dungeon.rooms, width, height);
    drawCorridors(ctx, dungeon.corridors, width, height);
    drawDoors(ctx, dungeon.doors, width, height);
    
    // Add room numbers
    addRoomNumbers(ctx, dungeon.rooms, width, height);
  };
  
  // Helper drawing functions would be defined here
  const drawHatchPattern = (ctx, width, height) => {
    // This would draw the hatched background pattern
    ctx.fillStyle = '#000000';
    // Simplified placeholder - in real implementation, we'd draw actual hatching
    ctx.fillRect(0, 0, width, height);
    
    // Draw a white rectangle in the middle as a placeholder
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(width * 0.1, height * 0.1, width * 0.8, height * 0.8);
  };
  
  const drawRooms = (ctx, rooms, width, height) => {
    // Draw each room
    ctx.fillStyle = '#ffffff';
    rooms.forEach(room => {
      // Scale room coordinates to canvas size
      const x = (room.x / 100) * width;
      const y = (room.y / 100) * height;
      const w = (room.width / 100) * width;
      const h = (room.height / 100) * height;
      
      ctx.fillRect(x, y, w, h);
      
      // Draw grid in rooms
      ctx.strokeStyle = '#cccccc';
      ctx.lineWidth = 0.5;
      
      const gridSize = width * 0.02; // Arbitrary grid size
      
      for (let gx = x; gx < x + w; gx += gridSize) {
        ctx.beginPath();
        ctx.moveTo(gx, y);
        ctx.lineTo(gx, y + h);
        ctx.stroke();
      }
      
      for (let gy = y; gy < y + h; gy += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, gy);
        ctx.lineTo(x + w, gy);
        ctx.stroke();
      }
    });
  };
  
  const drawCorridors = (ctx, corridors, width, height) => {
    // Draw corridors
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    
    corridors.forEach(corridor => {
      // Scale corridor coordinates to canvas size
      const x1 = (corridor.start.x / 100) * width;
      const y1 = (corridor.start.y / 100) * height;
      const x2 = (corridor.end.x / 100) * width;
      const y2 = (corridor.end.y / 100) * height;
      
      // Simple straight corridor drawing
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });
  };
  
  const drawDoors = (ctx, doors, width, height) => {
    doors.forEach(door => {
      // Scale door coordinates to canvas size
      const x = (door.x / 100) * width;
      const y = (door.y / 100) * height;
      
      ctx.fillStyle = '#000000';
      
      // Draw different door types
      switch(door.type) {
        case 'normal':
          // Draw a normal door
          ctx.fillRect(x - 5, y - 5, 10, 10);
          break;
        case 'locked':
          // Draw a locked door
          ctx.fillRect(x - 5, y - 5, 10, 10);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(x - 2, y - 2, 4, 4);
          break;
        case 'secret':
          // Draw a secret door
          ctx.fillStyle = '#555555';
          ctx.fillRect(x - 5, y - 5, 10, 10);
          break;
        case 'trapped':
          // Draw a trapped door
          ctx.fillRect(x - 5, y - 5, 10, 10);
          ctx.fillStyle = '#ff0000';
          ctx.fillRect(x - 2, y - 2, 4, 4);
          break;
        default:
          ctx.fillRect(x - 3, y - 3, 6, 6);
      }
    });
  };
  
  const addRoomNumbers = (ctx, rooms, width, height) => {
    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    rooms.forEach((room, index) => {
      // Scale room coordinates to canvas size
      const x = (room.x / 100) * width + (room.width / 100) * width / 2;
      const y = (room.y / 100) * height + (room.height / 100) * height / 2;
      
      ctx.fillText((index + 1).toString(), x, y);
    });
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
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-amber-200 text-sm font-medium mb-1">Room Size</label>
            <select 
              value={mapSettings.maxRoomSize} 
              onChange={(e) => handleSettingChange('maxRoomSize', e.target.value)}
              className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              {roomSizes.map(size => (
                <option key={size.id} value={size.id}>{size.name}</option>
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
                  />
                  <button
                    onClick={regenerateWithRandomSeed}
                    className="bg-amber-800 hover:bg-amber-700 text-amber-100 px-3 rounded-r-lg border border-amber-900/50"
                    title="Random Seed"
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
              disabled={generating}
            >
              {generating ? 'Generating...' : 'Generate New Dungeon'}
            </button>
            
            <button 
              className="w-full py-2 px-4 bg-stone-700 text-amber-100 rounded-lg border border-amber-800/30 hover:bg-stone-600 disabled:opacity-50"
              onClick={exportAsPNG}
              disabled={generating || !dungeon}
            >
              Export as PNG
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 bg-stone-900 p-2 rounded-lg border border-amber-900/30">
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
            ></canvas>
          </div>
          
          <MapLegend />
        </div>
      </div>
    </div>
  );
}
