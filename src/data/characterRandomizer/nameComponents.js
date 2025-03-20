// Name generation components by race
export const namePrefixes = {
  // Default/Human prefixes
  'Human': ['Ar', 'Bel', 'Cal', 'Dor', 'El', 'Fir', 'Gor', 'Hal', 'Jor', 'Mal', 'Nor', 'Pad', 'Rand', 'Sar', 'Tar', 'Val', 'War', 'Zor'],
  
  // Dwarven prefixes - short, strong sounds
  'Dwarf': ['Bal', 'Bom', 'Dain', 'Dur', 'Gim', 'Gloin', 'Grun', 'Kaz', 'Mor', 'Nain', 'Thor', 'Thror', 'Tror', 'Bar', 'Brom', 'Frar', 'Grim', 'Khar'],
  
  // Elven prefixes - elegant, flowing sounds
  'Elf': ['Aer', 'Cael', 'Elr', 'Erew', 'Fin', 'Gal', 'Leg', 'Lor', 'Thr', 'Eär', 'Aur', 'Cel', 'Eth', 'Fae', 'Ial', 'Lian', 'Riand', 'Thal'],
  
  // Dark Elven prefixes - sharper, more exotic
  'Dark Elf': ['Driz', 'Jhar', 'Kren', 'Mal', 'Nym', 'Quar', 'Riz', 'Szor', 'Vic', 'Zek', 'Bel', 'Dro', 'Houn', 'Ilph', 'Kron', 'Mer', 'Teb', 'Var'],
  
  // Halfling prefixes - friendly, simple sounds
  'Halfling': ['Bil', 'Dro', 'Fro', 'Mer', 'Per', 'Pip', 'Sam', 'Tol', 'Wil', 'Bag', 'Cot', 'Fort', 'Gam', 'Hil', 'Mun', 'Pud', 'Rose', 'Whit'],
  
  // Gnome prefixes - clever, playful sounds
  'Gnome': ['Bim', 'Dim', 'Fig', 'Gim', 'Jeb', 'Nam', 'Pip', 'Ril', 'Snib', 'Tim', 'Wig', 'Zook', 'Cog', 'Fiz', 'Gear', 'Nim', 'Quib', 'Tink'],
  
  // Orc prefixes - harsh, guttural sounds
  'Orc': ['Az', 'Bol', 'Dug', 'Gar', 'Grum', 'Karg', 'Mog', 'Nar', 'Ogr', 'Shak', 'Thok', 'Uzg', 'Vak', 'Yag', 'Zag', 'Dur', 'Gul', 'Krol'],
  
  // Ogre prefixes - slow, simple
  'Ogre': ['Bog', 'Crud', 'Dum', 'Gar', 'Gork', 'Gruk', 'Lum', 'Mog', 'Mung', 'Rud', 'Thud', 'Ug', 'Brul', 'Clubb', 'Dumb', 'Gorf', 'Muck', 'Slog'],
  
  // Golem prefixes - mechanical, construct-like
  'Golem': ['Arg', 'Bras', 'Cog', 'Flint', 'Gild', 'Hex', 'Iron', 'Mech', 'Null', 'Rune', 'Steel', 'Tin', 'Volt', 'Whir', 'Zinc', 'Bolt', 'Gear', 'Piston'],
  
  // Elemental prefixes - element-themed
  'Elemental': ['Ash', 'Blaze', 'Crys', 'Drift', 'Flow', 'Gale', 'Lava', 'Mist', 'Pyre', 'Rime', 'Spark', 'Tide', 'Vapor', 'Wave', 'Zeph', 'Ember', 'Frost', 'Storm'],
  
  // Dragonborn prefixes - draconic, powerful
  'Dragonborn': ['Ari', 'Bala', 'Drak', 'Garr', 'Kala', 'Kriva', 'Mor', 'Nara', 'Pand', 'Sar', 'Shen', 'Tor', 'Vull', 'Wor', 'Xar', 'Yor', 'Zrin', 'Bhara'],
  
  // Tabaxi prefixes - feline, curious
  'Tabaxi (Catfolk)': ['Cloud', 'Dusk', 'Flint', 'Jade', 'Moon', 'Night', 'Paw', 'Rain', 'Shadow', 'Soft', 'Swift', 'Whisker', 'Amber', 'Claw', 'Fang', 'Hunt', 'Leap', 'Prowl'],
  
  // Centaur prefixes - nature and strength
  'Centaur': ['Ael', 'Bron', 'Chir', 'Gall', 'Hoof', 'Kell', 'Neph', 'Rill', 'Sil', 'Trot', 'Wild', 'Zeph', 'Canter', 'Fern', 'Gallop', 'Herd', 'Meadow', 'Oak'],
  
  // Pixie prefixes - tiny, playful, light
  'Pixie': ['Bell', 'Blink', 'Dew', 'Flit', 'Glim', 'Nim', 'Peri', 'Pix', 'Shim', 'Spark', 'Tink', 'Twink', 'Bub', 'Dand', 'Flut', 'Glit', 'Nect', 'Puff'],
  
  // Treant prefixes - ancient, woody, deep
  'Treant': ['Bur', 'Deep', 'Elder', 'Gnarl', 'Moss', 'Oak', 'Pine', 'Root', 'Twig', 'Wil', 'Wood', 'Yew', 'Bark', 'Elm', 'Green', 'Leaf', 'Old', 'Sap'],
  
  // NEW RACES
  
  // Avian prefixes - bird-like, airy sounds
  'Avian (Birdfolk)': ['Aer', 'Beak', 'Caw', 'Down', 'Feath', 'Glid', 'Hawk', 'Kee', 'Nest', 'Plum', 'Quill', 'Rav', 'Soar', 'Tal', 'Wing', 'Zeph', 'Aer', 'Sky'],
  
  // Goblin prefixes - short, sharp sounds
  'Goblin': ['Bix', 'Clink', 'Drex', 'Fik', 'Grix', 'Ikk', 'Jink', 'Krak', 'Lob', 'Mog', 'Nix', 'Pock', 'Queek', 'Rek', 'Sniv', 'Trink', 'Vex', 'Zix'],
  
  // Gnoll prefixes - yipping, laughing sounds
  'Gnoll': ['Bruk', 'Cruk', 'Drag', 'Fang', 'Gnash', 'Howl', 'Kak', 'Mang', 'Narg', 'Pak', 'Rak', 'Snick', 'Thek', 'Yak', 'Yip', 'Zag', 'Gnar', 'Hyeg'],
  
  // Lizardfolk prefixes - hissing, reptilian sounds
  'Lizardfolk': ['Cess', 'Dhass', 'Fiss', 'Garan', 'Hiss', 'Kaas', 'Liss', 'Mehen', 'Nath', 'Slis', 'Thass', 'Vess', 'Xak', 'Zhass', 'Arat', 'Bask', 'Irsh', 'Krex']
};

export const nameSuffixes = {
  // Default/Human suffixes
  'Human': ['an', 'ard', 'en', 'eth', 'ian', 'ic', 'is', 'or', 'us', 'win', 'wyn', 'yn', 'ak', 'son', 'ton', 'well', 'wick', 'wood'],
  
  // Dwarven suffixes - ending with hard sounds
  'Dwarf': ['ak', 'ar', 'din', 'dur', 'grim', 'in', 'li', 'nar', 'or', 'rim', 'ul', 'ur', 'ald', 'bek', 'gar', 'gund', 'heim', 'mund'],
  
  // Elven suffixes - flowing, soft endings
  'Elf': ['ael', 'dil', 'dir', 'ien', 'ion', 'ith', 'las', 'nor', 'ril', 'val', 'wyn', 'arion', 'elor', 'indil', 'ion', 'orion', 'thien', 'amar'],
  
  // Dark Elven suffixes - exotic, harsher
  'Dark Elf': ['afae', 'aun', 'erd', 'ett', 'ice', 'ith', 'nar', 'rae', 'ryn', 'tin', 'yl', 'yn', 'arra', 'iira', 'ondar', 'rin', 'thrin', 'vrae'],
  
  // Halfling suffixes - simple, friendly
  'Halfling': ['by', 'co', 'doc', 'fer', 'gar', 'in', 'kins', 'mac', 'ner', 'ory', 'po', 'wise', 'adoc', 'buc', 'fast', 'gard', 'man', 'row'],
  
  // Gnome suffixes - clever, technical
  'Gnome': ['addle', 'bit', 'dink', 'fidget', 'gle', 'kin', 'le', 'nagle', 'pop', 'sprocket', 'tweak', 'wicket', 'bang', 'click', 'fizz', 'gink', 'tock', 'whir'],
  
  // Orc suffixes - harsh endings
  'Orc': ['ash', 'bul', 'dar', 'gash', 'gul', 'kar', 'mak', 'rag', 'rok', 'skul', 'tar', 'thor', 'ug', 'um', 'zag', 'bash', 'crush', 'grish'],
  
  // Ogre suffixes - simple, brutish
  'Ogre': ['bash', 'bo', 'chew', 'crush', 'face', 'gor', 'mash', 'nose', 'skull', 'smash', 'toe', 'tooth', 'belly', 'club', 'fist', 'gut', 'head', 'stomp'],
  
  // Golem suffixes - mechanical, constructed
  'Golem': ['bolt', 'cog', 'core', 'forge', 'gear', 'maton', 'mine', 'rod', 'smith', 'stone', 'work', 'wright', 'craft', 'form', 'gild', 'mech', 'tech', 'wheel'],
  
  // Elemental suffixes - elemental terms
  'Elemental': ['ash', 'blaze', 'burn', 'flow', 'flume', 'frost', 'gust', 'shard', 'spark', 'storm', 'surge', 'wind', 'crest', 'flare', 'glow', 'mist', 'tide', 'veil'],
  
  // Dragonborn suffixes - powerful, draconic
  'Dragonborn': ['ax', 'don', 'gon', 'kesh', 'mar', 'mash', 'rash', 'saar', 'shon', 'thus', 'tosh', 'var', 'agos', 'arin', 'dragon', 'krath', 'makar', 'zaad'],
  
  // Tabaxi suffixes - graceful, playful
  'Tabaxi (Catfolk)': ['claw', 'eye', 'fang', 'foot', 'fur', 'leap', 'pad', 'purr', 'tail', 'whisker', 'steps', 'pounce', 'hunter', 'chaser', 'stalker', 'climber', 'jumper', 'prowler'],
  
  // Centaur suffixes - natural, strong
  'Centaur': ['gallop', 'hoof', 'mane', 'plain', 'run', 'stride', 'trot', 'wild', 'wind', 'wood', 'field', 'grass', 'charge', 'forest', 'runner', 'thunder', 'valley', 'breeze'],
  
  // Pixie suffixes - light, airy
  'Pixie': ['beam', 'blink', 'drop', 'dust', 'flight', 'flutter', 'glow', 'light', 'petal', 'shine', 'sparkle', 'wing', 'chime', 'dance', 'flicker', 'glimmer', 'twinkle', 'wisp'],
  
  // Treant suffixes - ancient, nature
  'Treant': ['bark', 'branch', 'leaf', 'moss', 'root', 'sap', 'seed', 'trunk', 'twig', 'wood', 'bloom', 'grove', 'heart', 'knot', 'ring', 'shade', 'thicket', 'year'],
  
  // NEW RACES
  
  // Avian suffixes - bird-like, airy sounds
  'Avian (Birdfolk)': ['cry', 'dive', 'fall', 'flight', 'gale', 'hawk', 'nest', 'song', 'swoop', 'talon', 'tweet', 'wind', 'air', 'feather', 'glide', 'raptor', 'call', 'wing'],
  
  // Goblin suffixes - short, mechanical sounds
  'Goblin': ['bit', 'chet', 'dob', 'fidget', 'get', 'ick', 'jit', 'kit', 'link', 'nob', 'ock', 'pik', 'rat', 'snik', 'tink', 'wit', 'zak', 'bang'],
  
  // Gnoll suffixes - growling, barking sounds
  'Gnoll': ['ar', 'ash', 'ba', 'claw', 'eth', 'fang', 'grin', 'howl', 'laugh', 'na', 'rend', 'snarl', 'thangs', 'ul', 'ya', 'yena', 'zar', 'jaw'],
  
  // Lizardfolk suffixes - hissing, reptilian sounds
  'Lizardfolk': ['ax', 'claw', 'en', 'eth', 'fang', 'gar', 'hiss', 'ith', 'kex', 'lax', 'mix', 'nak', 'sith', 'thas', 'ur', 'vex', 'xil', 'zash']
};

// Last name components by race
export const lastNamePrefixes = {
  // Default/Human last name prefixes
  'Human': ['Black', 'Dawn', 'Grey', 'High', 'Iron', 'Knight', 'Light', 'Night', 'Silver', 'Storm', 'True', 'White', 'Winter', 'Gold', 'Red', 'Wild'],
  
  // Dwarven last name prefixes - metals, stones, crafts
  'Dwarf': ['Anvil', 'Axe', 'Battle', 'Bronze', 'Copper', 'Deep', 'Fire', 'Gold', 'Granite', 'Iron', 'Keg', 'Mountain', 'Oak', 'Rune', 'Silver', 'Steel', 'Stone', 'Thunder'],
  
  // Elven last name prefixes - nature, light
  'Elf': ['Amber', 'Autumn', 'Dawn', 'Dusk', 'Even', 'Glimmer', 'Leaf', 'Moon', 'Morning', 'Silver', 'Star', 'Sun', 'Swift', 'Twilight', 'Willow', 'Wind', 'Whisper', 'Green'],
  
  // Dark Elven last name prefixes - dark, sinister
  'Dark Elf': ['Abyss', 'Black', 'Dark', 'Death', 'Dread', 'Night', 'Obsidian', 'Poison', 'Shadow', 'Silent', 'Spite', 'Venom', 'Void', 'Web', 'Whisper', 'Gloom', 'Dusk', 'Midnight'],
  
  // Halfling last name prefixes - homey, comfort
  'Halfling': ['Apple', 'Brown', 'Burrow', 'Cozy', 'Good', 'Green', 'Hairy', 'Hearth', 'Honey', 'Lucky', 'Merry', 'Meadow', 'Proud', 'Swift', 'Tea', 'Under', 'Warm', 'Wheel'],
  
  // Gnome last name prefixes - inventive, mechanical
  'Gnome': ['Brass', 'Clock', 'Cog', 'Copper', 'Fidget', 'Fizz', 'Gadget', 'Gear', 'Nimble', 'Quick', 'Rattle', 'Spark', 'Spin', 'Sprocket', 'Steam', 'Switch', 'Tangle', 'Tink'],
  
  // Orc last name prefixes - fierce, violent
  'Orc': ['Axe', 'Blade', 'Blood', 'Bone', 'Crag', 'Doom', 'Fang', 'Gore', 'Grim', 'Iron', 'Rage', 'Rip', 'Skull', 'Stone', 'War', 'Beast', 'Death', 'Wrath'],
  
  // Ogre last name prefixes - simple, brutish
  'Ogre': ['Belly', 'Big', 'Bone', 'Club', 'Dirt', 'Fat', 'Fist', 'Heavy', 'Long', 'Many', 'Meat', 'Rock', 'Skull', 'Stone', 'Tree', 'Ugly', 'Wart', 'Eye'],
  
  // Golem last name prefixes - materials, construction
  'Golem': ['Brass', 'Bronze', 'Clock', 'Copper', 'Forge', 'Gear', 'Gilded', 'Iron', 'Metal', 'Piston', 'Rune', 'Steel', 'Stone', 'Tin', 'Wire', 'Cog', 'Mech', 'Alloy'],
  
  // Elemental last name prefixes - elements, forces
  'Elemental': ['Ash', 'Blaze', 'Cinder', 'Crystal', 'Deep', 'Earth', 'Ember', 'Flame', 'Frost', 'Gale', 'Ice', 'Lightning', 'Molten', 'Steam', 'Storm', 'Tidal', 'Thunder', 'Water'],
  
  // Dragonborn last name prefixes - noble, draconic
  'Dragonborn': ['Ancient', 'Argent', 'Black', 'Blue', 'Claw', 'Crown', 'Dragon', 'Ember', 'Flame', 'Gold', 'High', 'Iron', 'Onyx', 'Proud', 'Red', 'Scale', 'Silver', 'Wing'],
  
  // Tabaxi last name prefixes - feline, hunting
  'Tabaxi (Catfolk)': ['Amber', 'Claw', 'Dark', 'Dusk', 'Far', 'Ghost', 'Keen', 'Long', 'Moon', 'Night', 'Quick', 'Shadow', 'Sharp', 'Silent', 'Soft', 'Swift', 'Tree', 'Whisker'],
  
  // Centaur last name prefixes - plains, movement
  'Centaur': ['Field', 'Fleet', 'Forest', 'Grass', 'Green', 'Hard', 'Hill', 'Meadow', 'Moss', 'Oak', 'Plain', 'River', 'Sky', 'Storm', 'Swift', 'Thunder', 'Valley', 'Wind'],
  
  // Pixie last name prefixes - light, flowers
  'Pixie': ['Blossom', 'Bright', 'Butter', 'Dawn', 'Dew', 'Floral', 'Flower', 'Glitter', 'Glow', 'Honey', 'Light', 'Mist', 'Moon', 'Nectar', 'Petal', 'Rainbow', 'Rose', 'Star'],
  
  // Treant last name prefixes - ancient, trees
  'Treant': ['Ancient', 'Deep', 'Elder', 'Great', 'Green', 'Heart', 'Maple', 'Moss', 'Oak', 'Old', 'Pine', 'Root', 'Stone', 'Thousand', 'Wild', 'Willow', 'Wood', 'Spring'],
  
  // NEW RACES
  
  // Avian last name prefixes - aerial, bird-related
  'Avian (Birdfolk)': ['Air', 'Azure', 'Beak', 'Cloud', 'Crest', 'Dawn', 'Dusk', 'Eye', 'Feath', 'Flight', 'Hawk', 'High', 'Sky', 'Soar', 'Swift', 'Talon', 'Wind', 'Wing'],
  
  // Goblin last name prefixes - junk, scavenging
  'Goblin': ['Brass', 'Broken', 'Cog', 'Copper', 'Crate', 'Grime', 'Junk', 'Loose', 'Mud', 'Pinch', 'Pocket', 'Rust', 'Scrap', 'Shiny', 'Smoke', 'Tin', 'Trap', 'Wire'],
  
  // Gnoll last name prefixes - hunting, savage
  'Gnoll': ['Blood', 'Bone', 'Fang', 'Grin', 'Howl', 'Laugh', 'Mange', 'Moon', 'Night', 'Prowl', 'Red', 'Rib', 'Scav', 'Skull', 'Spot', 'Teeth', 'Whoop', 'Wild'],
  
  // Lizardfolk last name prefixes - reptilian, swamp
  'Lizardfolk': ['Bog', 'Cold', 'Croc', 'Deep', 'Drip', 'Fang', 'Mire', 'Mud', 'Murk', 'Poison', 'Rattle', 'Scale', 'Shade', 'Skin', 'Swamp', 'Thorn', 'Venom', 'Wet']
};

export const lastNameSuffixes = {
  // Default/Human last name suffixes
  'Human': ['wood', 'bringer', 'mantle', 'wind', 'hand', 'shade', 'shot', 'fall', 'heart', 'shadow', 'eye', 'tongue', 'walker', 'guard', 'blade'],
  
  // Dwarven last name suffixes - crafting, solidity
  'Dwarf': ['forge', 'hammer', 'beard', 'heart', 'helm', 'fist', 'axe', 'mine', 'keeper', 'shield', 'home', 'anvil', 'arm', 'breaker', 'master', 'delver', 'cutter', 'bane'],
  
  // Elven last name suffixes - grace, nature
  'Elf': ['leaf', 'brook', 'wind', 'star', 'wing', 'shadow', 'whisper', 'weaver', 'blossom', 'breeze', 'oak', 'walker', 'shimmer', 'arrow', 'flower', 'dancer', 'singer', 'dream'],
  
  // Dark Elven last name suffixes - sinister, deadly
  'Dark Elf': ['gaze', 'weaver', 'mind', 'shadow', 'blade', 'spinner', 'kiss', 'walker', 'master', 'heart', 'soul', 'touch', 'hand', 'fang', 'hunter', 'veil', 'slayer', 'binder'],
  
  // Halfling last name suffixes - homey, friendly
  'Halfling': ['bottle', 'barrel', 'bottom', 'hill', 'foot', 'topple', 'fellow', 'step', 'pot', 'bough', 'hearth', 'whistler', 'brew', 'finder', 'maker', 'gardener', 'tiller', 'baker'],
  
  // Gnome last name suffixes - tinkering, clever
  'Gnome': ['sprocket', 'bang', 'bottom', 'wrench', 'gear', 'top', 'widget', 'maker', 'worker', 'spring', 'fuse', 'whistle', 'switch', 'crank', 'bolt', 'wire', 'light', 'whirl'],
  
  // Orc last name suffixes - brutal, violent
  'Orc': ['ripper', 'breaker', 'skull', 'fist', 'seeker', 'jaw', 'splitter', 'maul', 'fury', 'tusk', 'crusher', 'fist', 'chief', 'tooth', 'render', 'maw', 'bane', 'slayer'],
  
  // Ogre last name suffixes - simple, brutal
  'Ogre': ['ache', 'cracker', 'fist', 'mouth', 'gut', 'nose', 'head', 'chewer', 'basher', 'thrower', 'stump', 'mug', 'belly', 'foot', 'finger', 'skin', 'face', 'bulge'],
  
  // Golem last name suffixes - mechanical terms
  'Golem': ['works', 'heart', 'cog', 'frame', 'born', 'forged', 'form', 'whirl', 'gear', 'work', 'heat', 'frame', 'arm', 'core', 'spring', 'wheel', 'form', 'plate'],
  
  // Elemental last name suffixes - elemental forces
  'Elemental': ['heart', 'shard', 'flood', 'spirit', 'wind', 'strike', 'core', 'chaser', 'wave', 'wind', 'spark', 'shaker', 'caller', 'force', 'veins', 'cloud', 'roar', 'shaper'],
  
  // Dragonborn last name suffixes - draconic, powerful
  'Dragonborn': ['scale', 'talon', 'guard', 'heart', 'scale', 'fang', 'wing', 'crest', 'scale', 'wing', 'tooth', 'claw', 'roar', 'born', 'blood', 'horns', 'fire', 'might'],
  
  // Tabaxi last name suffixes - hunting, movement
  'Tabaxi (Catfolk)': ['pounce', 'runner', 'paw', 'leap', 'chaser', 'stalker', 'hunter', 'claw', 'fang', 'foot', 'pad', 'step', 'runner', 'sight', 'whisker', 'paws', 'eye', 'tail'],
  
  // Centaur last name suffixes - running, nature
  'Centaur': ['runner', 'gallop', 'trotter', 'sprinter', 'trot', 'strider', 'ford', 'hooves', 'hoof', 'gallop', 'dash', 'mane', 'flanks', 'hooves', 'back', 'chaser', 'charger', 'racer'],
  
  // Pixie last name suffixes - light, flight
  'Pixie': ['light', 'sparkle', 'wing', 'dust', 'glow', 'shimmer', 'fall', 'light', 'dew', 'lily', 'ling', 'light', 'kin', 'flutter', 'petal', 'glow', 'dance', 'gleam'],
  
  // Treant last name suffixes - trees, age
  'Treant': ['root', 'wood', 'grove', 'oak', 'wood', 'cloak', 'growth', 'binder', 'bark', 'year', 'sap', 'bark', 'roots', 'branch', 'leaves', 'ringer', 'bloom', 'shade'],
  
  // NEW RACES
  
 // Avian last name suffixes - flight, freedom
  'Avian (Birdfolk)': ['beak', 'caller', 'claw', 'diver', 'eye', 'feather', 'flier', 'glider', 'hawk', 'soarer', 'song', 'swooper', 'talon', 'watcher', 'wing', 'raptor', 'nest', 'sky'],
  
  // Goblin last name suffixes - tinkering, scavenging
  'Goblin': ['finder', 'finger', 'grabber', 'keeper', 'picker', 'pincher', 'snatcher', 'stealer', 'taker', 'thief', 'tinker', 'trader', 'trinket', 'digger', 'nicker', 'sneaker', 'hoarder', 'trap'],
  
  // Gnoll last name suffixes - hunting, ferocity
  'Gnoll': ['biter', 'caller', 'eater', 'hunter', 'killer', 'laugher', 'prowler', 'render', 'ripper', 'runner', 'snarler', 'stalker', 'taker', 'tracker', 'yipper', 'howler', 'gnasher', 'pack'],
  
  // Lizardfolk last name suffixes - cold, reptilian
  'Lizardfolk': ['blood', 'claw', 'coil', 'eye', 'fang', 'scale', 'skin', 'slither', 'spine', 'tail', 'tooth', 'venom', 'watcher', 'crawler', 'lurker', 'basker', 'hisser', 'snapper']
};
export const additionalNamePrefixes = {
  'Half-Elf': ['Aer', 'Bran', 'Cal', 'Dar', 'Elr', 'Fae', 'Gal', 'Har', 'Jor', 'Kir', 'Lan', 'Mel', 'Nor', 'Orn', 'Pae', 'Quin', 'Ril', 'Syl', 'Tae', 'Val'],
  
  'Half-Orc': ['Ag', 'Bru', 'Dor', 'Gar', 'Hak', 'Kra', 'Mor', 'Nar', 'Ren', 'Shad', 'Thar', 'Urg', 'Vrak', 'Zag', 'Grom', 'Khal', 'Lok', 'Ruk', 'Thog', 'Vor'],
  
  'Tiefling': ['Ash', 'Bane', 'Crim', 'Dread', 'Flair', 'Grim', 'Hex', 'Isk', 'Jag', 'Karn', 'Luc', 'Mal', 'Nix', 'Omen', 'Pyre', 'Ruin', 'Sin', 'Tyr', 'Vex', 'Zar'],
  
  'Aarakocra': ['Air', 'Breeze', 'Caw', 'Down', 'Eye', 'Feath', 'Gust', 'High', 'Jet', 'Kite', 'Light', 'Mount', 'Nest', 'Open', 'Perch', 'Quill', 'Rise', 'Soar', 'Tall', 'Wing'],
  
  'Aasimar': ['Aur', 'Bless', 'Cel', 'Div', 'Eth', 'Faith', 'Glow', 'Hal', 'Il', 'Just', 'Kal', 'Lum', 'Mer', 'Nim', 'Ora', 'Pris', 'Raph', 'Sera', 'True', 'Vir'],
  
  'Bugbear': ['Brok', 'Crag', 'Drub', 'Flak', 'Grub', 'Hak', 'Krash', 'Lug', 'Morg', 'Nok', 'Pug', 'Ruk', 'Skrag', 'Tark', 'Ugg', 'Vrak', 'Wak', 'Yak', 'Zark', 'Drog'],
  
  'Changeling': ['Any', 'Blank', 'Cloak', 'Dusk', 'Echo', 'Facade', 'Guise', 'Hidden', 'Ink', 'Jest', 'Kith', 'Loom', 'Mask', 'Nim', 'Other', 'Path', 'Quill', 'Ruse', 'Shift', 'Twin'],
  
  'Duergar (Grey Dwarf)': ['Az', 'Blag', 'Chul', 'Durg', 'Ghar', 'Krag', 'Mord', 'Nark', 'Olag', 'Rozk', 'Skarn', 'Thul', 'Uld', 'Vond', 'Zark', 'Drom', 'Glam', 'Korg', 'Thrin', 'Xorn'],
  
  'Firbolg': ['Ald', 'Bran', 'Cor', 'Drum', 'Eld', 'Fir', 'Gald', 'Hald', 'Iron', 'Jor', 'Kild', 'Lorn', 'Mor', 'Nor', 'Oak', 'Pine', 'Quill', 'Rum', 'Stal', 'Thorn'],
  
  'Genasi': ['Breeze', 'Cinder', 'Deep', 'Earth', 'Flow', 'Gale', 'Heat', 'Ice', 'Jet', 'Kin', 'Lava', 'Mist', 'North', 'Ocean', 'Pool', 'Quake', 'Ripple', 'Stone', 'Tide', 'Wave'],
  
  'Gith': ['Aar', 'Dak', 'Fer', 'Gith', 'Hur', 'Ja', 'Kal', 'Lich', 'Mor', 'Nor', 'Pik', 'Quar', 'Ris', 'Su', 'Tel', 'Uthor', 'Vil', 'Xar', 'Yith', 'Zar'],
  
  'Goliath': ['Ag', 'Ber', 'Dar', 'Egg', 'Fur', 'Grav', 'Heg', 'Ili', 'Jar', 'Kav', 'Lok', 'Mant', 'Nag', 'Ov', 'Pau', 'Rau', 'Sar', 'Tar', 'Vag', 'Weg'],
  
  'Hobgoblin': ['Azr', 'Brud', 'Cras', 'Drak', 'Gaz', 'Hazz', 'Krud', 'Laz', 'Maz', 'Nor', 'Ooz', 'Pruk', 'Rekk', 'Shaz', 'Takk', 'Urz', 'Vaz', 'Wux', 'Yaz', 'Zar'],
  
  'Kenku': ['Chit', 'Click', 'Clink', 'Crash', 'Creak', 'Ding', 'Glim', 'Jang', 'Plink', 'Plunk', 'Rattle', 'Ring', 'Rustle', 'Snap', 'Squawk', 'Tink', 'Twang', 'Whir', 'Whisk', 'Zip'],
  
  'Kobold': ['Arix', 'Bix', 'Clink', 'Drak', 'Eep', 'Fik', 'Gix', 'Hix', 'Irk', 'Jink', 'Kip', 'Lerk', 'Mik', 'Nix', 'Orp', 'Pip', 'Quip', 'Rak', 'Skik', 'Tip'],
  
  'Leonin': ['Ajak', 'Bri', 'Chir', 'Drom', 'Erde', 'Fier', 'Grar', 'Holm', 'Irr', 'Jak', 'Kro', 'Leo', 'Mag', 'Nast', 'Orn', 'Prob', 'Ral', 'Sable', 'Thar', 'Vad'],
  
  'Locathah': ['Ar', 'Bub', 'Cor', 'Dor', 'Eb', 'Fin', 'Gill', 'Har', 'Ink', 'Jib', 'Kal', 'Lob', 'Mar', 'Nar', 'Oar', 'Pel', 'Quar', 'Ree', 'Sal', 'Tide'],
  
  'Loxodon': ['Bel', 'Cha', 'Dru', 'Er', 'Fin', 'Gan', 'Hathi', 'Ilra', 'Jam', 'Ket', 'Lox', 'Mau', 'Nil', 'Oro', 'Paj', 'Qin', 'Rai', 'Sen', 'Tor', 'Vaj'],
  
  'Minotaur (Ravnica)': ['Ar', 'Bat', 'Crag', 'Dor', 'Ezk', 'Fal', 'Gor', 'Hrak', 'Igr', 'Jor', 'Krag', 'Lok', 'Mor', 'Nrg', 'Ork', 'Prag', 'Qor', 'Rag', 'Skr', 'Tor'],
  
  'Minotaur (Theros)': ['Ast', 'Bov', 'Cyr', 'Dex', 'Eur', 'Fen', 'Gor', 'Hel', 'Ikar', 'Kir', 'Lys', 'Myr', 'Nax', 'Ox', 'Phor', 'Qar', 'Rho', 'Syr', 'Tau', 'Ur'],
  
  'Satyr': ['Alt', 'Bac', 'Cyn', 'Dio', 'Ech', 'Fau', 'Gal', 'Hec', 'Icar', 'Joll', 'Kyr', 'Lar', 'Mez', 'Nym', 'Orb', 'Pan', 'Quin', 'Rev', 'Syl', 'Tyr'],
  
  'Shifter': ['Ash', 'Badg', 'Claw', 'Darr', 'Echo', 'Fang', 'Growl', 'Hunt', 'Ivy', 'Jump', 'Krel', 'Long', 'Moon', 'Night', 'Oak', 'Paw', 'Quick', 'Rav', 'Swift', 'Tusk'],
  
  'Simic Hybrid': ['Adapt', 'Bio', 'Crest', 'Dev', 'Evo', 'Fin', 'Gill', 'Hydro', 'Inc', 'Jak', 'Kel', 'Lev', 'Mer', 'Nim', 'Ooze', 'Poda', 'Qual', 'Rime', 'Span', 'Trop'],
  
  'Svirfneblin (Deep Gnome)': ['Belk', 'Cryn', 'Dark', 'Eck', 'Flint', 'Gem', 'Hor', 'Irr', 'Jak', 'Kiv', 'Lur', 'Min', 'Nak', 'Orr', 'Peb', 'Quiv', 'Rok', 'Shim', 'Turv', 'Vex'],
  
  'Tortle': ['Arch', 'Beac', 'Coral', 'Drift', 'Ebb', 'Flow', 'Gul', 'Hard', 'Isla', 'Jour', 'Koa', 'Lag', 'Mar', 'Nav', 'Oce', 'Pebble', 'Quill', 'Rip', 'Sand', 'Tide'],
  
  'Triton': ['Adel', 'Bryn', 'Cor', 'Del', 'Ebb', 'Finn', 'Glau', 'Hala', 'Iar', 'Jalar', 'Kora', 'Lir', 'Mal', 'Nar', 'Orin', 'Pelor', 'Quar', 'Rill', 'Sker', 'Trit'],
  
  'Vampire (Legacy)': ['Alder', 'Blood', 'Crim', 'Drac', 'Emb', 'Fang', 'Grim', 'Haunt', 'Imp', 'Jet', 'Kron', 'Luc', 'Mort', 'Noc', 'Orm', 'Phan', 'Quint', 'Rav', 'Scar', 'Thorne'],
  
  'Vedalken': ['Ana', 'Bril', 'Cal', 'Det', 'Epi', 'Fac', 'Gul', 'Hap', 'Inv', 'Jin', 'Kal', 'Log', 'Met', 'Num', 'Occ', 'Pon', 'Quar', 'Ral', 'Sig', 'The'],
  
  'Warforged': ['Anchor', 'Blade', 'Cog', 'Drift', 'Edge', 'Flint', 'Gear', 'Hash', 'Iron', 'Jack', 'Keen', 'Lance', 'Mill', 'Nail', 'Oar', 'Pike', 'Ratchet', 'Steel', 'Tap', 'Vault'],
  
  'Yuan-Ti Pureblood': ['Asa', 'Besh', 'Cass', 'Damu', 'Eshe', 'Fane', 'Glis', 'Heth', 'Ish', 'Jeth', 'Kass', 'Lith', 'Mes', 'Neth', 'Oshe', 'Pesh', 'Quem', 'Ras', 'Slis', 'Teth']
};

// Additional name suffixes
export const additionalNameSuffixes = {
  'Half-Elf': ['ael', 'ara', 'eth', 'iel', 'ion', 'is', 'or', 'ual', 'wyn', 'yn', 'anna', 'ere', 'ian', 'ira', 'lian', 'rin', 'thien', 'vera', 'yra', 'zia'],
  
  'Half-Orc': ['ak', 'ar', 'ash', 'eg', 'gor', 'gug', 'kar', 'nak', 'og', 'rak', 'ruk', 'tar', 'ug', 'uk', 'ura', 'akh', 'all', 'arg', 'gak', 'mak'],
  
  'Tiefling': ['adin', 'afir', 'akas', 'akmenos', 'arius', 'axan', 'cerces', 'ekemon', 'emon', 'evius', 'ichar', 'idos', 'ifer', 'ikor', 'ios', 'ius', 'opheles', 'or', 'thus', 'usto'],
  
  'Aarakocra': ['ash', 'call', 'chirp', 'cree', 'daal', 'flit', 'gust', 'keer', 'kwaa', 'loor', 'meer', 'nir', 'raa', 'seen', 'seer', 'soar', 'sula', 'trach', 'wind', 'zeed'],
  
  'Aasimar': ['ael', 'ami', 'ana', 'anni', 'ar', 'arah', 'aret', 'athiel', 'est', 'iel', 'ine', 'ira', 'liel', 'mari', 'niel', 'orah', 'phyr', 'riel', 'tiel', 'xis'],
  
  'Bugbear': ['bash', 'claw', 'crush', 'darg', 'fist', 'gnak', 'grush', 'hash', 'jibb', 'krag', 'lug', 'morg', 'narl', 'ong', 'pung', 'rok', 'smash', 'targ', 'wak', 'zag'],
  
  'Changeling': ['bit', 'face', 'form', 'guise', 'lier', 'mask', 'mien', 'none', 'other', 'pose', 'self', 'shade', 'shell', 'shift', 'skin', 'slate', 'tale', 'veil', 'ware', 'who'],
  
  'Duergar (Grey Dwarf)': ['ack', 'anvik', 'ark', 'bar', 'dek', 'derk', 'dig', 'dom', 'dorn', 'garn', 'grim', 'hek', 'iggs', 'kor', 'lode', 'mok', 'nack', 'rak', 'tor', 'vek'],
  
  'Firbolg': ['arth', 'beam', 'carn', 'deep', 'flor', 'glen', 'gorn', 'heart', 'hew', 'lan', 'leaf', 'lore', 'moss', 'path', 'root', 'stride', 'thorn', 'wood', 'wort', 'yew'],
  
  'Genasi': ['blaze', 'born', 'breath', 'burst', 'deep', 'flow', 'flux', 'gale', 'heart', 'light', 'melt', 'quake', 'ridge', 'rock', 'shine', 'spark', 'stream', 'surge', 'tide', 'wave'],
  
  'Gith': ['ak', 'al', 'ath', 'dak', 'dith', 'du', 'k', 'kk', 'lith', 'm', 'rn', 'sh', 'th', 'thid', 'v', 'val', 'vera', 'x', 'y', 'zaer'],
  
  'Goliath': ['ak', 'al', 'amak', 'arot', 'ega', 'ered', 'helmn', 'idon', 'igig', 'ikan', 'kanu', 'katho', 'ki', 'lan', 'milat', 'nalla', 'o', 'oroth', 'reo', 'thal'],
  
  'Hobgoblin': ['akt', 'arg', 'ast', 'dar', 'ekt', 'gak', 'gar', 'git', 'grat', 'jak', 'krat', 'kut', 'lag', 'lurk', 'narek', 'rag', 'rat', 'rok', 'tak', 'zit'],
  
  'Kenku': ['chat', 'chir', 'clatter', 'crash', 'creak', 'jingle', 'ping', 'pling', 'rustle', 'scrape', 'screech', 'shriek', 'skree', 'squawk', 'thud', 'tink', 'tweet', 'whir', 'whistle', 'whoosh'],
  
  'Kobold': ['ark', 'ax', 'dip', 'ex', 'fex', 'gix', 'ix', 'kex', 'kip', 'nix', 'ock', 'ok', 'ox', 'p', 'pak', 'pik', 'ripper', 'tik', 'wex', 'yip'],
  
  'Leonin': ['ar', 'arus', 'atr', 'aya', 'eros', 'ian', 'ias', 'ikis', 'ios', 'ipan', 'iro', 'is', 'ius', 'or', 'ora', 'oros', 'os', 'r', 'sis', 'stus'],
  
  'Locathah': ['ar', 'asta', 'blue', 'bubble', 'coral', 'current', 'deep', 'fin', 'flow', 'froth', 'gill', 'hook', 'mer', 'net', 'pearl', 'reef', 'salt', 'sand', 'shell', 'weed'],
  
  'Loxodon': ['ba', 'bash', 'baj', 'bor', 'dah', 'dash', 'dir', 'do', 'dross', 'ev', 'hara', 'jin', 'lok', 'moth', 'odo', 'rat', 'rash', 'tho', 'thun', 'us'],
  
  'Minotaur (Ravnica)': ['ag', 'ak', 'da', 'gar', 'grax', 'il', 'ioth', 'jor', 'kos', 'kral', 'kras', 'mak', 'mor', 'narek', 'on', 'orast', 'ox', 'thag', 'thok', 'thos'],
  
  'Minotaur (Theros)': ['aeus', 'agoras', 'ander', 'andros', 'athon', 'eikos', 'enes', 'enthos', 'eros', 'eus', 'ian', 'ios', 'ippe', 'ippos', 'is', 'ius', 'on', 'or', 'os', 'us'],
  
  'Satyr': ['aris', 'arus', 'dor', 'eros', 'ian', 'ikles', 'ios', 'ippus', 'is', 'ius', 'kon', 'lyn', 'mon', 'nos', 'on', 'or', 'os', 'ros', 'sus', 'xus'],
  
  'Shifter': ['claw', 'fang', 'fur', 'growl', 'howl', 'leap', 'paw', 'rage', 'razor', 'rend', 'roar', 'runner', 'shadow', 'stalker', 'stripe', 'talon', 'tooth', 'tracker', 'watcher', 'wild'],
  
  'Simic Hybrid': ['adon', 'ara', 'blast', 'crest', 'deep', 'fin', 'flow', 'form', 'growth', 'hydra', 'morph', 'plex', 'pore', 'scale', 'spawn', 'tide', 'trope', 'upa', 'vat', 'warp'],
  
  'Svirfneblin (Deep Gnome)': ['ber', 'bik', 'bur', 'daer', 'dek', 'din', 'dor', 'fast', 'gem', 'ik', 'il', 'mit', 'nik', 'on', 'pik', 'rim', 'rok', 'tin', 'ur', 'ver'],
  
  'Tortle': ['agoon', 'bay', 'cean', 'est', 'grove', 'ife', 'ile', 'iner', 'land', 'logger', 'nds', 'nel', 'ney', 'nner', 'reef', 'sel', 'shell', 'shore', 'tide', 'veler'],
  
  'Triton': ['an', 'arin', 'as', 'bis', 'don', 'ian', 'ios', 'is', 'ius', 'les', 'lios', 'llan', 'llara', 'lles', 'llir', 'meros', 'na', 'nus', 'on', 'us'],
  
  'Vampire (Legacy)': ['ange', 'blood', 'crest', 'dimir', 'dusk', 'fang', 'gast', 'grave', 'hex', 'krev', 'loth', 'mar', 'mir', 'morte', 'night', 'quist', 'shade', 'thorne', 'vein', 'wyrm'],
  
  'Vedalken': ['ax', 'drius', 'fo', 'ic', 'ik', 'is', 'ix', 'lar', 'lian', 'lin', 'lyr', 'mon', 'ptis', 'qar', 'rian', 'rin', 'run', 'tis', 'vac', 'vix'],
  
  'Warforged': ['arm', 'blade', 'bolt', 'forge', 'gear', 'hammer', 'heart', 'iron', 'mech', 'metal', 'plate', 'shield', 'smith', 'spark', 'steel', 'tank', 'vault', 'ward', 'wire', 'wrench'],
  
  'Yuan-Ti Pureblood': ['ali', 'ar', 'as', 'asa', 'ashi', 'ashti', 'ess', 'ett', 'ith', 'ixil', 'izi', 'kess', 'kis', 'liss', 'mash', 'mez', 'neth', 'ras', 'sas', 'thi']
};

// Additional last name prefixes
export const additionalLastNamePrefixes = {
  'Half-Elf': ['Amber', 'Autumn', 'Bright', 'Dusk', 'Dawn', 'Day', 'Dew', 'Ever', 'Far', 'Green', 'High', 'Light', 'Moon', 'Morning', 'Night', 'Rain', 'River', 'Shadow', 'Silver', 'Star'],
  
  'Half-Orc': ['Battle', 'Blood', 'Bone', 'Broken', 'Crag', 'Death', 'Doom', 'Fierce', 'Fire', 'Gore', 'Grim', 'Iron', 'Rage', 'Rock', 'Scar', 'Stone', 'Storm', 'Strong', 'War', 'Wild'],
  
  'Tiefling': ['Ash', 'Black', 'Blood', 'Cinder', 'Crime', 'Dark', 'Deep', 'Devil', 'Doom', 'Dread', 'Fall', 'Fear', 'Flint', 'Fury', 'Gloom', 'Hell', 'Night', 'Rage', 'Sin', 'Winter'],
  
  'Aarakocra': ['Air', 'Breeze', 'Bright', 'Cloud', 'Dawn', 'Dusk', 'Far', 'Fast', 'Free', 'High', 'Keen', 'Light', 'Open', 'Quick', 'Sharp', 'Sky', 'Soar', 'Swift', 'Vast', 'Wind'],
  
  'Aasimar': ['Bright', 'Celestial', 'Dawn', 'Divine', 'Exalted', 'Glory', 'Golden', 'Good', 'Grace', 'Halo', 'Heaven', 'Holy', 'Light', 'Noble', 'Pure', 'Radiant', 'Sacred', 'Saint', 'Silver', 'True'],
  
  'Bugbear': ['Big', 'Blood', 'Bone', 'Break', 'Brute', 'Crush', 'Dark', 'Death', 'Doom', 'Gore', 'Grim', 'Gut', 'Kill', 'Night', 'Pain', 'Rip', 'Savage', 'Scar', 'Shadow', 'Skull'],
  
  'Changeling': ['Blank', 'Cloud', 'Ever', 'Fickle', 'Fluid', 'Gray', 'Guise', 'Lost', 'Many', 'Mist', 'Morph', 'Mystery', 'Phantom', 'Riddle', 'Shadow', 'Shift', 'Swift', 'True', 'Unknown', 'Veil'],
  
  'Duergar (Grey Dwarf)': ['Ash', 'Black', 'Dark', 'Deep', 'Doom', 'Dusk', 'Gloom', 'Gray', 'Grim', 'Hidden', 'Iron', 'Night', 'Obsidian', 'Onyx', 'Shadow', 'Slate', 'Smoke', 'Stone', 'Under', 'Void'],
  
  'Firbolg': ['Ancient', 'Boulder', 'Deep', 'Elder', 'Fern', 'Forest', 'Gentle', 'Green', 'Grove', 'Hill', 'Moss', 'Mountain', 'Oak', 'Pine', 'River', 'Stone', 'Tall', 'Tree', 'Wild', 'Wood'],
  
  'Genasi': ['Ash', 'Blaze', 'Boulder', 'Clay', 'Crystal', 'Ember', 'Flame', 'Flow', 'Flux', 'Foam', 'Frost', 'Geyser', 'Lava', 'Mist', 'Mud', 'Pebble', 'Ripple', 'Spark', 'Stone', 'Wave'],
  
  'Gith': ['Astral', 'Battle', 'Blade', 'Free', 'Gith', 'Mind', 'Oath', 'Plane', 'Psi', 'Rage', 'Red', 'Silver', 'Song', 'Steel', 'Storm', 'Sword', 'Thought', 'War', 'Wind', 'Zil'],
  
  'Goliath': ['Battle', 'Cloud', 'Cold', 'Crag', 'Dawn', 'Fell', 'Fierce', 'Flint', 'Frost', 'High', 'Iron', 'Lone', 'Mammoth', 'Mountain', 'Peak', 'Rock', 'Sky', 'Stone', 'Storm', 'Thunder'],
  
  'Hobgoblin': ['Black', 'Blood', 'Claw', 'Dark', 'Death', 'Dire', 'Doom', 'Dread', 'Fear', 'Fire', 'Grim', 'Iron', 'Night', 'Red', 'Scar', 'Sharp', 'Skull', 'Smoke', 'War', 'Wrath'],
  
  'Kenku': ['Brass', 'Chime', 'Copper', 'Echo', 'Glass', 'Jingle', 'Laughter', 'Mimicry', 'Mirror', 'Raven', 'Rustle', 'Shadow', 'Sharp', 'Shell', 'Silver', 'Sound', 'Theft', 'Tinkle', 'Whisper', 'Wind'],
  
  'Kobold': ['Copper', 'Deep', 'Dim', 'Dragon', 'Dark', 'Flickering', 'Gem', 'Glint', 'Glow', 'Gold', 'Little', 'Mine', 'Quick', 'Red', 'Rock', 'Scaly', 'Silver', 'Swift', 'Tiny', 'Tunnel'],
  
  'Leonin': ['Amber', 'Brave', 'Dawn', 'Fierce', 'Gold', 'Golden', 'Honor', 'Hunt', 'Keen', 'Maned', 'Night', 'Noble', 'Proud', 'Roar', 'Savanna', 'Sun', 'Swift', 'Tall', 'Thunder', 'Wild'],
  
  'Locathah': ['Blue', 'Coral', 'Current', 'Deep', 'Fishing', 'Flow', 'Foam', 'Free', 'Gill', 'Ocean', 'Pearl', 'Reef', 'River', 'Salt', 'Scale', 'Sea', 'Tide', 'Wave', 'Wet', 'Weed'],
  
  'Loxodon': ['Ancient', 'Calm', 'Deep', 'Eternal', 'Far', 'Gray', 'Great', 'Heavy', 'Honored', 'Iron', 'Long', 'Memory', 'Mind', 'Quiet', 'Remembered', 'Sigiled', 'Stone', 'Thought', 'Tusked', 'Wise'],
  
  'Minotaur (Ravnica)': ['Battle', 'Black', 'Blood', 'Brass', 'Bronze', 'Bull', 'Crag', 'Crimson', 'Dark', 'Fire', 'Fury', 'Gold', 'Gore', 'Horn', 'Iron', 'Red', 'Storm', 'Thunder', 'War', 'Wreck'],
  
  'Minotaur (Theros)': ['Ancient', 'Bronze', 'Bull', 'Dark', 'Doom', 'Fate', 'Glory', 'Gold', 'Great', 'Horn', 'Iron', 'Labyrinth', 'Maze', 'Mighty', 'Myth', 'Old', 'Path', 'Stone', 'Titan', 'Wonder'],
  
  'Satyr': ['Autumn', 'Charming', 'Dance', 'Dusk', 'Ever', 'Fey', 'Forest', 'Free', 'Goat', 'Gold', 'Green', 'Laugh', 'Meadow', 'Merry', 'Music', 'Oak', 'Pan', 'Piping', 'Wild', 'Wine'],
  
  'Shifter': ['Autumn', 'Blood', 'Claw', 'Dusk', 'Far', 'Fang', 'Fell', 'Forest', 'Mountain', 'Night', 'River', 'Shadow', 'Silent', 'Silver', 'Swift', 'Tooth', 'Wild', 'Wind', 'Winter', 'Wood'],
  
  'Simic Hybrid': ['Adapt', 'Aqua', 'Bio', 'Blue', 'Coral', 'Cyan', 'Deep', 'Evolve', 'Flow', 'Flux', 'Green', 'Growth', 'Hybrid', 'Marine', 'Muta', 'Ocean', 'Prime', 'Regen', 'Sea', 'Tide'],
  
  'Svirfneblin (Deep Gnome)': ['Black', 'Cavern', 'Crystal', 'Dark', 'Deep', 'Dim', 'Flint', 'Gem', 'Glitter', 'Granite', 'Grey', 'Hidden', 'Iron', 'Mithral', 'Obsidian', 'Onyx', 'Shadow', 'Silent', 'Stone', 'Under'],
  
  'Tortle': ['Amber', 'Ancient', 'Blue', 'Calm', 'Coral', 'Crystal', 'Deep', 'Green', 'Jade', 'Ocean', 'Old', 'Pearl', 'Quiet', 'Reef', 'Sand', 'Serene', 'Shell', 'Shore', 'Tide', 'Wave'],
  
  'Triton': ['Aqua', 'Azure', 'Blue', 'Coral', 'Crystal', 'Deep', 'Foam', 'Jade', 'Marine', 'Ocean', 'Pearl', 'Regal', 'Salt', 'Sea', 'Surf', 'Tide', 'Trench', 'Turquoise', 'Water', 'Wave'],
  
  'Vampire (Legacy)': ['Ancient', 'Black', 'Blood', 'Crimson', 'Dark', 'Dusk', 'Eternal', 'Fang', 'Gloom', 'Grave', 'Gray', 'Haunt', 'Mist', 'Night', 'Pale', 'Red', 'Shadow', 'Shade', 'Tomb', 'Veil'],
  
  'Vedalken': ['Aether', 'Blue', 'Construct', 'Crystal', 'Efficient', 'Ether', 'Flux', 'Grand', 'Ideal', 'Invention', 'Logic', 'Mech', 'Method', 'Perfect', 'Progress', 'Reason', 'Scholar', 'Theory', 'Thought', 'Wonder'],
  
  'Warforged': ['Adamant', 'Bronze', 'Brass', 'Copper', 'Flux', 'Forge', 'Gold', 'Iron', 'Mithral', 'Obsidian', 'Onyx', 'Opal', 'Platinum', 'Rune', 'Silver', 'Steel', 'Stone', 'Thunder', 'Titanium', 'Uru'],
  
  'Yuan-Ti Pureblood': ['Ancient', 'Coil', 'Cold', 'Dark', 'Eternal', 'Fang', 'Forked', 'Hidden', 'High', 'Hiss', 'Obsidian', 'Poison', 'Royal', 'Scale', 'Secret', 'Serpent', 'Silent', 'Sleek', 'Venom', 'Viper']
};

// Additional last name suffixes
export const additionalLastNameSuffixes = {
  'Half-Elf': ['blossom', 'branch', 'breeze', 'brook', 'flower', 'glade', 'grove', 'leaf', 'light', 'moon', 'petal', 'river', 'shadow', 'song', 'star', 'vale', 'water', 'whisper', 'wind', 'wood'],
  
  'Half-Orc': ['axe', 'basher', 'blade', 'blood', 'breaker', 'cleaver', 'crusher', 'cutter', 'fang', 'fist', 'killer', 'ripper', 'roar', 'scar', 'skull', 'slayer', 'smasher', 'tusk', 'warrior', 'wolf'],
  
  'Tiefling': ['band', 'blade', 'blood', 'bringer', 'caller', 'dancer', 'darkness', 'flame', 'gaze', 'hunter', 'keeper', 'night', 'seeker', 'shadow', 'sin', 'singer', 'slayer', 'watcher', 'whisper', 'winter'],
  
  'Aarakocra': ['beak', 'claw', 'diver', 'feather', 'flight', 'flyer', 'glider', 'screech', 'sky', 'soarer', 'swooper', 'talon', 'watcher', 'whistle', 'wind', 'windrider', 'wing', 'singer', 'nest', 'cloud'],
  
  'Aasimar': ['bearer', 'blessed', 'bright', 'bringer', 'dawn', 'day', 'guard', 'heart', 'hope', 'kissed', 'light', 'marked', 'ray', 'shield', 'singer', 'soul', 'spirit', 'star', 'touched', 'watcher'],
  
  'Bugbear': ['basher', 'breaker', 'claw', 'cleaver', 'crusher', 'ear', 'eye', 'fang', 'fist', 'foot', 'growl', 'lurker', 'mauler', 'ripper', 'roarer', 'skull', 'smasher', 'stalker', 'taker', 'tooth'],
  
  'Changeling': ['face', 'form', 'guise', 'mask', 'morph', 'name', 'one', 'path', 'self', 'shade', 'shadow', 'shape', 'shell', 'shift', 'shifter', 'skin', 'truth', 'veil', 'visage', 'walker'],
  
  'Duergar (Grey Dwarf)': ['anvil', 'axe', 'beard', 'cleaver', 'delver', 'digger', 'forge', 'hammer', 'hand', 'heart', 'iron', 'miner', 'pick', 'shaper', 'shield', 'stone', 'striker', 'tunnel', 'under', 'worker'],
  
  'Firbolg': ['bark', 'branch', 'foot', 'friend', 'glade', 'grove', 'guard', 'heart', 'keeper', 'leaf', 'meadow', 'oak', 'path', 'root', 'speaker', 'stride', 'tender', 'thorn', 'watcher', 'wood'],
  
  'Genasi': ['blast', 'born', 'breath', 'caller', 'crest', 'flow', 'force', 'former', 'fury', 'keeper', 'kin', 'mover', 'seeker', 'shard', 'shaper', 'spark', 'surge', 'tide', 'wielder', 'wind'],
  
  'Gith': ['blade', 'breaker', 'destroyer', 'fist', 'freedom', 'hunter', 'killer', 'mind', 'oath', 'raider', 'seeker', 'slayer', 'stalker', 'sword', 'thought', 'walker', 'warrior', 'weaver', 'wind', 'wrack'],
  
  'Goliath': ['bearer', 'bender', 'born', 'breaker', 'bringer', 'caller', 'carrier', 'climber', 'daughter', 'friend', 'heart', 'herder', 'hunter', 'jumper', 'master', 'slayer', 'son', 'tracker', 'walker', 'watcher'],
  
  'Hobgoblin': ['blade', 'blood', 'claw', 'cleaver', 'crusher', 'fang', 'fist', 'hand', 'killer', 'master', 'ripper', 'scar', 'seeker', 'skull', 'slayer', 'smasher', 'sword', 'taker', 'warrior', 'wrecker'],
  
  'Kenku': ['caller', 'chatter', 'claw', 'collector', 'echo', 'keeper', 'mimic', 'mocker', 'picker', 'repeater', 'snatcher', 'speaker', 'stealer', 'taker', 'talker', 'thief', 'voice', 'watcher', 'whisper', 'windspeaker'],
  
  'Kobold': ['biter', 'caller', 'claw', 'delver', 'digger', 'finder', 'hand', 'hunter', 'keeper', 'miner', 'scale', 'scurrier', 'seeker', 'setter', 'sneak', 'speaker', 'trap', 'tunneler', 'watcher', 'worker'],
  
  'Leonin': ['claw', 'fang', 'heart', 'hunter', 'keeper', 'king', 'mane', 'pride', 'protector', 'prowler', 'roar', 'runner', 'stalker', 'sun', 'tail', 'tooth', 'watcher', 'whisker', 'wild', 'wind'],
  
  'Locathah': ['current', 'diver', 'fin', 'fisher', 'flow', 'gill', 'keeper', 'pearl', 'reef', 'river', 'scale', 'sea', 'seeker', 'shore', 'stream', 'swimmer', 'tide', 'wake', 'water', 'wave'],
  
  'Loxodon': ['bringer', 'caller', 'heart', 'hide', 'horn', 'keeper', 'memory', 'mind', 'path', 'protector', 'rememberer', 'sage', 'seeker', 'speaker', 'thought', 'trunk', 'tusk', 'walker', 'watcher', 'wisdom'],
  
  'Minotaur (Ravnica)': ['bearer', 'breaker', 'cleaver', 'crusher', 'destroyer', 'fist', 'gore', 'hammer', 'hand', 'heart', 'horn', 'rage', 'ram', 'seeker', 'slayer', 'smasher', 'striker', 'taker', 'warrior', 'wrecker'],
  
  'Minotaur (Theros)': ['bearer', 'born', 'breaker', 'bringer', 'delver', 'finder', 'horn', 'keeper', 'maker', 'master', 'might', 'seeker', 'singer', 'slayer', 'strider', 'turner', 'walker', 'weaver', 'wielder', 'worker'],
  
  'Satyr': ['dancer', 'drinker', 'foot', 'friend', 'heart', 'hoof', 'horn', 'joy', 'laugh', 'leaf', 'music', 'piper', 'player', 'revel', 'singer', 'sky', 'smile', 'song', 'wine', 'woods'],
  
  'Shifter': ['claw', 'fang', 'feral', 'fur', 'growl', 'heart', 'hide', 'howl', 'hunter', 'instinct', 'moon', 'pelt', 'prowler', 'runner', 'scent', 'shadow', 'stalker', 'wild', 'watcher', 'wolf'],
  
  'Simic Hybrid': ['alter', 'born', 'breather', 'caller', 'crafter', 'drifter', 'evolver', 'fin', 'flow', 'former', 'gilled', 'grafter', 'growth', 'hybrid', 'krasis', 'maker', 'mutant', 'scale', 'shifter', 'spawn'],
  
  'Svirfneblin (Deep Gnome)': ['cave', 'cutter', 'delver', 'digger', 'eye', 'finder', 'gem', 'hand', 'heart', 'miner', 'rock', 'seeker', 'shadow', 'shaper', 'stone', 'traveler', 'tunnel', 'vein', 'walker', 'whisper'],
  
  'Tortle': ['back', 'beak', 'claw', 'deep', 'diver', 'eye', 'fin', 'flipper', 'heart', 'keeper', 'shell', 'shield', 'slow', 'snap', 'swimmer', 'tide', 'walker', 'watcher', 'wise', 'year'],
  
  'Triton': ['caller', 'coral', 'current', 'deep', 'diver', 'fin', 'flow', 'foam', 'heart', 'reef', 'scale', 'sea', 'seeker', 'singer', 'speaker', 'tide', 'watcher', 'water', 'wave', 'weaver'],
  
  'Vampire (Legacy)': ['blood', 'born', 'count', 'drinker', 'fang', 'grave', 'heart', 'hunter', 'keepe', 'lord', 'night', 'seeker', 'shade', 'shadow', 'slayer', 'thirst', 'vein', 'watcher', 'whisper', 'wyrm'],
  
  'Vedalken': ['born', 'calculate', 'crafter', 'finder', 'former', 'hand', 'inventor', 'keeper', 'maker', 'mind', 'perfect', 'scholar', 'seeker', 'shaper', 'smith', 'thinker', 'thought', 'weaver', 'worker', 'wright'],
  
  'Warforged': ['born', 'built', 'cog', 'construct', 'creation', 'forge', 'form', 'frame', 'gear', 'heart', 'iron', 'made', 'mech', 'mind', 'plate', 'steel', 'unit', 'war', 'worker', 'wright'],
  
  'Yuan-Ti Pureblood': ['blood', 'coil', 'eye', 'fang', 'heart', 'hood', 'keeper', 'scale', 'seeker', 'serpent', 'shadow', 'slither', 'speaker', 'tongue', 'venom', 'viper', 'watcher', 'whisper', 'winder', 'wyrm']
};

// Helper function to get race-specific name components or default to human components
export const getRaceNameComponents = (race) => {
  return {
    prefixes: namePrefixes[race] || namePrefixes['Human'],
    suffixes: nameSuffixes[race] || nameSuffixes['Human'],
    lastNamePrefixes: lastNamePrefixes[race] || lastNamePrefixes['Human'],
    lastNameSuffixes: lastNameSuffixes[race] || lastNameSuffixes['Human']
  };
};
