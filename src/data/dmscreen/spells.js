// src/data/dmscreen/spells.js
// Spell data organized by level and school of magic

export const spellsData = {
  // Spells by level
  byLevel: {
    cantrips: [
      {
        name: "Fire Bolt",
        level: "Cantrip",
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["Sorcerer", "Wizard"],
        description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage."
      },
      // Additional cantrips will be added here
    ],
    level1: [
      {
        name: "Magic Missile",
        level: "1st",
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["Sorcerer", "Wizard"],
        description: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target."
      },
      // Additional 1st level spells will be added here
    ],
    // Additional spell levels will be added here (level2, level3, etc.)
  },
  
  // Spell schools with descriptions
  schools: [
    { 
      name: "Abjuration", 
      description: "Protective spells that create barriers, negate harmful effects, harm trespassers, or banish creatures to other planes of existence." 
    },
    { 
      name: "Conjuration", 
      description: "Spells that involve transportation of objects and creatures from one location to another." 
    },
    { 
      name: "Divination", 
      description: "Spells that reveal information, whether in the form of secrets long forgotten, glimpses of the future, hidden things, or illusions." 
    },
    { 
      name: "Enchantment", 
      description: "Spells that affect the minds of others, influencing or controlling their behavior." 
    },
    { 
      name: "Evocation", 
      description: "Spells that manipulate magical energy to produce a desired effect, such as dealing damage." 
    },
    { 
      name: "Illusion", 
      description: "Spells that alter the perceptions of others or create false images." 
    },
    { 
      name: "Necromancy", 
      description: "Spells that manipulate the energies of life and death." 
    },
    { 
      name: "Transmutation", 
      description: "Spells that change the properties of a creature, object, or environment." 
    }
  ],
  
  // Spell casting rules
  rules: [
    {
      title: "Components",
      description: "A spell's components are the physical requirements you must meet in order to cast it. Each spell's description indicates whether it requires verbal (V), somatic (S), or material (M) components."
    },
    {
      title: "Concentration",
      description: "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends."
    },
    {
      title: "Casting Time",
      description: "Most spells require a single action to cast, but some spells require a bonus action, a reaction, or much more time to cast."
    },
    // Additional rules will be added here
  ]
};
