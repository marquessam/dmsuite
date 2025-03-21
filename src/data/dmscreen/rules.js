// src/data/dmscreen/rules.js
// Core rules and mechanics

export const rulesData = [
  {
    id: "ability-checks",
    name: "Ability Checks",
    category: "core",
    description: "An ability check tests a character's or monster's innate talent and training. The DM calls for an ability check when a character or monster attempts an action that has a chance of failure.",
    lists: [
      {
        title: "Ability Check Formula",
        items: [
          "d20 + ability modifier + proficiency bonus (if proficient)"
        ]
      },
      {
        title: "Typical Difficulty Classes",
        items: [
          "Very Easy: 5",
          "Easy: 10",
          "Medium: 15",
          "Hard: 20",
          "Very Hard: 25",
          "Nearly Impossible: 30"
        ]
      }
    ]
  },
  {
    id: "saving-throws",
    name: "Saving Throws",
    category: "core",
    description: "A saving throw represents an attempt to resist a spell, trap, poison, disease, or similar threat.",
    lists: [
      {
        title: "Saving Throw Formula",
        items: [
          "d20 + ability modifier + proficiency bonus (if proficient)"
        ]
      }
    ]
  },
  {
    id: "advantage-disadvantage",
    name: "Advantage & Disadvantage",
    category: "core",
    description: "Advantage reflects the positive circumstances surrounding a d20 roll, while disadvantage reflects the opposite.",
    lists: [
      {
        title: "Rules",
        items: [
          "With advantage, roll two d20s and take the higher number.",
          "With disadvantage, roll two d20s and take the lower number.",
          "If you have both advantage and disadvantage, they cancel each other out.",
          "You never roll more than two d20s regardless of how many sources of advantage or disadvantage you have."
        ]
      }
    ]
  },
  {
    id: "rest",
    name: "Resting",
    category: "activities",
    description: "Adventurers can take short rests during the day and a long rest to end the day.",
    lists: [
      {
        title: "Short Rest (1+ hour)",
        items: [
          "Spend Hit Dice to heal",
          "Regain abilities that recharge on a short rest"
        ]
      },
      {
        title: "Long Rest (8+ hours)",
        items: [
          "Regain all hit points",
          "Regain up to half your total Hit Dice (minimum 1)",
          "Regain all spell slots and abilities that recharge on a long rest",
          "Can only benefit from one long rest in a 24-hour period",
          "Must have at least 1 hit point to begin a long rest"
        ]
      }
    ]
  },
  {
    id: "initiative",
    name: "Initiative",
    category: "core",
    description: "The initiative determines the order of turns in combat.",
    lists: [
      {
        title: "Initiative Rules",
        items: [
          "Each participant rolls a d20 and adds their Dexterity modifier.",
          "The DM arranges participants in order of their rolls from highest to lowest.",
          "Ties are broken by comparing Dexterity scores."
        ]
      }
    ]
  },
  {
    id: "combat",
    name: "Combat",
    category: "core",
    description: "Combat in D&D 5e is a structured event where players take turns and use actions to defeat enemies or achieve objectives.",
    lists: [
      {
        title: "Combat Round",
        items: [
          "A combat round represents 6 seconds of real-time action.",
          "Each participant takes one turn during a combat round."
        ]
      },
      {
        title: "Actions in Combat",
        items: [
          "Attack",
          "Cast a Spell",
          "Dash",
          "Disengage",
          "Dodge",
          "Help",
          "Hide",
          "Ready",
          "Search",
          "Use an Object"
        ]
      },
      {
        title: "Movement in Combat",
        items: [
          "A character can move up to their movement speed on their turn.",
          "Movement can be broken up across different parts of the turn."
        ]
      }
    ]
  },
  {
    id: "cover",
    name: "Cover",
    category: "core",
    description: "Cover provides a target with protection from attacks and some effects.",
    lists: [
      {
        title: "Types of Cover",
        items: [
          "Half cover: +2 bonus to AC and Dexterity saving throws.",
          "Three-quarters cover: +5 bonus to AC and Dexterity saving throws.",
          "Total cover: The target cannot be targeted directly by attacks or spells."
        ]
      }
    ]
  },
  {
    id: "conditions",
    name: "Conditions",
    category: "core",
    description: "Conditions represent various states that can affect creatures, from being blinded to being poisoned.",
    lists: [
      {
        title: "Common Conditions",
        items: [
          "Blinded: The creature can't see and automatically fails sight-dependent checks.",
          "Charmed: The creature is friendly to the charmer.",
          "Deafened: The creature can't hear and automatically fails hearing-dependent checks.",
          "Frightened: The creature can't willingly move closer to the source of fear.",
          "Grappled: The creature's speed is reduced to 0 and can't benefit from any bonus to its speed.",
          "Paralyzed: The creature is incapacitated and can't move or speak.",
          "Petrified: The creature is turned to stone, incapacitated, and has resistance to all damage.",
          "Poisoned: The creature has disadvantage on attack rolls and ability checks.",
          "Prone: The creature is lying on the ground and has disadvantage on attack rolls.",
          "Restrained: The creature's speed is reduced to 0, and it can't benefit from any bonus to its speed.",
          "Stunned: The creature is incapacitated and can't move or take actions.",
          "Unconscious: The creature is incapacitated, can't move, and automatically fails Strength and Dexterity saving throws."
        ]
      }
    ]
  },
  {
    id: "death-saving-throws",
    name: "Death Saving Throws",
    category: "core",
    description: "A death saving throw is made when a character drops to 0 hit points.",
    lists: [
      {
        title: "Death Saving Throw Rules",
        items: [
          "When you drop to 0 hit points, you must make a death saving throw at the start of each of your turns.",
          "You roll a d20. A roll of 10 or higher is a success, while a roll of 9 or lower is a failure.",
          "Three successes allow you to become stable, while three failures cause death.",
          "A roll of 1 counts as two failures, and a roll of 20 allows you to regain 1 hit point."
        ]
      }
    ]
  },
  {
    id: "combat-actions",
    name: "Combat Actions",
    category: "core",
    description: "Different actions can be taken in combat, affecting how a character interacts with enemies and the environment.",
    lists: [
      {
        title: "Standard Actions",
        items: [
          "Attack: Make a melee or ranged attack.",
          "Cast a Spell: Cast a spell that requires an action.",
          "Dash: Double your movement for the turn.",
          "Disengage: Move without provoking opportunity attacks.",
          "Dodge: Any attack against you has disadvantage, and you make Dexterity saving throws with advantage.",
          "Help: Give another creature advantage on their next ability check or attack roll.",
          "Hide: Attempt to hide from enemies, making a Stealth check.",
          "Ready: Prepare an action to take on a later turn.",
          "Search: Look for something specific.",
          "Use an Object: Interact with an object in your environment."
        ]
      }
    ]
  }
];
