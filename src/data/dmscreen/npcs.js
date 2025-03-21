// src/data/dmscreen/npcs.js
// NPC generation data including types, traits, and motivations

export const npcData = {
 types: [
  "Adventurer", "Acolyte", "Altruist", "Aristocrat", "Charlatan", "Child", "Commoner", 
  "Criminal", "Cultist", "Diplomat", "Drifter", "Elderly", "Exile", "Explorer", 
  "Folk Hero", "Follower", "Gambler", "Ghost", "Gossip", "Guardian", "Hermit", 
  "Hired Muscle", "Hunter", "Innkeeper", "Knight", "Madman", "Mage", "Martyr", 
  "Mercenary", "Messenger", "Monster Hunter", "Mystic", "Noble", "Nomad", "Oracle", 
  "Outcast", "Outlaw", "Orphan", "Pilgrim", "Prophet", "Recluse", "Revolutionary", 
  "Rival", "Sage", "Scholar", "Scoundrel", "Seer", "Servant", "Shadowy Figure", 
  "Skeptic", "Socialite", "Soldier", "Spy", "Storyteller", "Street Urchin", 
  "Survivor", "Tactician", "Tavern Regular", "Town Elder", "Tragic Figure", 
  "Treasure Seeker", "Trickster", "Underdog", "Vagabond", "Veteran", "Wanderer", 
  "Warden", "Warlord", "Witch", "Wizard", "Zealot"
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
  "Avenging a fallen comrade", "Becoming immortal", "Breaking a curse", 
  "Building a legacy", "Caring for family", "Clearing one's name", 
  "Creating a masterpiece", "Defending a homeland", "Defying fate", 
  "Destroying a great evil", "Discovering ancient secrets", "Earning fame/recognition", 
  "Escaping an arranged marriage", "Escaping the past", "Establishing a new order", 
  "Exploring the world", "Finding a lost love", "Finding one's true purpose", 
  "Following a prophecy", "Forging a new identity", "Fulfilling a promise", 
  "Gaining acceptance in society", "Gaining forbidden knowledge", 
  "Getting revenge", "Hiding from enemies", "Hunting a legendary beast", 
  "Leaving a mark on history", "Liberating the oppressed", "Maintaining tradition", 
  "Making powerful allies", "Mastering a craft or skill", "Overcoming personal weakness", 
  "Overthrowing authority", "Paying off an enormous debt", "Perfecting a magical art", 
  "Preserving a dying culture", "Preventing an apocalypse", "Proving one's worth", 
  "Protecting the innocent", "Reclaiming stolen property", "Redeeming a villain", 
  "Reuniting with a long-lost relative", "Revenge for a personal betrayal", 
  "Rising to power", "Running from a prophecy", "Saving a loved one from death", 
  "Seeking knowledge", "Seeking the favor of a deity", "Settling an old score", 
  "Serving a deity", "Surpassing a rival", "Surviving at all costs", 
  "Uncovering a family secret", "Unraveling a conspiracy", "Winning the heart of a beloved"
],
  quirks: [
  "Always speaks in the third person", "Believes they can talk to animals",
  "Carries a lucky charm everywhere", "Collects unusual trinkets", 
  "Constantly chews on something", "Curses under their breath in a forgotten language",
  "Doodles constantly, even in serious situations", "Easily startled by loud noises",
  "Exaggerates every story they tell", "Flinches when making eye contact", 
  "Forgets people's names immediately", "Gives everyone an unwanted nickname", 
  "Has an imaginary friend", "Hums constantly when nervous",
  "Inserts long, awkward pauses into conversations", "Keeps checking over their shoulder", 
  "Knows an obscure fact about everything", "Laughs at inappropriate times", 
  "Loses track of time easily and is often late", "Makes up elaborate lies for no reason", 
  "Mimics the accents of people they meet", "Mutters half of their thoughts out loud",
  "Never sits with back to a door", "Obsessed with symmetry in their surroundings",
  "Only eats certain colored foods", "Over-explains everything, even simple topics",
  "Overreacts to minor inconveniences", "Paces constantly when thinking",
  "Picks up and pockets random objects without realizing", "Prays or mutters superstitious chants before any action",
  "Prefers to communicate using drawings or gestures", "Quotes sayings that don't exist", 
  "Refers to inanimate objects by name", "Repeats the last thing someone says under their breath",
  "Replaces common words with made-up ones", "Responds to questions with more questions",
  "Rhymes their sentences whenever possible", "Speaks in overly flowery language",
  "Speaks in riddles or metaphors", "Stares into the distance mid-conversation",
  "Suddenly changes topics without warning", "Talks to themselves in the mirror", 
  "Taps their fingers in a rhythmic pattern when thinking", "Tells the same story to everyone",
  "Thinks they're much taller than they are", "Uses unnecessarily complicated words",
  "Uses outdated slang from centuries ago", "Winks constantly, even when inappropriate",
  "Writes notes to themselves on their arms", "Yells when excited, whispers when angry"
],
  appearance: [
  "Aquiline nose", "Bald with a single long braid", "Braided beard", 
  "Branding scars from an unknown past", "Bright blue eyes", "Burn scars", 
  "Bushy eyebrows that almost meet", "Calloused hands from hard labor", 
  "Cleft chin", "Crooked teeth", "Deep-set eyes", "Dimpled cheeks", 
  "Dull, lifeless eyes", "Elaborate facial tattoos", "Eye patch", 
  "Extremely hairy arms", "Freckled skin", "Gap-toothed smile", 
  "Glowing, almost otherworldly eyes", "Gold tooth", "Heavy scarring on arms", 
  "Hooked nose", "Jet-black eyes with no whites", "Large, protruding ears", 
  "Limp from an old injury", "Long, unkempt fingernails", "Long braided hair", 
  "Long, spindly fingers", "Mismatched eye colors", "Missing fingers", 
  "Missing an ear", "Mustache", "Nose broken multiple times", 
  "One pupil larger than the other", "Patchy beard", "Perfectly groomed", 
  "Pierced ears with multiple rings", "Prominent jaw", "Ragged, uneven nails", 
  "Ruddy complexion", "Scar across the bridge of the nose", 
  "Scar running down one side of the face", "Shaved head", 
  "Short and stout", "Skin covered in strange, unknown symbols", 
  "Slender frame", "Small, rodent-like face", "Soft, delicate hands", 
  "Square jaw", "Strikingly beautiful, almost unnerving", 
  "Sunken cheeks and hollow eyes", "Tall and lanky", "Tattoo of an unknown symbol", 
  "Thick, muscular arms", "Unusually long limbs", "Vibrant, unnatural hair color", 
  "Weathered skin", "Wrinkled with age", "Yellowed nails"
],
  occupations: [
  "Alchemist", "Apothecary", "Architect", "Armorer", "Artist", "Assassin", "Baker", 
  "Barber", "Beekeeper", "Blacksmith", "Bookbinder", "Bounty Hunter", "Brewer", 
  "Bricklayer", "Butcher", "Candlemaker", "Carpenter", "Cartographer", "Chandler", 
  "Clockmaker", "Cook", "Cooper", "Courier", "Dancer", "Docks Worker", "Entertainer", 
  "Exorcist", "Farmer", "Ferryman", "Fisher", "Fletcher", "Fortune Teller", 
  "Gambler", "Gardener", "Glassblower", "Gravedigger", "Guildmaster", "Haberdasher", 
  "Herbalist", "Hermit", "Hunter", "Innkeeper", "Interpreter", "Inventor", "Jester", 
  "Jeweler", "Laborer", "Lamplighter", "Librarian", "Locksmith", "Mason", 
  "Merchant", "Messenger", "Midwife", "Miller", "Miner", "Moneylender", "Musician", 
  "Navigator", "Painter", "Papermaker", "Perfumer", "Philosopher", "Physician", 
  "Poisoner", "Potter", "Priest", "Printer", "Professor", "Ranger", "Rat Catcher", 
  "Rogue", "Ropemaker", "Saddler", "Sailor", "Scholar", "Scribe", "Seamstress", 
  "Shepherd", "Shipwright", "Shoemaker", "Silversmith", "Soldier", "Spy", "Stablehand", 
  "Storyteller", "Street Performer", "Street Vendor", "Tanner", "Tavern Keeper", 
  "Tax Collector", "Thief", "Tinker", "Tomb Robber", "Torturer", "Toymaker", 
  "Undertaker", "Vermin Exterminator", "Weaver", "Wheelwright", "Woodcarver"
]
};

// NPC name generation data
export const nameComponents = {
  firstNamePrefixes: [
    "Ael", "Aer", "Af", "Ak", "Al", "Am", "An", "Ap", "Ar", "As", "At", "Av", 
    "Ban", "Bar", "Bel", "Ben", "Cal", "Car", "Cel", "Cor", "Dan", "Dar", "Del", 
    "Dor", "Eld", "El", "Em", "En", "Er", "Ev", "Fal", "Fen", "Fir", "Gal", "Gar", 
    "Gil", "Hal", "Har", "Hel", "Ig", "Il", "Ing", "Is", "Jor", "Kael", "Kal", 
    "Kar", "Kel", "Kor", "Lan", "Laz", "Lor", "Mal", "Mar", "Mer", "Mir", "Mor", 
    "Nal", "Nor", "Oph", "Or", "Oth", "Pel", "Per", "Quen", "Ral", "Ran", "Rel", 
    "Ren", "Sar", "Sel", "Sol", "Tal", "Tan", "Tar", "Ther", "Tor", "Tur", "Ulf", 
    "Ur", "Val", "Var", "Ver", "Vor", "Wil", "Xal", "Xen", "Yor", "Zal", "Zen"
  ],
  
  firstNameSuffixes: [
    "a", "ac", "ace", "ach", "ad", "ade", "ae", "af", "ag", "ah", "ai", "ak", 
    "ake", "al", "ale", "am", "an", "ane", "ar", "arn", "as", "ath", "ay", "e", 
    "ec", "ed", "el", "en", "end", "er", "eth", "ey", "i", "ia", "ic", "id", 
    "iel", "ik", "il", "in", "ion", "ir", "is", "ith", "ius", "ix", "o", "oc", 
    "od", "ol", "on", "or", "os", "ot", "ous", "ox", "u", "ua", "uel", "uk", 
    "ul", "um", "un", "ur", "us", "uth", "yx"
  ],

  lastNamePrefixes: [
    "Amber", "Angel", "Ash", "Astral", "Autumn", "Battle", "Black", "Blaze", 
    "Blood", "Blue", "Bone", "Bright", "Cloud", "Crimson", "Dark", "Dawn", "Deep", 
    "Demon", "Desert", "Dragon", "Duskrun", "Dusk", "Ember", "Ever", "Fang", 
    "Far", "Fire", "Flame", "Forest", "Frost", "Ghost", "Golden", "Grand", "Grim", 
    "Hallow", "Hell", "Horizon", "Ice", "Iron", "Jade", "Lightning", "Lone", 
    "Long", "Moon", "Morning", "Night", "Noble", "Obsidian", "Ocean", "Onyx", 
    "Phoenix", "Quick", "Raven", "Red", "River", "Rock", "Runeborn", "Shadow", 
    "Shatter", "Silver", "Sky", "Snow", "Solar", "Star", "Steel", "Storm", "Stone", 
    "Storm", "Sun", "Tempest", "Thunder", "Titan", "True", "Twilight", "Void", 
    "Wild", "Wind", "Winter", "Wolf"
  ],

  lastNameSuffixes: [
    "arm", "arrow", "bane", "bash", "basher", "bear", "blade", "blood", "bloom", 
    "blossom", "bone", "born", "bringer", "brook", "caster", "chain", "claw", 
    "crest", "dancer", "fang", "feather", "fire", "flame", "flayer", "forge", 
    "fury", "gale", "ghost", "glide", "glow", "grim", "grove", "hammer", "heart", 
    "helm", "hunter", "kind", "light", "lance", "mantle", "mark", "maul", "might", 
    "moon", "piercer", "rider", "rune", "scorn", "seeker", "shade", "shadow", 
    "shard", "shepherd", "shield", "silent", "slayer", "soul", "spark", "spirit", 
    "spire", "star", "stone", "storm", "striker", "swift", "sword", "talon", 
    "thorn", "thunder", "veil", "wanderer", "ward", "watcher", "whisper", 
    "wind", "wing", "winter", "wolf", "wrath"
  ]
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
