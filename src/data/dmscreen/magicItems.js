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
      { 
        name: "Potion of Greater Healing", 
        cost: "150 gp", 
        rarity: "Uncommon",
        description: "You regain 4d4+4 hit points when you drink this potion."
      },
      { 
        name: "Potion of Superior Healing", 
        cost: "500 gp", 
        rarity: "Rare",
        description: "You regain 8d4+8 hit points when you drink this potion."
      },
      { 
        name: "Potion of Supreme Healing", 
        cost: "1,350 gp", 
        rarity: "Very Rare",
        description: "You regain 10d4+20 hit points when you drink this potion."
      },
      {
        name: "Potion of Climbing",
        cost: "50 gp",
        rarity: "Uncommon",
        description: "For 1 hour, you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        name: "Potion of Invisibility",
        cost: "200 gp",
        rarity: "Rare",
        description: "For 1 hour, you become invisible. The effect ends if you attack or cast a spell."
      },
      {
        name: "Potion of Resistance",
        cost: "300 gp",
        rarity: "Uncommon",
        description: "You gain resistance to one type of damage (acid, cold, fire, lightning, or thunder) for 1 hour."
      },
      {
        name: "Potion of Fire Resistance",
        cost: "200 gp",
        rarity: "Uncommon",
        description: "You have resistance to fire damage for 1 hour."
      },
      {
        name: "Potion of Cold Resistance",
        cost: "200 gp",
        rarity: "Uncommon",
        description: "You have resistance to cold damage for 1 hour."
      },
      {
        name: "Potion of Speed",
        cost: "1,000 gp",
        rarity: "Very Rare",
        description: "For 1 minute, you gain the effect of the Haste spell (you can act more quickly)."
      },
      {
        name: "Potion of Heroism",
        cost: "180 gp",
        rarity: "Uncommon",
        description: "For 1 hour, you gain 10 temporary hit points, and you are under the effect of the bless spell."
      },
      {
        name: "Potion of Mind Reading",
        cost: "500 gp",
        rarity: "Rare",
        description: "For 1 hour, you can read the thoughts of others as if you were concentrating on the detect thoughts spell."
      },
      {
        name: "Potion of Gaseous Form",
        cost: "300 gp",
        rarity: "Rare",
        description: "For 1 hour, you can transform into a cloud of mist, as if affected by the gaseous form spell."
      },
      {
        name: "Potion of Water Breathing",
        cost: "200 gp",
        rarity: "Uncommon",
        description: "You can breathe underwater for 1 hour."
      },
      {
        name: "Potion of Vitality",
        cost: "1,000 gp",
        rarity: "Rare",
        description: "You are cured of any exhaustion, and you regain all spent hit dice. This potion also heals 2d6+4 hit points."
      },
      {
        name: "Potion of Longevity",
        cost: "500 gp",
        rarity: "Very Rare",
        description: "When you drink this potion, you reduce your age by 1d6+6 years."
      }
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
      description: "A bag with an interior space considerably larger than its outside dimensions. Can hold up to 500 pounds, but always weighs 15 pounds."
    },
    {
      name: "Cloak of Protection",
      rarity: "Uncommon",
      attunement: true,
      description: "You gain a +1 bonus to AC and saving throws while wearing this cloak."
    },
    {
      name: "Bracers of Defense",
      rarity: "Rare",
      attunement: true,
      description: "While wearing these bracers, if you are not wearing armor or using a shield, you gain a +2 bonus to AC."
    },
    {
      name: "Winged Boots",
      rarity: "Uncommon",
      attunement: true,
      description: "You gain a flying speed equal to your walking speed for up to 4 hours, which replenishes at a rate of 2 hours per long rest."
    },
    {
      name: "Boots of Elvenkind",
      rarity: "Uncommon",
      attunement: false,
      description: "While wearing these boots, your steps make no sound, and you gain advantage on Dexterity (Stealth) checks that rely on moving silently."
    },
    {
      name: "Cloak of Invisibility",
      rarity: "Legendary",
      attunement: true,
      description: "You can pull up the hood to become invisible. The effect lasts for a total of 2 hours per day."
    },
    {
      name: "Gloves of Thievery",
      rarity: "Uncommon",
      attunement: false,
      description: "While wearing these gloves, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks."
    },
    {
      name: "Amulet of Health",
      rarity: "Rare",
      attunement: true,
      description: "Your Constitution score becomes 19 while wearing this amulet."
    },
    {
      name: "Belt of Giant Strength",
      rarity: "Varies (Uncommon to Legendary)",
      attunement: true,
      description: "Your Strength score is set to a value based on the type of giant (Hill - 21, Frost/Stone - 23, Fire - 25, Cloud - 27, Storm - 29)."
    },
    {
      name: "Portable Hole",
      rarity: "Rare",
      attunement: false,
      description: "A circular cloth that, when unfolded, creates an extradimensional space 6 feet in diameter and 10 feet deep."
    },
    {
      name: "Ioun Stone (Various)",
      rarity: "Varies",
      attunement: true,
      description: "A small magical stone that orbits your head and grants different effects, such as increasing ability scores or regenerating spell slots."
    },
    {
      name: "Deck of Many Things",
      rarity: "Legendary",
      attunement: false,
      description: "A deck of magical cards with unpredictable effects, both beneficial and disastrous."
    },
    {
      name: "Periapt of Wound Closure",
      rarity: "Uncommon",
      attunement: true,
      description: "Stabilizes you when you are dying and doubles the hit points you regain from hit dice spent during a short rest."
    },
    {
      name: "Stone of Good Luck (Luckstone)",
      rarity: "Uncommon",
      attunement: true,
      description: "You gain a +1 bonus to ability checks and saving throws while this polished agate is on your person."
    },
    {
      name: "Heward's Handy Haversack",
      rarity: "Rare",
      attunement: false,
      description: "A small backpack that functions like a Bag of Holding, with 3 compartments that can each hold up to 80 pounds."
    },
    {
      name: "Gauntlets of Ogre Power",
      rarity: "Uncommon",
      attunement: true,
      description: "Your Strength score becomes 19 while wearing these gauntlets."
    },
    {
      name: "Eversmoking Bottle",
      rarity: "Uncommon",
      attunement: false,
      description: "When opened, thick smoke pours out, heavily obscuring a 60-foot radius area."
    },
    {
      name: "Alchemist’s Jug",
      rarity: "Uncommon",
      attunement: false,
      description: "This magical jug can produce different liquids, such as water, wine, honey, or even acid."
    },
    {
      name: "Robe of Stars",
      rarity: "Very Rare",
      attunement: true,
      description: "This robe grants +1 bonus to saving throws and allows you to cast Magic Missile. You can also step into the Astral Plane."
    },
    {
      name: "Ring of Spell Storing",
      rarity: "Rare",
      attunement: true,
      description: "This ring can store up to 5 levels worth of spells, which can be cast by the wearer."
    },
    {
      name: "Ring of Three Wishes",
      rarity: "Legendary",
      attunement: true,
      description: "This ring grants the ability to cast Wish three times before losing its magic."
    }
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
