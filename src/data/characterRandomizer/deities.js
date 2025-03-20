// Deities and their details
export const deities = [
  { 
    name: "Pelor", 
    domain: "Sun, Light & Healing", 
    description: "The Shining One, bringer of light and healing. Worshipped widely for his life-giving rays and power against undead.",
    symbol: "A radiant golden sun with sixteen rays extending outward",
    requirements: "Must pray at dawn daily. Required to comfort the sick and wounded.",
    taboos: "Must never willingly create permanent darkness. Forbidden from aiding undead.",
    followers: ["Human", "Paladin", "Cleric"] 
  },
  { 
    name: "Moradin", 
    domain: "Forge, Creation & Mountains", 
    description: "The Soulforger, master of creation and patron of artisans. His holy anvil is said to have forged the mountains themselves.", 
    symbol: "A hammer and anvil set upon a mountain backdrop",
    requirements: "Must create something of value each season. Required to respect ancestral traditions.",
    taboos: "Forbidden to waste precious metals or gems. Must never destroy superior craftwork.",
    followers: ["Dwarf", "Warrior", "Cleric"] 
  },
  { 
    name: "Corellon", 
    domain: "Magic, Art & Elven Kind", 
    description: "The First of the Seldarine, patron of magic and archery. Said to have brought beauty into the world.", 
    symbol: "A silver crescent moon wrapped around a blooming silver flower",
    requirements: "Must practice an artistic pursuit regularly. Required to protect magical knowledge.",
    taboos: "Forbidden to destroy works of art or beauty. Must never harm a living forest without necessity.",
    followers: ["Elf", "Wizard", "Sorcerer"] 
  },
  { 
    name: "Lolth", 
    domain: "Spiders, Darkness & Deceit", 
    description: "The Spider Queen, weaver of plots and chaos. Her web of influence extends through the Underdark.", 
    symbol: "A black spider with a female drow's head, hanging from a web",
    requirements: "Must perform a monthly blood sacrifice. Required to constantly seek greater power.",
    taboos: "Forbidden to show weakness or mercy to enemies. Must never trust outsiders over fellow worshippers.",
    followers: ["Dark Elf", "Rogue", "Shadow Knight"] 
  },
  { 
    name: "Obad-Hai", 
    domain: "Nature, Hunting & Beasts", 
    description: "The Shalm, voice of the untamed wilderness. His horn calls the wild hunt.", 
    symbol: "An oak leaf and acorn resting on animal tracks",
    requirements: "Must live with minimal impact on nature. Required to hunt only what is needed.",
    taboos: "Forbidden to use metal weapons against natural beasts. Must never kill the last of any animal species.",
    followers: ["Ranger", "Druid", "Barbarian"] 
  },
  { 
    name: "Grandfather Oak", 
    domain: "Trees, Time & Wisdom", 
    description: "The Ancient Root, eldest of all treants. His rings count the ages of the world.", 
    symbol: "A slice of oak trunk showing hundreds of growth rings",
    requirements: "Must plant trees annually. Required to protect ancient forests and groves.",
    taboos: "Forbidden to burn living wood. Must never cut healthy trees without necessity.",
    followers: ["Treant", "Druid", "Shaman"] 
  },
  { 
    name: "Infernus", 
    domain: "Fire, Destruction & Renewal", 
    description: "The Eternal Flame, bringer of devastation and rebirth. His touch purifies through destruction.", 
    symbol: "A phoenix rising from glowing embers",
    requirements: "Must burn something of value quarterly. Required to spread controlled fire to renew wild lands.",
    taboos: "Forbidden to extinguish ritual fires. Must never let their personal passion die out.",
    followers: ["Elemental", "Sorcerer", "Wizard"] 
  },
  {
    name: "Kord",
    domain: "Strength, Storms & Battle",
    description: "The Stormlord, revered by warriors and athletes. His fists strike like thunder, and his will is as unstoppable as a hurricane.",
    symbol: "A clenched fist surrounded by crackling lightning",
    requirements: "Must engage in physical combat or strength training weekly. Required to face challenges head-on.",
    taboos: "Forbidden to flee from battle. Must never shy away from a fight when honor is on the line.",
    followers: ["Human", "Orc", "Barbarian"]
  },
  {
    name: "Eilistraee",
    domain: "Moonlight, Dance & Freedom",
    description: "The Dark Maiden, goddess of the moon and freedom. She seeks to bring peace to the Drow by guiding them away from Lolth’s dark path.",
    symbol: "A silver crescent moon with a dancing figure at its center",
    requirements: "Must dance under the moonlight monthly. Required to aid those who are oppressed or hunted.",
    taboos: "Forbidden to enslave others. Must never use violence unless absolutely necessary.",
    followers: ["Drow", "Rogue", "Cleric"]
  },
  {
    name: "Tiamat",
    domain: "Greed, Tyranny & Dragons",
    description: "The Chromatic Dragon, hoarder of treasure and ruler of dragons. Her five heads represent her endless hunger for power.",
    symbol: "A five-headed dragon with jeweled eyes, each head representing a different chromatic color",
    requirements: "Must hoard treasure in some form. Required to seek personal gain in every opportunity.",
    taboos: "Forbidden to show weakness to rivals. Must never allow others to take what is rightfully theirs.",
    followers: ["Dragonborn", "Dragon", "Sorcerer"]
  },
  {
    name: "Thalassor",
    domain: "Oceans, Storms & Sea Monsters",
    description: "The Tide King, ruler of the deep and master of the oceans. His reign is marked by calm seas and terrifying tempests.",
    symbol: "A swirling whirlpool with a giant trident at its center",
    requirements: "Must sail on open seas yearly. Required to respect all sea creatures.",
    taboos: "Forbidden to harm the sea’s creatures needlessly. Must never abandon ship or crew in the midst of a storm.",
    followers: ["Merfolk", "Pirate", "Cleric"]
  },
  {
    name: "Selûne",
    domain: "Moon, Stars & Prophecy",
    description: "The Moonmaiden, goddess of the moon, stars, and prophecy. She is the keeper of the night sky, watching over all who journey in darkness.",
    symbol: "A crescent moon within a field of stars",
    requirements: "Must observe the night sky regularly. Required to assist those lost or wandering in the dark.",
    taboos: "Forbidden to destroy starlight or obstruct the moon’s glow. Must never deceive others about their visions.",
    followers: ["Elf", "Wizard", "Oracle"]
  },
  {
    name: "Grumsh",
    domain: "War, Hate & Orcs",
    description: "The One-Eye, god of hatred and destruction. His single eye burns with the fury of endless war, and he commands his followers to conquer all.",
    symbol: "A single, fiery red eye with a spear running through it",
    requirements: "Must engage in battle regularly. Required to show no mercy to enemies.",
    taboos: "Forbidden to make peace with enemies. Must never allow weakness to appear within their ranks.",
    followers: ["Orc", "Barbarian", "Warrior"]
  },
  {
    name: "Sarenrae",
    domain: "Healing, Redemption & Sun",
    description: "The Dawnflower, goddess of healing and redemption. She seeks to bring light to the dark and heal the wounded, both in body and soul.",
    symbol: "A golden sunburst with a radiant flower at the center",
    requirements: "Must heal others regularly. Required to seek redemption for past wrongdoings.",
    taboos: "Forbidden to allow suffering without attempting to help. Must never abandon those in need.",
    followers: ["Human", "Paladin", "Cleric"]
  },
  {
    name: "Baphomet",
    domain: "Minotaurs, Madness & Labyrinths",
    description: "The Horned King, ruler of labyrinths and madness. He commands his minotaurs to build and guard their mazes, while sowing chaos wherever they go.",
    symbol: "A ram’s head with twisted horns surrounded by a labyrinth",
    requirements: "Must build or maintain a labyrinth annually. Required to seek out and confront personal fears.",
    taboos: "Forbidden to let a labyrinth be completed without challenges. Must never be swayed from their pursuit of chaos.",
    followers: ["Minotaur", "Barbarian", "Sorcerer"]
  },
  {
    name: "Shaundakul",
    domain: "Travel, Winds & Exploration",
    description: "The Rider of the Winds, god of travel and exploration. He is the patron of wanderers, guiding them through the storms and across uncharted lands.",
    symbol: "A stylized windstorm with a rider’s silhouette at its center",
    requirements: "Must travel to new lands frequently. Required to help those lost or stranded in the wilds.",
    taboos: "Forbidden to stay in one place for too long. Must never leave a companion behind in peril.",
    followers: ["Human", "Ranger", "Explorer"]
  },
  {
    name: "Zephyros",
    domain: "Air, Freedom & Storms",
    description: "The Windspeaker, deity of air and freedom. His presence is felt in every gust of wind and his whispers carry the secrets of the skies.",
    symbol: "A spiral of wind, with wings spread wide",
    requirements: "Must honor the winds by living freely and avoiding restrictions. Required to always seek new horizons.",
    taboos: "Forbidden to be grounded for long periods. Must never be chained or restricted.",
    followers: ["Aarakocra", "Rogue", "Sorcerer"]
  },
  {
    name: "Talesh",
    domain: "Fate, Luck & Trickery",
    description: "The Trickster of Fate, weaving the threads of destiny. He plays with luck and twists fate, leaving both fortune and misfortune in his wake.",
    symbol: "A pair of dice, one showing a one, the other a six",
    requirements: "Must gamble or take a risk once a month. Required to make a fortune for someone else each year.",
    taboos: "Forbidden to shy away from a challenge. Must never allow another to go without a twist of fate.",
    followers: ["Halfling", "Rogue", "Bard"]
  },
  {
    name: "Rathis",
    domain: "War, Strategy & Leadership",
    description: "The Warlord, god of strategy and leadership. He commands his followers to lead armies and fight for conquest with both wit and might.",
    symbol: "A battle standard with a sword crossed behind it",
    requirements: "Must lead a group in some form of combat or strategy regularly. Required to practice tactics and warfare.",
    taboos: "Forbidden to fight without a plan. Must never show weakness in front of their soldiers.",
    followers: ["Human", "General", "Soldier"]
  },
  {
    name: "Mielikki",
    domain: "Forests, Beasts & Nature",
    description: "The Forest Queen, goddess of forests and the wild. She protects the creatures of the forest and the balance of nature.",
    symbol: "A stag’s head surrounded by oak leaves",
    requirements: "Must spend time in the forest every month. Required to protect the natural world from destruction.",
    taboos: "Forbidden to harm a creature of the forest without necessity. Must never cut down trees without permission from the forest.",
    followers: ["Elf", "Ranger", "Druid"]
  },
  {
    name: "Karaash",
    domain: "Honour, Blood & Justice",
    description: "The Scourge of Betrayers, a god of justice and vengeance. He punishes those who betray the righteous and rewards those who uphold honor.",
    symbol: "A clenched fist, dripping with blood, over a broken sword",
    requirements: "Must uphold personal honor at all times. Required to avenge betrayal when it is discovered.",
    taboos: "Forbidden to break a vow. Must never allow injustice to go unpunished.",
    followers: ["Orc", "Paladin", "Warrior"]
  },
  {
    name: "Hesperis",
    domain: "Stars, Dreams & Nightmares",
    description: "The Dreamweaver, goddess of the stars and dreams. She governs the realm of sleep and guides mortals through their nightly visions.",
    symbol: "A star with a crescent moon wrapped around it",
    requirements: "Must write or dream of their dreams at least once a week. Required to help others interpret their dreams.",
    taboos: "Forbidden to neglect their dreams. Must never allow nightmares to go unexplored.",
    followers: ["Elf", "Wizard", "Oracle"]
  },
  {
    name: "Boreas",
    domain: "Winter, Ice & Endurance",
    description: "The Frost King, ruler of the cold winds. He represents endurance in the face of overwhelming cold and the strength to survive against all odds.",
    symbol: "A snowflake surrounded by icy winds",
    requirements: "Must endure hardship in winter. Required to help those struggling against the cold.",
    taboos: "Forbidden to retreat from the cold. Must never abandon those stranded in winter’s grasp.",
    followers: ["Human", "Barbarian", "Ranger"]
  },
  {
    name: "Nerull",
    domain: "Death, Darkness & Reaping",
    description: "The Reaper, lord of death and darkness. He is the inevitable end, waiting for all life to pass into his cold embrace.",
    symbol: "A black skull with an hourglass beneath it",
    requirements: "Must assist in the passing of the dying. Required to help souls find their final rest.",
    taboos: "Forbidden to prevent death from happening. Must never steal a soul from Nerull’s domain.",
    followers: ["Human", "Necromancer", "Rogue"]
  },
  {
    name: "Gond",
    domain: "Crafting, Artifice & Invention",
    description: "The Wonderbringer, god of innovation and creation. He is the patron of engineers, inventors, and artificers.",
    symbol: "A cogwheel with a hammer striking it",
    requirements: "Must create an invention regularly. Required to innovate and improve upon existing technologies.",
    taboos: "Forbidden to create devices of destruction for the sake of destruction. Must never abandon an unfinished work.",
    followers: ["Gnome", "Dwarf", "Artificer"]
  },
    {
    name: "Semhys",
    domain: "Swamps, Reptiles & Survival",
    description: "The Swamp King, protector of the marshes and ruler of the reptiles. He teaches his followers how to survive in harsh, humid environments.",
    symbol: "A coiled serpent encircling a swampy bog",
    requirements: "Must spend time in swampy or marshy areas. Required to protect the natural waterways from destruction.",
    taboos: "Forbidden to harm a creature of the swamp unnecessarily. Must never allow the swamp to be polluted.",
    followers: ["Lizardfolk", "Druid", "Ranger"]
  },
  {
    name: "Grolthak",
    domain: "Brutality, Strength & War",
    description: "The Skullcrusher, god of ogres, strength, and ruthless battle. He thrives on combat, pushing his followers to conquer by force.",
    symbol: "A massive ogre's skull with jagged tusks, crowned with a broken club",
    requirements: "Must engage in violent combat regularly. Required to teach the value of brute strength and dominance.",
    taboos: "Forbidden to show mercy to weaker opponents. Must never retreat from battle.",
    followers: ["Ogre", "Barbarian", "Warrior"]
  },
  {
    name: "Vythrak",
    domain: "Fire, Blood & Vengeance",
    description: "The Bloodflame, god of vengeance and fiery retribution. His followers channel the burning rage of their enemies into destructive power.",
    symbol: "A flaming sword dripping blood",
    requirements: "Must seek revenge for wrongs done to them or their kin. Required to burn something in ritual to symbolize the wrath of vengeance.",
    taboos: "Forbidden to leave an injustice unavenged. Must never kill innocents in the name of revenge.",
    followers: ["Dragonborn", "Barbarian", "Sorcerer"]
  },
  {
    name: "Zhoroth",
    domain: "Strength, Stone & Endurance",
    description: "The Mountain's Heart, god of endurance, strength, and the earth itself. His followers are trained to endure hardship and stand as unyielding as stone.",
    symbol: "A mountain peak with a hammer striking its base",
    requirements: "Must endure physical hardship regularly. Required to honor and protect sacred caves or mountains.",
    taboos: "Forbidden to give up in the face of adversity. Must never abandon their sacred mountains.",
    followers: ["Dwarf", "Warrior", "Cleric"]
  },
  {
    name: "Tzhalith",
    domain: "Nightmares, Shadows & Secrets",
    description: "The Veiled One, goddess of shadows and the unseen world. She controls the flow of dreams and the deep, hidden corners of the world.",
    symbol: "A black mask with glowing eyes beneath",
    requirements: "Must keep secrets and protect those who need hiding. Required to act under the cover of night.",
    taboos: "Forbidden to reveal a secret entrusted to them. Must never act in the light of day if they can avoid it.",
    followers: ["Dark Elf", "Assassin", "Rogue"]
  },
  {
    name: "Agarok",
    domain: "War, Hunting & Savagery",
    description: "The Wild Hunter, god of brutal, unrestrained violence and the hunt. His followers revel in the bloodshed of their prey, seeking to prove their superiority.",
    symbol: "A spear embedded in a blood-soaked deer skull",
    requirements: "Must hunt regularly and respect the savage beauty of combat. Required to offer a portion of their kills to the god in tribute.",
    taboos: "Forbidden to kill without purpose. Must never waste the flesh of a hunted animal.",
    followers: ["Orc", "Barbarian", "Hunter"]
  },
  {
    name: "Ialdrin",
    domain: "Loyalty, Strategy & Honor",
    description: "The Shield of the Clan, god of loyalty and tactics. Ialdrin teaches his followers to always stand by their kin and lead with careful planning.",
    symbol: "A silver shield, stamped with the image of a wolf",
    requirements: "Must defend their kin and clan from danger. Required to study and practice military strategy.",
    taboos: "Forbidden to betray or abandon their comrades. Must never lead a charge without considering the plan.",
    followers: ["Gnome", "Paladin", "Soldier"]
  },
  {
    name: "Srazkala",
    domain: "Strength, Fury & Rage",
    description: "The Ravager, god of pure rage and primal strength. His followers embrace their basest impulses, channeling their fury into unstoppable force.",
    symbol: "A blood-red fist smashing through a boulder",
    requirements: "Must embrace rage in combat and daily life. Required to train in physical combat regularly.",
    taboos: "Forbidden to show fear in the face of their enemies. Must never back down from a challenge of strength.",
    followers: ["Ogre", "Barbarian", "Berserker"]
  },
  {
    name: "Fiyrath",
    domain: "Fire, Destruction & Renewal",
    description: "The Emberheart, god of fire's cleansing power. His flames burn away the old to make room for the new, and his followers embrace both destruction and rebirth.",
    symbol: "A phoenix rising from a pile of ash",
    requirements: "Must conduct a fire ritual regularly. Required to destroy something old to make way for something new.",
    taboos: "Forbidden to extinguish the flame of renewal. Must never allow stagnation in their lives.",
    followers: ["Elemental", "Sorcerer", "Wizard"]
  },
  {
    name: "Hek'naar",
    domain: "Justice, Law & Order",
    description: "The Scales of Tyranny, god of order and justice. Hek'naar ensures that law prevails and that every wrong is punished according to the rule of law.",
    symbol: "A set of scales balanced on a sword",
    requirements: "Must uphold the law at all costs. Required to help enforce the rules of society.",
    taboos: "Forbidden to break the law, even for personal gain. Must never show mercy to those who break sacred law.",
    followers: ["Lizardfolk", "Lawful Cleric", "Soldier"]
  },
  {
    name: "Arazhak",
    domain: "Rage, Battle & Bloodlust",
    description: "The Blood King, god of bloodshed and war. His followers believe that battle is the ultimate expression of life, and they embrace its raw violence.",
    symbol: "A skull dripping blood, surrounded by a bloodstained blade",
    requirements: "Must participate in battle regularly. Required to spill blood for Arazhak in ritual sacrifice.",
    taboos: "Forbidden to retreat from combat. Must never show fear or hesitation in battle.",
    followers: ["Ogre", "Barbarian", "Warrior"]
  },
  {
    name: "Olka",
    domain: "Stone, Earth & Family",
    description: "The Stone Mother, goddess of family and the earth. Olka nurtures her followers like the soil nourishes plants, teaching them to care for their kin.",
    symbol: "A stone heart surrounded by roots",
    requirements: "Must care for the weak and the young. Required to build and fortify homes or settlements.",
    taboos: "Forbidden to abandon their family or clan. Must never betray the trust of those they protect.",
    followers: ["Golem", "Dwarf", "Shaman"]
  }
];
