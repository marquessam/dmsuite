// src/tools/DungeonMapMaker/DungeonMapMaker.js
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

  // Helper drawing functions using useCallback to avoid recreation on each render
  const drawHatchedBackground = useCallback((ctx, width, height) => {
    // Simple hatching pattern
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 0.5;
    
    // Define hatch spacing
    const spacing = 5;
    
    // Draw hatching in one direction
    for (let i = 0; i < width + height; i += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(i, 0);
      ctx.stroke();
    }
    
    // Draw hatching in the other direction
    for (let i = -height; i < width; i += spacing) {
      ctx.beginPath();
      ctx.moveTo(i + height, height);
      ctx.lineTo(i, 0);
      ctx.stroke();
    }
  }, []);
  
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
    });
  }, []);
  
  const drawCorridors = useCallback((ctx, corridors) => {
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 10;
    ctx.lineCap = 'square';
    
    corridors.forEach(corridor => {
      const startX = corridor.start.x * ctx.canvas.width / 100;
      const startY = corridor.start.y * ctx.canvas.height / 100;
      const endX = corridor.end.x * ctx.canvas.width / 100;
      const endY = corridor.end.y * ctx.canvas.height / 100;
      
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
  }, []);
  
  const drawDoors = useCallback((ctx, doors) => {
    doors.forEach(door => {
      const x = door.x * ctx.canvas.width / 100;
      const y = door.y * ctx.canvas.height / 100;
      
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
  }, []);
  
  const drawElevationChanges = useCallback((ctx, elevationChanges) => {
    if (!elevationChanges) return;
    
    elevationChanges.forEach(change => {
      const x = change.x * ctx.canvas.width / 100;
      const y = change.y * ctx.canvas.height / 100;
      
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
  }, []);
  
  const drawSpecialFeatures = useCallback((ctx, features) => {
    if (!features) return;
    
    features.forEach(feature => {
      const x = feature.x * ctx.canvas.width / 100;
      const y = feature.y * ctx.canvas.height / 100;
      
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
        default:
          // Other features
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
      }
    });
  }, []);

  // Main drawing function with useCallback
  const drawDungeon = useCallback((ctx, dungeon, width, height) => {
    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    
    // Draw hatched background (simplified version)
    drawHatchedBackground(ctx, width, height);
    
    // Draw rooms
    drawRooms(ctx, dungeon.rooms);
    
    // Draw corridors
    drawCorridors(ctx, dungeon.corridors);
    
    // Draw doors and other features
    drawDoors(ctx, dungeon.doors);
    drawElevationChanges(ctx, dungeon.elevationChanges);
    drawSpecialFeatures(ctx, dungeon.specialFeatures);
  }, [drawHatchedBackground, drawRooms, drawCorridors, drawDoors, drawElevationChanges, drawSpecialFeatures]);

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
    
  }, [dungeon, drawDungeon]); // Added drawDungeon to the dependency array
  
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
