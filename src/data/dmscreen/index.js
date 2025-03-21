// src/data/dmscreen/index.js
// This file exports all the DM Screen data from individual files

import { conditionsData } from './conditions';
import { rulesData } from './rules';
import { combatData, combatFlow, coverRules } from './combat';
import { itemsData } from './items';
import { magicItemsData, magicItemTables } from './magicItems';
import { weaponsData, weaponProperties } from './weapons';
import { armorData, armorRules } from './armor';
import { spellsData } from './spells';
import { classFeatures, classProficiencies } from './classFeatures';
import { archetypes } from './archetypes';
import { encounterData, monstersByEnvironment, encounterBalancing } from './encounters';
import { npcData, nameComponents, npcStatBlocks } from './npcs';
import { diceTypes, dicePresets, diceUtils } from './dice';
import { monsters, monsterTypes, monsterEnvironments, legendaryMonsters, monsterTraits, monsterActionsByType } from './monsters';
import { 
  locationTypes, 
  castleGenerator, 
  tavernGenerator, 
  dungeonGenerator, 
  settlementGenerator, 
  wildernessLocations, 
  trapGenerator, 
  roomFeatures 
} from './locations';

export {
  // Conditions
  conditionsData,
  
  // Rules
  rulesData,
  
  // Combat
  combatData,
  combatFlow,
  coverRules,
  
  // Items
  itemsData,
  magicItemsData,
  magicItemTables,
  
  // Weapons & Armor
  weaponsData,
  weaponProperties,
  armorData,
  armorRules,
  
  // Character Classes
  spellsData,
  classFeatures,
  classProficiencies,
  archetypes,
  
  // Encounters & NPCs
  encounterData,
  monstersByEnvironment,
  encounterBalancing,
  npcData,
  nameComponents,
  npcStatBlocks,
  
  // Dice
  diceTypes,
  dicePresets,
  diceUtils,
  
  // Monsters
  monsters,
  monsterTypes,
  monsterEnvironments,
  legendaryMonsters,
  monsterTraits,
  monsterActionsByType,
  
  // Locations
  locationTypes,
  castleGenerator,
  tavernGenerator,
  dungeonGenerator,
  settlementGenerator,
  wildernessLocations,
  trapGenerator,
  roomFeatures
};
