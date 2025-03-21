// src/data/dmscreen/weapons.js
// Weapons data including simple and martial weapons

export const weaponsData = [
  {
    id: "simple-melee-weapons",
    name: "Simple Melee Weapons",
    category: "weapons",
    type: "Simple Melee",
    items: [
      { name: "Club", cost: "1 sp", damage: "1d4 bludgeoning", weight: "2 lb.", properties: "Light" },
      { name: "Dagger", cost: "2 gp", damage: "1d4 piercing", weight: "1 lb.", properties: "Finesse, light, thrown (20/60)" },
      // Additional simple melee weapons will be added here
    ]
  },
  {
    id: "simple-ranged-weapons",
    name: "Simple Ranged Weapons",
    category: "weapons",
    type: "Simple Ranged",
    items: [
      { name: "Shortbow", cost: "25 gp", damage: "1d6 piercing", weight: "2 lb.", properties: "Ammunition (80/320), two-handed" },
      // Additional simple ranged weapons will be added here
    ]
  },
  {
    id: "martial-melee-weapons",
    name: "Martial Melee Weapons",
    category: "weapons",
    type: "Martial Melee",
    items: [
      { name: "Battleaxe", cost: "10 gp", damage: "1d8 slashing", weight: "4 lb.", properties: "Versatile (1d10)" },
      // Additional martial melee weapons will be added here
    ]
  },
  {
    id: "martial-ranged-weapons",
    name: "Martial Ranged Weapons",
    category: "weapons",
    type: "Martial Ranged",
    items: [
      { name: "Longbow", cost: "50 gp", damage: "1d8 piercing", weight: "2 lb.", properties: "Ammunition (150/600), heavy, two-handed" },
      // Additional martial ranged weapons will be added here
    ]
  },
  // Magic weapons will be in the magicItems.js file
];

// Weapon properties and explanations
export const weaponProperties = [
  { name: "Ammunition", description: "You can use a weapon that has the ammunition property to make a ranged attack only if you have ammunition to fire from the weapon." },
  { name: "Finesse", description: "When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls." },
  { name: "Heavy", description: "Small creatures have disadvantage on attack rolls with heavy weapons." },
  { name: "Light", description: "A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons." },
  { name: "Loading", description: "Because of the time required to load this weapon, you can fire only one piece of ammunition from it when you use an action, bonus action, or reaction to fire it." },
  { name: "Range", description: "A weapon that can be used to make a ranged attack has a range shown in parentheses. The range lists two numbers. The first is the weapon's normal range in feet, and the second indicates the weapon's long range." },
  { name: "Reach", description: "This weapon adds 5 feet to your reach when you attack with it." },
  { name: "Special", description: "A weapon with the special property has unusual rules governing its use, explained in the weapon's description." },
  { name: "Thrown", description: "If a weapon has the thrown property, you can throw the weapon to make a ranged attack." },
  { name: "Two-Handed", description: "This weapon requires two hands to use." },
  { name: "Versatile", description: "This weapon can be used with one or two hands. A damage value in parentheses appears with the property—the damage when the weapon is used with two hands to make a melee attack." }
];
