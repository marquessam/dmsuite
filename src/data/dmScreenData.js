// src/data/dmScreenData.js
// This file contains reference data for the DM Screen

// Conditions data
export const conditionsData = [
  {
    name: "Blinded",
    description: "A blinded creature can't see and automatically fails any ability check that requires sight.",
    effects: [
      "The creature has disadvantage on attack rolls.",
      "Attack rolls against the creature have advantage."
    ]
  },
  {
    name: "Charmed",
    description: "A charmed creature can't attack the charmer or target them with harmful abilities or magical effects.",
    effects: [
      "The charmer has advantage on ability checks to interact socially with the creature."
    ]
  },
  {
    name: "Deafened",
    description: "A deafened creature can't hear and automatically fails any ability check that requires hearing."
  },
  {
    name: "Exhaustion",
    description: "Exhaustion is measured in six levels. Effects are cumulative.",
    effects: [
      "Level 1: Disadvantage on ability checks",
      "Level 2: Speed halved",
      "Level 3: Disadvantage on attack rolls and saving throws",
      "Level 4: Hit point maximum halved",
      "Level 5: Speed reduced to 0",
      "Level 6: Death"
    ]
  },
  {
    name: "Frightened",
    description: "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.",
    effects: [
      "The creature can't willingly move closer to the source of its fear."
    ]
  },
  {
    name: "Grappled",
    description: "A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.",
    effects: [
      "The condition ends if the grappler is incapacitated.",
      "The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect."
    ]
  },
  {
    name: "Incapacitated",
    description: "An incapacitated creature can't take actions or reactions."
  },
  {
    name: "Invisible",
    description: "An invisible creature is impossible to see without the aid of magic or a special sense.",
    effects: [
      "The creature's location can be detected by any noise it makes or any tracks it leaves.",
      "Attack rolls against the creature have disadvantage.",
      "The creature has advantage on attack rolls."
    ]
  },
  {
    name: "Paralyzed",
    description: "A paralyzed creature is incapacitated and can't move or speak.",
    effects: [
      "The creature automatically fails Strength and Dexterity saving throws.",
      "Attack rolls against the creature have advantage.",
      "Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
    ]
  },
  {
    name: "Petrified",
    description: "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone).",
    effects: [
      "Its weight increases by a factor of ten, and it ceases aging.",
      "The creature is incapacitated, can't move or speak, and is unaware of its surroundings.",
      "Attack rolls against the creature have advantage.",
      "The creature automatically fails Strength and Dexterity saving throws.",
      "The creature has resistance to all damage.",
      "The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized."
    ]
  },
  {
    name: "Poisoned",
    description: "A poisoned creature has disadvantage on attack rolls and ability checks."
  },
  {
    name: "Prone",
    description: "A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.",
    effects: [
      "The creature has disadvantage on attack rolls.",
      "An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage."
    ]
  },
  {
    name: "Restrained",
    description: "A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.",
    effects: [
      "Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.",
      "The creature has disadvantage on Dexterity saving throws."
    ]
  },
  {
    name: "Stunned",
    description: "A stunned creature is incapacitated, can't move, and can speak only falteringly.",
    effects: [
      "The creature automatically fails Strength and Dexterity saving throws.",
      "Attack rolls against the creature have advantage."
    ]
  },
  {
    name: "Unconscious",
    description: "An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.",
    effects: [
      "The creature drops whatever it's holding and falls prone.",
      "The creature automatically fails Strength and Dexterity saving throws.",
      "Attack rolls against the creature have advantage.",
      "Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature."
    ]
  }
];

// Rules data
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
    id: "movement",
    name: "Movement & Position",
    category: "combat",
    description: "On your turn, you can move a distance up to your speed.",
    lists: [
      {
        title: "Types of Movement",
        items: [
          "Walking: Normal movement speed",
          "Jumping: High jump = 3 + Str modifier (feet), Long jump = Str score (feet)",
          "Climbing: Costs 2 feet of movement for each foot climbed",
          "Swimming: Costs 2 feet of movement for each foot swum",
          "Crawling: Costs 2 feet of movement for each foot crawled",
          "Difficult Terrain: Costs 2 feet of movement for each foot moved"
        ]
      }
    ]
  },
  {
    id: "vision-light",
    name: "Vision & Light",
    category: "environment",
    description: "The most fundamental tasks of adventuring—noticing danger, finding hidden objects, hitting an enemy in combat, and targeting a spell, to name just a few—rely heavily on a character's ability to see.",
    table: {
      headers: ["Light Level", "Effect"],
      rows: [
        ["Bright Light", "Normal vision"],
        ["Dim Light", "Disadvantage on Wisdom (Perception) checks that rely on sight; creates a lightly obscured area"],
        ["Darkness", "Effectively imposes the blinded condition; creates a heavily obscured area"]
      ]
    },
    lists: [
      {
        title: "Special Vision Types",
        items: [
          "Darkvision: Can see in darkness as if it were dim light, up to a specific range",
          "Blindsight: Perceive surroundings without relying on sight, within a specific radius",
          "Truesight: Can see in darkness, invisible creatures and objects, into the Ethereal Plane, and through illusions"
        ]
      }
    ]
  },
  {
    id: "death-saves",
    name: "Death Saving Throws",
    category: "combat",
    description: "When you start your turn with 0 hit points, you must make a death saving throw.",
    lists: [
      {
        title: "Rules",
        items: [
          "Roll a d20 with no modifiers",
          "10 or higher is a success, 9 or lower is a failure",
          "3 successes: You become stable",
          "3 failures: You die",
          "Natural 20: You regain 1 hit point",
          "Natural 1: Counts as two failures",
          "Taking damage while at 0 hit points causes one death save failure",
          "Taking a critical hit while at 0 hit points causes two death save failures"
        ]
      }
    ]
  },
  {
    id: "cover",
    name: "Cover",
    category: "environment",
    description: "Walls, trees, creatures, and other obstacles can provide cover during combat, making a target more difficult to harm.",
    table: {
      headers: ["Cover Type", "Effect"],
      rows: [
        ["Half Cover", "+2 bonus to AC and Dexterity saving throws"],
        ["Three-Quarters Cover", "+5 bonus to AC and Dexterity saving throws"],
        ["Total Cover", "Can't be targeted directly by attacks or spells"]
      ]
    }
  },
  {
    id: "spellcasting",
    name: "Spellcasting Basics",
    category: "magic",
    description: "Spellcasting requires components (verbal, somatic, material), concentration for certain spells, and a spellcasting focus for some casters.",
    lists: [
      {
        title: "Components",
        items: [
          "Verbal (V): Must be able to speak",
          "Somatic (S): Must have at least one hand free",
          "Material (M): Must have specific materials or a spellcasting focus"
        ]
      },
      {
        title: "Concentration",
        items: [
          "Can only concentrate on one spell at a time",
          "Concentration ends if you cast another concentration spell",
          "When taking damage, make a Constitution saving throw (DC = 10 or half the damage taken, whichever is higher)",
          "Being incapacitated or killed ends concentration"
        ]
      }
    ]
  },
  {
    id: "hiding",
    name: "Hiding",
    category: "exploration",
    description: "When you try to hide, make a Dexterity (Stealth) check. The result is contested by the Wisdom (Perception) check of any creature actively searching for you.",
    lists: [
      {
        title: "Rules",
        items: [
          "You can't hide from a creature that can see you clearly",
          "You must have cover or be heavily obscured to attempt to hide",
          "Making noise (such as shouting a warning or knocking over a vase) gives away your position",
          "In combat, most creatures stay alert for signs of danger all around"
        ]
      }
    ]
  },
  {
    id: "inspiration",
    name: "Inspiration",
    category: "core",
    description: "Inspiration is a rule the DM can use to reward roleplay and encourage certain behaviors.",
    lists: [
      {
        title: "Rules",
        items: [
          "A character can have inspiration or not; they can't stockpile multiple 'inspirations'",
          "Given by the DM for good roleplaying, heroic actions, or following character ideals",
          "You can spend inspiration to gain advantage on an attack roll, saving throw, or ability check",
          "You can also give your inspiration to another player",
          "If you have inspiration, you either use it or lose it—you can't keep it between sessions"
        ]
      }
    ]
  },
  {
    id: "object-ac-hp",
    name: "Object AC & Hit Points",
    category: "environment",
    description: "When characters need to break an object, use these guidelines for AC and HP.",
    table: {
      headers: ["Size", "AC", "HP (Fragile)", "HP (Resilient)"],
      rows: [
        ["Tiny (bottle, lock)", "13", "2 (1d4)", "5 (2d4)"],
        ["Small (chest, lute)", "11", "3 (1d6)", "10 (3d6)"],
        ["Medium (barrel, chandelier)", "10", "4 (1d8)", "18 (4d8)"],
        ["Large (cart, window)", "10", "5 (1d10)", "27 (5d10)"],
        ["Huge (statue, large wagon)", "10", "8 (2d8)", "36 (8d8)"],
        ["Gargantuan (siege engine)", "10", "20 (4d10)", "81 (18d8)"]
      ]
    }
  }
];

// Combat data organized by section
export const combatData = {
  actions: [
    {
      id: "attack",
      name: "Attack",
      description: "Make a melee or ranged attack against a target.",
      details: [
        "Attack Roll: d20 + ability modifier + proficiency bonus",
        "Melee Attack: Strength modifier (finesse weapons can use Dexterity)",
        "Ranged Attack: Dexterity modifier",
        "Two-Weapon Fighting: Bonus action for second attack with light weapon, no ability modifier to damage unless it's negative"
      ]
    },
    {
      id: "cast-spell",
      name: "Cast a Spell",
      description: "Cast a spell with a casting time of 1 action.",
      details: [
        "Check each spell for specific actions required",
        "May require concentration",
        "Spell Attack Roll: d20 + spellcasting ability modifier + proficiency bonus",
        "Spell Save DC: 8 + spellcasting ability modifier + proficiency bonus"
      ]
    },
    {
      id: "dash",
      name: "Dash",
      description: "Gain extra movement equal to your speed for the current turn.",
      example: "With a speed of 30 feet, Dash lets you move up to 60 feet on your turn."
    },
    {
      id: "disengage",
      name: "Disengage",
      description: "Your movement doesn't provoke opportunity attacks for the rest of the turn."
    },
    {
      id: "dodge",
      name: "Dodge",
      description: "Focus on avoiding attacks.",
      details: [
        "Attack rolls against you have disadvantage if you can see the attacker",
        "You make Dexterity saving throws with advantage",
        "You lose this benefit if you're incapacitated or if your speed drops to 0"
      ]
    },
    {
      id: "help",
      name: "Help",
      description: "You can help another creature with a task or in attacking a foe.",
      details: [
        "The creature you help gains advantage on its next ability check for the task you're helping with",
        "Alternatively, the next attack roll against a creature within 5 feet of you has advantage if made before your next turn"
      ]
    },
    {
      id: "hide",
      name: "Hide",
      description: "Attempt to hide from enemies.",
      details: [
        "Make a Dexterity (Stealth) check",
        "You must have cover or be heavily obscured",
        "You can't hide from a creature that can see you",
        "You reveal your position if you make noise or attack"
      ]
    },
    {
      id: "ready",
      name: "Ready",
      description: "Prepare to act later in response to a specific trigger.",
      details: [
        "Decide what perceivable circumstance will trigger your reaction",
        "Choose the action or movement you will take in response",
        "Readied spells require concentration and use your spell slot even if not cast"
      ]
    },
    {
      id: "search",
      name: "Search",
      description: "Devote your attention to finding something.",
      details: [
        "Make a Wisdom (Perception) check to spot hidden creatures or objects",
        "Make an Intelligence (Investigation) check to uncover clues and make deductions"
      ]
    },
    {
      id: "use-object",
      name: "Use an Object",
      description: "Interact with a second object on your turn (you can interact with one object for free).",
      examples: "Drink a potion, throw a lever, draw a second weapon"
    }
  ],
  bonusActions: [
    {
      id: "offhand-attack",
      name: "Two-Weapon Fighting",
      description: "When you take the Attack action and attack with a light melee weapon, you can use a bonus action to attack with a different light melee weapon in your other hand.",
      details: [
        "You don't add your ability modifier to the damage (unless it's negative)",
        "Both weapons must have the light property"
      ]
    },
    {
      id: "cast-bonus-spell",
      name: "Cast a Bonus Action Spell",
      description: "Cast a spell with a casting time of 1 bonus action.",
      details: [
        "If you cast a spell as a bonus action, you can't cast another spell during the same turn, except for a cantrip with a casting time of 1 action"
      ]
    }
  ],
  reactions: [
    {
      id: "opportunity-attack",
      name: "Opportunity Attack",
      description: "Make a melee attack against a creature that moves out of your reach.",
      details: [
        "Triggered when a hostile creature you can see moves out of your reach",
        "The attack uses your reaction",
        "Moving away using Disengage prevents opportunity attacks"
      ]
    },
    {
      id: "readied-action",
      name: "Readied Action",
      description: "Perform a readied action in response to a trigger.",
      details: [
        "Must have used the Ready action on your turn",
        "Occurs when the specified trigger happens",
        "Uses your reaction"
      ]
    },
    {
      id: "shield-spell",
      name: "Cast Shield (or similar spell)",
      description: "Some spells, like Shield, can be cast as a reaction."
    }
  ],
  environment: [
    {
      id: "difficult-terrain",
      name: "Difficult Terrain",
      description: "Each foot of movement in difficult terrain costs 2 feet of speed.",
      details: [
        "Examples: Rubble, ice, mud, steep stairs, snow, shallow water"
      ]
    },
    {
      id: "obscured-areas",
      name: "Obscured Areas",
      description: "Areas can be lightly or heavily obscured, affecting vision.",
      details: [
        "Lightly Obscured: Dim light, patchy fog, moderate foliage; disadvantage on Perception checks that rely on sight",
        "Heavily Obscured: Darkness, opaque fog, dense foliage; effectively causes the blinded condition"
      ]
    },
    {
      id: "falling",
      name: "Falling",
      description: "A fall from a great height is one of the most common hazards.",
      details: [
        "Take 1d6 bludgeoning damage for every 10 feet fallen (max 20d6)",
        "Land prone unless damage is avoided"
      ]
    }
  ]
};

// Items data
export const itemsData = [
  // Weapons
  {
    id: "simple-melee-weapons",
    name: "Simple Melee Weapons",
    category: "weapons",
    type: "Simple Melee",
    items: [
      { name: "Club", cost: "1 sp", damage: "1d4 bludgeoning", weight: "2 lb.", properties: "Light" },
      { name: "Dagger", cost: "2 gp", damage: "1d4 piercing", weight: "1 lb.", properties: "Finesse, light, thrown (20/60)" },
      { name: "Greatclub", cost: "2 sp", damage: "1d8 bludgeoning", weight: "10 lb.", properties: "Two-handed" },
      { name: "Handaxe", cost: "5 gp", damage: "1d6 slashing", weight: "2 lb.", properties: "Light, thrown (20/60)" },
      { name: "Javelin", cost: "5 sp", damage: "1d6 piercing", weight: "2 lb.", properties: "Thrown (30/120)" },
      { name: "Light hammer", cost: "2 gp", damage: "1d4 bludgeoning", weight: "2 lb.", properties: "Light, thrown (20/60)" },
      { name: "Mace", cost: "5 gp", damage: "1d6 bludgeoning", weight: "4 lb.", properties: "" },
      { name: "Quarterstaff", cost: "2 sp", damage: "1d6 bludgeoning", weight: "4 lb.", properties: "Versatile (1d8)" },
      { name: "Sickle", cost: "1 gp", damage: "1d4 slashing", weight: "2 lb.", properties: "Light" },
      { name: "Spear", cost: "1 gp", damage: "1d6 piercing", weight: "3 lb.", properties: "Thrown (20/60), versatile (1d8)" }
    ]
  },
  {
    id: "simple-ranged-weapons",
    name: "Simple Ranged Weapons",
    category: "weapons",
    type: "Simple Ranged",
    items: [
      { name: "Crossbow, light", cost: "25 gp", damage: "1d8 piercing", weight: "5 lb.", properties: "Ammunition (80/320), loading, two-handed" },
      { name: "Dart", cost: "5 cp", damage: "1d4 piercing", weight: "1/4 lb.", properties: "Finesse, thrown (20/60)" },
      { name: "Shortbow", cost: "25 gp", damage: "1d6 piercing", weight: "2 lb.", properties: "Ammunition (80/320), two-handed" },
      { name: "Sling", cost: "1 sp", damage: "1d4 bludgeoning", weight: "", properties: "Ammunition (30/120)" }
    ]
  },
  {
    id: "martial-melee-weapons",
    name: "Martial Melee Weapons",
    category: "weapons",
    type: "Martial Melee",
    items: [
      { name: "Battleaxe", cost: "10 gp", damage: "1d8 slashing", weight: "4 lb.", properties: "Versatile (1d10)" },
      { name: "Flail", cost: "10 gp", damage: "1d8 bludgeoning", weight: "2 lb.", properties: "" },
      { name: "Glaive", cost: "20 gp", damage: "1d10 slashing", weight: "6 lb.", properties: "Heavy, reach, two-handed" },
      { name: "Greataxe", cost: "30 gp", damage: "1d12 slashing", weight: "7 lb.", properties: "Heavy, two-handed" },
      { name: "Greatsword", cost: "50 gp", damage: "2d6 slashing", weight: "6 lb.", properties: "Heavy, two-handed" },
      { name: "Longsword", cost: "15 gp", damage: "1d8 slashing", weight: "3 lb.", properties: "Versatile (1d10)" },
      { name: "Rapier", cost: "25 gp", damage: "1d8 piercing", weight: "2 lb.", properties: "Finesse" },
      { name: "Scimitar", cost: "25 gp", damage: "1d6 slashing", weight: "3 lb.", properties: "Finesse, light" },
      { name: "Shortsword", cost: "10 gp", damage: "1d6 piercing", weight: "2 lb.", properties: "Finesse, light" }
    ]
  },
  {
    id: "martial-ranged-weapons",
    name: "Martial Ranged Weapons",
    category: "weapons",
    type: "Martial Ranged",
    items: [
      { name: "Crossbow, hand", cost: "75 gp", damage: "1d6 piercing", weight: "3 lb.", properties: "Ammunition (30/120), light, loading" },
      { name: "Crossbow, heavy", cost: "50 gp", damage: "1d10 piercing", weight: "18 lb.", properties: "Ammunition (100/400), heavy, loading, two-handed" },
      { name: "Longbow", cost: "50 gp", damage: "1d8 piercing", weight: "2 lb.", properties: "Ammunition (150/600), heavy, two-handed" }
    ]
  },
  // Armor
  {
    id: "light-armor",
    name: "Light Armor",
    category: "armor",
    type: "Light Armor",
    items: [
      { name: "Padded", cost: "5 gp", ac: "11 + Dex modifier", strength: "", stealth: "Disadvantage", weight: "8 lb." },
      { name: "Leather", cost: "10 gp", ac: "11 + Dex modifier", strength: "", stealth: "", weight: "10 lb." },
      { name: "Studded leather", cost: "45 gp", ac: "12 + Dex modifier", strength: "", stealth: "", weight: "13 lb." }
    ]
  },
  {
    id: "medium-armor",
    name: "Medium Armor",
    category: "armor",
    type: "Medium Armor",
    items: [
      { name: "Hide", cost: "10 gp", ac: "12 + Dex modifier (max 2)", strength: "", stealth: "", weight: "12 lb." },
      { name: "Chain shirt", cost: "50 gp", ac: "13 + Dex modifier (max 2)", strength: "", stealth: "", weight: "20 lb." },
      { name: "Scale mail", cost: "50 gp", ac: "14 + Dex modifier (max 2)", strength: "", stealth: "Disadvantage", weight: "45 lb." },
      { name: "Breastplate", cost: "400 gp", ac: "14 + Dex modifier (max 2)", strength: "", stealth: "", weight: "20 lb." },
      { name: "Half plate", cost: "750 gp", ac: "15 + Dex modifier (max 2)", strength: "", stealth: "Disadvantage", weight: "40 lb." }
    ]
  },
  {
    id: "heavy-armor",
    name: "Heavy Armor",
    category: "armor",
    type: "Heavy Armor",
    items: [
      { name: "Ring mail", cost: "30 gp", ac: "14", strength: "", stealth: "Disadvantage", weight: "40 lb." },
      { name: "Chain mail", cost: "75 gp", ac: "16", strength: "Str 13", stealth: "Disadvantage", weight: "55 lb." },
      { name: "Splint", cost: "200 gp", ac: "17", strength: "Str 15", stealth: "Disadvantage", weight: "60 lb." },
      { name: "Plate", cost: "1,500 gp", ac: "18", strength: "Str 15", stealth: "Disadvantage", weight: "65 lb." }
    ]
  },
  {
    id: "shields",
    name: "Shields",
    category: "armor",
    type: "Shields",
    items: [
      { name: "Shield", cost: "10 gp", ac: "+2", strength: "", stealth: "", weight: "6 lb." }
    ]
  },
  // Adventuring Gear
  {
    id: "adventuring-gear",
    name: "Adventuring Gear",
    category: "gear",
    type: "Adventuring Gear",
    items: [
      { name: "Backpack", cost: "2 gp", weight: "5 lb.", description: "Holds up to 1 cubic foot/30 pounds of gear" },
      { name: "Bedroll", cost: "1 gp", weight: "7 lb." },
      { name: "Crowbar", cost: "2 gp", weight: "5 lb.", description: "Advantage on Strength checks where leverage can be applied" },
      { name: "Grappling hook", cost: "2 gp", weight: "4 lb." },
      { name: "Hammer", cost: "1 gp", weight: "3 lb." },
      { name: "Healer's kit", cost: "5 gp", weight: "3 lb.", description: "10 uses. Stabilize a creature at 0 hit points without a Medicine check" },
      { name: "Lantern, hooded", cost: "5 gp", weight: "2 lb.", description: "Sheds bright light in a 30-foot radius and dim light for an additional 30 feet" },
      { name: "Mess kit", cost: "2 sp", weight: "1 lb." },
      { name: "Piton", cost: "5 cp", weight: "1/4 lb." },
      { name: "Potion of healing", cost: "50 gp", weight: "1/2 lb.", description: "Regains 2d4+2 hit points when drunk" },
      { name: "Rations (1 day)", cost: "5 sp", weight: "2 lb." },
      { name: "Rope, hempen (50 feet)", cost: "1 gp", weight: "10 lb." },
      { name: "Rope, silk (50 feet)", cost: "10 gp", weight: "5 lb." },
      { name: "Torch", cost: "1 cp", weight: "1 lb.", description: "Sheds bright light in a 20-foot radius and dim light for an additional 20 feet" },
      { name: "Waterskin", cost: "2 sp", weight: "5 lb. (full)" }
    ]
  },
  // Tools
  {
    id: "tools",
    name: "Tools",
    category: "gear",
    type: "Tools",
    items: [
      { name: "Alchemist's supplies", cost: "50 gp", weight: "8 lb." },
      { name: "Brewer's supplies", cost: "20 gp", weight: "9 lb." },
      { name: "Calligrapher's supplies", cost: "10 gp", weight: "5 lb." },
      { name: "Carpenter's tools", cost: "8 gp", weight: "6 lb." },
      { name: "Cartographer's tools", cost: "15 gp", weight: "6 lb." },
      { name: "Cobbler's tools", cost: "5 gp", weight: "5 lb." },
      { name: "Cook's utensils", cost: "1 gp", weight: "8 lb." },
      { name: "Disguise kit", cost: "25 gp", weight: "3 lb." },
      { name: "Forgery kit", cost: "15 gp", weight: "5 lb." },
      { name: "Herbalism kit", cost: "5 gp", weight: "3 lb." },
      { name: "Leatherworker's tools", cost: "5 gp", weight: "5 lb." },
      { name: "Mason's tools", cost: "10 gp", weight: "8 lb." },
      { name: "Smith's tools", cost: "20 gp", weight: "8 lb." },
      { name: "Thieves' tools", cost: "25 gp", weight: "1 lb." }
    ]
  },
  // Potions and Magic Items
  {
    id: "potions",
    name: "Healing Potions",
    category: "magic",
    type: "Potions",
    items: [
      { 
        name: "Potion of Healing", 
        cost: "50 gp", 
        rarity: "Common",
        description: "You regain 2d4+2 hit points when you drink this potion."
      },
      { 
        name: "Potion of Greater Healing", 
        cost: "200 gp", 
        rarity: "Uncommon",
        description: "You regain 4d4+4 hit points when you drink this potion."
      },
      { 
        name: "Potion of Superior Healing", 
        cost: "2,000 gp", 
        rarity: "Rare",
        description: "You regain 8d4+8 hit points when you drink this potion."
      },
      { 
        name: "Potion of Supreme Healing", 
        cost: "20,000 gp", 
        rarity: "Very Rare",
        description: "You regain 10d4+20 hit points when you drink this potion."
      }
    ]
  },
  // Magical Scrolls
  {
    id: "scrolls",
    name: "Spell Scrolls",
    category: "magic",
    type: "Scrolls",
    items: [
      { 
        name: "Spell Scroll (Cantrip)", 
        cost: "25 gp", 
        rarity: "Common",
        description: "A spell scroll holds a single spell of cantrip level, written in a mystical cipher."
      },
      { 
        name: "Spell Scroll (1st level)", 
        cost: "50 gp", 
        rarity: "Common",
        description: "A spell scroll holds a single spell of 1st level, written in a mystical cipher."
      },
      { 
        name: "Spell Scroll (2nd level)", 
        cost: "150 gp", 
        rarity: "Uncommon",
        description: "A spell scroll holds a single spell of 2nd level, written in a mystical cipher."
      },
      { 
        name: "Spell Scroll (3rd level)", 
        cost: "300 gp", 
        rarity: "Uncommon",
        description: "A spell scroll holds a single spell of 3rd level, written in a mystical cipher."
      },
      { 
        name: "Spell Scroll (4th level)", 
        cost: "500 gp", 
        rarity: "Rare",
        description: "A spell scroll holds a single spell of 4th level, written in a mystical cipher."
      },
      { 
        name: "Spell Scroll (5th level)", 
        cost: "1,000 gp", 
        rarity: "Rare",
        description: "A spell scroll holds a single spell of 5th level, written in a mystical cipher."
      }
    ]
  }
];

// NPC types and traits
export const npcData = {
  types: [
    "Acolyte", "Bandit", "Bard", "Blacksmith", "Captain", "Commoner", "Cultist", 
    "Farmer", "Guard", "Innkeeper", "Knight", "Mage", "Merchant", "Noble", 
    "Priest", "Scout", "Spy", "Thug", "Veteran", "Wizard"
  ],
  personalities: [
    "Abrasive", "Accommodating", "Adventurous", "Anxious", "Arrogant", "Brave", "Cautious",
    "Charming", "Cheerful", "Cold", "Curious", "Cynical", "Determined", "Dishonest",
    "Eccentric", "Friendly", "Generous", "Gruff", "Honorable", "Impulsive", "Introverted",
    "Jovial", "Kind", "Lazy", "Loyal", "Melancholic", "Nervous", "Optimistic",
    "Paranoid", "Patient", "Pessimistic", "Reckless", "Reliable", "Reserved", "Ruthless",
    "Scholarly", "Selfish", "Serious", "Suspicious", "Talkative", "Trusting", "Vain", "Wise"
  ],
  motivations: [
    "Accumulating wealth", "Atoning for past sins", "Avoiding responsibility", 
    "Building a legacy", "Caring for family", "Discovering ancient secrets", 
    "Earning fame/recognition", "Escaping the past", "Exploring the world",
    "Finding a lost love", "Getting revenge", "Hiding from enemies",
    "Maintaining tradition", "Making powerful allies", "Overthrowing authority",
    "Protecting the innocent", "Rising to power", "Seeking knowledge",
    "Serving a deity", "Surviving at all costs"
  ],
  quirks: [
    "Always speaks in the third person", "Believes they can talk to animals",
    "Carries a lucky charm everywhere", "Collects unusual trinkets", 
    "Constantly chews on something", "Easily startled by loud noises",
    "Flinches when making eye contact", "Forgets people's names immediately",
    "Has an imaginary friend", "Hums constantly when nervous",
    "Keeps checking over their shoulder", "Laughs at inappropriate times",
    "Makes up elaborate lies for no reason", "Never sits with back to a door",
    "Only eats certain colored foods", "Quotes sayings that don't exist",
    "Refers to inanimate objects by name", "Speaks in overly flowery language",
    "Tells the same story to everyone", "Thinks they're much taller than they are"
  ]
};

// Encounter data
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

// Dice roller data
export const diceTypes = [
  { value: 'd4', faces: 4 },
  { value: 'd6', faces: 6 },
  { value: 'd8', faces: 8 },
  { value: 'd10', faces: 10 },
  { value: 'd12', faces: 12 },
  { value: 'd20', faces: 20 },
  { value: 'd100', faces: 100 }
];

// Common dice roll presets
export const dicePresets = [
  { name: "Attack Roll", dice: "1d20" },
  { name: "Damage (Dagger)", dice: "1d4" },
  { name: "Damage (Longsword)", dice: "1d8" },
  { name: "Damage (Greatsword)", dice: "2d6" },
  { name: "Sneak Attack (3rd level)", dice: "2d6" },
  { name: "Fireball (5th level)", dice: "10d6" },
  { name: "Healing Potion", dice: "2d4+2" },
  { name: "Death Save", dice: "1d20" }
];
