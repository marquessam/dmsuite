// src/tools/DMScreen/NotesPanel.js
import React, { useState } from 'react';

export default function NotesPanel({ notes, onSaveNotes, customReferences, onAddReference }) {
  const [activeNoteTab, setActiveNoteTab] = useState('session');
  const [noteContent, setNoteContent] = useState(notes[activeNoteTab] || '');
  const [isAddingReference, setIsAddingReference] = useState(false);
  const [newReference, setNewReference] = useState({
    title: '',
    content: '',
    category: 'custom'
  });
  
  // Tabs for different note categories
  const noteTabs = [
    { id: 'session', name: 'Session Notes' },
    { id: 'npcs', name: 'NPCs' },
    { id: 'locations', name: 'Locations' },
    { id: 'plot', name: 'Plot Hooks' },
    { id: 'loot', name: 'Treasure & Loot' },
    { id: 'custom', name: 'Custom References' }
  ];
  
  // Handle tab change
  const handleTabChange = (tabId) => {
    // Save current note before switching
    onSaveNotes(activeNoteTab, noteContent);
    
    // Switch to new tab
    setActiveNoteTab(tabId);
    setNoteContent(notes[tabId] || '');
  };
  
  // Handle note content change
  const handleNoteChange = (e) => {
    setNoteContent(e.target.value);
  };
  
  // Handle saving notes
  const handleSaveNotes = () => {
    onSaveNotes(activeNoteTab, noteContent);
    alert('Notes saved successfully!');
  };
  
  // Handle adding a new custom reference
  const handleAddReference = () => {
    if (!newReference.title || !newReference.content) {
      alert('Please provide both a title and content for your reference.');
      return;
    }
    
    onAddReference({
      ...newReference,
      id: `ref-${Date.now()}`
    });
    
    setNewReference({
      title: '',
      content: '',
      category: 'custom'
    });
    
    setIsAddingReference(false);
  };
  
  // Handle deleting a reference
  const handleDeleteReference = (referenceId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this reference?');
    if (confirmDelete) {
      const updatedReferences = customReferences.filter(ref => ref.id !== referenceId);
      onAddReference(updatedReferences);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-amber-200">DM Notes</h2>
        
        {activeNoteTab !== 'custom' && (
          <button 
            className="px-3 py-1 bg-amber-700 hover:bg-amber-600 text-amber-100 rounded-md text-sm"
            onClick={handleSaveNotes}
          >
            Save Notes
          </button>
        )}
        
        {activeNoteTab === 'custom' && (
          <button 
            className="px-3 py-1 bg-amber-700 hover:bg-amber-600 text-amber-100 rounded-md text-sm"
            onClick={() => setIsAddingReference(!isAddingReference)}
          >
            {isAddingReference ? 'Cancel' : 'Add New Reference'}
          </button>
        )}
      </div>
      
      {/* Note Tabs */}
      <div className="flex flex-wrap mb-4 border-b border-amber-900/30">
        {noteTabs.map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium ${
              activeNoteTab === tab.id 
                ? 'text-amber-200 border-b-2 border-amber-600' 
                : 'text-amber-100/70 hover:text-amber-100'
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      
      {/* Note Content Area */}
      {activeNoteTab !== 'custom' ? (
        <div className="bg-stone-700 border border-amber-900/30 rounded-md p-2">
          <textarea
            value={noteContent}
            onChange={handleNoteChange}
            className="w-full h-96 bg-stone-700 text-amber-100 p-2 focus:outline-none resize-none"
            placeholder={`Enter your ${activeNoteTab} notes here...`}
          ></textarea>
        </div>
      ) : (
        <div>
          {isAddingReference ? (
            <div className="bg-stone-700 border border-amber-900/30 rounded-md p-4 mb-4">
              <h3 className="font-medium text-amber-100 mb-2">Add New Reference</h3>
              
              <div className="mb-3">
                <label className="block text-sm mb-1">Title</label>
                <input
                  type="text"
                  value={newReference.title}
                  onChange={(e) => setNewReference({...newReference, title: e.target.value})}
                  className="w-full bg-stone-800 border border-amber-900/30 rounded-md py-1 px-2 text-amber-100"
                  placeholder="Reference title..."
                />
              </div>
              
              <div className="mb-3">
                <label className="block text-sm mb-1">Category</label>
                <select
                  value={newReference.category}
                  onChange={(e) => setNewReference({...newReference, category: e.target.value})}
                  className="w-full bg-stone-800 border border-amber-900/30 rounded-md py-1 px-2 text-amber-100"
                >
                  <option value="custom">Custom</option>
                  <option value="rules">Rules</option>
                  <option value="npc">NPC</option>
                  <option value="location">Location</option>
                  <option value="item">Item</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="block text-sm mb-1">Content</label>
                <textarea
                  value={newReference.content}
                  onChange={(e) => setNewReference({...newReference, content: e.target.value})}
                  className="w-full h-32 bg-stone-800 border border-amber-900/30 rounded-md py-1 px-2 text-amber-100 resize-none"
                  placeholder="Reference content..."
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  className="px-3 py-1 bg-amber-700 hover:bg-amber-600 text-amber-100 rounded-md text-sm"
                  onClick={handleAddReference}
                >
                  Add Reference
                </button>
              </div>
            </div>
          ) : null}
          
          {/* Custom References List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {customReferences.length > 0 ? (
              customReferences.map(reference => (
                <div 
                  key={reference.id}
                  className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20"
                >
                  <div className="flex justify-between items-center p-3 bg-stone-800">
                    <div>
                      <h3 className="font-medium text-amber-100">{reference.title}</h3>
                      <span className="text-xs text-amber-100/60">{reference.category}</span>
                    </div>
                    <button 
                      className="text-amber-100/60 hover:text-amber-100"
                      onClick={() => handleDeleteReference(reference.id)}
                      title="Delete reference"
                    >
                      🗑️
                    </button>
                  </div>
                  
                  <div className="p-3 text-sm">
                    <p className="whitespace-pre-wrap">{reference.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-8 text-amber-100/60">
                No custom references yet. Click "Add New Reference" to create one.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
