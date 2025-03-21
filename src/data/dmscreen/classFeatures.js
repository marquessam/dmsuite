// src/data/dmscreen/classFeatures.js
// Class features organized by class and level

export const classFeatures = {
  // Barbarian class features
  barbarian: {
    classFeatures: [
      {
        name: "Rage",
        level: 1,
        description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain several benefits if you aren't wearing heavy armor."
      },
      {
        name: "Unarmored Defense",
        level: 1,
        description: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier."
      },
      // Additional barbarian features will be added here
    ],
    table: {
      header: ["Level", "Proficiency Bonus", "Features", "Rages", "Rage Damage"],
      rows: [
        ["1st", "+2", "Rage, Unarmored Defense", "2", "+2"],
        ["2nd", "+2", "Reckless Attack, Danger Sense", "2", "+2"],
        // Additional level rows will be added here
      ]
    }
  },
  
  // Bard class features
  bard: {
    classFeatures: [
      {
        name: "Bardic Inspiration",
        level: 1,
        description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you."
      },
      // Additional bard features will be added here
    ],
    table: {
      header: ["Level", "Proficiency Bonus", "Features", "Cantrips Known", "Spells Known", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"],
      rows: [
        ["1st", "+2", "Bardic Inspiration (d6), Spellcasting", "2", "4", "2", "—", "—", "—", "—", "—", "—", "—", "—"],
        // Additional level rows will be added here
      ]
    }
  },
  
  // Additional classes will be added here (cleric, druid, fighter, etc.)
};

// Class proficiencies
export const classProficiencies = {
  barbarian: {
    armor: "Light armor, medium armor, shields",
    weapons: "Simple weapons, martial weapons",
    tools: "None",
    savingThrows: "Strength, Constitution",
    skills: "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival"
  },
  bard: {
    armor: "Light armor",
    weapons: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    tools: "Three musical instruments of your choice",
    savingThrows: "Dexterity, Charisma",
    skills: "Choose any three"
  },
  // Additional class proficiencies will be added here
};
