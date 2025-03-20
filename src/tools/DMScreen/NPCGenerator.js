// src/tools/DMScreen/NPCGenerator.js
import React, { useState, useEffect } from 'react';
import { npcData } from '../../data/dmScreenData';

export default function NPCGenerator() {
  const [generatedNPCs, setGeneratedNPCs] = useState([]);
  const [editingNPC, setEditingNPC] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [savedNPCs, setSavedNPCs] = useState(
    JSON.parse(localStorage.getItem('dmscreen-saved-npcs')) || []
  );
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    personality: '',
    motivation: '',
    quirk: '',
    notes: '',
    isCustom: true
  });
  
  // Load saved NPCs from localStorage
  useEffect(() => {
    const savedNPCsData = localStorage.getItem('dmscreen-saved-npcs');
    if (savedNPCsData) {
      setSavedNPCs(JSON.parse(savedNPCsData));
    }
  }, []);
  
  // Save NPCs to localStorage when they change
  useEffect(() => {
    localStorage.setItem('dmscreen-saved-npcs', JSON.stringify(savedNPCs));
  }, [savedNPCs]);
  
  // Generate a random name based on common fantasy patterns
  const generateRandomName = () => {
    const prefixes = ['Al', 'Bel', 'Cor', 'Dal', 'El', 'Fal', 'Gal', 'Hal', 'Il', 'Jor', 'Kal', 'Lor', 'Mal', 'Nor', 'Ol', 'Per', 'Qar', 'Ral', 'Sal', 'Tal', 'Ul', 'Val', 'Wil', 'Xan', 'Yor', 'Zal'];
    const suffixes = ['an', 'or', 'in', 'ith', 'ath', 'en', 'il', 'ak', 'ius', 'ar', 'on', 'us', 'ian', 'ius', 'im', 'is', 'un', 'iel', 'ak', 'nar'];
    
    const firstNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const firstNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const lastNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const lastNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    return `${firstNamePrefix}${firstNameSuffix} ${lastNamePrefix}${lastNameSuffix}`;
  };
  
  // Generate a random NPC
  const generateNPC = () => {
    const type = npcData.types[Math.floor(Math.random() * npcData.types.length)];
    const personality = npcData.personalities[Math.floor(Math.random() * npcData.personalities.length)];
    const motivation = npcData.motivations[Math.floor(Math.random() * npcData.motivations.length)];
    const quirk = npcData.quirks[Math.floor(Math.random() * npcData.quirks.length)];
    const name = generateRandomName();
    
    const newNPC = {
      id: Date.now().toString(),
      name,
      type,
      personality,
      motivation,
      quirk,
      notes: '',
      isCustom: false
    };
    
    setGeneratedNPCs([newNPC, ...generatedNPCs]);
    return newNPC;
  };
  
  // Generate multiple NPCs
  const generateMultipleNPCs = (count = 5) => {
    const newNPCs = [];
    for (let i = 0; i < count; i++) {
      newNPCs.push(generateNPC());
    }
    setGeneratedNPCs([...newNPCs, ...generatedNPCs]);
  };
  
  // Save an NPC to the saved list
  const saveNPC = (npc) => {
    if (!npc.name || !npc.type) {
      alert('Name and type are required');
      return;
    }
    
    const savedNPC = { ...npc, savedAt: new Date().toISOString() };
    setSavedNPCs([savedNPC, ...savedNPCs]);
  };
  
  // Remove an NPC from the generated list
  const removeGeneratedNPC = (id) => {
    setGeneratedNPCs(generatedNPCs.filter(npc => npc.id !== id));
  };
  
  // Remove an NPC from the saved list
  const removeSavedNPC = (id) => {
    if (window.confirm('Are you sure you want to delete this NPC?')) {
      setSavedNPCs(savedNPCs.filter(npc => npc.id !== id));
    }
  };
  
  // Handle editing an NPC
  const startEditingNPC = (npc) => {
    setEditingNPC(npc);
    setFormData({
      ...npc
    });
  };
  
  // Save the edited NPC
  const saveEditedNPC = () => {
    if (!formData.name || !formData.type) {
      alert('Name and type are required');
      return;
    }
    
    if (editingNPC) {
      // Update the existing NPC
      setSavedNPCs(savedNPCs.map(npc => 
        npc.id === editingNPC.id ? { ...formData, updatedAt: new Date().toISOString() } : npc
      ));
    } else {
      // Create a new NPC
      const newNPC = {
        ...formData,
        id: Date.now().toString(),
        savedAt: new Date().toISOString()
      };
      setSavedNPCs([newNPC, ...savedNPCs]);
    }
    
    // Reset the form
    setFormData({
      name: '',
      type: '',
      personality: '',
      motivation: '',
      quirk: '',
      notes: '',
      isCustom: true
    });
    
    setEditingNPC(null);
  };
  
  // Cancel editing
  const cancelEditing = () => {
    setEditingNPC(null);
    setFormData({
      name: '',
      type: '',
      personality: '',
      motivation: '',
      quirk: '',
      notes: '',
      isCustom: true
    });
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Filter saved NPCs based on selected type
  const filteredNPCs = filterType === 'all' 
    ? savedNPCs 
    : savedNPCs.filter(npc => npc.type === filterType);

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">NPC Generator</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* NPC Generator Controls */}
        <div className="lg:col-span-1 bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Generate NPCs</h3>
          
          <div className="flex space-x-2 mb-4">
            <button
              className="flex-1 py-2 px-4 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
              onClick={() => generateNPC()}
            >
              Generate 1 NPC
            </button>
            <button
              className="flex-1 py-2 px-4 bg-stone-700 hover:bg-stone-600 text-amber-100 font-medium rounded-lg"
              onClick={() => generateMultipleNPCs(5)}
            >
              Generate 5 NPCs
            </button>
          </div>
          
          <h3 className="text-lg font-medium text-amber-100 mb-3 mt-6">Create Custom NPC</h3>
          
          <form className="space-y-3">
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Name</label>
              <div className="flex">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="flex-1 bg-stone-700 border border-amber-900/50 rounded-l-lg p-2 text-amber-100"
                  placeholder="NPC name"
                />
                <button
                  type="button"
                  onClick={() => setFormData({...formData, name: generateRandomName()})}
                  className="bg-stone-700 hover:bg-stone-600 text-amber-100 py-2 px-3 rounded-r-lg border border-amber-900/50 border-l-0"
                  title="Generate random name"
                >
                  🎲
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              >
                <option value="">Select type...</option>
                {npcData.types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Personality</label>
              <select
                name="personality"
                value={formData.personality}
                onChange={handleInputChange}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              >
                <option value="">Select personality...</option>
                {npcData.personalities.map(personality => (
                  <option key={personality} value={personality}>{personality}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Motivation</label>
              <select
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              >
                <option value="">Select motivation...</option>
                {npcData.motivations.map(motivation => (
                  <option key={motivation} value={motivation}>{motivation}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Quirk</label>
              <select
                name="quirk"
                value={formData.quirk}
                onChange={handleInputChange}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              >
                <option value="">Select quirk...</option>
                {npcData.quirks.map(quirk => (
                  <option key={quirk} value={quirk}>{quirk}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="3"
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                placeholder="Additional notes about this NPC..."
              ></textarea>
            </div>
            
            <div className="flex space-x-2">
              {editingNPC ? (
                <>
                  <button
                    type="button"
                    onClick={saveEditedNPC}
                    className="flex-1 py-2 px-4 bg-green-700 hover:bg-green-600 text-amber-100 font-medium rounded-lg"
                  >
                    Update NPC
                  </button>
                  <button
                    type="button"
                    onClick={cancelEditing}
                    className="flex-1 py-2 px-4 bg-stone-700 hover:bg-stone-600 text-amber-100 font-medium rounded-lg"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={saveEditedNPC}
                  className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
                  disabled={!formData.name || !formData.type}
                >
                  Save Custom NPC
                </button>
              )}
            </div>
          </form>
        </div>
        
        {/* Generated NPCs */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Recently Generated NPCs</h3>
          
          {generatedNPCs.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              {generatedNPCs.map(npc => (
                <div key={npc.id} className="mb-3 p-3 bg-stone-700 rounded-lg border border-amber-900/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-amber-100">{npc.name}</h4>
                      <p className="text-sm text-amber-100/70">{npc.type}</p>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => saveNPC(npc)}
                        className="text-xs bg-amber-700 hover:bg-amber-600 text-amber-100 px-2 py-1 rounded"
                        title="Save NPC"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => removeGeneratedNPC(npc.id)}
                        className="text-xs bg-stone-600 hover:bg-stone-500 text-amber-100 px-2 py-1 rounded"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                    <div>
                      <span className="text-amber-200 font-medium">Personality:</span> {npc.personality}
                    </div>
                    <div>
                      <span className="text-amber-200 font-medium">Motivation:</span> {npc.motivation}
                    </div>
                    <div className="col-span-2">
                      <span className="text-amber-200 font-medium">Quirk:</span> {npc.quirk}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              No NPCs generated yet. Use the generator to create some!
            </div>
          )}
        </div>
        
        {/* Saved NPCs */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium text-amber-100">Saved NPCs</h3>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-stone-700 border border-amber-900/30 rounded-md py-1 px-2 text-sm text-amber-100"
            >
              <option value="all">All Types</option>
              {npcData.types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          {filteredNPCs.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              {filteredNPCs.map(npc => (
                <div key={npc.id} className="mb-3 p-3 bg-stone-700 rounded-lg border border-amber-900/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-amber-100">{npc.name}</h4>
                      <p className="text-sm text-amber-100/70">{npc.type}</p>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => startEditingNPC(npc)}
                        className="text-xs bg-amber-700 hover:bg-amber-600 text-amber-100 px-2 py-1 rounded"
                        title="Edit NPC"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeSavedNPC(npc.id)}
                        className="text-xs bg-red-700 hover:bg-red-600 text-amber-100 px-2 py-1 rounded"
                        title="Delete"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
                    <div>
                      <span className="text-amber-200 font-medium">Personality:</span> {npc.personality}
                    </div>
                    <div>
                      <span className="text-amber-200 font-medium">Motivation:</span> {npc.motivation}
                    </div>
                    <div className="col-span-2">
                      <span className="text-amber-200 font-medium">Quirk:</span> {npc.quirk}
                    </div>
                    
                    {npc.notes && (
                      <div className="col-span-2 mt-1 p-1 bg-stone-800/70 rounded text-amber-100/90">
                        <p><span className="text-amber-200 font-medium">Notes:</span> {npc.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              {filterType === 'all' 
                ? 'No saved NPCs yet. Save some generated NPCs or create custom ones!'
                : `No saved NPCs with type "${filterType}"`
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
