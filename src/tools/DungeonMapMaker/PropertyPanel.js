// src/tools/DungeonMapMaker/PropertyPanel.js
import React from 'react';

export default function PropertyPanel({ 
  selectedElement, 
  dungeon, 
  setDungeon, 
  customLabels, 
  setCustomLabels, 
  roomNotes, 
  addRoomNote, 
  deleteSelectedElement 
}) {
  if (!selectedElement) return null;
  
  return (
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
  );
}
