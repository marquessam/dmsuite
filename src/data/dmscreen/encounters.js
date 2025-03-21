// src/data/dmscreen/encounters.js
// Encounter generation data and monster information

export const encounterData = {
  environments: [
    "Dungeon", "Forest", "Mountain", "Urban", "Coastal", "Desert", 
    "Grassland", "Hill", "Swamp", "Underdark", "Underwater", "Arctic"
  ],
  challengeRatings: [
    "1/8", "1/4", "1/2", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"
  ],
  commonMonsters: {
    "1/8": ["Bandit", "Cultist", "Giant Rat", "Kobold", "Tribal Warrior"],
    "1/4": ["Acolyte", "Goblin", "Skeleton", "Wolf", "Zombie"],
    "1/2": ["Crocodile", "Orc", "Scout", "Shadow", "Thug"],
    "1": ["Bugbear", "Dire Wolf", "Ghoul", "Giant Spider", "Specter"],
    "2": ["Ghast", "Ogre", "Priest", "Will-o'-Wisp", "Wererat"],
    "3": ["Knight", "Manticore", "Minotaur", "Owlbear", "Veteran"],
    "4": ["Banshee", "Ettin", "Ghost", "Wereboar", "Weretiger"],
    "5": ["Air Elemental", "Bulette", "Hill Giant", "Troll", "Vampire Spawn"]
  },
  trapTypes: [
    "Falling Net", "Poisoned Dart", "Pit Trap", "Swinging Blade", "Sleeping Gas",
    "Rolling Boulder", "Fire Glyph", "Flooding Room", "Crushing Walls", "Animated Statue",
    "Lightning Rods", "Collapsing Ceiling", "Snake Pit", "Crossbow Turret", "Teleportation Circle"
  ]
};

// Monster stats by environment
export const monstersByEnvironment = {
  Dungeon: {
    'easy': [
      { name: 'Goblin', cr: '1/4', count: '4-8', notes: 'Stealthy, uses ambush tactics' },
      { name: 'Skeleton', cr: '1/4', count: '4-6', notes: 'Immune to poison and exhaustion' },
      // Additional monsters will be added here
    ],
    'medium': [
      { name: 'Ghoul', cr: '1', count: '3-5', notes: 'Paralyzing touch' },
      // Additional monsters will be added here
    ],
    'hard': [
      { name: 'Mimic', cr: '2', count: '1', notes: 'Disguises as chest or door' },
      // Additional monsters will be added here
    ],
    'deadly': [
      { name: 'Minotaur', cr: '3', count: '1-2', notes: 'Maze navigation, charge attack' },
      // Additional monsters will be added here
    ]
  },
  // Additional environments will be added here
};

// Encounter balancing guidelines
export const encounterBalancing = {
  xpThresholds: {
    1: { easy: 25, medium: 50, hard: 75, deadly: 100 },
    2: { easy: 50, medium: 100, hard: 150, deadly: 200 },
    3: { easy: 75, medium: 150, hard: 225, deadly: 400 },
    4: { easy: 125, medium: 250, hard: 375, deadly: 500 },
    // Additional levels will be added here
  },
  // XP multipliers based on number of monsters
  multipliers: [
    { range: [1, 1], multiplier: 1 },
    { range: [2, 2], multiplier: 1.5 },
    { range: [3, 6], multiplier: 2 },
    { range: [7, 10], multiplier: 2.5 },
    { range: [11, 14], multiplier: 3 },
    { range: [15, 999], multiplier: 4 }
  ]
};
