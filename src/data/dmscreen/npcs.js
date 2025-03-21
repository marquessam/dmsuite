// src/data/dmscreen/npcs.js
// NPC generation data including types, traits, and motivations

export const npcData = {
  types: [
    "Acolyte", "Bandit", "Bard", "Blacksmith", "Captain", "Commoner", "Cultist", 
    "Farmer", "Guard", "Innkeeper", "Knight", "Mage", "Merchant", "Noble", 
    "Priest", "Scout", "Spy", "Thug", "Veteran", "Wizard"
  ],
  personalities: [
    "Abrasive", "Accommodating", "Adventurous", "Anxious", "Arrogant", "Brave", "Cautious",
    "Charming", "Cheerful", "Cold", "Curious", "Cynical", "Determined", "Dishonest",
    "Eccentric", "Friendly", "Generous", "Gruff", "Honorable", "Impulsive", "Introverted",
    "Jovial", "Kind", "Lazy", "Loyal", "Melancholic", "Nervous", "Optimistic",
    "Paranoid", "Patient", "Pessimistic", "Reckless", "Reliable", "Reserved", "Ruthless",
    "Scholarly", "Selfish", "Serious", "Suspicious", "Talkative", "Trusting", "Vain", "Wise"
  ],
  motivations: [
    "Accumulating wealth", "Atoning for past sins", "Avoiding responsibility", 
    "Building a legacy", "Caring for family", "Discovering ancient secrets", 
    "Earning fame/recognition", "Escaping the past", "Exploring the world",
    "Finding a lost love", "Getting revenge", "Hiding from enemies",
    "Maintaining tradition", "Making powerful allies", "Overthrowing authority",
    "Protecting the innocent", "Rising to power", "Seeking knowledge",
    "Serving a deity", "Surviving at all costs"
  ],
  quirks: [
    "Always speaks in the third person", "Believes they can talk to animals",
    "Carries a lucky charm everywhere", "Collects unusual trinkets", 
    "Constantly chews on something", "Easily startled by loud noises",
    "Flinches when making eye contact", "Forgets people's names immediately",
    "Has an imaginary friend", "Hums constantly when nervous",
    "Keeps checking over their shoulder", "Laughs at inappropriate times",
    "Makes up elaborate lies for no reason", "Never sits with back to a door",
    "Only eats certain colored foods", "Quotes sayings that don't exist",
    "Refers to inanimate objects by name", "Speaks in overly flowery language",
    "Tells the same story to everyone", "Thinks they're much taller than they are"
  ],
  appearance: [
    "Aquiline nose", "Braided beard", "Bright blue eyes", "Burn scars", "Crooked teeth",
    "Deep-set eyes", "Dimpled cheeks", "Eye patch", "Facial tattoos", "Freckled skin",
    "Gold tooth", "Hooked nose", "Long braided hair", "Missing fingers", "Mustache",
    "Perfectly groomed", "Pierced ears", "Prominent jaw", "Ruddy complexion", "Shaved head",
    "Short and stout", "Slender frame", "Square jaw", "Tall and lanky", "Weathered skin"
  ],
  occupations: [
    "Alchemist", "Armorer", "Baker", "Barber", "Blacksmith", "Brewer", "Butcher",
    "Carpenter", "Cook", "Farmer", "Fletcher", "Glassblower", "Herbalist", "Hunter",
    "Jeweler", "Leatherworker", "Messenger", "Miller", "Miner", "Sailor", "Scribe",
    "Seamstress", "Shepherd", "Tanner", "Tavern keeper", "Weaver"
  ]
};

// NPC name generation data
export const nameComponents = {
  firstNamePrefixes: ["Ael", "Aer", "Af", "Ak", "Al", "Am", "An", "Ap", "Ar", "As", "At", "Av", "Ban", "Bar", "Bel", "Ben"],
  firstNameSuffixes: ["a", "ac", "ace", "ach", "ad", "ade", "ae", "af", "ag", "ah", "ai", "ak", "ake", "al", "ale", "am"],
  lastNamePrefixes: ["Amber", "Angel", "Ash", "Astral", "Autumn", "Battle", "Black", "Blaze", "Blood", "Blue"],
  lastNameSuffixes: ["arm", "arrow", "bane", "bash", "basher", "bear", "blade", "blood", "bloom", "blossom"]
};

// NPC stat blocks for common types
export const npcStatBlocks = {
  commoner: {
    ac: 10,
    hp: "4 (1d8)",
    speed: "30 ft.",
    abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    skills: "",
    senses: "passive Perception 10",
    languages: "Common",
    cr: "0 (10 XP)",
    actions: [
      {
        name: "Club",
        description: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
      }
    ]
  },
  guard: {
    ac: "16 (chain shirt, shield)",
    hp: "11 (2d8 + 2)",
    speed: "30 ft.",
    abilities: { str: 13, dex: 12, con: 12, int: 10, wis: 11, cha: 10 },
    skills: "Perception +2",
    senses: "passive Perception 12",
    languages: "Common",
    cr: "1/8 (25 XP)",
    actions: [
      {
        name: "Spear",
        description: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ]
  },
  // Additional NPC stat blocks will be added here
};
