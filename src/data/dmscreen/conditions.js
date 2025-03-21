// src/data/dmscreen/conditions.js
// Condition effects and rules

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
