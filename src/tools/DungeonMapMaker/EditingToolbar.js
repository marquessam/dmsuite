// src/tools/DungeonMapMaker/EditingToolbar.js
import React from 'react';

export default function EditingToolbar({ activeTool, setActiveTool, selectedElement, addRoomNote, toggleRoomDescriptions, showRoomDescriptions }) {
  return (
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
  );
}
