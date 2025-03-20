import React, { useState, useEffect } from 'react';

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
  namePrefixes, 
  nameSuffixes, 
  lastNames 
} from '../../data/characterRandomizerData';

export default function CharacterRandomizer() {
  const [character, setCharacter] = useState(null);
  
  // Get a random item from an array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  
  // Generate a random name
  const generateName = () => {
    const prefix = getRandomItem(namePrefixes);
    const suffix = getRandomItem(nameSuffixes);
    const lastName = getRandomItem(lastNames);
    return `${prefix}${suffix} ${lastName}`;
  };
  
  // Find suitable deities for a character
  const findDeities = (race, charClass) => {
    // Get deities that match either the race or class
    const matchingDeities = deities.filter(deity => 
      deity.followers.includes(race) || 
      deity.followers.includes(charClass)
    );
    
    // Return matching deities or a random selection if none match
    return matchingDeities.length > 0 ? matchingDeities : [getRandomItem(deities)];
  };
  
  // Generate a random character
  const generateCharacter = () => {
    console.log("Generating character...");
    console.log("Available races:", races);
    console.log("Available classes:", classes);
    
    const race = getRandomItem(races);
    const charClass = getRandomItem(classes);
    const background = getRandomItem(backgrounds);
    const feature = getRandomItem(features);
    const name = generateName();
    const appearance = appearances[race] ? getRandomItem(appearances[race]) : "A typical member of their race.";
    
    // Find suitable deities
    const suitableDeities = findDeities(race, charClass);
    const primaryDeity = getRandomItem(suitableDeities);
    const alternateDeities = suitableDeities.filter(d => d !== primaryDeity).slice(0, 2);
    
    console.log("Generated character:", {
      name,
      race,
      class: charClass
    });
    
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
      alternateDeities: alternateDeities
    });
  };
  
  // Generate a character on component mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    generateCharacter();
  }, []);
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-stone-800 rounded-lg shadow-lg border border-amber-900/30 text-gray-100 max-w-xl">
      <button 
        className="w-full py-3 px-4 mb-6 bg-gradient-to-r from-stone-700 to-amber-900 text-amber-100 text-lg font-semibold rounded-lg shadow-lg border border-amber-800/50 hover:from-stone-800 hover:to-amber-950"
        onClick={generateCharacter}
      >
        New Character
      </button>
      
      {character && (
        <div className="bg-stone-900 bg-opacity-80 p-6 rounded-lg shadow-lg border border-amber-800/30">
          <div className="border-b-2 border-amber-700/70 pb-3 mb-6">
            <h2 className="text-2xl font-bold text-center text-amber-200 mb-1">{character.name}</h2>
            <p className="text-center text-amber-100/70 italic">{character.race} {character.class}</p>
          </div>
          
          {/* Description */}
          <div className="mb-6 p-4 bg-amber-900/20 rounded-lg border border-amber-800/40 relative">
            <div className="absolute -top-3 left-3 bg-stone-800 px-2 text-amber-200 text-sm font-medium rounded">Description</div>
            <div className="text-amber-100/90">
              <p className="mb-3"><span className="text-amber-200">Race:</span> {character.raceDescription}</p>
              <p className="mb-3"><span className="text-amber-200">Class:</span> {character.classDescription}</p>
              <p><span className="text-amber-200">Appearance:</span> {character.appearance}</p>
            </div>
          </div>
          
          {/* Faith */}
          <div className="mb-6 p-4 bg-amber-900/20 rounded-lg border border-amber-800/40 relative">
            <div className="absolute -top-3 left-3 bg-stone-800 px-2 text-amber-200 text-sm font-medium rounded">Faith</div>
            <div className="text-amber-100/90">
              <p className="mb-2">
                <span className="text-amber-200">Primary Deity:</span> <span className="font-semibold">{character.deity.name}</span>, {character.deity.domain}
              </p>
              <p className="text-sm mb-2">{character.deity.description}</p>
              
              <p className="mb-2"><span className="text-amber-200">Holy Symbol:</span> {character.deity.symbol}</p>
              
              <div className="mb-2">
                <p className="text-amber-200 mb-1">Follower Requirements:</p>
                <p className="text-sm">{character.deity.requirements}</p>
              </div>
              
              <div className="mb-2">
                <p className="text-amber-200 mb-1">Follower Taboos:</p>
                <p className="text-sm">{character.deity.taboos}</p>
              </div>
              
              {character.alternateDeities.length > 0 && (
                <div className="mt-3">
                  <p className="text-amber-200 text-sm">Other Compatible Deities:</p>
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
            <div className="bg-stone-800 p-4 rounded-lg border border-amber-900/50">
              <span className="font-semibold text-amber-200">Background:</span> 
              <span className="ml-2">{character.background}</span>
            </div>
            
            <div className="bg-stone-800 p-4 rounded-lg border border-amber-900/50">
              <span className="font-semibold text-amber-200">Unique Feature:</span> 
              <span className="ml-2">{character.feature}</span>
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
