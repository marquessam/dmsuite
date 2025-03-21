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
  // Additional rules will be added here
];
