// src/data/dmscreen/dice.js
// Dice types and presets for the dice roller

export const diceTypes = [
  { value: 'd4', faces: 4 },
  { value: 'd6', faces: 6 },
  { value: 'd8', faces: 8 },
  { value: 'd10', faces: 10 },
  { value: 'd12', faces: 12 },
  { value: 'd20', faces: 20 },
  { value: 'd100', faces: 100 }
];

// Common dice roll presets
export const dicePresets = [
  { name: "Attack Roll", dice: "1d20" },
  { name: "Damage (Dagger)", dice: "1d4" },
  { name: "Damage (Longsword)", dice: "1d8" },
  { name: "Damage (Greatsword)", dice: "2d6" },
  { name: "Sneak Attack (3rd level)", dice: "2d6" },
  { name: "Fireball (5th level)", dice: "10d6" },
  { name: "Healing Potion", dice: "2d4+2" },
  { name: "Death Save", dice: "1d20" }
];

// Dice roll utilities
export const diceUtils = {
  parseRollString: (rollString) => {
    // Parse a string like "2d6+3" into { numDice: 2, diceType: 6, modifier: 3 }
    const regex = /^(\d+)d(\d+)(?:([+-])(\d+))?$/;
    const match = rollString.match(regex);
    
    if (!match) return null;
    
    const numDice = parseInt(match[1]);
    const diceType = parseInt(match[2]);
    const hasModifier = match[3] !== undefined;
    const modifierSign = hasModifier ? match[3] : '+';
    const modifierValue = hasModifier ? parseInt(match[4]) : 0;
    const modifier = modifierSign === '+' ? modifierValue : -modifierValue;
    
    return {
      numDice,
      diceType,
      modifier
    };
  },
  
  rollDice: (numDice, diceType, modifier = 0) => {
    let results = [];
    let total = 0;
    
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * diceType) + 1;
      results.push(roll);
      total += roll;
    }
    
    return {
      results,
      total: total + modifier,
      modifier
    };
  }
};
