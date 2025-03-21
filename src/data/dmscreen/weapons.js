// src/data/dmscreen/weapons.js
// Weapons data including simple and martial weapons

export const weaponsData = [
  {
    id: "simple-melee-weapons",
    name: "Simple Melee Weapons",
    category: "weapons",
    type: "Simple Melee",
   "items": [
    { "name": "Club", "cost": "1 sp", "damage": "1d4 bludgeoning", "weight": "2 lb.", "properties": "Light" },
    { "name": "Dagger", "cost": "2 gp", "damage": "1d4 piercing", "weight": "1 lb.", "properties": "Finesse, light, thrown (20/60)" },
    { "name": "Greatclub", "cost": "2 sp", "damage": "1d8 bludgeoning", "weight": "10 lb.", "properties": "Two-handed" },
    { "name": "Handaxe", "cost": "5 gp", "damage": "1d6 slashing", "weight": "2 lb.", "properties": "Light, thrown (20/60)" },
    { "name": "Javelin", "cost": "5 sp", "damage": "1d6 piercing", "weight": "2 lb.", "properties": "Thrown (30/120)" },
    { "name": "Light Hammer", "cost": "2 gp", "damage": "1d4 bludgeoning", "weight": "2 lb.", "properties": "Light, thrown (20/60)" },
    { "name": "Mace", "cost": "5 gp", "damage": "1d6 bludgeoning", "weight": "4 lb.", "properties": "" },
    { "name": "Quarterstaff", "cost": "2 sp", "damage": "1d6 bludgeoning", "weight": "4 lb.", "properties": "Versatile (1d8)" },
    { "name": "Sickle", "cost": "1 gp", "damage": "1d4 slashing", "weight": "2 lb.", "properties": "Light" },
    { "name": "Spear", "cost": "1 gp", "damage": "1d6 piercing", "weight": "3 lb.", "properties": "Thrown (20/60), versatile (1d8)" }
  ]
  },
  {
    id: "simple-ranged-weapons",
    name: "Simple Ranged Weapons",
    category: "weapons",
    type: "Simple Ranged",
     "items": [
    { "name": "Light Crossbow", "cost": "25 gp", "damage": "1d8 piercing", "weight": "5 lb.", "properties": "Ammunition (80/320), loading, two-handed" },
    { "name": "Dart", "cost": "5 cp", "damage": "1d4 piercing", "weight": "1/4 lb.", "properties": "Finesse, thrown (20/60)" },
    { "name": "Shortbow", "cost": "25 gp", "damage": "1d6 piercing", "weight": "2 lb.", "properties": "Ammunition (80/320), two-handed" },
    { "name": "Sling", "cost": "1 sp", "damage": "1d4 bludgeoning", "weight": "-", "properties": "Ammunition (30/120)" }
  ]
  },
  {
    id: "martial-melee-weapons",
    name: "Martial Melee Weapons",
    category: "weapons",
    type: "Martial Melee",
    "items": [
    { "name": "Battleaxe", "cost": "10 gp", "damage": "1d8 slashing", "weight": "4 lb.", "properties": "Versatile (1d10)" },
    { "name": "Flail", "cost": "10 gp", "damage": "1d8 bludgeoning", "weight": "2 lb.", "properties": "" },
    { "name": "Glaive", "cost": "20 gp", "damage": "1d10 slashing", "weight": "6 lb.", "properties": "Heavy, reach, two-handed" },
    { "name": "Greataxe", "cost": "30 gp", "damage": "1d12 slashing", "weight": "7 lb.", "properties": "Heavy, two-handed" },
    { "name": "Greatsword", "cost": "50 gp", "damage": "2d6 slashing", "weight": "6 lb.", "properties": "Heavy, two-handed" },
    { "name": "Halberd", "cost": "20 gp", "damage": "1d10 slashing", "weight": "6 lb.", "properties": "Heavy, reach, two-handed" },
    { "name": "Lance", "cost": "10 gp", "damage": "1d12 piercing", "weight": "6 lb.", "properties": "Reach, special" },
    { "name": "Longsword", "cost": "15 gp", "damage": "1d8 slashing", "weight": "3 lb.", "properties": "Versatile (1d10)" },
    { "name": "Maul", "cost": "10 gp", "damage": "2d6 bludgeoning", "weight": "10 lb.", "properties": "Heavy, two-handed" },
    { "name": "Morningstar", "cost": "15 gp", "damage": "1d8 piercing", "weight": "4 lb.", "properties": "" },
    { "name": "Pike", "cost": "5 gp", "damage": "1d10 piercing", "weight": "18 lb.", "properties": "Heavy, reach, two-handed" },
    { "name": "Rapier", "cost": "25 gp", "damage": "1d8 piercing", "weight": "2 lb.", "properties": "Finesse" },
    { "name": "Scimitar", "cost": "25 gp", "damage": "1d6 slashing", "weight": "3 lb.", "properties": "Finesse, light" },
    { "name": "Shortsword", "cost": "10 gp", "damage": "1d6 piercing", "weight": "2 lb.", "properties": "Finesse, light" },
    { "name": "Trident", "cost": "5 gp", "damage": "1d6 piercing", "weight": "4 lb.", "properties": "Thrown (20/60), versatile (1d8)" },
    { "name": "War Pick", "cost": "5 gp", "damage": "1d8 piercing", "weight": "2 lb.", "properties": "" },
    { "name": "Warhammer", "cost": "15 gp", "damage": "1d8 bludgeoning", "weight": "2 lb.", "properties": "Versatile (1d10)" },
    { "name": "Whip", "cost": "2 gp", "damage": "1d4 slashing", "weight": "3 lb.", "properties": "Finesse, reach" }
  ]
  },
  {
    id: "martial-ranged-weapons",
    name: "Martial Ranged Weapons",
    category: "weapons",
    type: "Martial Ranged",
    "items": [
    { "name": "Longbow", "cost": "50 gp", "damage": "1d8 piercing", "weight": "2 lb.", "properties": "Ammunition (150/600), heavy, two-handed" },
    { "name": "Heavy Crossbow", "cost": "50 gp", "damage": "1d10 piercing", "weight": "18 lb.", "properties": "Ammunition (100/400), heavy, loading, two-handed" },
    { "name": "Rifle", "cost": "500 gp", "damage": "1d10 piercing", "weight": "8 lb.", "properties": "Ammunition (200/800), heavy, two-handed" }
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
