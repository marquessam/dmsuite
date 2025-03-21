// src/data/dmscreen/armor.js
// Armor data including light, medium, and heavy armor

export const armorData = [
  {
    id: "light-armor",
    name: "Light Armor",
    category: "armor",
    type: "Light Armor",
    items: [
      { name: "Padded", cost: "5 gp", ac: "11 + Dex modifier", strength: "", stealth: "Disadvantage", weight: "8 lb." },
      { name: "Leather", cost: "10 gp", ac: "11 + Dex modifier", strength: "", stealth: "", weight: "10 lb." },
      // Additional light armor will be added here
    ]
  },
  {
    id: "medium-armor",
    name: "Medium Armor",
    category: "armor",
    type: "Medium Armor",
    items: [
      { name: "Hide", cost: "10 gp", ac: "12 + Dex modifier (max 2)", strength: "", stealth: "", weight: "12 lb." },
      // Additional medium armor will be added here
    ]
  },
  {
    id: "heavy-armor",
    name: "Heavy Armor",
    category: "armor",
    type: "Heavy Armor",
    items: [
      { name: "Ring mail", cost: "30 gp", ac: "14", strength: "", stealth: "Disadvantage", weight: "40 lb." },
      // Additional heavy armor will be added here
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
  // Magic armor will be in the magicItems.js file
];

// Armor class explanations
export const armorRules = [
  {
    title: "Armor Class (AC)",
    description: "Your Armor Class (AC) represents how well your character avoids being wounded in battle."
  },
  {
    title: "Armor Proficiency",
    description: "Anyone can put on a suit of armor or strap a shield to an arm. Only those proficient in the armor's use know how to wear it effectively, however."
  },
  {
    title: "Stealth Disadvantage",
    description: "If the Armor table shows "Disadvantage" in the Stealth column, the wearer has disadvantage on Dexterity (Stealth) checks."
  },
  {
    title: "Strength Requirement",
    description: "If the Armor table shows a Strength score in the Strength column, the armor reduces the wearer's speed by 10 feet unless the wearer has a Strength score equal to or higher than the listed score."
  }
];
