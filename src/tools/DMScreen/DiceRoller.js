// src/tools/DMScreen/DiceRoller.js
import React, { useState, useEffect } from 'react';
import { diceTypes, dicePresets } from '../../data/dmScreenData';

export default function DiceRoller() {
  const [numberOfDice, setNumberOfDice] = useState(1);
  const [selectedDice, setSelectedDice] = useState('d20');
  const [modifier, setModifier] = useState(0);
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);
  const [customRollFormula, setCustomRollFormula] = useState('');
  const [customPresets, setCustomPresets] = useState([]);
  const [newPresetName, setNewPresetName] = useState('');
  const [isRolling, setIsRolling] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  
  // Load history and custom presets from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('dice-roll-history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    
    const savedPresets = localStorage.getItem('dice-custom-presets');
    if (savedPresets) {
      setCustomPresets(JSON.parse(savedPresets));
    }
  }, []);
  
  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem('dice-roll-history', JSON.stringify(history));
  }, [history]);
  
  // Save custom presets to localStorage
  useEffect(() => {
    localStorage.setItem('dice-custom-presets', JSON.stringify(customPresets));
  }, [customPresets]);
  
  // Roll dice animation effect
  const animateRoll = () => {
    setIsRolling(true);
    // Show random results during animation
    const animationDuration = 500; // ms
    const frames = 5;
    const frameInterval = animationDuration / frames;
    
    for (let i = 0; i < frames; i++) {
      setTimeout(() => {
        const animatedResults = Array(numberOfDice).fill().map(() => 
          Math.floor(Math.random() * getDiceFaces(selectedDice)) + 1
        );
        setResults(animatedResults);
        
        if (i === frames - 1) {
          setIsRolling(false);
          // Perform actual roll after animation
          rollDice();
        }
      }, i * frameInterval);
    }
  };
  
  // Get number of faces for selected dice
  const getDiceFaces = (diceType) => {
    const dice = diceTypes.find(d => d.value === diceType);
    return dice ? dice.faces : 6; // Default to d6 if not found
  };
  
  // Roll the dice
  const rollDice = () => {
    const faces = getDiceFaces(selectedDice);
    const newResults = Array(numberOfDice).fill().map(() => 
      Math.floor(Math.random() * faces) + 1
    );
    
    setResults(newResults);
    
    // Calculate total with modifier
    const total = newResults.reduce((sum, result) => sum + result, 0) + Number(modifier);
    
    // Add to history
    const rollName = `${numberOfDice}${selectedDice}${modifier >= 0 ? '+' : ''}${modifier !== 0 ? modifier : ''}`;
    const newRoll = {
      id: Date.now(),
      name: rollName,
      results: newResults,
      modifier: Number(modifier),
      total: total,
      timestamp: new Date().toISOString()
    };
    
    setHistory([newRoll, ...history.slice(0, 19)]); // Keep last 20 rolls
  };
  
  // Handle the roll button click with animation
  const handleRoll = () => {
    animateRoll();
  };
  
  // Parse custom roll formula (e.g., "2d6+3")
  const parseCustomRoll = (formula) => {
    // Basic pattern: [number]d[faces][+/-][modifier]
    const pattern = /^(\d+)d(\d+)(?:([+-])(\d+))?$/i;
    const match = formula.replace(/\s+/g, '').match(pattern);
    
    if (!match) {
      return null;
    }
    
    const numberOfDice = parseInt(match[1]);
    const diceFaces = parseInt(match[2]);
    const modOperator = match[3] || '+';
    const modValue = match[4] ? parseInt(match[4]) : 0;
    
    return {
      numberOfDice,
      diceFaces,
      modifier: modOperator === '+' ? modValue : -modValue
    };
  };
  
  // Roll using a custom formula
  const rollCustom = () => {
    const parsedRoll = parseCustomRoll(customRollFormula);
    
    if (!parsedRoll) {
      alert('Invalid roll formula. Use format like "2d6+3"');
      return;
    }
    
    // Simulate rolling the dice
    const newResults = Array(parsedRoll.numberOfDice).fill().map(() => 
      Math.floor(Math.random() * parsedRoll.diceFaces) + 1
    );
    
    // Calculate total with modifier
    const total = newResults.reduce((sum, result) => sum + result, 0) + parsedRoll.modifier;
    
    // Add to history
    const newRoll = {
      id: Date.now(),
      name: customRollFormula,
      results: newResults,
      modifier: parsedRoll.modifier,
      total: total,
      timestamp: new Date().toISOString()
    };
    
    setResults(newResults);
    setHistory([newRoll, ...history.slice(0, 19)]); // Keep last 20 rolls
  };
  
  // Save current roll as a preset
  const savePreset = () => {
    if (!newPresetName.trim()) {
      alert('Please enter a name for your preset');
      return;
    }
    
    const formula = `${numberOfDice}${selectedDice}${modifier >= 0 ? '+' : ''}${modifier !== 0 ? modifier : ''}`;
    
    // Check if name already exists
    const existingPreset = customPresets.find(p => p.name === newPresetName.trim());
    if (existingPreset) {
      if (!window.confirm('A preset with this name already exists. Replace it?')) {
        return;
      }
      
      // Replace existing preset
      setCustomPresets(customPresets.map(p => 
        p.name === newPresetName.trim() ? { name: newPresetName.trim(), dice: formula } : p
      ));
    } else {
      // Add new preset
      setCustomPresets([...customPresets, { name: newPresetName.trim(), dice: formula }]);
    }
    
    setNewPresetName('');
  };
  
  // Roll from a preset
  const rollPreset = (preset) => {
    const parsedRoll = parseCustomRoll(preset.dice);
    
    if (!parsedRoll) return;
    
    // Set up the dice roller with these values
    if (activeTab === 'basic') {
      setNumberOfDice(parsedRoll.numberOfDice);
      setSelectedDice(`d${parsedRoll.diceFaces}`);
      setModifier(parsedRoll.modifier);
      animateRoll();
    } else {
      setCustomRollFormula(preset.dice);
      rollCustom();
    }
  };
  
  // Delete a custom preset
  const deletePreset = (presetName) => {
    if (window.confirm(`Delete preset "${presetName}"?`)) {
      setCustomPresets(customPresets.filter(p => p.name !== presetName));
    }
  };
  
  // Clear history
  const clearHistory = () => {
    if (window.confirm('Clear all roll history?')) {
      setHistory([]);
    }
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Dice Roller</h2>
      
      {/* Dice Roller Tabs */}
      <div className="flex mb-4 border-b border-amber-900/30">
        <button 
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'basic' 
              ? 'text-amber-200 border-b-2 border-amber-600' 
              : 'text-amber-100/70 hover:text-amber-100'
          }`}
          onClick={() => setActiveTab('basic')}
        >
          Basic Roller
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'custom' 
              ? 'text-amber-200 border-b-2 border-amber-600' 
              : 'text-amber-100/70 hover:text-amber-100'
          }`}
          onClick={() => setActiveTab('custom')}
        >
          Custom Formula
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'presets' 
              ? 'text-amber-200 border-b-2 border-amber-600' 
              : 'text-amber-100/70 hover:text-amber-100'
          }`}
          onClick={() => setActiveTab('presets')}
        >
          Presets
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'history' 
              ? 'text-amber-200 border-b-2 border-amber-600' 
              : 'text-amber-100/70 hover:text-amber-100'
          }`}
          onClick={() => setActiveTab('history')}
        >
          History
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Dice Controls */}
        <div className="md:col-span-2 bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          {activeTab === 'basic' && (
            <>
              <h3 className="text-lg font-medium text-amber-100 mb-3">Roll Dice</h3>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div>
                  <label className="block text-amber-200 text-sm font-medium mb-1">Number</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={numberOfDice}
                    onChange={(e) => setNumberOfDice(Math.max(1, Math.min(100, Number(e.target.value))))}
                    className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-200 text-sm font-medium mb-1">Dice</label>
                  <select
                    value={selectedDice}
                    onChange={(e) => setSelectedDice(e.target.value)}
                    className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                  >
                    {diceTypes.map(dice => (
                      <option key={dice.value} value={dice.value}>{dice.value}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-amber-200 text-sm font-medium mb-1">Modifier</label>
                  <input
                    type="number"
                    value={modifier}
                    onChange={(e) => setModifier(Number(e.target.value))}
                    className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="block text-amber-200 text-sm font-medium mb-1">Formula</span>
                <div className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100 text-center font-medium">
                  {numberOfDice}{selectedDice}{modifier >= 0 ? '+' : ''}{modifier !== 0 ? modifier : ''}
                </div>
              </div>
              
              <button
                onClick={handleRoll}
                disabled={isRolling}
                className={`w-full py-3 ${
                  isRolling 
                    ? 'bg-stone-700 cursor-not-allowed' 
                    : 'bg-amber-700 hover:bg-amber-600'
                } text-amber-100 font-medium rounded-lg mb-3`}
              >
                {isRolling ? 'Rolling...' : 'Roll Dice'}
              </button>
              
              <div className="mt-2">
                <label className="block text-amber-200 text-sm font-medium mb-1">Save as Preset</label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Preset name"
                    value={newPresetName}
                    onChange={(e) => setNewPresetName(e.target.value)}
                    className="flex-1 bg-stone-700 border border-amber-900/50 rounded-l-lg p-2 text-amber-100"
                  />
                  <button
                    onClick={savePreset}
                    disabled={!newPresetName.trim()}
                    className="bg-stone-700 hover:bg-stone-600 disabled:opacity-50 text-amber-100 py-2 px-3 rounded-r-lg border border-amber-900/50 border-l-0"
                  >
                    Save
                  </button>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'custom' && (
            <>
              <h3 className="text-lg font-medium text-amber-100 mb-3">Custom Roll Formula</h3>
              
              <div className="mb-4">
                <label className="block text-amber-200 text-sm font-medium mb-1">Formula (e.g., 2d6+3)</label>
                <input
                  type="text"
                  value={customRollFormula}
                  onChange={(e) => setCustomRollFormula(e.target.value)}
                  placeholder="1d20+5"
                  className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                />
              </div>
              
              <button
                onClick={rollCustom}
                className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg mb-3"
              >
                Roll Custom Dice
              </button>
              
              <div className="mt-2">
                <label className="block text-amber-200 text-sm font-medium mb-1">Save as Preset</label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Preset name"
                    value={newPresetName}
                    onChange={(e) => setNewPresetName(e.target.value)}
                    className="flex-1 bg-stone-700 border border-amber-900/50 rounded-l-lg p-2 text-amber-100"
                  />
                  <button
                    onClick={() => {
                      if (!customRollFormula.trim()) {
                        alert('Please enter a dice formula first');
                        return;
                      }
                      if (!parseCustomRoll(customRollFormula)) {
                        alert('Invalid dice formula');
                        return;
                      }
                      if (!newPresetName.trim()) {
                        alert('Please enter a name for your preset');
                        return;
                      }
                      
                      // Save custom preset
                      const existingPreset = customPresets.find(p => p.name === newPresetName.trim());
                      
                      if (existingPreset) {
                        if (!window.confirm('A preset with this name already exists. Replace it?')) {
                          return;
                        }
                        
                        setCustomPresets(customPresets.map(p => 
                          p.name === newPresetName.trim() ? { name: newPresetName.trim(), dice: customRollFormula } : p
                        ));
                      } else {
                        setCustomPresets([...customPresets, { name: newPresetName.trim(), dice: customRollFormula }]);
                      }
                      
                      setNewPresetName('');
                    }}
                    disabled={!newPresetName.trim() || !customRollFormula.trim()}
                    className="bg-stone-700 hover:bg-stone-600 disabled:opacity-50 text-amber-100 py-2 px-3 rounded-r-lg border border-amber-900/50 border-l-0"
                  >
                    Save
                  </button>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'presets' && (
            <>
              <h3 className="text-lg font-medium text-amber-100 mb-3">Default Presets</h3>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {dicePresets.map((preset, index) => (
                  <button 
                    key={index}
                    onClick={() => {
                      setCustomRollFormula(preset.dice);
                      rollPreset(preset);
                    }}
                    className="bg-stone-700 hover:bg-stone-600 text-amber-100 py-2 px-3 rounded-lg text-sm text-left"
                  >
                    <span className="font-medium">{preset.name}</span>
                    <span className="text-amber-200/70 ml-2">{preset.dice}</span>
                  </button>
                ))}
              </div>
              
              <h3 className="text-lg font-medium text-amber-100 mb-3 mt-6 border-t border-amber-900/30 pt-3">Custom Presets</h3>
              
              {customPresets.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {customPresets.map((preset, index) => (
                    <div 
                      key={index}
                      className="bg-stone-700 hover:bg-stone-600 text-amber-100 py-2 px-3 rounded-lg text-sm relative group"
                    >
                      <button 
                        className="w-full h-full text-left"
                        onClick={() => rollPreset(preset)}
                      >
                        <span className="font-medium">{preset.name}</span>
                        <span className="text-amber-200/70 ml-2">{preset.dice}</span>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          deletePreset(preset.name);
                        }}
                        className="absolute right-2 top-2 text-red-400 opacity-0 group-hover:opacity-100"
                        title="Delete preset"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-amber-100/60">
                  No custom presets yet. Save your favorite rolls to see them here.
                </div>
              )}
            </>
          )}
          
          {activeTab === 'history' && (
            <>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-amber-100">Roll History</h3>
                {history.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="text-xs bg-red-900/30 hover:bg-red-900/50 text-amber-100 py-1 px-2 rounded"
                  >
                    Clear History
                  </button>
                )}
              </div>
              
              {history.length > 0 ? (
                <div className="max-h-96 overflow-y-auto">
                  {history.map((roll) => (
                    <div 
                      key={roll.id}
                      className="bg-stone-700 p-2 rounded mb-2 text-sm"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{roll.name}</span>
                        <span className="text-amber-200">Total: {roll.total}</span>
                      </div>
                      <div>
                        <span className="text-amber-100/70">Rolls: [{roll.results.join(', ')}]</span>
                        {roll.modifier !== 0 && (
                          <span className="text-amber-100/70 ml-1">
                            {roll.modifier > 0 ? '+' : ''}{roll.modifier}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-amber-100/60">
                  No roll history yet. Roll some dice to see them here.
                </div>
              )}
            </>
          )}
        </div>
        
        {/* Results Display */}
        <div className="md:col-span-3 bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Current Roll Results</h3>
          
          {/* Dice visualizer */}
          {results.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-3 mb-4 min-h-32 max-h-64 overflow-y-auto p-2 bg-stone-700/50 rounded-lg justify-center items-center">
                {results.map((result, index) => {
                  // Different dice visualizations based on type
                  let diceElement;
                  
                  switch(selectedDice) {
                    case 'd4':
                      diceElement = (
                        <div 
                          key={index}
                          className="relative w-12 h-12 transform"
                          style={{
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                            background: 'linear-gradient(to bottom right, #6D4C41, #8D6E63)'
                          }}
                        >
                          <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                            {result}
                          </span>
                        </div>
                      );
                      break;
                    case 'd6':
                      diceElement = (
                        <div 
                          key={index}
                          className="relative w-12 h-12 bg-white border-2 border-gray-300 rounded shadow-lg"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            {result === 1 && <span className="block w-2 h-2 bg-black rounded-full"></span>}
                            {result === 2 && (
                              <>
                                <span className="absolute top-2 left-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute bottom-2 right-2 block w-2 h-2 bg-black rounded-full"></span>
                              </>
                            )}
                            {result === 3 && (
                              <>
                                <span className="absolute top-2 left-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute inset-0 m-auto block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute bottom-2 right-2 block w-2 h-2 bg-black rounded-full"></span>
                              </>
                            )}
                            {result === 4 && (
                              <>
                                <span className="absolute top-2 left-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute top-2 right-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute bottom-2 left-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute bottom-2 right-2 block w-2 h-2 bg-black rounded-full"></span>
                              </>
                            )}
                            {result === 5 && (
                              <>
                                <span className="absolute top-2 left-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute top-2 right-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute inset-0 m-auto block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute bottom-2 left-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute bottom-2 right-2 block w-2 h-2 bg-black rounded-full"></span>
                              </>
                            )}
                            {result === 6 && (
                              <>
                                <span className="absolute top-2 left-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute top-2 right-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute left-2 inset-y-0 my-auto block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute right-2 inset-y-0 my-auto block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute bottom-2 left-2 block w-2 h-2 bg-black rounded-full"></span>
                                <span className="absolute bottom-2 right-2 block w-2 h-2 bg-black rounded-full"></span>
                              </>
                            )}
                          </div>
                        </div>
                      );
                      break;
                    case 'd20':
                      diceElement = (
                        <div 
                          key={index}
                          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center"
                        >
                          <span className="text-white font-bold text-lg">
                            {result}
                          </span>
                        </div>
                      );
                      break;
                    default:
                      // Default dice visualization
                      diceElement = (
                        <div 
                          key={index}
                          className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg"
                        >
                          <span className="text-white font-bold text-lg">
                            {result}
                          </span>
                        </div>
                      );
                  }
                  
                  return diceElement;
                })}
              </div>
              
              {/* Results summary */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-stone-700 rounded-lg text-center">
                <div>
                  <p className="text-amber-200 font-medium mb-1">Individual Dice</p>
                  <p className="text-xl text-amber-100">[{results.join(', ')}]</p>
                </div>
                <div>
                  <p className="text-amber-200 font-medium mb-1">Total</p>
                  <p className="text-3xl font-bold text-amber-100">
                    {results.reduce((sum, result) => sum + result, 0) + Number(modifier)}
                  </p>
                  {modifier !== 0 && (
                    <p className="text-amber-100/70 text-sm">
                      ({results.reduce((sum, result) => sum + result, 0)} {modifier > 0 ? '+' : ''}{modifier})
                    </p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-64 text-amber-100/60">
              Roll some dice to see results here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
