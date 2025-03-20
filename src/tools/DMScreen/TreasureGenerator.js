// src/tools/DMScreen/TreasureGenerator.js
import React, { useState } from 'react';
import { encounterData } from '../../data/dmScreenData';

// Treasure generator data
const treasureTypes = [
  { id: 'individual', name: 'Individual Treasure' },
  { id: 'hoard', name: 'Treasure Hoard' },
  { id: 'magic-items', name: 'Magic Items' },
];

const challengeRatings = [
  { id: '0-4', name: 'CR 0-4', individual: { cp: '5d6', sp: '3d6', gp: '0', pp: '0' }, hoard: { cp: '6d6×100', sp: '3d6×100', gp: '2d6×10', pp: '0' } },
  { id: '5-10', name: 'CR 5-10', individual: { cp: '4d6×10', sp: '3d6×10', gp: '2d6×10', pp: '0' }, hoard: { cp: '2d6×100', sp: '2d6×1000', gp: '6d6×100', pp: '3d6×10' } },
  { id: '11-16', name: 'CR 11-16', individual: { cp: '0', sp: '4d6×100', gp: '1d6×100', pp: '1d6×10' }, hoard: { cp: '0', sp: '0', gp: '4d6×1000', pp: '5d6×100' } },
  { id: '17+', name: 'CR 17+', individual: { cp: '0', sp: '0', gp: '2d6×100', pp: '3d6×10' }, hoard: { cp: '0', sp: '0', gp: '12d6×1000', pp: '8d6×1000' } },
];

const magicItemTables = [
  { 
    id: 'a', 
    name: 'Table A (Minor Items)',
    items: [
      { range: '01-50', description: 'Potion of healing' },
      { range: '51-60', description: 'Spell scroll (cantrip)' },
      { range: '61-70', description: 'Potion of climbing' },
      { range: '71-90', description: 'Spell scroll (1st level)' },
      { range: '91-94', description: 'Spell scroll (2nd level)' },
      { range: '95-98', description: 'Potion of greater healing' },
      { range: '99-00', description: 'Bag of holding' },
    ]
  },
  { 
    id: 'b', 
    name: 'Table B (Medium Items)',
    items: [
      { range: '01-15', description: 'Potion of greater healing' },
      { range: '16-22', description: 'Potion of fire breath' },
      { range: '23-29', description: 'Potion of resistance' },
      { range: '30-34', description: 'Ammunition, +1' },
      { range: '35-39', description: 'Potion of animal friendship' },
      { range: '40-44', description: 'Potion of hill giant strength' },
      { range: '45-49', description: 'Potion of water breathing' },
      { range: '50-54', description: 'Spell scroll (2nd level)' },
      { range: '55-59', description: 'Spell scroll (3rd level)' },
      { range: '60-64', description: 'Bag of holding' },
      { range: '65-67', description: 'Keoghtom\'s ointment' },
      { range: '68-70', description: 'Oil of slipperiness' },
      { range: '71-73', description: 'Dust of disappearance' },
      { range: '74-75', description: 'Dust of dryness' },
      { range: '76-77', description: 'Dust of sneezing and choking' },
      { range: '78-79', description: 'Elemental gem' },
      { range: '80-81', description: 'Philter of love' },
      { range: '82-83', description: 'Alchemy jug' },
      { range: '84-85', description: 'Cap of water breathing' },
      { range: '86-87', description: 'Cloak of the manta ray' },
      { range: '88-89', description: 'Driftglobe' },
      { range: '90-91', description: 'Goggles of night' },
      { range: '92-93', description: 'Helm of comprehending languages' },
      { range: '94-95', description: 'Immovable rod' },
      { range: '96-97', description: 'Lantern of revealing' },
      { range: '98-99', description: 'Mariner\'s armor' },
      { range: '00', description: 'Mithral armor' },
    ]
  },
  { 
    id: 'c', 
    name: 'Table C (Major Items)',
    items: [
      { range: '01-15', description: 'Potion of superior healing' },
      { range: '16-22', description: 'Spell scroll (4th level)' },
      { range: '23-27', description: 'Ammunition, +2' },
      { range: '28-32', description: 'Potion of clairvoyance' },
      { range: '33-37', description: 'Potion of diminution' },
      { range: '38-42', description: 'Potion of gaseous form' },
      { range: '43-47', description: 'Potion of frost giant strength' },
      { range: '48-52', description: 'Potion of stone giant strength' },
      { range: '53-57', description: 'Potion of heroism' },
      { range: '58-62', description: 'Potion of invulnerability' },
      { range: '63-67', description: 'Potion of mind reading' },
      { range: '68-72', description: 'Spell scroll (5th level)' },
      { range: '73-75', description: 'Elixir of health' },
      { range: '76-78', description: 'Oil of etherealness' },
      { range: '79-81', description: 'Potion of fire giant strength' },
      { range: '82-84', description: 'Quaal\'s feather token' },
      { range: '85-87', description: 'Scroll of protection' },
      { range: '88-89', description: 'Bag of beans' },
      { range: '90-91', description: 'Bead of force' },
      { range: '92-93', description: 'Chime of opening' },
      { range: '94-95', description: 'Decanter of endless water' },
      { range: '96-97', description: 'Eyes of minute seeing' },
      { range: '98-99', description: 'Folding boat' },
      { range: '00', description: 'Heward\'s handy haversack' },
    ]
  },
];

// Art objects and gemstones
const valuableItems = [
  {
    id: '25gp',
    name: '25 gp Art Objects',
    items: [
      'Silver ewer', 'Carved bone statuette', 'Small gold bracelet', 
      'Cloth-of-gold vestments', 'Black velvet mask with silver thread', 
      'Copper chalice with silver filigree', 'Pair of engraved bone dice',
      'Small mirror in painted wooden frame', 'Embroidered silk handkerchief',
      'Gold locket with painted portrait inside'
    ]
  },
  {
    id: '50gp',
    name: '50 gp Gemstones',
    items: [
      'Bloodstone', 'Carnelian', 'Chalcedony', 'Chrysoprase', 'Citrine',
      'Jasper', 'Moonstone', 'Onyx', 'Quartz', 'Sardonyx', 'Tiger eye',
      'Turquoise', 'Zircon'
    ]
  },
  {
    id: '100gp',
    name: '100 gp Art Objects',
    items: [
      'Silver chalice with moonstones', 'Silver-plated steel longsword with jet set in hilt',
      'Carved harp of exotic wood with ivory inlay', 'Small gold idol',
      'Gold dragon comb with red garnet eye', 'Bottle stopper cork embossed with gold leaf',
      'Ceremonial electrum dagger with a black pearl in the pommel',
      'Silver and gold brooch', 'Obsidian statuette with gold fittings and inlay',
      'Painted gold war mask'
    ]
  },
  {
    id: '250gp',
    name: '250 gp Gemstones',
    items: [
      'Amber', 'Amethyst', 'Chrysoberyl', 'Coral', 'Garnet', 'Jade',
      'Jet', 'Pearl', 'Spinel', 'Tourmaline'
    ]
  },
  {
    id: '500gp',
    name: '500 gp Art Objects',
    items: [
      'Silver comb with moonstones', 'Silver-plated steel longsword with jet in hilt',
      'Carved ivory statuette', 'Large gold bracelet',
      'Bronze crown', 'Silk robe with gold embroidery',
      'Large well-made tapestry', 'Brass mug with jade inlays',
      'Obsidian statuette with gold fittings',
      'Painted gold war mask'
    ]
  },
  {
    id: '750gp',
    name: '750 gp Gemstones',
    items: [
      'Black pearl', 'Deep blue spinel', 'Golden yellow topaz'
    ]
  },
  {
    id: '1000gp',
    name: '1000 gp Art Objects',
    items: [
      'Silver chalice set with moonstones', 'Gold ring set with bloodstones',
      'Carved ivory statuette', 'Gold cup set with emeralds',
      'Gold jewelry box with platinum filigree', 'Painted gold child\'s sarcophagus',
      'Jade game board with solid gold playing pieces',
      'Bejeweled ivory drinking horn with gold filigree'
    ]
  },
];

export default function TreasureGenerator() {
  const [treasureType, setTreasureType] = useState('individual');
  const [challengeRating, setChallengeRating] = useState('0-4');
  const [magicItemTable, setMagicItemTable] = useState('a');
  const [numMagicItems, setNumMagicItems] = useState(1);
  const [generatedTreasure, setGeneratedTreasure] = useState(null);
  const [generatedItems, setGeneratedItems] = useState([]);
  const [includeValuables, setIncludeValuables] = useState(false);
  const [valuableType, setValuableType] = useState('25gp');
  const [numValuables, setNumValuables] = useState(1);
  const [generatedValuables, setGeneratedValuables] = useState([]);
  
  // Simple dice roll parser
  const rollDice = (formula) => {
    if (!formula || formula === '0') return 0;
    
    // Parse the formula (e.g., "3d6×100")
    const match = formula.match(/(\d+)d(\d+)(?:×(\d+))?/);
    if (!match) return 0;
    
    const [_, numDice, dieSize, multiplier] = match;
    let result = 0;
    
    // Roll the dice
    for (let i = 0; i < parseInt(numDice); i++) {
      result += Math.floor(Math.random() * parseInt(dieSize)) + 1;
    }
    
    // Apply multiplier if present
    if (multiplier) {
      result *= parseInt(multiplier);
    }
    
    return result;
  };
  
  // Generate treasure based on selected options
  const generateTreasure = () => {
    // Find the selected CR tier
    const crTier = challengeRatings.find(cr => cr.id === challengeRating);
    
    if (!crTier) return;
    
    // Get the correct formula based on treasure type
    const formula = crTier[treasureType];
    
    // Roll for each currency
    const treasure = {
      cp: formula.cp ? rollDice(formula.cp) : 0,
      sp: formula.sp ? rollDice(formula.sp) : 0,
      gp: formula.gp ? rollDice(formula.gp) : 0,
      pp: formula.pp ? rollDice(formula.pp) : 0
    };
    
    setGeneratedTreasure(treasure);
    
    // Generate magic items if selected
    if (treasureType === 'magic-items') {
      const selectedTable = magicItemTables.find(table => table.id === magicItemTable);
      
      if (selectedTable) {
        const items = [];
        
        for (let i = 0; i < numMagicItems; i++) {
          // Roll d100
          const roll = Math.floor(Math.random() * 100) + 1;
          let itemDescription = '';
          
          // Find the item in the table
          for (const item of selectedTable.items) {
            const range = item.range.split('-');
            const min = parseInt(range[0]);
            const max = range.length > 1 ? parseInt(range[1]) : min;
            
            if (roll >= min && roll <= max) {
              itemDescription = item.description;
              break;
            }
          }
          
          items.push({
            roll: roll.toString().padStart(2, '0'),
            description: itemDescription
          });
        }
        
        setGeneratedItems(items);
      }
    }
    
    // Generate valuables if selected
    if (includeValuables) {
      const selectedValuables = valuableItems.find(v => v.id === valuableType);
      
      if (selectedValuables) {
        const valuables = [];
        
        for (let i = 0; i < numValuables; i++) {
          // Get random item from the list
          const randomIndex = Math.floor(Math.random() * selectedValuables.items.length);
          const item = selectedValuables.items[randomIndex];
          
          valuables.push({
            type: selectedValuables.name,
            description: item
          });
        }
        
        setGeneratedValuables(valuables);
      }
    } else {
      setGeneratedValuables([]);
    }
  };
  
  // Format currency for display
  const formatCurrency = (value, type) => {
    if (value === 0) return '';
    return `${value} ${type}`;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Treasure Generator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Generator Controls */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Generator Settings</h3>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Treasure Type</label>
            <select 
              value={treasureType} 
              onChange={(e) => setTreasureType(e.target.value)}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              {treasureTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Challenge Rating</label>
            <select 
              value={challengeRating} 
              onChange={(e) => setChallengeRating(e.target.value)}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              {challengeRatings.map(cr => (
                <option key={cr.id} value={cr.id}>{cr.name}</option>
              ))}
            </select>
          </div>
          
          {treasureType === 'magic-items' && (
            <>
              <div className="mb-3">
                <label className="block text-amber-200 text-sm font-medium mb-1">Magic Item Table</label>
                <select 
                  value={magicItemTable} 
                  onChange={(e) => setMagicItemTable(e.target.value)}
                  className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                >
                  {magicItemTables.map(table => (
                    <option key={table.id} value={table.id}>{table.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3">
                <label className="block text-amber-200 text-sm font-medium mb-1">Number of Items</label>
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  value={numMagicItems} 
                  onChange={(e) => setNumMagicItems(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                  className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                />
              </div>
            </>
          )}
          
          <div className="mb-3">
            <label className="flex items-center text-amber-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={includeValuables}
                onChange={(e) => setIncludeValuables(e.target.checked)}
                className="mr-2 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              Include Art Objects/Gemstones
            </label>
          </div>
          
          {includeValuables && (
            <>
              <div className="mb-3">
                <label className="block text-amber-200 text-sm font-medium mb-1">Valuable Type</label>
                <select 
                  value={valuableType} 
                  onChange={(e) => setValuableType(e.target.value)}
                  className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                >
                  {valuableItems.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3">
                <label className="block text-amber-200 text-sm font-medium mb-1">Number of Valuables</label>
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  value={numValuables} 
                  onChange={(e) => setNumValuables(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                  className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
                />
              </div>
            </>
          )}
          
          <button 
            onClick={generateTreasure}
            className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
          >
            Generate Treasure
          </button>
        </div>
        
        {/* Generated Treasure Display */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Generated Treasure</h3>
          
          {generatedTreasure ? (
            <div>
              <div className="mb-4">
                <h4 className="text-amber-200 font-medium mb-2">Coins</h4>
                <div className="grid grid-cols-2 gap-2 p-2 bg-stone-700 rounded-lg">
                  {generatedTreasure.cp > 0 && (
                    <div className="flex justify-between">
                      <span>Copper Pieces:</span>
                      <span className="font-medium">{generatedTreasure.cp}</span>
                    </div>
                  )}
                  {generatedTreasure.sp > 0 && (
                    <div className="flex justify-between">
                      <span>Silver Pieces:</span>
                      <span className="font-medium">{generatedTreasure.sp}</span>
                    </div>
                  )}
                  {generatedTreasure.gp > 0 && (
                    <div className="flex justify-between">
                      <span>Gold Pieces:</span>
                      <span className="font-medium">{generatedTreasure.gp}</span>
                    </div>
                  )}
                  {generatedTreasure.pp > 0 && (
                    <div className="flex justify-between">
                      <span>Platinum Pieces:</span>
                      <span className="font-medium">{generatedTreasure.pp}</span>
                    </div>
                  )}
                  
                  {generatedTreasure.cp === 0 && generatedTreasure.sp === 0 && generatedTreasure.gp === 0 && generatedTreasure.pp === 0 && (
                    <div className="col-span-2 text-amber-100/60 text-center py-2">
                      No coins in this treasure.
                    </div>
                  )}
                </div>
              </div>
              
              {generatedItems.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-amber-200 font-medium mb-2">Magic Items</h4>
                  <ul className="space-y-1 p-2 bg-stone-700 rounded-lg">
                    {generatedItems.map((item, index) => (
                      <li key={index} className="flex">
                        <span className="text-amber-200 w-8 shrink-0">{item.roll}</span>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {generatedValuables.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-amber-200 font-medium mb-2">Art Objects & Gemstones</h4>
                  <ul className="space-y-1 p-2 bg-stone-700 rounded-lg">
                    {generatedValuables.map((item, index) => (
                      <li key={index}>
                        <span className="text-amber-200">{item.description}</span>
                        <span className="text-xs text-amber-100/80 ml-2">({item.type})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="text-center mt-4">
                <button 
                  onClick={() => {
                    // Calculate total value
                    const total = generatedTreasure.cp / 100 + generatedTreasure.sp / 10 + generatedTreasure.gp + generatedTreasure.pp * 10;
                    const valuableValue = generatedValuables.reduce((sum, item) => {
                      const match = item.type.match(/(\d+)/);
                      return sum + (match ? parseInt(match[1]) : 0);
                    }, 0);
                    
                    alert(`Total value: ${Math.floor(total + valuableValue)} gp`);
                  }}
                  className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-amber-100 text-sm rounded-lg"
                >
                  Calculate Total Value
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              Configure settings and generate treasure to see results here.
            </div>
          )}
        </div>
      </div>
      
      {/* Magic Item Reference (Collapsed by default) */}
      <div className="bg-stone-800 rounded-lg overflow-hidden border border-amber-900/30 mb-6">
        <div 
          className="flex justify-between items-center p-3 bg-stone-700 cursor-pointer"
          onClick={() => document.getElementById('magic-items-reference').classList.toggle('hidden')}
        >
          <h3 className="font-medium text-amber-100">Magic Item Tables Reference</h3>
          <span className="text-xs text-amber-100/60">Click to Expand/Collapse</span>
        </div>
        
        <div id="magic-items-reference" className="hidden p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {magicItemTables.map(table => (
              <div key={table.id} className="bg-stone-700 p-3 rounded-lg">
                <h4 className="text-amber-200 font-medium mb-2">{table.name}</h4>
                <div className="max-h-60 overflow-y-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-xs text-amber-100/80 pb-1">Roll</th>
                        <th className="text-left text-xs text-amber-100/80 pb-1">Item</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.items.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-stone-800/30' : ''}>
                          <td className="py-1 px-1 text-sm">{item.range}</td>
                          <td className="py-1 px-1 text-sm">{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
