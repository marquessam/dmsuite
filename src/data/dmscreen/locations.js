// src/data/dmscreen/locations.js
// Location generators and building data

// Location types
export const locationTypes = [
  "Castle", "Tavern", "Inn", "Temple", "Dungeon", "Cave",
  "Forest", "Mountain", "Village", "City", "Ruin", "Tower",
  "Mansion", "Crypt", "Tomb", "Wilderness", "Sewer", "Mine",
  "Fortress", "Wizard's Tower", "Thieves' Den", "Market",
  "Harbor", "Battlefield", "Magic Academy", "Monster Lair"
];

// Castle/Keep generator data
export const castleGenerator = {
  size: [
    "Small keep (4-8 rooms)", 
    "Medium castle (10-15 rooms)", 
    "Large fortress (15-25 rooms)", 
    "Massive citadel (25+ rooms)"
  ],
  features: [
    "Moat", "Drawbridge", "Gatehouse", "Portcullis", "Barbican",
    "Curtain walls", "Crenellations", "Murder holes", "Arrow slits",
    "Towers", "Baileys", "Great hall", "Chapel", "Armory",
    "Barracks", "Dungeon/prisons", "Stables", "Kitchen", "Forge",
    "Storehouse", "Treasury", "Lord's chamber", "Secret passages"
  ],
  defenses: [
    "High walls", "Multiple guard posts", "Hidden escape tunnels",
    "Boiling oil cauldrons", "Magical wards", "Traps", "Alarm systems",
    "Guard beasts", "Narrow, defensible approaches", "Reinforced doors"
  ],
  inhabitants: [
    "Noble family", "Military garrison", "Religious order",
    "Wizard and apprentices", "Monster overlord", "Bandits",
    "Undead lord", "Abandoned/haunted", "Refugees", "Cultists",
    "Mercenary company", "Foreign diplomats"
  ],
  surroundings: [
    "Atop a hill", "On a cliff edge", "In a forest clearing",
    "Overlooking a river", "Coastal headland", "Mountain pass",
    "Desert oasis", "Isolated island", "Overlooking a village",
    "Border territory", "Strategic crossroads", "Hidden valley"
  ]
};

// Tavern/Inn generator data
export const tavernGenerator = {
  names: {
    adjectives: [
      "Dancing", "Prancing", "Laughing", "Drunken", "Silver", "Golden",
      "Black", "White", "Red", "Blue", "Green", "Rusty", "Thundering",
      "Sleeping", "Raging", "Howling", "Hidden", "Magic", "Lucky", "Twisted"
    ],
    nouns: [
      "Dragon", "Unicorn", "Horse", "Stag", "Lion", "Tiger", "Bear", "Wolf", 
      "Fox", "Eagle", "Sword", "Shield", "Axe", "Hammer", "Crown", "Goblin",
      "Giant", "Ogre", "Troll", "Wizard", "Knight", "Barrel", "Tankard", "Rose"
    ]
  },
  qualities: [
    "Clean and tidy", "Filthy and smelly", "Warm and welcoming", "Cold and uninviting",
    "Crowded and noisy", "Quiet and empty", "Recently renovated", "Old and run-down",
    "Dimly lit", "Brightly lit", "Rich and luxurious", "Simple and rustic"
  ],
  features: [
    "Large fireplace", "Ornate bar", "Small stage for performances", "Gaming table",
    "Private dining rooms", "Secret entrance/exit", "Unusual decorations", "Trophy wall",
    "Mounted monster head", "Intricate woodwork", "Stained glass windows", "Cellar access",
    "Rooms for rent", "Stables", "Outdoor seating", "Famous specialty drink", "Fine food"
  ],
  patrons: [
    "Local farmers", "Merchants", "Guards", "Adventurers", "Mercenaries", "Nobles",
    "Sailors", "Travelers", "Miners", "Hunters", "Criminals", "Entertainers",
    "Scholars", "Pilgrims", "Cultists in disguise", "Monster in disguise"
  ],
  rumors: [
    "Hidden treasure nearby", "Unusual lights in the forest", "Strange disappearances",
    "Haunted ruins", "Monster sightings", "Noble family scandal", "Upcoming festival",
    "New tax collection", "Bandit activity", "Trade route problems", "Political intrigue"
  ]
};

// Dungeon generator data
export const dungeonGenerator = {
  origins: [
    "Natural cave system", "Ancient tomb", "Abandoned mine", "Prison",
    "Temple ruins", "Military fortress", "Wizard's laboratory", "Sewer system",
    "Dwarven stronghold", "Elven sanctuary", "Dragon's lair", "Giant complex",
    "Demonic shrine", "Sunken structure", "Extradimensional space"
  ],
  purposes: [
    "Burial chamber", "Treasure vault", "Prison", "Monster lair",
    "Cult activities", "Magical experiments", "Military base",
    "Hidden refuge", "Trading outpost", "Production facility"
  ],
  features: [
    "Traps", "Secret doors", "Hidden treasure", "Puzzles", "Magical effects",
    "Flooded areas", "Collapsed passages", "Vertical shafts", "Statues",
    "Altars", "Pools", "Bridges", "Pits", "Unstable areas", "Strange machinery"
  ],
  rooms: [
    "Entrance", "Antechamber", "Corridor", "Chamber", "Cavern", "Hall",
    "Storeroom", "Barracks", "Throne room", "Temple", "Kitchen", "Dining hall",
    "Workshop", "Study", "Library", "Laboratory", "Prison", "Torture chamber",
    "Armory", "Treasure vault", "Crypt", "Tomb", "Shrine", "Well", "Pool"
  ],
  inhabitants: [
    "Undead", "Aberrations", "Constructs", "Cultists", "Bandits",
    "Goblins", "Kobolds", "Demons", "Giants", "Beasts", "Oozes",
    "Monstrosities", "Spiders", "Fungi creatures", "Elementals"
  ]
};

// City/Town generator
export const settlementGenerator = {
  size: [
    "Hamlet (50-300 people)",
    "Village (300-1,000 people)",
    "Small town (1,000-5,000 people)",
    "Large town (5,000-10,000 people)",
    "Small city (10,000-25,000 people)",
    "Large city (25,000-100,000 people)",
    "Metropolis (100,000+ people)"
  ],
  governance: [
    "Monarchy (ruled by king/queen)",
    "Aristocracy (ruled by nobles)",
    "Oligarchy (ruled by merchant guild)",
    "Theocracy (ruled by temple)",
    "Democracy (elected council)",
    "Magocracy (ruled by wizards)",
    "Military (ruled by commander)",
    "Anarchy (no formal government)"
  ],
  wealth: [
    "Destitute (extreme poverty)",
    "Poor (struggling economy)",
    "Modest (stable economy)",
    "Prosperous (thriving economy)",
    "Wealthy (rich community)",
    "Opulent (extremely wealthy)"
  ],
  notable: [
    "Famous landmark", "Unique architecture", "Special festival",
    "Rare goods", "Renowned craftsmen", "Magical academy",
    "Ancient monument", "Sacred site", "Strategic location",
    "Natural wonder", "Historical significance", "Diverse population"
  ],
  districts: [
    "Market district", "Temple district", "Noble quarter",
    "Artisan quarter", "Docks/Harbor", "Slums/Poor quarter",
    "Entertainment district", "Garden district", "Warehouse district",
    "Military district", "Wizard's quarter", "Foreign quarter"
  ]
};

// Wilderness locations
export const wildernessLocations = {
  forest: [
    "Ancient tree", "Fairy circle", "Hunter's cabin", "Logging camp",
    "Druid grove", "Ranger outpost", "Abandoned cottage", "Woodcutter's clearing",
    "Overgrown ruins", "Beast lair", "Sacred grove", "Witch's hut",
    "Elven outpost", "Magical spring", "Blighted area", "Spider nest"
  ],
  mountain: [
    "Narrow pass", "Steep cliff", "Avalanche site", "Hidden valley",
    "Abandoned mine", "Hot springs", "Dragon cave", "Giant's lair",
    "Dwarven outpost", "Hermit's refuge", "Ancient shrine", "Magical fissure",
    "Monastery", "Bandit hideout", "Monster nest", "Mysterious stone circle"
  ],
  coastal: [
    "Shipwreck", "Smuggler's cove", "Lighthouse", "Fishing village",
    "Pirate hideout", "Sea cave", "Coral reef", "Abandoned dock",
    "Beached sea monster", "Coastal ruins", "Tidal pools", "Island view",
    "Cliff dwellings", "Mysterious fog bank", "Whirlpool", "Ancient sea wall"
  ]
  // Additional wilderness types will be added here
};

// Trap and hazard generator
export const trapGenerator = {
  types: [
    "Pit trap", "Falling block", "Poisoned needle", "Dart trap",
    "Swinging blade", "Spike trap", "Crushing walls", "Rolling boulder",
    "Arrow trap", "Gas trap", "Magical rune", "Alarm", "Teleportation trap",
    "Flooding room", "Locking doors", "Heat/Fire trap", "Cold/Ice trap",
    "Lightning trap", "Illusion trap", "Animated object"
  ],
  triggers: [
    "Pressure plate", "Tripwire", "Door/chest opening", "Disturbing item",
    "Weight/pressure change", "Timer", "Light/darkness", "Sound/noise",
    "Magic detection", "Specific action", "Magical command", "Proximity"
  ],
  effects: [
    "Damage", "Status condition", "Alarm", "Imprisonment", "Teleportation",
    "Transformation", "Mind control", "Summoning monsters", "Environmental change",
    "Property loss", "Magic dampening", "Ability score reduction"
  ],
  complexities: [
    "Simple (obvious, single effect)",
    "Moderate (partially hidden, simple mechanism)",
    "Complex (well hidden, multiple effects)",
    "Deadly (very difficult to detect, severe effects)",
    "Legendary (nearly impossible to detect, potentially fatal)"
  ]
};

// Room features and furnishings
export const roomFeatures = {
  general: [
    "Fireplace", "Windows", "Pillars", "Tapestries", "Rugs",
    "Murals", "Statues", "Chandelier", "Sconces", "Stairs",
    "Balcony", "Alcove", "Secret door", "Hidden compartment",
    "Unusual ceiling", "Patterned floor", "Magic effect"
  ],
  furniture: [
    "Table", "Chairs", "Bed", "Wardrobe", "Chest", "Desk",
    "Bookshelf", "Bench", "Stool", "Cabinet", "Altar",
    "Throne", "Dresser", "Weapons rack", "Armor stand",
    "Display case", "Workbench", "Barrel", "Crate", "Shelf"
  ],
  dungeon: [
    "Chains", "Cages", "Torture devices", "Blood stains",
    "Scratch marks", "Bones", "Webs", "Fungi", "Slime",
    "Moisture", "Cracks", "Cave-in", "Pit", "Strange growth",
    "Unusual smell", "Echoing sounds", "Temperature change"
  ]
};
