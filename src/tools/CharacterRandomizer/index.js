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

export default function CharacterRandomizer() {
  const [character, setCharacter] = useState(null);
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDeity, setSelectedDeity] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    race: false,
    class: false,
    appearance: false,
    deity: false,
    background: false,
    feature: false
  });
  
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
    
    // Use selected race/class if provided, otherwise random
    const race = selectedRace || getRandomItem(races);
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
    
  }, [getRandomItem, generateName, findDeities, selectedRace, selectedClass, selectedDeity]);
  
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
            {races.map(race => (
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
      
      {character && (
        <div className="bg-stone-900 bg-opacity-80 p-6 rounded-lg shadow-lg border border-amber-800/30">
          <div className="border-b-2 border-amber-700/70 pb-3 mb-6">
            <h2 
              className="text-2xl font-bold text-center text-amber-200 mb-1 cursor-pointer hover:text-amber-100" 
              onClick={regenerateName}
              title="Click to randomize name"
            >
              {character.name}
            </h2>
            <p className="text-center text-amber-100/70 italic">{character.race} {character.class}</p>
          </div>
          
          {/* Description */}
          <div className="mb-6 p-4 bg-amber-900/20 rounded-lg border border-amber-800/40 relative">
            <div className="absolute -top-3 left-3 bg-stone-800 px-2 text-amber-200 text-sm font-medium rounded">Description</div>
            <div className="text-amber-100/90">
              {/* Race Description (Expandable) */}
              <div className="mb-3">
                <div 
                  onClick={() => toggleSection('race')} 
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="text-amber-200 font-semibold">Race:</span>
                  <span className="text-xs text-amber-200/60">
                    {expandedSections.race ? 'Hide Details' : 'Show Details'}
                  </span>
                </div>
                {expandedSections.race ? (
                  <p className="mt-1">{character.raceDescription}</p>
                ) : null}
              </div>
              
              {/* Class Description (Expandable) */}
              <div className="mb-3">
                <div 
                  onClick={() => toggleSection('class')} 
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="text-amber-200 font-semibold">Class:</span>
                  <span className="text-xs text-amber-200/60">
                    {expandedSections.class ? 'Hide Details' : 'Show Details'}
                  </span>
                </div>
                {expandedSections.class ? (
                  <p className="mt-1">{character.classDescription}</p>
                ) : null}
              </div>
              
              {/* Appearance (Expandable) */}
              <div>
                <div 
                  onClick={() => toggleSection('appearance')} 
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="text-amber-200 font-semibold">Appearance:</span>
                  <span className="text-xs text-amber-200/60">
                    {expandedSections.appearance ? 'Hide Details' : 'Show Details'}
                  </span>
                </div>
                {expandedSections.appearance ? (
                  <p className="mt-1">{character.appearance}</p>
                ) : null}
              </div>
            </div>
          </div>
          
          {/* Faith */}
          <div className="mb-6 p-4 bg-amber-900/20 rounded-lg border border-amber-800/40 relative">
            <div className="absolute -top-3 left-3 bg-stone-800 px-2 text-amber-200 text-sm font-medium rounded">Faith</div>
            <div className="text-amber-100/90">
              <div 
                onClick={() => toggleSection('deity')} 
                className="flex justify-between items-center cursor-pointer mb-2"
              >
                <div>
                  <span className="text-amber-200 font-semibold">Primary Deity:</span> 
                  <span className="font-semibold ml-1">{character.deity.name}</span>, {character.deity.domain}
                </div>
                <span className="text-xs text-amber-200/60">
                  {expandedSections.deity ? 'Hide Details' : 'Show Details'}
                </span>
              </div>
              
              {expandedSections.deity ? (
                <>
                  <p className="text-sm mb-2">{character.deity.description}</p>
                  
                  <p className="mb-2"><span className="text-amber-200 font-semibold">Holy Symbol:</span> {character.deity.symbol}</p>
                  
                  <div className="mb-2">
                    <p className="text-amber-200 font-semibold mb-1">Follower Requirements:</p>
                    <p className="text-sm">{character.deity.requirements}</p>
                  </div>
                  
                  <div className="mb-2">
                    <p className="text-amber-200 font-semibold mb-1">Follower Taboos:</p>
                    <p className="text-sm">{character.deity.taboos}</p>
                  </div>
                </>
              ) : null}
              
              {character.alternateDeities.length > 0 && (
                <div className="mt-3">
                  <p className="text-amber-200 font-semibold text-sm">Other Compatible Deities:</p>
                  <ul className="list-disc list-inside text-sm pl-2 mt-1">
                    {character.alternateDeities.map((deity, index) => (
                      <li key={index}><span className="font-semibold">{deity.name}</span> ({deity.domain})</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Details */}
          <div className="grid grid-cols-1 gap-4">
            {/* Background (Expandable) */}
            <div 
              className="bg-stone-800 p-4 rounded-lg border border-amber-900/50 cursor-pointer"
              onClick={() => toggleSection('background')}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-amber-200">Background:</span> 
                {!expandedSections.background && (
                  <span className="ml-2 truncate">{character.background.substring(0, 30)}...</span>
                )}
                <span className="text-xs text-amber-200/60">
                  {expandedSections.background ? 'Hide' : 'Expand'}
                </span>
              </div>
              {expandedSections.background && (
                <p className="mt-1">{character.background}</p>
              )}
            </div>
            
            {/* Unique Feature (Expandable) */}
            <div 
              className="bg-stone-800 p-4 rounded-lg border border-amber-900/50 cursor-pointer"
              onClick={() => toggleSection('feature')}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-amber-200">Unique Feature:</span>
                {!expandedSections.feature && (
                  <span className="ml-2 truncate">{character.feature.substring(0, 30)}...</span>
                )}
                <span className="text-xs text-amber-200/60">
                  {expandedSections.feature ? 'Hide' : 'Expand'}
                </span>
              </div>
              {expandedSections.feature && (
                <p className="mt-1">{character.feature}</p>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 text-center">
        <p className="text-amber-200/60 text-sm italic">Roll up a new character for your next adventure!</p>
        <p className="text-amber-100/40 text-xs mt-1">Featuring {races.length} races and {classes.length} classes</p>
      </div>
    </div>
  );
}
