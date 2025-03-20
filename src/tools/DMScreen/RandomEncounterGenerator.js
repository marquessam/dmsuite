// src/tools/DMScreen/RandomEncounterGenerator.js
import React, { useState, useEffect } from 'react';
import { encounterData } from '../../data/dmScreenData';

// Additional monsters by environment
const monstersByEnvironment = {
  Dungeon: {
    'easy': [
      { name: 'Goblin', cr: '1/4', count: '4-8', notes: 'Stealthy, uses ambush tactics' },
      { name: 'Skeleton', cr: '1/4', count: '4-6', notes: 'Immune to poison and exhaustion' },
      { name: 'Giant Rat', cr: '1/8', count: '5-10', notes: 'Disease carriers' },
      { name: 'Kobold', cr: '1/8', count: '6-10', notes: 'Pack tactics, sets simple traps' }
    ],
    'medium': [
      { name: 'Ghoul', cr: '1', count: '3-5', notes: 'Paralyzing touch' },
      { name: 'Shadow', cr: '1/2', count: '3-6', notes: 'Strength drain, resistant to many damage types' },
      { name: 'Animated Armor', cr: '1', count: '2-3', notes: 'Immune to poison and psychic damage' },
      { name: 'Bugbear', cr: '1', count: '2-4', notes: 'Surprise attack, stealthy' }
    ],
    'hard': [
      { name: 'Mimic', cr: '2', count: '1', notes: 'Disguises as chest or door' },
      { name: 'Gelatinous Cube', cr: '2', count: '1', notes: 'Engulfs creatures, transparent' },
      { name: 'Ogre', cr: '2', count: '1-2', notes: 'Brute strength' },
      { name: 'Will-o'-Wisp', cr: '2', count: '1-3', notes: 'Invisible, consume life force' }
    ],
    'deadly': [
      { name: 'Minotaur', cr: '3', count: '1-2', notes: 'Maze navigation, charge attack' },
      { name: 'Spectator', cr: '3', count: '1', notes: 'Multiple eye rays, hovers' },
      { name: 'Helmed Horror', cr: '4', count: '1', notes: 'Spell immunities, flight' },
      { name: 'Flameskull', cr: '4', count: '1', notes: 'Spellcaster, reforms after destruction' }
    ]
  },
  Forest: {
    'easy': [
      { name: 'Wolf', cr: '1/4', count: '3-6', notes: 'Pack tactics' },
      { name: 'Pixie', cr: '1/4', count: '2-5', notes: 'Invisible, minor spellcasting' },
      { name: 'Sprite', cr: '1/4', count: '3-6', notes: 'Poison arrows, heart sight' },
      { name: 'Satyr', cr: '1/2', count: '2-3', notes: 'Charming music' }
    ],
    'medium': [
      { name: 'Dire Wolf', cr: '1', count: '2-4', notes: 'Knockdown attack' },
      { name: 'Dryad', cr: '1', count: '1-3', notes: 'Tree stride, charm' },
      { name: 'Giant Spider', cr: '1', count: '2-4', notes: 'Web, poison' },
      { name: 'Giant Toad', cr: '1', count: '2-3', notes: 'Swallow whole' }
    ],
    'hard': [
      { name: 'Ankheg', cr: '2', count: '1-2', notes: 'Acid spray, burrow' },
      { name: 'Awakened Tree', cr: '2', count: '1-3', notes: 'Slam attack' },
      { name: 'Ettercap', cr: '2', count: '1-2', notes: 'Web traps, poison' },
      { name: 'Green Hag', cr: '3', count: '1', notes: 'Mimicry, illusionary appearance' }
    ],
    'deadly': [
      { name: 'Owlbear', cr: '3', count: '1-2', notes: 'Keen sight and smell' },
      { name: 'Werewolf', cr: '3', count: '1-2', notes: 'Shapechanger, immune to non-silver weapons' },
      { name: 'Unicorn', cr: '5', count: '1', notes: 'Healing touch, teleport, magic resistance' },
      { name: 'Shambling Mound', cr: '5', count: '1', notes: 'Engulf, lightning heal' }
    ]
  },
  Mountain: {
    'easy': [
      { name: 'Pseudodragon', cr: '1/4', count: '1-3', notes: 'Telepathy, poison sting' },
      { name: 'Pteranodon', cr: '1/4', count: '2-5', notes: 'Flyby attack' },
      { name: 'Aarakocra', cr: '1/4', count: '3-6', notes: 'Flight, javelin attacks' },
      { name: 'Giant Eagle', cr: '1', count: '1-2', notes: 'Flyby attack, keen sight' }
    ],
    'medium': [
      { name: 'Hippogriff', cr: '1', count: '1-3', notes: 'Keen sight' },
      { name: 'Griffon', cr: '2', count: '1-2', notes: 'Keen sight, pounce' },
      { name: 'Peryton', cr: '2', count: '1-2', notes: 'Keen sight, dive attack' },
      { name: 'Giant Vulture', cr: '1', count: '2-4', notes: 'Pack tactics, keen sight' }
    ],
    'hard': [
      { name: 'Manticore', cr: '3', count: '1', notes: 'Tail spikes, flight' },
      { name: 'Basilisk', cr: '3', count: '1', notes: 'Petrifying gaze' },
      { name: 'Hell Hound', cr: '3', count: '1-2', notes: 'Fire breath, keen hearing and smell' },
      { name: 'Wyvern', cr: '6', count: '1', notes: 'Poison stinger, flight' }
    ],
    'deadly': [
      { name: 'Air Elemental', cr: '5', count: '1', notes: 'Whirlwind, air form' },
      { name: 'Bulette', cr: '5', count: '1', notes: 'Deadly leap, burrow' },
      { name: 'Roc', cr: '11', count: '1', notes: 'Massive size, grappling talons' },
      { name: 'Young White Dragon', cr: '6', count: '1', notes: 'Cold breath, ice walk' }
    ]
  },
  Urban: {
    'easy': [
      { name: 'Bandit', cr: '1/8', count: '4-8', notes: 'Pack tactics' },
      { name: 'Guard', cr: '1/8', count: '4-6', notes: 'Spears and shields' },
      { name: 'Cultist', cr: '1/8', count: '4-8', notes: 'Dark devotion' },
      { name: 'Noble', cr: '1/8', count: '1-2', notes: 'Parry, leadership' }
    ],
    'medium': [
      { name: 'Spy', cr: '1', count: '1-3', notes: 'Sneak attack, cunning action' },
      { name: 'Thug', cr: '1/2', count: '3-5', notes: 'Pack tactics, intimidation' },
      { name: 'Cult Fanatic', cr: '2', count: '1-2', notes: 'Spellcasting, dark devotion' },
      { name: 'Priest', cr: '2', count: '1', notes: 'Divine spellcasting' }
    ],
    'hard': [
      { name: 'Doppelganger', cr: '3', count: '1', notes: 'Shapechanger, read thoughts' },
      { name: 'Knight', cr: '3', count: '1', notes: 'Leadership, brave' },
      { name: 'Veteran', cr: '3', count: '1-2', notes: 'Multiattack, parry' },
      { name: 'Wererat', cr: '2', count: '1-3', notes: 'Shapechanger, immune to non-silver weapons' }
    ],
    'deadly': [
      { name: 'Assassin', cr: '8', count: '1', notes: 'Assassinate, sneak attack, poison' },
      { name: 'Mage', cr: '6', count: '1', notes: 'Spellcasting, familiar' },
      { name: 'Bandit Captain', cr: '2', count: '1', notes: 'With 3-6 thugs' },
      { name: 'Gladiator', cr: '5', count: '1', notes: 'Martial advantage, shield bash' }
    ]
  },
  Coastal: {
    'easy': [
      { name: 'Merfolk', cr: '1/8', count: '3-8', notes: 'Amphibious' },
      { name: 'Giant Crab', cr: '1/8', count: '3-6', notes: 'Grappling pincers' },
      { name: 'Sahuagin', cr: '1/2', count: '2-4', notes: 'Blood frenzy, shark telepathy' },
      { name: 'Steam Mephit', cr: '1/4', count: '2-5', notes: 'Steam breath, death burst' }
    ],
    'medium': [
      { name: 'Giant Eagle', cr: '1', count: '2-4', notes: 'Flyby, keen sight' },
      { name: 'Reef Shark', cr: '1/2', count: '3-5', notes: 'Pack tactics, water breathing' },
      { name: 'Sea Hag', cr: '2', count: '1', notes: 'Horrific appearance, death glare' },
      { name: 'Plesiosaurus', cr: '2', count: '1', notes: 'Hold breath, long neck' }
    ],
    'hard': [
      { name: 'Merrow', cr: '2', count: '2-3', notes: 'Amphibious, harpoon' },
      { name: 'Water Elemental', cr: '5', count: '1', notes: 'Water form, whelm' },
      { name: 'Killer Whale', cr: '3', count: '1', notes: 'Echolocation, keen hearing' },
      { name: 'Sahuagin Priestess', cr: '2', count: '1', notes: 'With 2-5 sahuagin' }
    ],
    'deadly': [
      { name: 'Giant Shark', cr: '5', count: '1', notes: 'Blood frenzy, water breathing' },
      { name: 'Sahuagin Baron', cr: '5', count: '1', notes: 'With 2-5 sahuagin' },
      { name: 'Young Bronze Dragon', cr: '8', count: '1', notes: 'Lightning breath, amphibious' },
      { name: 'Marid', cr: '11', count: '1', notes: 'Water spells, water walk' }
    ]
  },
  Desert: {
    'easy': [
      { name: 'Jackal', cr: '0', count: '5-10', notes: 'Pack tactics, keen hearing and smell' },
      { name: 'Scorpion', cr: '0', count: '3-8', notes: 'Poison sting' },
      { name: 'Dust Mephit', cr: '1/2', count: '2-4', notes: 'Blinding breath, death burst' },
      { name: 'Giant Lizard', cr: '1/4', count: '2-5', notes: 'Can be used as mounts' }
    ],
    'medium': [
      { name: 'Giant Scorpion', cr: '3', count: '1', notes: 'Multiattack, poison sting' },
      { name: 'Giant Vulture', cr: '1', count: '2-4', notes: 'Pack tactics, keen sight' },
      { name: 'Giant Hyena', cr: '1', count: '2-4', notes: 'Rampage' },
      { name: 'Gnoll', cr: '1/2', count: '3-6', notes: 'Rampage' }
    ],
    'hard': [
      { name: 'Lamia', cr: '4', count: '1', notes: 'Intoxicating touch, illusory appearance' },
      { name: 'Mummy', cr: '3', count: '1', notes: 'Dreadful glare, rotting fist' },
      { name: 'Phase Spider', cr: '3', count: '1-2', notes: 'Ethereal jaunt, poison bite' },
      { name: 'Basilisk', cr: '3', count: '1', notes: 'Petrifying gaze' }
    ],
    'deadly': [
      { name: 'Medusa', cr: '6', count: '1', notes: 'Petrifying gaze, snake hair' },
      { name: 'Young Brass Dragon', cr: '6', count: '1', notes: 'Fire breath, sleep breath, burrow' },
      { name: 'Fire Elemental', cr: '5', count: '1', notes: 'Fire form, illumination' },
      { name: 'Gynosphinx', cr: '11', count: '1', notes: 'Magic weapons needed, legendary resistance' }
    ]
  },
  Grassland: {
    'easy': [
      { name: 'Riding Horse', cr: '1/4', count: '2-5', notes: 'Hooves, trampling charge' },
      { name: 'Axe Beak', cr: '1/4', count: '3-6', notes: 'Beak attack' },
      { name: 'Giant Weasel', cr: '1/8', count: '3-6', notes: 'Keen hearing and smell' },
      { name: 'Blood Hawk', cr: '1/8', count: '3-8', notes: 'Pack tactics, keen sight' }
    ],
    'medium': [
      { name: 'Dire Wolf', cr: '1', count: '2-4', notes: 'Pack tactics, bite with knockdown' },
      { name: 'Giant Vulture', cr: '1', count: '2-4', notes: 'Pack tactics, keen sight' },
      { name: 'Lion', cr: '1', count: '1-3', notes: 'Pounce, pack tactics' },
      { name: 'Giant Boar', cr: '2', count: '1-2', notes: 'Charge, relentless' }
    ],
    'hard': [
      { name: 'Ankheg', cr: '2', count: '1-2', notes: 'Acid spray, burrow' },
      { name: 'Centaur', cr: '2', count: '2-3', notes: 'Charge, hooves' },
      { name: 'Pegasus', cr: '2', count: '1-2', notes: 'Flying mount' },
      { name: 'Rhinoceros', cr: '2', count: '1-2', notes: 'Charge' }
    ],
    'deadly': [
      { name: 'Elephant', cr: '4', count: '1-2', notes: 'Trampling charge' },
      { name: 'Bulette', cr: '5', count: '1', notes: 'Deadly leap, burrow' },
      { name: 'Triceratops', cr: '5', count: '1', notes: 'Trampling charge, gore' },
      { name: 'Gorgon', cr: '5', count: '1', notes: 'Trampling charge, petrifying breath' }
    ]
  },
  Swamp: {
    'easy': [
      { name: 'Stirge', cr: '1/8', count: '4-10', notes: 'Blood drain' },
      { name: 'Giant Frog', cr: '1/4', count: '3-6', notes: 'Swallow, standing leap' },
      { name: 'Gas Spore', cr: '1/2', count: '1-3', notes: 'Death burst, spores' },
      { name: 'Mud Mephit', cr: '1/4', count: '2-5', notes: 'Mud breath, death burst' }
    ],
    'medium': [
      { name: 'Giant Toad', cr: '1', count: '2-3', notes: 'Swallow, standing leap' },
      { name: 'Swarm of Insects', cr: '1/2', count: '2-4', notes: 'Swarm, damage resistance' },
      { name: 'Giant Constrictor Snake', cr: '2', count: '1', notes: 'Constrict, bite' },
      { name: 'Crocodile', cr: '1/2', count: '2-5', notes: 'Stealth, hold breath' }
    ],
    'hard': [
      { name: 'Shambling Mound', cr: '5', count: '1', notes: 'Engulf, lightning absorption' },
      { name: 'Green Hag', cr: '3', count: '1', notes: 'Mimicry, illusionary appearance' },
      { name: 'Giant Scorpion', cr: '3', count: '1', notes: 'Multiattack, poison sting' },
      { name: 'Water Elemental', cr: '5', count: '1', notes: 'Water form, whelm' }
    ],
    'deadly': [
      { name: 'Hydra', cr: '8', count: '1', notes: 'Multiple heads, regeneration' },
      { name: 'Young Black Dragon', cr: '7', count: '1', notes: 'Acid breath, swamp camouflage' },
      { name: 'Froghemoth', cr: '10', count: '1', notes: 'Multiattack, tentacles, shock susceptibility' },
      { name: 'Catoblepas', cr: '5', count: '1', notes: 'Death ray' }
    ]
  },
  Underdark: {
    'easy': [
      { name: 'Giant Fire Beetle', cr: '0', count: '3-8', notes: 'Illumination' },
      { name: 'Giant Rat', cr: '1/8', count: '5-10', notes: 'Pack tactics' },
      { name: 'Drow', cr: '1/4', count: '2-5', notes: 'Poisoned weapons, innate spellcasting' },
      { name: 'Violet Fungus', cr: '1/4', count: '2-4', notes: 'Rotting touch' }
    ],
    'medium': [
      { name: 'Myconid Adult', cr: '1/2', count: '2-5', notes: 'Spore cloud, pacification spores' },
      { name: 'Darkmantle', cr: '1/2', count: '2-4', notes: 'Echolocation, darkness aura' },
      { name: 'Grimlock', cr: '1/4', count: '4-8', notes: 'Blind senses, stone camouflage' },
      { name: 'Giant Spider', cr: '1', count: '2-4', notes: 'Web, spider climb' }
    ],
    'hard': [
      { name: 'Minotaur Skeleton', cr: '2', count: '1-2', notes: 'Charge, undead fortitude' },
      { name: 'Nothic', cr: '2', count: '1-2', notes: 'Weird insight, rotting gaze' },
      { name: 'Gelatinous Cube', cr: '2', count: '1', notes: 'Transparent, engulf' },
      { name: 'Grick', cr: '2', count: '1-3', notes: 'Stone camouflage, damage resistance' }
    ],
    'deadly': [
      { name: 'Mind Flayer', cr: '7', count: '1', notes: 'Mind blast, extract brain' },
      { name: 'Otyugh', cr: '5', count: '1', notes: 'Tentacles, disease' },
      { name: 'Umber Hulk', cr: '5', count: '1', notes: 'Confusing gaze, tunnel digger' },
      { name: 'Drow Elite Warrior', cr: '5', count: '1', notes: 'With 2-4 drow' }
    ]
  },
  Arctic: {
    'easy': [
      { name: 'Ice Mephit', cr: '1/2', count: '2-4', notes: 'Frost breath, death burst' },
      { name: 'Wolf', cr: '1/4', count: '3-6', notes: 'Pack tactics, bite with knockdown' },
      { name: 'Kobold', cr: '1/8', count: '4-8', notes: 'Pack tactics, sunlight sensitivity' },
      { name: 'Giant Owl', cr: '1/4', count: '2-4', notes: 'Flyby, keen hearing and sight' }
    ],
    'medium': [
      { name: 'Winter Wolf', cr: '3', count: '1', notes: 'Snow camouflage, cold breath' },
      { name: 'Yeti', cr: '3', count: '1', notes: 'Snow camouflage, chilling gaze' },
      { name: 'Ice Elemental', cr: '5', count: '1', notes: 'Variants of water elementals' },
      { name: 'Dire Wolf', cr: '1', count: '2-4', notes: 'Pack tactics, knockdown bite' }
    ],
    'hard': [
      { name: 'Mammoth', cr: '6', count: '1', notes: 'Trampling charge' },
      { name: 'Polar Bear', cr: '2', count: '1-2', notes: 'Keen smell, multiattack' },
      { name: 'Frost Giant', cr: '8', count: '1', notes: 'Rock throwing, great weapon fighting' },
      { name: 'Saber-Toothed Tiger', cr: '2', count: '1-2', notes: 'Pounce, keen smell' }
    ],
    'deadly': [
      { name: 'Young White Dragon', cr: '6', count: '1', notes: 'Cold breath, ice walk' },
      { name: 'Frost Salamander', cr: '9', count: '1', notes: 'Multiattack, freezing breath' },
      { name: 'Abominable Yeti', cr: '9', count: '1', notes: 'Cold aura, chilling gaze' },
      { name: 'Remorhaz', cr: '11', count: '1', notes: 'Heated body, swallow' }
    ]
  }
};

export default function RandomEncounterGenerator() {
  const [environment, setEnvironment] = useState('Dungeon');
  const [difficulty, setDifficulty] = useState('medium');
  const [partyLevel, setPartyLevel] = useState(3);
  const [partySize, setPartySize] = useState(4);
  const [encounters, setEncounters] = useState([]);
  const [generatedEncounter, setGeneratedEncounter] = useState(null);
  const [savedEncounters, setSavedEncounters] = useState(
    JSON.parse(localStorage.getItem('dmscreen-saved-encounters')) || []
  );
  const [includeTrap, setIncludeTrap] = useState(false);
  
  // Load saved encounters from localStorage
  useEffect(() => {
    const savedEncData = localStorage.getItem('dmscreen-saved-encounters');
    if (savedEncData) {
      setSavedEncounters(JSON.parse(savedEncData));
    }
  }, []);
  
  // Save encounters to localStorage when they change
  useEffect(() => {
    localStorage.setItem('dmscreen-saved-encounters', JSON.stringify(savedEncounters));
  }, [savedEncounters]);
  
  // Calculate CR based on party level and difficulty
  const calculateTargetCR = () => {
    // Base values for encounter multipliers
    const difficultyMultipliers = {
      'easy': 0.5,
      'medium': 0.75,
      'hard': 1,
      'deadly': 1.5
    };
    
    // CR for a single monster is roughly party level / 3 to party level
    let targetCR = partyLevel * difficultyMultipliers[difficulty];
    
    // Adjust for party size (larger parties can handle more)
    targetCR = targetCR * (partySize / 4);
    
    // Try to map to a valid CR value
    if (targetCR < 0.125) return '0';
    if (targetCR < 0.25) return '1/8';
    if (targetCR < 0.5) return '1/4';
    if (targetCR < 1) return '1/2';
    
    // Round to nearest whole number for CR 1 and above
    return Math.round(targetCR).toString();
  };
  
  // Parse CR value to a numeric value
  const crToNumber = (cr) => {
    if (cr === '0') return 0;
    if (cr === '1/8') return 0.125;
    if (cr === '1/4') return 0.25;
    if (cr === '1/2') return 0.5;
    return parseFloat(cr);
  };
  
  // Generate a random encounter based on selected parameters
  const generateEncounter = () => {
    // Get target CR
    const targetCR = calculateTargetCR();
    
    // Get available monsters for the environment and difficulty
    const availableMonsters = monstersByEnvironment[environment][difficulty];
    
    if (!availableMonsters || availableMonsters.length === 0) {
      alert('No monsters available for this combination of environment and difficulty.');
      return;
    }
    
    // Randomly select 1 or 2 monster types
    const numMonsterTypes = Math.random() > 0.7 ? 2 : 1;
    const selectedMonsters = [];
    
    // Prevent duplicates
    const usedIndexes = new Set();
    
    for (let i = 0; i < numMonsterTypes; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * availableMonsters.length);
      } while (usedIndexes.has(randomIndex) && usedIndexes.size < availableMonsters.length);
      
      usedIndexes.add(randomIndex);
      
      const monster = { ...availableMonsters[randomIndex] };
      
      // Parse count range and determine specific count
      const countRange = monster.count.split('-').map(Number);
      if (countRange.length > 1) {
        const minCount = countRange[0];
        const maxCount = countRange[1];
        monster.actualCount = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
      } else {
        monster.actualCount = parseInt(monster.count);
      }
      
      selectedMonsters.push(monster);
    }
    
    // Add optional trap if selected
    let trap = null;
    if (includeTrap) {
      const trapTypes = encounterData.trapTypes;
      trap = trapTypes[Math.floor(Math.random() * trapTypes.length)];
    }
    
    // Calculate difficulty rating
    const totalXP = selectedMonsters.reduce((sum, monster) => {
      // Approximate XP values based on CR
      const monsterCR = crToNumber(monster.cr);
      let xpPerMonster = 10; // Default
      
      if (monsterCR === 0) xpPerMonster = 10;
      else if (monsterCR === 0.125) xpPerMonster = 25;
      else if (monsterCR === 0.25) xpPerMonster = 50;
      else if (monsterCR === 0.5) xpPerMonster = 100;
      else if (monsterCR === 1) xpPerMonster = 200;
      else if (monsterCR === 2) xpPerMonster = 450;
      else if (monsterCR === 3) xpPerMonster = 700;
      else if (monsterCR === 4) xpPerMonster = 1100;
      else if (monsterCR === 5) xpPerMonster = 1800;
      else if (monsterCR === 6) xpPerMonster = 2300;
      else if (monsterCR === 7) xpPerMonster = 2900;
      else if (monsterCR === 8) xpPerMonster = 3900;
      else if (monsterCR === 9) xpPerMonster = 5000;
      else if (monsterCR === 10) xpPerMonster = 5900;
      else if (monsterCR === 11) xpPerMonster = 7200;
      else if (monsterCR >= 12) xpPerMonster = 8400;
      
      return sum + (xpPerMonster * monster.actualCount);
    }, 0);
    
    // Apply encounter multipliers based on number of monsters
    const totalMonsters = selectedMonsters.reduce((sum, monster) => sum + monster.actualCount, 0);
    let encounterMultiplier = 1;
    
    if (totalMonsters === 2) encounterMultiplier = 1.5;
    else if (totalMonsters >= 3 && totalMonsters <= 6) encounterMultiplier = 2;
    else if (totalMonsters >= 7 && totalMonsters <= 10) encounterMultiplier = 2.5;
    else if (totalMonsters >= 11 && totalMonsters <= 14) encounterMultiplier = 3;
    else if (totalMonsters >= 15) encounterMultiplier = 4;
    
    const adjustedXP = totalXP * encounterMultiplier;
    
    // Generate descriptive text for the encounter
    let encDesc = '';
    if (selectedMonsters.length === 1) {
      const monster = selectedMonsters[0];
      encDesc = `${monster.actualCount} ${monster.name}${monster.actualCount > 1 ? 's' : ''}`;
    } else {
      encDesc = selectedMonsters.map(monster => `${monster.actualCount} ${monster.name}${monster.actualCount > 1 ? 's' : ''}`).join(' and ');
    }
    
    if (trap) {
      encDesc += ` with a ${trap} trap`;
    }
    
    // Create encounter object
    const encounter = {
      id: Date.now().toString(),
      environment,
      difficulty,
      monsters: selectedMonsters,
      totalMonsters,
      totalXP: adjustedXP,
      partyInfo: {
        level: partyLevel,
        size: partySize
      },
      description: encDesc,
      trap,
      timestamp: new Date().toISOString()
    };
    
    setGeneratedEncounter(encounter);
    setEncounters([encounter, ...encounters.slice(0, 9)]);
  };
  
  // Save encounter to saved list
  const saveEncounter = (encounter) => {
    setSavedEncounters([encounter, ...savedEncounters]);
  };
  
  // Delete an encounter from saved list
  const deleteEncounter = (id) => {
    setSavedEncounters(savedEncounters.filter(enc => enc.id !== id));
  };
  
  // Get difficulty class string
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-orange-400';
      case 'deadly': return 'text-red-400';
      default: return 'text-amber-100';
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Random Encounter Generator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Generator Controls */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Encounter Settings</h3>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Environment</label>
            <select 
              value={environment} 
              onChange={(e) => setEnvironment(e.target.value)}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              {encounterData.environments.map(env => (
                <option key={env} value={env}>{env}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Difficulty</label>
            <select 
              value={difficulty} 
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="deadly">Deadly</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Party Level</label>
              <input 
                type="number" 
                min="1" 
                max="20" 
                value={partyLevel} 
                onChange={(e) => setPartyLevel(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              />
            </div>
            
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Party Size</label>
              <input 
                type="number" 
                min="1" 
                max="10" 
                value={partySize} 
                onChange={(e) => setPartySize(Math.min(10, Math.max(1, parseInt(e.target.value) || 1)))}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label className="flex items-center text-amber-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={includeTrap}
                onChange={(e) => setIncludeTrap(e.target.checked)}
                className="mr-2 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              Include Trap
            </label>
          </div>
          
          <button 
            onClick={generateEncounter}
            className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
          >
            Generate Encounter
          </button>
        </div>
        
        {/* Current Encounter */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Current Encounter</h3>
          
          {generatedEncounter ? (
            <div>
              <div className="mb-3 p-3 bg-stone-700 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-amber-200 font-medium">{generatedEncounter.environment} Encounter</h4>
                    <p className={`text-sm font-medium ${getDifficultyClass(generatedEncounter.difficulty)}`}>
                      {generatedEncounter.difficulty.charAt(0).toUpperCase() + generatedEncounter.difficulty.slice(1)} Difficulty
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      <span className="text-amber-200">XP:</span> {generatedEncounter.totalXP}
                    </p>
                    <p className="text-sm">
                      <span className="text-amber-200">For:</span> {generatedEncounter.partyInfo.size} level {generatedEncounter.partyInfo.level} characters
                    </p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <h5 className="text-amber-200 text-sm font-medium mb-1">Monsters:</h5>
                  
                  {generatedEncounter.monsters.map((monster, index) => (
                    <div key={index} className="p-2 mb-2 bg-stone-800/70 rounded">
                      <div className="flex justify-between">
                        <div className="font-medium">{monster.actualCount}× {monster.name}</div>
                        <div className="text-sm">CR {monster.cr}</div>
                      </div>
                      <p className="text-sm text-amber-100/80 mt-1">{monster.notes}</p>
                    </div>
                  ))}
                  
                  {generatedEncounter.trap && (
                    <div className="p-2 mt-3 bg-stone-800/70 rounded">
                      <div className="font-medium text-red-400">Trap: {generatedEncounter.trap}</div>
                    </div>
                  )}
                </div>
                
                <div className="mt-3 text-center">
                  <button
                    onClick={() => saveEncounter(generatedEncounter)}
                    className="px-4 py-1 bg-amber-700 hover:bg-amber-600 text-amber-100 text-sm rounded"
                  >
                    Save Encounter
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              Generate an encounter to see it here.
            </div>
          )}
          
          <div className="mt-3">
            <h4 className="text-amber-200 text-sm font-medium mb-2">Recent Encounters:</h4>
            <div className="max-h-40 overflow-y-auto">
              {encounters.length > 0 ? (
                encounters.map((enc, index) => (
                  index > 0 && (
                    <div 
                      key={enc.id} 
                      className="text-sm mb-2 p-2 bg-stone-700/50 rounded cursor-pointer"
                      onClick={() => setGeneratedEncounter(enc)}
                    >
                      <div className="flex justify-between">
                        <span>
                          {enc.environment} - {enc.description}
                        </span>
                        <span className={getDifficultyClass(enc.difficulty)}>
                          {enc.difficulty}
                        </span>
                      </div>
                    </div>
                  )
                ))
              ) : (
                <div className="text-center py-2 text-amber-100/60">
                  No recent encounters.
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Saved Encounters */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Saved Encounters</h3>
          
          {savedEncounters.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              {savedEncounters.map((enc, index) => (
                <div 
                  key={enc.id} 
                  className="p-3 mb-3 bg-stone-700 rounded-lg relative group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-amber-200 font-medium">{enc.environment}</h4>
                      <p className={`text-sm ${getDifficultyClass(enc.difficulty)}`}>
                        {enc.difficulty.charAt(0).toUpperCase() + enc.difficulty.slice(1)}
                      </p>
                    </div>
                    <button
                      className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100"
                      onClick={() => deleteEncounter(enc.id)}
                      title="Delete encounter"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <p className="mt-2 text-sm">{enc.description}</p>
                  
                  <div className="flex justify-between mt-2 text-xs text-amber-100/70">
                    <span>{enc.totalXP} XP</span>
                    <span>Party: {enc.partyInfo.size} × Level {enc.partyInfo.level}</span>
                  </div>
                  
                  <button
                    className="w-full mt-2 py-1 text-sm bg-stone-600 hover:bg-stone-500 rounded"
                    onClick={() => setGeneratedEncounter(enc)}
                  >
                    Load
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              Save encounters to see them here.
            </div>
          )}
        </div>
      </div>
      
      {/* Environment Info */}
      <div className="bg-stone-800 rounded-lg overflow-hidden border border-amber-900/30 mb-4">
        <div 
          className="flex justify-between items-center p-3 bg-stone-700 cursor-pointer"
          onClick={() => document.getElementById('environment-info').classList.toggle('hidden')}
        >
          <h3 className="font-medium text-amber-100">{environment} Environment Tips</h3>
          <span className="text-xs text-amber-100/60">Click to Expand/Collapse</span>
        </div>
        
        <div id="environment-info" className="hidden p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-amber-200 font-medium mb-2">Terrain Features</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {environment === 'Dungeon' && (
                  <>
                    <li>Narrow corridors limit movement and can create chokepoints</li>
                    <li>Doors may be locked, trapped, or hidden</li>
                    <li>Limited lighting creates areas of darkness</li>
                    <li>Traps may be hidden in floors, walls, or objects</li>
                    <li>Room heights can vary, allowing for vertical combat</li>
                  </>
                )}
                {environment === 'Forest' && (
                  <>
                    <li>Trees provide partial cover (+2 AC)</li>
                    <li>Undergrowth creates difficult terrain (half movement)</li>
                    <li>Fallen trees can be obstacles or bridges</li>
                    <li>Dense canopy limits visibility from above</li>
                    <li>Tree branches allow for vertical movement</li>
                  </>
                )}
                {environment === 'Mountain' && (
                  <>
                    <li>Steep slopes create difficult terrain</li>
                    <li>Narrow paths may require Dexterity checks</li>
                    <li>Falling rocks and avalanches are hazards</li>
                    <li>High altitude may cause exhaustion</li>
                    <li>Cliffs and ledges allow for ambush positions</li>
                  </>
                )}
                {environment === 'Urban' && (
                  <>
                    <li>Buildings provide full cover</li>
                    <li>Alleys create narrow corridors</li>
                    <li>Rooftops allow for travel above streets</li>
                    <li>Crowds can provide concealment or be obstacles</li>
                    <li>Sewers and underground passages may exist</li>
                  </>
                )}
                {environment === 'Coastal' && (
                  <>
                    <li>Sand and shallow water create difficult terrain</li>
                    <li>Tides can change terrain over time</li>
                    <li>Cliffs may be hazardous or provide vantage points</li>
                    <li>Boats and ships provide mobile platforms</li>
                    <li>Underwater areas accessible to certain creatures</li>
                  </>
                )}
                {environment === 'Desert' && (
                  <>
                    <li>Sand creates difficult terrain in some areas</li>
                    <li>Heat requires Constitution saves to avoid exhaustion</li>
                    <li>Limited water sources are vital</li>
                    <li>Sandstorms can limit visibility and damage</li>
                    <li>Oases provide respite and attract creatures</li>
                  </>
                )}
                {environment === 'Grassland' && (
                  <>
                    <li>Open fields provide little natural cover</li>
                    <li>Tall grass can provide concealment for Small creatures</li>
                    <li>Rolling hills may block line of sight</li>
                    <li>Few obstacles to movement</li>
                    <li>Weather is clearly visible from a distance</li>
                  </>
                )}
                {environment === 'Swamp' && (
                  <>
                    <li>Shallow water creates difficult terrain</li>
                    <li>Deep water requires swimming</li>
                    <li>Quicksand and mud can be hazards</li>
                    <li>Trees and vegetation provide partial cover</li>
                    <li>Fog may limit visibility</li>
                  </>
                )}
                {environment === 'Underdark' && (
                  <>
                    <li>Complete darkness requires light sources or darkvision</li>
                    <li>Cave systems may have narrow passages</li>
                    <li>Underground rivers and lakes</li>
                    <li>Fungi forests provide food and light</li>
                    <li>Cave-ins and sinkholes are potential hazards</li>
                  </>
                )}
                {environment === 'Arctic' && (
                  <>
                    <li>Snow creates difficult terrain</li>
                    <li>Ice may require Dexterity checks to avoid falling</li>
                    <li>Extreme cold requires Constitution saves</li>
                    <li>Blizzards can limit visibility and cause damage</li>
                    <li>Crevasses and thin ice are hidden hazards</li>
                  </>
                )}
              </ul>
            </div>
            
            <div>
              <h4 className="text-amber-200 font-medium mb-2">Combat Tips</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {environment === 'Dungeon' && (
                  <>
                    <li>Use doorways as choke points to limit enemy numbers</li>
                    <li>Check for traps before entering new rooms</li>
                    <li>Sound echoes, potentially alerting nearby enemies</li>
                    <li>Area effects in enclosed spaces are more dangerous</li>
                    <li>Remember that many creatures have darkvision</li>
                  </>
                )}
                {environment === 'Forest' && (
                  <>
                    <li>Use trees for cover during ranged combat</li>
                    <li>Watch for ambushes from above or behind trees</li>
                    <li>Fire can spread quickly in dry forests</li>
                    <li>Use stealth to avoid alerting creatures</li>
                    <li>Druids and rangers have home field advantage</li>
                  </>
                )}
                {environment === 'Mountain' && (
                  <>
                    <li>Positioning is crucial - higher ground gives advantage</li>
                    <li>Pushed enemies may fall from ledges</li>
                    <li>Loud noises can trigger avalanches</li>
                    <li>Flying creatures have significant advantages</li>
                    <li>Limited movement options can trap characters</li>
                  </>
                )}
                {environment === 'Urban' && (
                  <>
                    <li>Civilian bystanders complicate combat</li>
                    <li>Buildings and alleyways provide tactical options</li>
                    <li>City guards may respond to disturbances</li>
                    <li>Verticality (rooftops, balconies) adds tactical depth</li>
                    <li>Potential for property damage and consequences</li>
                  </>
                )}
                {environment === 'Coastal' && (
                  <>
                    <li>Water depth affects movement and combat options</li>
                    <li>Aquatic creatures have advantage in water</li>
                    <li>Ranged attacks over water have few obstacles</li>
                    <li>Tide changes can alter the battlefield over time</li>
                    <li>Swimming in armor is difficult (Strength checks)</li>
                  </>
                )}
                {environment === 'Desert' && (
                  <>
                    <li>Limited cover makes ranged combat effective</li>
                    <li>Heat exhaustion affects combat stamina</li>
                    <li>Sand can obscure vision during battles</li>
                    <li>Mirages can confuse navigation</li>
                    <li>Water sources are strategic locations</li>
                  </>
                )}
                {environment === 'Grassland' && (
                  <>
                    <li>Long sight lines favor ranged attackers</li>
                    <li>Limited natural cover - create your own</li>
                    <li>Mounted combatants have significant advantages</li>
                    <li>Grass fires can quickly change battlefield dynamics</li>
                    <li>Large creatures visible from great distances</li>
                  </>
                )}
                {environment === 'Swamp' && (
                  <>
                    <li>Difficult terrain slows tactical movement</li>
                    <li>Submerged enemies can be hard to detect</li>
                    <li>Diseases and poisons are common hazards</li>
                    <li>Stable footing may be limited for spellcasting</li>
                    <li>Visibility often reduced by mist and vegetation</li>
                  </>
                )}
                {environment === 'Underdark' && (
                  <>
                    <li>Darkness impacts those without darkvision</li>
                    <li>Light sources reveal your position to enemies</li>
                    <li>Cave acoustics can alert distant creatures</li>
                    <li>Unstable caverns might collapse from area spells</li>
                    <li>Three-dimensional space with tunnels above and below</li>
                  </>
                )}
                {environment === 'Arctic' && (
                  <>
                    <li>Cold damage is more thematic and dangerous</li>
                    <li>Limited visibility in snowstorms</li>
                    <li>Fire spells and sources are especially valuable</li>
                    <li>Tracking is easier in snow (higher Survival DC)</li>
                    <li>Thin ice may break under heavy creatures</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
