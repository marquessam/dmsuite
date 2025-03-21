// src/data/dmscreen/magicItems.js
// Magic items, potions, scrolls, and other magical equipment

export const magicItemsData = [
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
      // Additional potions will be added here
    ]
  },
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
      // Additional scrolls will be added here
    ]
  },
  {
    id: "wondrous-items",
    name: "Wondrous Items",
    category: "magic",
    type: "Wondrous Items",
    items: [
      {
        name: "Bag of Holding",
        rarity: "Uncommon",
        attunement: false,
        description: "A bag with an interior space considerably larger than its outside dimensions."
      },
      // Additional wondrous items will be added here
    ]
  },
  // Additional magic item categories will be added here
];

// Magic Item Tables for random generation
export const magicItemTables = [
  { 
    id: 'a', 
    name: 'Table A (Minor Items)',
    items: [
      { range: '01-50', description: 'Potion of healing' },
      // Additional items will be added here
    ]
  },
  // Additional tables will be added here
];
