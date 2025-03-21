// src/data/dmscreen/armor.js
// Armor data including light, medium, and heavy armor

export const armorData = [
  {
     "id": "light-armor",
    "name": "Light Armor",
    "category": "armor",
    "type": "Light Armor",
    "items": [
      { "name": "Padded", "cost": "5 gp", "ac": "11 + Dex modifier", "strength": "", "stealth": "Disadvantage", "weight": "8 lb." },
      { "name": "Leather", "cost": "10 gp", "ac": "11 + Dex modifier", "strength": "", "stealth": "", "weight": "10 lb." },
      { "name": "Studded Leather", "cost": "45 gp", "ac": "12 + Dex modifier", "strength": "", "stealth": "", "weight": "13 lb." }
    ]
  },
  {
    "id": "medium-armor",
    "name": "Medium Armor",
    "category": "armor",
    "type": "Medium Armor",
    "items": [
      { "name": "Hide", "cost": "10 gp", "ac": "12 + Dex modifier (max 2)", "strength": "", "stealth": "", "weight": "12 lb." },
      { "name": "Chain Shirt", "cost": "50 gp", "ac": "13 + Dex modifier (max 2)", "strength": "", "stealth": "", "weight": "20 lb." },
      { "name": "Scale Mail", "cost": "50 gp", "ac": "14 + Dex modifier (max 2)", "strength": "", "stealth": "Disadvantage", "weight": "45 lb." },
      { "name": "Breastplate", "cost": "400 gp", "ac": "14 + Dex modifier (max 2)", "strength": "", "stealth": "", "weight": "20 lb." },
      { "name": "Half Plate", "cost": "750 gp", "ac": "15 + Dex modifier (max 2)", "strength": "", "stealth": "Disadvantage", "weight": "40 lb." }
    ]
  },
  {
    "id": "heavy-armor",
    "name": "Heavy Armor",
    "category": "armor",
    "type": "Heavy Armor",
    "items": [
      { "name": "Ring Mail", "cost": "30 gp", "ac": "14", "strength": "", "stealth": "Disadvantage", "weight": "40 lb." },
      { "name": "Chain Mail", "cost": "75 gp", "ac": "16", "strength": "Str 13", "stealth": "Disadvantage", "weight": "55 lb." },
      { "name": "Splint", "cost": "200 gp", "ac": "17", "strength": "Str 15", "stealth": "Disadvantage", "weight": "60 lb." },
      { "name": "Plate", "cost": "1500 gp", "ac": "18", "strength": "Str 15", "stealth": "Disadvantage", "weight": "65 lb." }
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
    description: "If the Armor table shows \"Disadvantage\" in the Stealth column, the wearer has disadvantage on Dexterity (Stealth) checks."
  },
  {
    title: "Strength Requirement",
    description: "If the Armor table shows a Strength score in the Strength column, the armor reduces the wearer's speed by 10 feet unless the wearer has a Strength score equal to or higher than the listed score."
  }
];
