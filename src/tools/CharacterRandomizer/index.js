import React, { useState, useEffect, useCallback, useRef } from 'react';

// Import all data from a single file
import { 
  races, 
  raceDescriptions, 
  classes, 
  classDescriptions, 
  backgrounds, 
  features, 
  appearances, 
  deities, 
  getRaceNameComponents 
} from '../../data/characterRandomizerData';

// Import source materials
import {
  sourceMaterials,
  defaultActiveSources,
  getRacesFromSources
} from '../../data/characterRandomizer/sourceMaterials';

export default function CharacterRandomizer() {
  const [character, setCharacter] = useState(null);
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDeity, setSelectedDeity] = useState('');
  const [activeSources, setActiveSources] = useState(defaultActiveSources);
  const [availableRaces, setAvailableRaces] = useState(getRacesFromSources(defaultActiveSources));
  const [expandedSections, setExpandedSections] = useState({
    race: false,
    class: false,
    appearance: false,
    deity: false,
    background: false,
    feature: false
  });
  
  // Update available races when sources change
  useEffect(() => {
    const filteredRaces = getRacesFromSources(activeSources);
    setAvailableRaces(filteredRaces);
    
    // Reset selected race if it's no longer in the available races
    if (selectedRace && !filteredRaces.includes(selectedRace)) {
      setSelectedRace('');
    }
  }, [activeSources, selectedRace]);
  
  // Toggle source selection
  const toggleSource = (sourceId) => {
    setActiveSources(prev => {
      // If source is already active, remove it
      if (prev.includes(sourceId)) {
        return prev.filter(id => id !== sourceId);
      }
      // Otherwise, add it
      return [...prev, sourceId];
    });
  };
  
  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  // Get a random item from an array
  const getRandomItem = useCallback((array) => {
    return array[Math.floor(Math.random() * array.length)];
  }, []);
  
  // Generate a random name with useCallback
  const generateName = useCallback((race) => {
    const { prefixes, suffixes, lastNamePrefixes, lastNameSuffixes } = getRaceNameComponents(race);
    
    const prefix = getRandomItem(prefixes);
    const suffix = getRandomItem(suffixes);
    const lastNamePrefix = getRandomItem(lastNamePrefixes);
    const lastNameSuffix = getRandomItem(lastNameSuffixes);
    
    const firstName = `${prefix}${suffix}`;
    const lastName = `${lastNamePrefix}${lastNameSuffix}`;
    
    return `${firstName} ${lastName}`;
  }, [getRandomItem]);
  
  // Find suitable deities for a character with useCallback
  const findDeities = useCallback((race, charClass) => {
    // Get deities that match either the race or class
    const matchingDeities = deities.filter(deity => 
      deity.followers.includes(race) || 
      deity.followers.includes(charClass)
    );
    
    // Return matching deities or a random selection if none match
    return matchingDeities.length > 0 ? matchingDeities : deities;
  }, []);
  
  // Generate a random character using useCallback
  const generateCharacter = useCallback(() => {
    console.log("Generating character...");
    
    if (availableRaces.length === 0) {
      alert("Please select at least one source with races.");
      return;
    }
    
    // Use selected race/class if provided, otherwise random
    const race = selectedRace || getRandomItem(availableRaces);
    const charClass = selectedClass || getRandomItem(classes);
    const background = getRandomItem(backgrounds);
    const feature = getRandomItem(features);
    const name = generateName(race);
    const appearance = appearances[race] ? getRandomItem(appearances[race]) : "A typical member of their race.";
    
    // Find suitable deities
    const suitableDeities = findDeities(race, charClass);
    const primaryDeity = selectedDeity ? 
      deities.find(d => d.name === selectedDeity) : 
      getRandomItem(suitableDeities);
    
    const alternateDeities = suitableDeities
      .filter(d => d.name !== primaryDeity.name)
      .slice(0, 2);
    
    setCharacter({
      name,
      race,
      class: charClass,
      background,
      feature,
      appearance,
      raceDescription: raceDescriptions[race],
      classDescription: classDescriptions[charClass],
      deity: primaryDeity,
      alternateDeities: alternateDeities,
      suitableDeities: suitableDeities
    });
    
  }, [getRandomItem, generateName, findDeities, selectedRace, selectedClass, selectedDeity, availableRaces]);
  
  // Handle race selection
  const handleRaceChange = (e) => {
    setSelectedRace(e.target.value);
  };
  
  // Handle class selection
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  
  // Handle deity selection
  const handleDeityChange = (e) => {
    setSelectedDeity(e.target.value);
  };
  
  // Regenerate just the name
  const regenerateName = () => {
    if (!character) return;
    
    setCharacter(prev => ({
      ...prev,
      name: generateName(prev.race)
    }));
  };
  
  // Generate a character on component mount
  useEffect(() => {
    generateCharacter();
  }, [generateCharacter]);
  
  // Update character when selections change, but using a ref to avoid infinite loops
  const firstRenderRef = useRef(true);
  useEffect(() => {
    // Skip the first render to avoid double generation
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    
    // Only regenerate if we have a character already
    if (character) {
      generateCharacter();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRace, selectedClass, selectedDeity]);
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-stone-800 rounded-lg shadow-lg border border-amber-900/30 text-gray-100 max-w-xl md:max-w-2xl">
      {/* Source Material Selection */}
      <div className="mb-6">
        <h3 className="text-amber-200 font-medium mb-2">Source Materials:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {sourceMaterials.map(source => (
            <div 
              key={source.id}
              className="flex items-center"
            >
              <input
                type="checkbox"
                id={`source-${source.id}`}
                checked={activeSources.includes(source.id)}
                onChange={() => toggleSource(source.id)}
                className="mr-2 h-4 w-4 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              <label 
                htmlFor={`source-${source.id}`}
                className="text-sm cursor-pointer text-amber-100 hover:text-amber-200"
              >
                {source.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Selection Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Race Selector */}
        <div>
          <label className="block text-amber-200 text-sm font-medium mb-1">Race</label>
          <select 
            value={selectedRace} 
            onChange={handleRaceChange}
            className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
          >
            <option value="">Random</option>
            {availableRaces.map(race => (
              <option key={race} value={race}>{race}</option>
            ))}
          </select>
        </div>
        
        {/* Class Selector */}
        <div>
          <label className="block text-amber-200 text-sm font-medium mb-1">Class</label>
          <select 
            value={selectedClass} 
            onChange={handleClassChange}
            className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
          >
            <option value="">Random</option>
            {classes.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
        
        {/* Deity Selector */}
        <div>
          <label className="block text-amber-200 text-sm font-medium mb-1">Deity</label>
          <select 
            value={selectedDeity} 
            onChange={handleDeityChange}
            className="w-full bg-stone-800 border border-amber-900/50 rounded-lg p-2 text-amber-100"
          >
            <option value="">Random</option>
            {deities.map(deity => (
              <option key={deity.name} value={deity.name}>{deity.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      <button 
        className="w-full py-3 px-4 mb-6 bg-gradient-to-r from-stone-700 to-amber-900 text-amber-100 text-lg font-semibold rounded-lg shadow-lg border border-amber-800/50 hover:from-stone-800 hover:to-amber-950"
        onClick={() => generateCharacter()}
      >
        New Character
      </button>
      
      {/* Character display remains the same */}
      {character && (
        <div className="bg-stone-900 bg-opacity-80 p-6 rounded-lg shadow-lg border border-amber-800/30">
          {/* ... the rest of your character display code ... */}
        </div>
      )}
      
      <div className="mt-4 text-center">
        <p className="text-amber-200/60 text-sm italic">Roll up a new character for your next adventure!</p>
        <p className="text-amber-100/40 text-xs mt-1">Featuring {availableRaces.length} races and {classes.length} classes from {activeSources.length} sources</p>
      </div>
    </div>
  );
}
