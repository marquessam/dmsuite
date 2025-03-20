// src/data/characterRandomizer/sourceMaterials.js
export const sourceMaterials = [
  {
    id: 'core',
    name: 'Core (Player\'s Handbook)',
    races: ['Human', 'Dwarf', 'Elf', 'Halfling', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling']
  },
  {
    id: 'volo',
    name: 'Volo\'s Guide to Monsters',
    races: ['Aasimar', 'Tabaxi (Catfolk)', 'Kenku', 'Lizardfolk', 'Hobgoblin', 'Bugbear', 'Goblin', 'Kobold', 'Firbolg', 'Yuan-Ti Pureblood']
  },
  {
    id: 'elemental',
    name: 'Elemental Evil Player\'s Companion',
    races: ['Aarakocra', 'Genasi', 'Goliath']
  },
  {
    id: 'mordenkainen',
    name: 'Mordenkainen\'s Tome of Foes',
    races: ['Gith', 'Svirfneblin (Deep Gnome)', 'Duergar (Grey Dwarf)']
  },
  {
    id: 'eberron',
    name: 'Eberron: Rising from the Last War',
    races: ['Changeling', 'Shifter', 'Warforged']
  },
  {
    id: 'ravnica',
    name: 'Guildmasters\' Guide to Ravnica',
    races: ['Simic Hybrid', 'Vedalken', 'Loxodon', 'Minotaur (Ravnica)']
  },
  {
    id: 'theros',
    name: 'Mythic Odysseys of Theros',
    races: ['Centaur', 'Satyr', 'Leonin', 'Minotaur (Theros)']
  },
  {
    id: 'saltmarsh',
    name: 'Ghosts of Saltmarsh',
    races: ['Locathah', 'Triton']
  },
  {
    id: 'dmg',
    name: 'Dungeon Master\'s Guide',
    races: ['Vampire (Legacy)']
  },
  {
    id: 'custom',
    name: 'Custom/Homebrew',
    races: ['Dark Elf', 'Ogre', 'Golem', 'Elemental', 'Pixie', 'Treant', 'Avian (Birdfolk)', 'Gnoll']
  }
];

// Default active source materials
export const defaultActiveSources = ['core', 'volo', 'custom'];

// Helper function to get all races from active source materials
export function getRacesFromSources(activeSources) {
  // If no sources are active, return an empty array
  if (!activeSources || activeSources.length === 0) {
    return [];
  }
  
  // Get all races from active sources
  const racesFromSources = sourceMaterials
    .filter(source => activeSources.includes(source.id))
    .flatMap(source => source.races);
  
  // Remove duplicates (some races might appear in multiple sources)
  return [...new Set(racesFromSources)].sort();
}

// Helper function to find which source a race belongs to
export function findSourceForRace(race) {
  for (const source of sourceMaterials) {
    if (source.races.includes(race)) {
      return source.name;
    }
  }
  return 'Unknown Source';
}
