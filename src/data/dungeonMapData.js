// src/data/dungeonMapData.js
export const dungeonSizes = [
  { id: 'small', name: 'Small (6-8 rooms)' },
  { id: 'medium', name: 'Medium (10-15 rooms)' },
  { id: 'large', name: 'Large (16-20 rooms)' }
];

export const roomSizes = [
  { id: 'small', name: 'Small' },
  { id: 'medium', name: 'Medium' },
  { id: 'large', name: 'Large' }
];

export const doorDensities = [
  { id: 'low', name: 'Low' },
  { id: 'medium', name: 'Medium' },
  { id: 'high', name: 'High' }
];

export const trapDensities = [
  { id: 'none', name: 'None' },
  { id: 'low', name: 'Low' },
  { id: 'medium', name: 'Medium' },
  { id: 'high', name: 'High' }
];

export const secretDoorDensities = [
  { id: 'none', name: 'None' },
  { id: 'low', name: 'Low' },
  { id: 'medium', name: 'Medium' },
  { id: 'high', name: 'High' }
];

export const dungeonThemes = [
  { id: 'classic', name: 'Classic Dungeon' },
  { id: 'cavern', name: 'Natural Caverns' },
  { id: 'temple', name: 'Ancient Temple' },
  { id: 'crypt', name: 'Crypt/Tomb' },
  { id: 'mine', name: 'Abandoned Mine' },
  { id: 'sewer', name: 'Sewer System' }
];

export const featureTypes = [
  { id: 'trap', name: 'Trap', color: '#cc0000' },
  { id: 'treasure', name: 'Treasure', color: '#ffcc00' },
  { id: 'archway', name: 'Archway', color: '#666666' },
  { id: 'monster', name: 'Monster', color: '#cc0000' },
  { id: 'fountain', name: 'Fountain', color: '#0066cc' },
  { id: 'statue', name: 'Statue', color: '#cccccc' },
  { id: 'altar', name: 'Altar', color: '#9966cc' }
];

// Monster encounter templates
export const monsterEncounters = [
  { 
    name: 'Goblin Ambush',
    difficulty: 'easy',
    description: 'A small group of goblins attempting to ambush travelers.',
    monsters: [
      { name: 'Goblin', count: '3-6' },
      { name: 'Goblin Boss', count: '0-1' }
    ]
  },
  { 
    name: 'Undead Patrol',
    difficulty: 'medium',
    description: 'Undead patrolling the dungeon halls.',
    monsters: [
      { name: 'Skeleton', count: '2-4' },
      { name: 'Zombie', count: '1-3' }
    ]
  },
  { 
    name: 'Guard Post',
    difficulty: 'medium',
    description: 'A fortified position guarded by organized enemies.',
    monsters: [
      { name: 'Bandit', count: '3-5' },
      { name: 'Bandit Captain', count: '1' }
    ]
  },
  { 
    name: 'Spider Nest',
    difficulty: 'medium',
    description: 'A dark corner filled with webs and skittering sounds.',
    monsters: [
      { name: 'Giant Spider', count: '2-4' },
      { name: 'Swarm of Spiders', count: '1-2' }
    ]
  },
  { 
    name: 'Ancient Guardian',
    difficulty: 'hard',
    description: 'A powerful creature protecting an important chamber.',
    monsters: [
      { name: 'Animated Armor', count: '1' },
      { name: 'Shield Guardian', count: '0-1' }
    ]
  }
];

// Trap templates
export const trapTemplates = [
  {
    name: 'Poison Dart Trap',
    difficulty: 'easy',
    description: 'Small poisoned darts shoot from the walls when triggered.',
    trigger: 'Pressure plate or tripwire',
    effect: 'Dexterity save or take 1d4 piercing plus 1d6 poison damage.'
  },
  {
    name: 'Pit Trap',
    difficulty: 'medium',
    description: 'A section of the floor that gives way when weight is placed on it.',
    trigger: 'Weight on floor',
    effect: 'Dexterity save or fall 10-20 feet, taking 1d6 damage per 10 feet.'
  },
  {
    name: 'Rolling Boulder',
    difficulty: 'medium',
    description: 'A large boulder rolls down a corridor, crushing anything in its path.',
    trigger: 'Tripwire or pressure plate',
    effect: 'Dexterity save to dodge or take 4d10 bludgeoning damage.'
  },
  {
    name: 'Gas Trap',
    difficulty: 'medium',
    description: 'Noxious gas pours into the room from hidden vents.',
    trigger: 'Opening a door or container',
    effect: 'Constitution save or be poisoned for 1 hour.'
  },
  {
    name: 'Magical Rune',
    difficulty: 'hard',
    description: 'An arcane rune that activates when someone approaches.',
    trigger: 'Proximity',
    effect: 'Saving throw varies by effect (fire, cold, lightning, etc).'
  }
];

// Treasure templates
export const treasureTemplates = [
  {
    name: 'Coin Cache',
    value: 'low',
    description: 'A small collection of coins hidden away.',
    contents: '2d6 × 10 gold pieces, 3d6 × 10 silver pieces'
  },
  {
    name: 'Merchant\'s Strongbox',
    value: 'medium',
    description: 'A reinforced box containing a merchant\'s earnings.',
    contents: '4d6 × 10 gold pieces, 1d4 gemstones worth 50gp each'
  },
  {
    name: 'Adventurer\'s Pack',
    value: 'medium',
    description: 'The remains of a less fortunate adventurer.',
    contents: '3d6 × 10 gold pieces, 1d4 potions, possibly a low-level magic item'
  },
  {
    name: 'Noble\'s Cache',
    value: 'high',
    description: 'Valuables hidden by someone of means.',
    contents: '6d6 × 10 gold pieces, 2d4 gemstones worth 100gp each, 1 piece of jewelry worth 250gp'
  },
  {
    name: 'Ancient Hoard',
    value: 'very high',
    description: 'A substantial collection of treasure.',
    contents: '2d4 × 100 gold pieces, 1d4 rare items, 1d2 magic items'
  }
];
