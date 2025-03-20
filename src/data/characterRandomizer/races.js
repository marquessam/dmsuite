// src/data/characterRandomizer/races.js
// List of all available races
export const races = [
  // Core
  'Human', 'Dwarf', 'Elf', 'Halfling', 'Gnome', 'Dragonborn', 'Half-Elf', 'Half-Orc', 'Tiefling',
  // Volo's Guide
  'Aasimar', 'Tabaxi (Catfolk)', 'Kenku', 'Lizardfolk', 'Hobgoblin', 'Bugbear', 'Goblin', 'Kobold', 'Firbolg', 'Yuan-Ti Pureblood',
  // Elemental Evil
  'Aarakocra', 'Genasi', 'Goliath',
  // Mordenkainen's
  'Gith', 'Svirfneblin (Deep Gnome)', 'Duergar (Grey Dwarf)',
  // Eberron
  'Changeling', 'Shifter', 'Warforged',
  // Ravnica
  'Simic Hybrid', 'Vedalken', 'Loxodon', 'Minotaur (Ravnica)',
  // Theros
  'Centaur', 'Satyr', 'Leonin', 'Minotaur (Theros)',
  // Other
  'Locathah', 'Triton', 'Vampire (Legacy)',
  // Custom/Homebrew
  'Dark Elf', 'Ogre', 'Golem', 'Elemental', 'Pixie', 'Treant', 'Avian (Birdfolk)', 'Gnoll'
];

// Race descriptions
export const raceDescriptions = {
  // Existing race descriptions
  'Human': 'Adaptable and ambitious, humans are known for their versatility and drive. They possess a remarkable ability to thrive in nearly any environment and circumstance.',
  'Dwarf': 'Stout and sturdy, dwarves are known for their craftsmanship, resilience, and long memories. They have natural resistance to poison and magic.',
  'Elf': 'Graceful and long-lived, elves possess natural affinity for magic and a deep connection to nature. Their keen senses and agility make them excellent scouts and archers.',
  'Dark Elf': 'Hailing from the depths of the Underdark, dark elves combine elven grace with ruthless cunning. They possess innate magical abilities and can see perfectly in darkness.',
  'Halfling': 'Small but nimble, halflings are known for their luck, courage, and remarkable stealth. They value community and comfort above all else.',
  'Gnome': 'Curious and clever, gnomes possess an innate talent for illusion magic and mechanical tinkering. Their small size belies their boundless energy.',
  'Orc': 'Powerfully built and fierce, orcs possess exceptional strength and endurance. Their tribal culture values might and conquest above all else.',
  'Ogre': 'Massive and imposing, ogres possess incredible strength at the cost of intellect. Their thick skin provides natural protection against physical attacks.',
  'Golem': 'Constructs of magic and matter, golems are nearly tireless and immune to many afflictions that plague flesh. They follow orders with unwavering focus.',
  'Elemental': 'Born from primal forces, elementals embody raw power. They are resistant to many physical attacks and connected to their native elements.',
  'Dragonborn': 'With draconic ancestry, dragonborn possess elemental breath weapons and natural armor. Their sense of honor is legendary among other races.',
  'Tabaxi (Catfolk)': 'Curious and agile, tabaxi possess natural climbing abilities and lightning reflexes. Their feline grace is matched only by their wanderlust.',
  'Centaur': 'With the upper body of a humanoid and lower body of a horse, centaurs combine strength, speed, and intellect. Their connection to nature runs deep.',
  'Pixie': 'Tiny but magical, pixies possess innate spellcasting and flight. Their mischievous nature often leads them to play tricks on larger folk.',
  'Treant': 'Ancient and wise, treants are living trees with immense strength and deep connection to forests. They speak slowly but think deeply.',
  'Avian (Birdfolk)': 'Blessed with wings and keen eyesight, avians combine the grace of birds with humanoid intelligence. Their diverse appearances reflect the many bird species they emulate, from colorful tropical types to sleek predatory raptors.',
  'Goblin': 'Small and cunning, goblins are survivors above all else. What they lack in physical power they make up for with craftiness, trap-making, and surprising technical aptitude. They excel at scavenging and repurposing others\' discarded items.',
  'Gnoll': 'Hyena-like humanoids with insatiable hunger and pack mentality. Gnolls possess incredible endurance and tracking skills, making them fearsome hunters. Their laughing calls strike fear into travelers of the wilderness.',
  'Lizardfolk': 'Cold-blooded and pragmatic, lizardfolk possess natural armor, powerful jaws, and swimming prowess. They view the world through a lens of survival, with little regard for sentimentality or social niceties.',
  
  // New race descriptions
  'Half-Elf': 'Combining the best traits of humans and elves, half-elves are charming, versatile, and adaptable. Their dual heritage gives them unique perspective and social grace.',
  'Half-Orc': 'Blending human ingenuity with orcish strength, half-orcs are formidable warriors with remarkable endurance. Their intimidating presence can end conflicts before they begin.',
  'Tiefling': 'With infernal heritage flowing through their veins, tieflings possess otherworldly features and innate magical talents. Despite facing prejudice, they carve their own paths with determination.',
  'Aarakocra': 'Birdlike humanoids with feathered wings and hollow bones, aarakocra soar through the skies with unmatched freedom. They value individualism and the open expanse of the heavens.',
  'Genasi': 'The offspring of mortals and elemental beings, genasi embody the powers of air, earth, fire, or water. Their elemental heritage manifests in both appearance and innate magical abilities.',
  'Gith': 'Former slaves who overthrew their mind flayer masters, the gith are divided into two subraces: the martial githyanki and the contemplative githzerai. Both possess powerful psionic abilities.',
  'Triton': 'Guardians of the deep ocean, tritons are aquatic humanoids with an innate connection to water and sea creatures. Their civilization is ancient and proud, with a duty to protect the material plane from undersea threats.',
  'Aasimar': 'Blessed with celestial heritage, aasimar radiate light and goodness. Their divine ancestry grants them healing abilities and resistance to dark forces.',
  'Kenku': 'Raven-like humanoids cursed with the inability to speak normally, kenku can only mimic sounds they\'ve heard. Despite this limitation, they excel as stealthy rogues and clever mimics.',
  'Tortle': 'With natural shell armor and amphibious abilities, tortles are patient, thoughtful beings who live in harmony with nature. Though slow-moving, their wisdom and resilience are unmatched.',
  'Hobgoblin': 'Militaristic and disciplined, hobgoblins combine goblinoid ferocity with strict martial training. Their societies are structured around military rank and honor.',
  'Bugbear': 'Stealthy despite their size, bugbears are the ambush predators of the goblinoid family. With lanky limbs and natural stealth, they can strike from unexpected directions.',
  'Kobold': 'Small draconic humanoids who revere true dragons, kobolds compensate for their physical weakness with cunning traps, ambush tactics, and unwavering pack loyalty.',
  'Firbolg': 'Gentle forest giants with innate druidic magic, firbolgs live in harmony with nature and prefer peaceful solutions. Their natural capacity for empathy and stealth allows them to protect their woodland homes.',
  'Goliath': 'Mountain-dwelling folk with stone-like skin markings, goliaths value fair competition and personal achievement. Their powerful builds and competitive spirit make them exceptional warriors.',
  'Changeling': 'Masters of shapeshifting, changelings can alter their appearance at will. This unique ability makes them natural spies, diplomats, and survivors in a world that often fears their gifts.',
  'Shifter': 'With distant lycanthrope ancestry, shifters possess animalistic features and can temporarily enhance their bestial nature. This "shifting" grants them enhanced physical abilities in times of need.',
  'Warforged': 'Living constructs created for war, warforged possess mechanical bodies with humanoid consciousness. Though built for battle, many now seek purpose beyond conflict.',
  'Simic Hybrid': 'Results of magical experimentation combining humanoid and animal traits, Simic hybrids possess adaptable bodies with grafted animal features that serve specific functions.',
  'Vedalken': 'Blue-skinned humanoids with analytical minds and a passion for knowledge, vedalkens pursue perfection in all endeavors. Their natural curiosity and methodical approach make them excellent scholars and mages.',
  'Loxodon': 'Elephant-like humanoids with phenomenal memory and patience, loxodons are deliberate in action but unstoppable once committed to a course. Their natural wisdom and strength earn them deep respect.',
  'Minotaur (Ravnica)': 'Proud warrior race with bovine features, Ravnican minotaurs value honor, martial prowess, and guild loyalty. Their horns and powerful builds make them devastating in close combat.',
  'Minotaur (Theros)': 'Dwelling in ancient labyrinths, Theros minotaurs are fierce warriors with an innate sense of direction. Unlike their savage reputation, many are honor-bound and disciplined combatants.',
  'Satyr': 'Fey-touched humanoids with goat-like lower bodies, satyrs revel in freedom, celebration, and passion. Their natural magic resistance and agility make them unpredictable allies.',
  'Leonin': 'Lion-like humanoids who dwell in pride-based clans, leonin are territorial protectors with strong family bonds. Their natural strength and hunting prowess make them fearsome warriors.',
  'Vampire (Legacy)': 'Cursed with eternal hunger for blood, vampires possess supernatural strength, regeneration abilities, and charm. Though powerful, they must manage their bloodthirst and avoid sunlight.',
  'Locathah': 'Fish-like humanoids with natural armor and amphibious abilities, locathah value freedom above all else. Their resistance to mind-affecting magic stems from generations of fighting off underwater threats.',
  'Yuan-Ti Pureblood': 'With serpentine ancestry carefully cultivated through dark rituals, purebloods appear mostly human but possess snake-like features and innate magical abilities. Their cold, calculating nature makes them natural manipulators.',
  'Svirfneblin (Deep Gnome)': 'Gnomes adapted to the Underdark, deep gnomes are masters of stealth and survival in the lightless depths. Their natural magic resistance and stone cunning make them exceptional survivors.',
  'Duergar (Grey Dwarf)': 'Underdark-dwelling dwarves with psionic abilities, duergar are stern, joyless, and suspicious. Their resistance to magic and ability to temporarily increase their size make them formidable opponents.'
};
