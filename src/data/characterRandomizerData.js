// This file combines all character randomizer data into a single export
// Make sure to use the correct file extensions
export { races, raceDescriptions } from './characterRandomizer/races';
export { classes, classDescriptions } from './characterRandomizer/classes';
export { backgrounds } from './characterRandomizer/backgrounds';
export { features } from './characterRandomizer/features';
export { appearances } from './characterRandomizer/appearances';
export { deities } from './characterRandomizer/deities';
export { 
  namePrefixes, 
  nameSuffixes, 
  lastNamePrefixes, 
  lastNameSuffixes, 
  getRaceNameComponents,
  // Add the new name component exports
  additionalNamePrefixes,
  additionalNameSuffixes,
  additionalLastNamePrefixes,
  additionalLastNameSuffixes
} from './characterRandomizer/nameComponents';
