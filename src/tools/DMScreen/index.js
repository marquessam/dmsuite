// src/tools/DMScreen/index.js
import React, { useState, useEffect } from 'react';
import ConditionsPanel from './ConditionsPanel';
import RulesPanel from './RulesPanel';
import ItemsPanel from './ItemsPanel';
import NotesPanel from './NotesPanel';
import CombatPanel from './CombatPanel';
import EncounterTracker from './EncounterTracker';
import DiceRoller from './DiceRoller';
import NPCGenerator from './NPCGenerator';

export default function DMScreen() {
  const [activeTab, setActiveTab] = useState('conditions');
  const [notes, setNotes] = useState({});
  const [customReferences, setCustomReferences] = useState([]);
  const [pinnedItems, setPinnedItems] = useState([]);
  const [darkMode, setDarkMode] = useState(true); // Default to dark for DM screen
  
  // Load saved data from localStorage when component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem('dmscreen-notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
    
    const savedReferences = localStorage.getItem('dmscreen-references');
    if (savedReferences) {
      setCustomReferences(JSON.parse(savedReferences));
    }
    
    const savedPinned = localStorage.getItem('dmscreen-pinned');
    if (savedPinned) {
      setPinnedItems(JSON.parse(savedPinned));
    }
  }, []);
  
  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('dmscreen-notes', JSON.stringify(notes));
  }, [notes]);
  
  useEffect(() => {
    localStorage.setItem('dmscreen-references', JSON.stringify(customReferences));
  }, [customReferences]);
  
  useEffect(() => {
    localStorage.setItem('dmscreen-pinned', JSON.stringify(pinnedItems));
  }, [pinnedItems]);
  
  // Handle adding a custom reference
  const addCustomReference = (reference) => {
    setCustomReferences([...customReferences, reference]);
  };
  
  // Handle pinning an item for quick reference
  const togglePinItem = (item) => {
    // Check if the item is already pinned
    const isPinned = pinnedItems.some(
      pinnedItem => pinnedItem.id === item.id && pinnedItem.type === item.type
    );
    
    if (isPinned) {
      // Remove item from pinned list
      setPinnedItems(pinnedItems.filter(
        pinnedItem => !(pinnedItem.id === item.id && pinnedItem.type === item.type)
      ));
    } else {
      // Add item to pinned list
      setPinnedItems([...pinnedItems, item]);
    }
  };
  
  // Save notes for a specific section
  const saveNotes = (section, content) => {
    setNotes({
      ...notes,
      [section]: content
    });
  };
  
  const tabs = [
    { id: 'conditions', name: 'Conditions' },
    { id: 'rules', name: 'Rules' },
    { id: 'combat', name: 'Combat' },
    { id: 'items', name: 'Items' },
    { id: 'tracker', name: 'Encounter' },
    { id: 'dice', name: 'Dice' },
    { id: 'npc', name: 'NPCs' },
    { id: 'notes', name: 'Notes' }
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-stone-800 rounded-lg shadow-lg border border-amber-900/30 text-gray-100 max-w-full">
      <div className="flex flex-col sm:flex-row justify-between mb-4 items-center">
        <h1 className="text-2xl font-bold text-amber-200 mb-2 sm:mb-0">DM Screen</h1>
        
        {/* Tabs navigation */}
        <div className="flex flex-wrap gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-3 py-1 text-sm rounded-md ${
                activeTab === tab.id 
                  ? 'bg-amber-800 text-amber-100 font-medium' 
                  : 'bg-stone-800 text-amber-100/80 hover:bg-stone-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Pinned Items Bar */}
      {pinnedItems.length > 0 && (
        <div className="mb-4 p-2 bg-stone-800 rounded-lg border border-amber-900/20 flex flex-wrap gap-2">
          {pinnedItems.map((item, index) => (
            <div 
              key={`${item.type}-${item.id}-${index}`}
              className="bg-stone-700 rounded px-2 py-1 text-sm flex items-center gap-1"
            >
              <span>{item.name}</span>
              <button 
                className="ml-1 text-xs text-amber-100/60 hover:text-amber-100"
                onClick={() => togglePinItem(item)}
                title="Unpin"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      
      {/* Main content area */}
      <div className="bg-stone-800 p-4 rounded-lg border border-amber-900/20 min-h-[32rem]">
        {activeTab === 'conditions' && (
          <ConditionsPanel onPin={togglePinItem} pinnedItems={pinnedItems} />
        )}
        
        {activeTab === 'rules' && (
          <RulesPanel onPin={togglePinItem} pinnedItems={pinnedItems} />
        )}
        
        {activeTab === 'combat' && (
          <CombatPanel onPin={togglePinItem} pinnedItems={pinnedItems} />
        )}
        
        {activeTab === 'items' && (
          <ItemsPanel onPin={togglePinItem} pinnedItems={pinnedItems} />
        )}
        
        {activeTab === 'notes' && (
          <NotesPanel 
            notes={notes} 
            onSaveNotes={saveNotes}
            customReferences={customReferences}
            onAddReference={addCustomReference}
          />
        )}
        
        {activeTab === 'tracker' && (
          <EncounterTracker />
        )}
        
        {activeTab === 'dice' && (
          <DiceRoller />
        )}
        
        {activeTab === 'npc' && (
          <NPCGenerator />
        )}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-amber-200/60 text-sm italic">
          Your adventure awaits! Quick reference for all your DM needs.
        </p>
      </div>
    </div>
  );
}
