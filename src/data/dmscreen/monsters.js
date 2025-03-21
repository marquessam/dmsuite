// src/data/dmscreen/monsters.js
// Monster manual data with complete stat blocks

// Monster types and subtypes
export const monsterTypes = [
  "Aberration", "Beast", "Celestial", "Construct", "Dragon", 
  "Elemental", "Fey", "Fiend", "Giant", "Humanoid", 
  "Monstrosity", "Ooze", "Plant", "Undead"
];

// Monster environments
export const monsterEnvironments = [
  "Arctic", "Coastal", "Desert", "Forest", "Grassland", 
  "Hill", "Mountain", "Swamp", "Underdark", "Underwater", "Urban"
];

// Monster data organized by challenge rating
export const monsters = {
  // CR 0 (0-10 XP)
  cr0: [
    {
      name: "Awakened Shrub",
      type: "Plant",
      size: "Small",
      alignment: "unaligned",
      ac: "9",
      hp: "10 (3d6)",
      speed: "20 ft.",
      abilities: {
        str: 3,
        dex: 8,
        con: 11,
        int: 10,
        wis: 10,
        cha: 6
      },
      vulnerabilities: ["fire"],
      resistances: ["piercing"],
      senses: "passive Perception 10",
      languages: "one language known by its creator",
      challenge: "0 (10 XP)",
      traits: [
        {
          name: "False Appearance",
          desc: "While the shrub remains motionless, it is indistinguishable from a normal shrub."
        }
      ],
      actions: [
        {
          name: "Rake",
          desc: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) slashing damage."
        }
      ]
    }
    // Additional CR 0 monsters will be added here
  ],
  
  // CR 1/8 (25 XP)
  cr18: [
    {
      name: "Kobold",
      type: "Humanoid (kobold)",
      size: "Small",
      alignment: "lawful evil",
      ac: "12",
      hp: "5 (2d6 - 2)",
      speed: "30 ft.",
      abilities: {
        str: 7,
        dex: 15,
        con: 9,
        int: 8,
        wis: 7,
        cha: 8
      },
      senses: "darkvision 60 ft., passive Perception 8",
      languages: "Common, Draconic",
      challenge: "1/8 (25 XP)",
      traits: [
        {
          name: "Sunlight Sensitivity",
          desc: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          name: "Pack Tactics",
          desc: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      actions: [
        {
          name: "Dagger",
          desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
        },
        {
          name: "Sling",
          desc: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."
        }
      ]
    }
    // Additional CR 1/8 monsters will be added here
  ],
  
  // Additional CR categories will be added here (cr14, cr12, cr1, cr2, etc.)
};

// Legendary monsters with special actions
export const legendaryMonsters = [
  {
    name: "Ancient Red Dragon",
    legendaryActions: [
      { 
        name: "Detect", 
        desc: "The dragon makes a Wisdom (Perception) check."
      },
      { 
        name: "Tail Attack", 
        desc: "The dragon makes a tail attack."
      },
      { 
        name: "Wing Attack (Costs 2 Actions)", 
        desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
    ]
  }
  // Additional legendary monsters will be added here
];

// Monster abilities and traits
export const monsterTraits = [
  {
    name: "Amphibious",
    description: "The creature can breathe air and water."
  },
  {
    name: "Pack Tactics",
    description: "The creature has advantage on attack rolls against a creature if at least one of the creature's allies is within 5 feet of the creature and the ally isn't incapacitated."
  },
  {
    name: "Regeneration",
    description: "The creature regains hit points at the start of its turn. If the creature takes [damage type] damage, this trait doesn't function at the start of the creature's next turn."
  },
  {
    name: "Magic Resistance",
    description: "The creature has advantage on saving throws against spells and other magical effects."
  },
  {
    name: "Spellcasting",
    description: "The creature is a spellcaster. Its spellcasting ability is [ability], spell save DC [number], +[number] to hit with spell attacks."
  }
  // Additional monster traits will be added here
];

// Monster actions and abilities by type
export const monsterActionsByType = {
  dragons: {
    breathWeapons: [
      {
        name: "Fire Breath (Recharge 5-6)",
        description: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC [X] Dexterity saving throw, taking [Y] fire damage on a failed save, or half as much damage on a successful one."
      },
      {
        name: "Cold Breath (Recharge 5-6)",
        description: "The dragon exhales frost in a 60-foot cone. Each creature in that area must make a DC [X] Constitution saving throw, taking [Y] cold damage on a failed save, or half as much damage on a successful one."
      }
      // Additional breath weapons will be added here
    ]
  },
  undead: {
    traits: [
      {
        name: "Undead Nature",
        description: "The creature doesn't require air, food, drink, or sleep."
      }
      // Additional undead traits will be added here
    ]
  }
  // Additional monster type actions will be added here
};
