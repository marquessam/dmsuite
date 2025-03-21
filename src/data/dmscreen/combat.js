// src/data/dmscreen/combat.js
// Combat rules, actions, and mechanics

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
    // Additional actions will be added here
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
    },
    // Additional bonus actions will be added here
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
    // Additional reactions will be added here
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
    },
    // Additional environment rules will be added here
  ]
};

// Combat flow steps
export const combatFlow = [
  { id: 'initiative', name: 'Roll Initiative', description: 'Each participant makes a Dexterity check to determine turn order.' },
  { id: 'start', name: 'Start of Combat', description: 'Decide surprise. Determine positions. Roll initiative. Establish turn order.' },
  { id: 'turn', name: 'On Your Turn', description: 'Move, take one action, and possible bonus action in any order. Can split up movement.' },
  { id: 'action', name: 'Take Action', description: 'Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, Use Object, etc.' },
  { id: 'reaction', name: 'Reactions', description: 'Special actions triggered by specific circumstances, like opportunity attacks.' },
  { id: 'end', name: 'End of Turn', description: 'Make saving throws for ongoing effects. Some effects end at the end of turn.' }
];

// Cover rules
export const coverRules = [
  { type: "Half Cover", bonus: "+2 bonus to AC and Dexterity saving throws", examples: "Low wall, furniture, creatures" },
  { type: "Three-Quarters Cover", bonus: "+5 bonus to AC and Dexterity saving throws", examples: "Portcullis, arrow slit" },
  { type: "Total Cover", bonus: "Can't be targeted directly by attacks or spells", examples: "Completely concealed by an obstacle" }
];
