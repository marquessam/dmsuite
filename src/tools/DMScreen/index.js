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
import TreasureGenerator from './TreasureGenerator';
import WeatherGenerator from './WeatherGenerator';

export default function DMScreen() {
  const [activeTab, setActiveTab] = useState('conditions');
  const [notes, setNotes] = useState({});
  const [customReferences, setCustomReferences] = useState([]);
  const [pinnedItems, setPinnedItems] = useState([]);
  const [darkMode, setDarkMode] = useState(true); // Default to dark for DM screen
  const [maximized, setMaximized] = useState(false);
  
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

    // Remember last used tab
    const savedTab = localStorage.getItem('dmscreen-active-tab');
    if (savedTab) {
      setActiveTab(savedTab);
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

  // Save active tab when it changes
  useEffect(() => {
    localStorage.setItem('dmscreen-active-tab', activeTab);
  }, [activeTab]);
  
  // Handle adding a custom reference
  const addCustomReference = (reference) => {
    if (Array.isArray(reference)) {
      setCustomReferences(reference);
    } else {
      setCustomReferences([...customReferences, reference]);
    }
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

  // Toggle maximized view
  const toggleMaximized = () => {
    setMaximized(!maximized);
  };
  
  const tabs = [
    { id: 'conditions', name: 'Conditions', icon: '🛡️' },
    { id: 'rules', name: 'Rules', icon: '📜' },
    { id: 'combat', name: 'Combat', icon: '⚔️' },
    { id: 'tracker', name: 'Encounter', icon: '👾' },
    { id: 'items', name: 'Items', icon: '🎒' },
    { id: 'dice', name: 'Dice', icon: '🎲' },
    { id: 'npc', name: 'NPCs', icon: '👤' },
    { id: 'treasure', name: 'Treasure', icon: '💰' },
    { id: 'weather', name: 'Weather', icon: '☁️' },
    { id: 'notes', name: 'Notes', icon: '📝' }
  ];

  // Render the content for the selected tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'conditions':
        return <ConditionsPanel onPin={togglePinItem} pinnedItems={pinnedItems} />;
      case 'rules':
        return <RulesPanel onPin={togglePinItem} pinnedItems={pinnedItems} />;
      case 'combat':
        return <CombatPanel onPin={togglePinItem} pinnedItems={pinnedItems} />;
      case 'items':
        return <ItemsPanel onPin={togglePinItem} pinnedItems={pinnedItems} />;
      case 'notes':
        return <NotesPanel 
          notes={notes} 
          onSaveNotes={saveNotes}
          customReferences={customReferences}
          onAddReference={addCustomReference}
        />;
      case 'tracker':
        return <EncounterTracker />;
      case 'dice':
        return <DiceRoller />;
      case 'npc':
        return <NPCGenerator />;
      case 'treasure':
        return <TreasureGenerator />;
      case 'weather':
        return <WeatherGenerator />;
      default:
        return <ConditionsPanel onPin={togglePinItem} pinnedItems={pinnedItems} />;
    }
  };

  return (
    <div className={`p-6 bg-gradient-to-br from-gray-900 to-stone-800 rounded-lg shadow-lg border border-amber-900/30 text-gray-100 ${maximized ? 'max-w-full' : 'max-w-full md:max-w-5xl'}`}>
      <div className="flex flex-col sm:flex-row justify-between mb-4 items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-amber-200 mb-2 sm:mb-0">DM Screen</h1>
          <button 
            className="ml-3 px-2 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-amber-100"
            onClick={toggleMaximized}
            title={maximized ? "Compact View" : "Maximize"}
          >
            {maximized ? "⏬" : "⏫"}
          </button>
        </div>
        
        {/* Tabs navigation */}
        <div className="flex flex-wrap gap-1 justify-center">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-3 py-1 text-sm rounded-md flex items-center ${
                activeTab === tab.id 
                  ? 'bg-amber-800 text-amber-100 font-medium' 
                  : 'bg-stone-800 text-amber-100/80 hover:bg-stone-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
              title={tab.name}
            >
              <span className="mr-1">{tab.icon}</span>
              <span className="hidden md:inline">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Pinned Items Bar */}
      {pinnedItems.length > 0 && (
        <div className="mb-4 p-2 bg-stone-800 rounded-lg border border-amber-900/20 flex flex-wrap gap-2">
          <div className="text-xs text-amber-200/60 flex items-center mr-1">Pinned:</div>
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
        {renderTabContent()}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-amber-200/60 text-sm italic">
          Your adventure awaits! Quick reference for all your DM needs.
        </p>
      </div>
    </div>
  );
}
