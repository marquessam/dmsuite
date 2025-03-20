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
  'Treant': ['Bur', 'Deep', 'Elder', 'Gnarl', 'Moss', 'Oak', 'Pine', 'Root', 'Twig', 'Wil', 'Wood', 'Yew', 'Bark', 'Elm', 'Green', 'Leaf', 'Old', 'Sap']
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
  'Treant': ['bark', 'branch', 'leaf', 'moss', 'root', 'sap', 'seed', 'trunk', 'twig', 'wood', 'bloom', 'grove', 'heart', 'knot', 'ring', 'shade', 'thicket', 'year']
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
  'Treant': ['Ancient', 'Deep', 'Elder', 'Great', 'Green', 'Heart', 'Maple', 'Moss', 'Oak', 'Old', 'Pine', 'Root', 'Stone', 'Thousand', 'Wild', 'Willow', 'Wood', 'Spring']
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
  'Treant': ['root', 'wood', 'grove', 'oak', 'wood', 'cloak', 'growth', 'binder', 'bark', 'year', 'sap', 'bark', 'roots', 'branch', 'leaves', 'ringer', 'bloom', 'shade']
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
