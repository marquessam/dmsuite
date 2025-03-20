// src/tools/DMScreen/EncounterTracker.js
import React, { useState, useEffect } from 'react';
import { encounterData } from '../../data/dmScreenData';

export default function EncounterTracker() {
  const [combatants, setCombatants] = useState([]);
  const [newCombatant, setNewCombatant] = useState({ name: '', initiative: '', hp: '', maxHp: '', ac: '', notes: '' });
  const [round, setRound] = useState(1);
  const [activeCombatant, setActiveCombatant] = useState(0);
  const [combatStarted, setCombatStarted] = useState(false);
  const [showMonsterList, setShowMonsterList] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState('');
  const [selectedCR, setSelectedCR] = useState('');
  const [showAddTrap, setShowAddTrap] = useState(false);

  // Load combatants from localStorage when component mounts
  useEffect(() => {
    const savedCombatants = localStorage.getItem('encounter-combatants');
    if (savedCombatants) {
      setCombatants(JSON.parse(savedCombatants));
    }
  }, []);

  // Save combatants to localStorage when they change
  useEffect(() => {
    localStorage.setItem('encounter-combatants', JSON.stringify(combatants));
  }, [combatants]);

  // Handle input changes for new combatant form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCombatant({ ...newCombatant, [name]: value });
  };

  // Add a new combatant
  const addCombatant = (e) => {
    e.preventDefault();
    if (!newCombatant.name || !newCombatant.initiative) {
      alert('Name and initiative are required');
      return;
    }

    const initiativeValue = parseInt(newCombatant.initiative) || 0;
    const hpValue = parseInt(newCombatant.hp) || 0;
    const maxHpValue = parseInt(newCombatant.maxHp) || hpValue;
    const acValue = parseInt(newCombatant.ac) || 10;

    const combatant = {
      id: Date.now().toString(),
      name: newCombatant.name,
      initiative: initiativeValue,
      hp: hpValue,
      maxHp: maxHpValue,
      ac: acValue,
      notes: newCombatant.notes,
      conditions: []
    };

    // Add and sort by initiative
    const updatedCombatants = [...combatants, combatant].sort((a, b) => b.initiative - a.initiative);
    setCombatants(updatedCombatants);
    
    // Reset form
    setNewCombatant({ name: '', initiative: '', hp: '', maxHp: '', ac: '', notes: '' });
  };

  // Remove a combatant
  const removeCombatant = (id) => {
    setCombatants(combatants.filter(combatant => combatant.id !== id));
    
    // If the active combatant is removed, adjust the active index
    if (combatStarted && activeCombatant >= combatants.findIndex(c => c.id === id)) {
      setActiveCombatant(prev => 
        (prev > 0 && prev >= combatants.length - 1) ? prev - 1 : prev
      );
    }
  };

  // Update a combatant's HP
  const updateHP = (id, amount) => {
    setCombatants(combatants.map(combatant => {
      if (combatant.id === id) {
        const newHp = Math.max(0, combatant.hp + amount);
        return { ...combatant, hp: newHp };
      }
      return combatant;
    }));
  };

  // Add/remove a condition
  const toggleCondition = (combatantId, condition) => {
    setCombatants(combatants.map(combatant => {
      if (combatant.id === combatantId) {
        const hasCondition = combatant.conditions.includes(condition);
        const updatedConditions = hasCondition
          ? combatant.conditions.filter(c => c !== condition)
          : [...combatant.conditions, condition];
        
        return { ...combatant, conditions: updatedConditions };
      }
      return combatant;
    }));
  };

  // Start combat
  const startCombat = () => {
    if (combatants.length === 0) {
      alert('Add at least one combatant before starting');
      return;
    }
    
    setCombatStarted(true);
    setRound(1);
    setActiveCombatant(0);
  };

  // Reset combat
  const resetCombat = () => {
    setCombatStarted(false);
    setRound(1);
    setActiveCombatant(0);
  };

  // Next turn
  const nextTurn = () => {
    if (activeCombatant === combatants.length - 1) {
      // End of round, start a new one
      setRound(round + 1);
      setActiveCombatant(0);
    } else {
      // Move to next combatant
      setActiveCombatant(activeCombatant + 1);
    }
  };

  // Previous turn
  const prevTurn = () => {
    if (activeCombatant === 0 && round > 1) {
      // Beginning of round, go back to previous round
      setRound(round - 1);
      setActiveCombatant(combatants.length - 1);
    } else if (activeCombatant > 0) {
      // Move to previous combatant
      setActiveCombatant(activeCombatant - 1);
    }
  };

  // Roll initiative for everyone
  const rollGroupInitiative = () => {
    const updatedCombatants = combatants.map(combatant => {
      const initiativeRoll = Math.floor(Math.random() * 20) + 1; // d20 roll
      return { ...combatant, initiative: initiativeRoll };
    }).sort((a, b) => b.initiative - a.initiative);
    
    setCombatants(updatedCombatants);
  };

  // Add a random monster
  const addRandomMonster = () => {
    if (!selectedCR) {
      alert('Please select a Challenge Rating');
      return;
    }

    const availableMonsters = encounterData.commonMonsters[selectedCR] || [];
    if (availableMonsters.length === 0) {
      alert('No monsters available for the selected CR');
      return;
    }

    const randomMonster = availableMonsters[Math.floor(Math.random() * availableMonsters.length)];
    const initiativeRoll = Math.floor(Math.random() * 20) + 1; // d20 roll

    const monster = {
      id: Date.now().toString(),
      name: randomMonster,
      initiative: initiativeRoll,
      hp: 10 + Math.floor(Math.random() * 20), // Placeholder HP
      maxHp: 10 + Math.floor(Math.random() * 20),
      ac: 10 + Math.floor(Math.random() * 7), // Random AC between 10-16
      notes: `CR ${selectedCR}`,
      conditions: []
    };

    const updatedCombatants = [...combatants, monster].sort((a, b) => b.initiative - a.initiative);
    setCombatants(updatedCombatants);
    setShowMonsterList(false);
  };

  // Add a trap
  const addTrap = () => {
    const trapTypes = encounterData.trapTypes;
    const randomTrap = trapTypes[Math.floor(Math.random() * trapTypes.length)];
    
    const trap = {
      id: Date.now().toString(),
      name: `Trap: ${randomTrap}`,
      initiative: 20, // Traps usually go first
      hp: '-',
      maxHp: '-',
      ac: '-',
      notes: 'Triggers automatically',
      conditions: []
    };

    const updatedCombatants = [...combatants, trap].sort((a, b) => b.initiative - a.initiative);
    setCombatants(updatedCombatants);
    setShowAddTrap(false);
  };

  // Common conditions
  const commonConditions = [
    'Blinded', 'Charmed', 'Deafened', 'Frightened', 'Grappled', 
    'Incapacitated', 'Invisible', 'Paralyzed', 'Poisoned', 'Prone', 
    'Restrained', 'Stunned', 'Unconscious'
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Encounter Tracker</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Add Combatant Form */}
        <div className="bg-stone-800 border border-amber-900/30 rounded-lg p-4">
          <h3 className="text-lg font-medium text-amber-100 mb-2">Add Combatant</h3>
          
          <form onSubmit={addCombatant}>
            <div className="mb-3">
              <label className="block text-amber-200 text-sm font-medium mb-1">Name*</label>
              <input
                type="text"
                name="name"
                value={newCombatant.name}
                onChange={handleInputChange}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                placeholder="Combatant name"
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="block text-amber-200 text-sm font-medium mb-1">Initiative*</label>
              <input
                type="number"
                name="initiative"
                value={newCombatant.initiative}
                onChange={handleInputChange}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                placeholder="Initiative roll"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <label className="block text-amber-200 text-sm font-medium mb-1">HP</label>
                <input
                  type="number"
                  name="hp"
                  value={newCombatant.hp}
                  onChange={handleInputChange}
                  className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                  placeholder="Hit Points"
                />
              </div>
              <div>
                <label className="block text-amber-200 text-sm font-medium mb-1">Max HP</label>
                <input
                  type="number"
                  name="maxHp"
                  value={newCombatant.maxHp}
                  onChange={handleInputChange}
                  className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                  placeholder="Maximum HP"
                />
              </div>
            </div>
            
            <div className="mb-3">
              <label className="block text-amber-200 text-sm font-medium mb-1">AC</label>
              <input
                type="number"
                name="ac"
                value={newCombatant.ac}
                onChange={handleInputChange}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                placeholder="Armor Class"
              />
            </div>
            
            <div className="mb-3">
              <label className="block text-amber-200 text-sm font-medium mb-1">Notes</label>
              <input
                type="text"
                name="notes"
                value={newCombatant.notes}
                onChange={handleInputChange}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                placeholder="Additional information"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-2 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
            >
              Add to Initiative
            </button>
          </form>
          
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => setShowMonsterList(true)}
              className="flex-1 py-1 px-2 bg-stone-700 hover:bg-stone-600 text-amber-100 text-sm rounded-lg"
            >
              Add Monster
            </button>
            <button
              onClick={() => setShowAddTrap(true)}
              className="flex-1 py-1 px-2 bg-stone-700 hover:bg-stone-600 text-amber-100 text-sm rounded-lg"
            >
              Add Trap
            </button>
            <button
              onClick={rollGroupInitiative}
              className="flex-1 py-1 px-2 bg-stone-700 hover:bg-stone-600 text-amber-100 text-sm rounded-lg"
              disabled={combatants.length === 0}
            >
              Roll Initiative
            </button>
          </div>
        </div>
        
        {/* Combat Controls */}
        <div className="bg-stone-800 border border-amber-900/30 rounded-lg p-4">
          <h3 className="text-lg font-medium text-amber-100 mb-2">Combat Tracker</h3>
          
          {combatStarted ? (
            <>
              <div className="mb-3 p-2 bg-amber-900/20 rounded-lg">
                <p className="text-amber-100">Round: <span className="font-bold">{round}</span></p>
                <p className="text-amber-100">Current Turn: <span className="font-bold">{combatants[activeCombatant]?.name || 'None'}</span></p>
              </div>
              
              <div className="flex gap-2 mb-4">
                <button
                  onClick={prevTurn}
                  className="flex-1 py-2 bg-stone-700 hover:bg-stone-600 text-amber-100 font-medium rounded-lg"
                >
                  Previous
                </button>
                <button
                  onClick={nextTurn}
                  className="flex-1 py-2 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
                >
                  Next Turn
                </button>
              </div>
              
              <button
                onClick={resetCombat}
                className="w-full py-2 bg-red-700 hover:bg-red-600 text-amber-100 font-medium rounded-lg"
              >
                End Combat
              </button>
            </>
          ) : (
            <button
              onClick={startCombat}
              className="w-full py-3 bg-green-700 hover:bg-green-600 text-amber-100 font-medium rounded-lg"
              disabled={combatants.length === 0}
            >
              Start Combat
            </button>
          )}
          
          {/* Common Conditions */}
          <div className="mt-4">
            <h4 className="text-amber-200 text-sm font-medium mb-2">Common Conditions</h4>
            <div className="flex flex-wrap gap-1">
              {commonConditions.map(condition => (
                <div 
                  key={condition}
                  className="px-2 py-1 bg-stone-700 text-amber-100 text-xs rounded-lg cursor-pointer hover:bg-stone-600"
                  onClick={() => {
                    if (combatStarted && combatants[activeCombatant]) {
                      toggleCondition(combatants[activeCombatant].id, condition);
                    }
                  }}
                  title={combatStarted ? `Apply to ${combatants[activeCombatant]?.name}` : 'Start combat to apply conditions'}
                >
                  {condition}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Quick Reference */}
        <div className="bg-stone-800 border border-amber-900/30 rounded-lg p-4">
          <h3 className="text-lg font-medium text-amber-100 mb-2">Actions Reference</h3>
          
          <div className="space-y-2">
            <div className="p-2 bg-stone-700 rounded-lg">
              <h4 className="text-amber-200 font-medium">Standard Actions</h4>
              <ul className="text-sm text-amber-100/90 pl-4 list-disc">
                <li>Attack (melee or ranged)</li>
                <li>Cast a Spell</li>
                <li>Dash (double movement)</li>
                <li>Disengage (no opportunity attacks)</li>
                <li>Dodge (disadvantage to be hit)</li>
                <li>Help (give advantage)</li>
                <li>Hide (Stealth check)</li>
                <li>Ready (prepare an action)</li>
              </ul>
            </div>
            
            <div className="p-2 bg-stone-700 rounded-lg">
              <h4 className="text-amber-200 font-medium">Bonus Actions</h4>
              <ul className="text-sm text-amber-100/90 pl-4 list-disc">
                <li>Two-weapon fighting</li>
                <li>Cast bonus action spell</li>
                <li>Class/racial abilities</li>
              </ul>
            </div>
            
            <div className="p-2 bg-stone-700 rounded-lg">
              <h4 className="text-amber-200 font-medium">Reactions</h4>
              <ul className="text-sm text-amber-100/90 pl-4 list-disc">
                <li>Opportunity attacks</li>
                <li>Readied actions</li>
                <li>Some spells (Shield, Counterspell)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Initiative List */}
      <div className="bg-stone-800 border border-amber-900/30 rounded-lg p-4">
        <h3 className="text-lg font-medium text-amber-100 mb-2">Initiative Order</h3>
        
        {combatants.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full">
              <thead className="bg-stone-700">
                <tr>
                  <th className="text-left px-4 py-2 text-amber-200">Initiative</th>
                  <th className="text-left px-4 py-2 text-amber-200">Name</th>
                  <th className="text-left px-4 py-2 text-amber-200">HP</th>
                  <th className="text-left px-4 py-2 text-amber-200">AC</th>
                  <th className="text-left px-4 py-2 text-amber-200">Conditions</th>
                  <th className="text-left px-4 py-2 text-amber-200">Notes</th>
                  <th className="text-left px-4 py-2 text-amber-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {combatants.map((combatant, index) => (
                  <tr 
                    key={combatant.id} 
                    className={`${
                      combatStarted && index === activeCombatant 
                        ? 'bg-amber-900/30' 
                        : index % 2 === 0 ? 'bg-stone-700/50' : ''
                    }`}
                  >
                    <td className="px-4 py-2">{combatant.initiative}</td>
                    <td className="px-4 py-2">
                      {combatant.name}
                      {combatant.hp === 0 && <span className="ml-2 text-red-500 text-xs">(Down)</span>}
                    </td>
                    <td className="px-4 py-2">
                      {combatant.hp !== '-' ? (
                        <div className="flex items-center space-x-1">
                          <button 
                            onClick={() => updateHP(combatant.id, -1)}
                            className="w-6 h-6 bg-red-900/50 hover:bg-red-700 rounded-full text-white text-sm flex items-center justify-center"
                          >
                            -
                          </button>
                          <span>{combatant.hp}/{combatant.maxHp}</span>
                          <button 
                            onClick={() => updateHP(combatant.id, 1)}
                            className="w-6 h-6 bg-green-900/50 hover:bg-green-700 rounded-full text-white text-sm flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      ) : combatant.hp}
                    </td>
                    <td className="px-4 py-2">{combatant.ac}</td>
                    <td className="px-4 py-2">
                      <div className="flex flex-wrap gap-1">
                        {combatant.conditions.map(condition => (
                          <span 
                            key={condition} 
                            className="px-1 py-0.5 bg-red-900/30 text-amber-100 text-xs rounded"
                            onClick={() => toggleCondition(combatant.id, condition)}
                            title="Click to remove"
                          >
                            {condition}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-sm">{combatant.notes}</td>
                    <td className="px-4 py-2">
                      <button 
                        onClick={() => removeCombatant(combatant.id)}
                        className="px-2 py-1 bg-red-700/50 hover:bg-red-600 text-amber-100 text-xs rounded"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-amber-100/60">
            No combatants added yet. Add characters, monsters, and NPCs to track initiative.
          </div>
        )}
      </div>
      
      {/* Modal for adding monsters */}
      {showMonsterList && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-stone-800 p-4 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-medium text-amber-100 mb-4">Add Monster</h3>
            
            <div className="mb-4">
              <label className="block text-amber-200 text-sm font-medium mb-1">Environment (Optional)</label>
              <select
                value={selectedEnvironment}
                onChange={(e) => setSelectedEnvironment(e.target.value)}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              >
                <option value="">Any Environment</option>
                {encounterData.environments.map(env => (
                  <option key={env} value={env}>{env}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-amber-200 text-sm font-medium mb-1">Challenge Rating</label>
              <select
                value={selectedCR}
                onChange={(e) => setSelectedCR(e.target.value)}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                required
              >
                <option value="">Select CR</option>
                {encounterData.challengeRatings.map(cr => (
                  <option key={cr} value={cr}>{cr}</option>
                ))}
              </select>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowMonsterList(false)}
                className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-amber-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={addRandomMonster}
                className="px-4 py-2 bg-amber-700 hover:bg-amber-600 text-amber-100 rounded-lg"
                disabled={!selectedCR}
              >
                Add Random Monster
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal for adding traps */}
      {showAddTrap && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-stone-800 p-4 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-medium text-amber-100 mb-4">Add Trap</h3>
            
            <p className="text-amber-100 mb-4">
              Add a random trap to the initiative order. Traps typically act on initiative count 20.
            </p>
            
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddTrap(false)}
                className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-amber-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={addTrap}
                className="px-4 py-2 bg-amber-700 hover:bg-amber-600 text-amber-100 rounded-lg"
              >
                Add Random Trap
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
