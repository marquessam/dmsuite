// src/tools/DMScreen/ShopPanel.js
import React, { useState, useEffect, useMemo } from 'react';
import { 
  itemsData, 
  weaponsData, 
  armorData,
  magicItemsData,
  npcData,
  nameComponents
} from '../../data/dmscreen';

export default function ShopPanel() {
  // Shop state
  const [shopType, setShopType] = useState('general');
  const [shopTier, setShopTier] = useState('average'); // poor, average, wealthy, premium
  const [shopLocation, setShopLocation] = useState('urban'); // urban, rural, frontier
  const [searchTerm, setSearchTerm] = useState('');
  
  // Shopkeeper state
  const [shopkeeper, setShopkeeper] = useState(null);
  
  // Inventory state
  const [inventory, setInventory] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  
  // UI state
  const [expandedItems, setExpandedItems] = useState(new Set());
  
  // Shop type definitions
  const shopTypes = [
    { id: 'general', name: 'General Store', description: 'Basic equipment and supplies', inventoryTypes: ['gear'] },
    { id: 'blacksmith', name: 'Blacksmith', description: 'Weapons, armor, and metal goods', inventoryTypes: ['weapons', 'armor'] },
    { id: 'armorer', name: 'Armorer', description: 'Specialized armor and shields', inventoryTypes: ['armor'] },
    { id: 'weaponsmith', name: 'Weaponsmith', description: 'Specialized weapons', inventoryTypes: ['weapons'] },
    { id: 'alchemist', name: 'Alchemist', description: 'Potions, herbs, and ingredients', inventoryTypes: ['gear', 'potions'] },
    { id: 'magic_emporium', name: 'Magic Emporium', description: 'Magical items and supplies', inventoryTypes: ['magic'] },
    { id: 'adventuring_supplies', name: 'Adventuring Supplies', description: 'Equipment for dungeon delving', inventoryTypes: ['gear', 'weapons', 'armor'] },
    { id: 'fancy_clothier', name: 'Fancy Clothier', description: 'Fine clothing and accessories', inventoryTypes: ['gear'] }
  ];
  
  // Price modifiers based on shop tier and location
  const priceModifiers = {
    shop_tier: {
      poor: 0.8,
      average: 1.0,
      wealthy: 1.3,
      premium: 1.7
    },
    location: {
      urban: 1.0, 
      rural: 1.1,
      frontier: 1.5
    }
  };
  
  // Name generator for shop names
  const generateShopName = () => {
    const adjectives = [
      "Golden", "Silver", "Copper", "Iron", "Bronze", "Rusty", "Gleaming", 
      "Dancing", "Prancing", "Smiling", "Laughing", "Whispering", "Howling",
      "Brave", "Noble", "Royal", "Imperial", "Mystic", "Arcane", "Enchanted",
      "Lucky", "Fortunate", "Blessed", "Sacred", "Hallowed", "Wandering"
    ];
    
    const nouns = {
      general: ["Market", "Store", "Goods", "Exchange", "Emporium", "Bazaar", "Supplies", "Provisions"],
      blacksmith: ["Anvil", "Hammer", "Forge", "Steel", "Smith", "Metalworks", "Ironworks"],
      armorer: ["Shield", "Plate", "Armor", "Bulwark", "Guardian", "Protector"],
      weaponsmith: ["Blade", "Sword", "Axe", "Spear", "Edge", "Point", "Arsenal", "Armory"],
      alchemist: ["Cauldron", "Potion", "Elixir", "Brew", "Flask", "Mixture", "Concoction"],
      magic_emporium: ["Wand", "Staff", "Scroll", "Grimoire", "Amulet", "Arcanum", "Spellbook"],
      adventuring_supplies: ["Backpack", "Lantern", "Rope", "Compass", "Map", "Expedition", "Journey"],
      fancy_clothier: ["Thread", "Needle", "Fabric", "Wardrobe", "Tailor", "Garment", "Fashion"]
    };
    
    const suffixes = ["Shop", "Store", "Emporium", "Establishment", "Place", "Shoppe", "Post", "Depot", "House"];
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[shopType][Math.floor(Math.random() * nouns[shopType].length)];
    const suffix = (Math.random() > 0.5) ? " " + suffixes[Math.floor(Math.random() * suffixes.length)] : "";
    
    return `The ${adj} ${noun}${suffix}`;
  };
  
  // Generate a random NPC name
  const generateNPCName = () => {
    const { firstNamePrefixes, firstNameSuffixes, lastNamePrefixes, lastNameSuffixes } = nameComponents;
    
    const firstNamePrefix = firstNamePrefixes[Math.floor(Math.random() * firstNamePrefixes.length)];
    const firstNameSuffix = firstNameSuffixes[Math.floor(Math.random() * firstNameSuffixes.length)];
    const lastNamePrefix = lastNamePrefixes[Math.floor(Math.random() * lastNamePrefixes.length)];
    const lastNameSuffix = lastNameSuffixes[Math.floor(Math.random() * lastNameSuffixes.length)];
    
    const firstName = `${firstNamePrefix}${firstNameSuffix}`;
    const lastName = `${lastNamePrefix}${lastNameSuffix}`;
    
    return { firstName, lastName };
  };
  
  // Generate a new shopkeeper
  const generateShopkeeper = () => {
    const { firstName, lastName } = generateNPCName();
    const personality = npcData.personalities[Math.floor(Math.random() * npcData.personalities.length)];
    const motivation = npcData.motivations[Math.floor(Math.random() * npcData.motivations.length)];
    const quirk = npcData.quirks[Math.floor(Math.random() * npcData.quirks.length)];
    const appearance = npcData.appearance ? npcData.appearance[Math.floor(Math.random() * npcData.appearance.length)] : '';
    
    return {
      name: `${firstName} ${lastName}`,
      shopName: generateShopName(),
      personality,
      motivation,
      quirk,
      appearance
    };
  };
  
  // Generate inventory based on shop type
  const generateInventory = (type, tier, location) => {
    const shopDefinition = shopTypes.find(shop => shop.id === type);
    const inventoryTypes = shopDefinition ? shopDefinition.inventoryTypes : ['gear'];
    const priceMultiplier = priceModifiers.shop_tier[tier] * priceModifiers.location[location];
    
    let shopInventory = [];
    
    // Add standard items based on inventory types
    if (inventoryTypes.includes('gear')) {
      // Add general gear
      itemsData.forEach(category => {
        if (category.category === 'gear') {
          if (category.items) {
            // Take a subset of items based on shop tier
            let itemsToAdd = [];
            switch(tier) {
              case 'poor':
                itemsToAdd = category.items.slice(0, Math.max(2, Math.floor(category.items.length * 0.4)));
                break;
              case 'average':
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.7));
                break;
              case 'wealthy':
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.9));
                break;
              case 'premium':
                itemsToAdd = category.items;
                break;
              default:
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.7));
            }
            
            // Add items with adjusted prices
            itemsToAdd.forEach(item => {
              const itemWithPrice = { 
                ...item, 
                category: category.name,
                calculatedPrice: calculateAdjustedPrice(item.cost, priceMultiplier),
                originalPrice: item.cost
              };
              shopInventory.push(itemWithPrice);
            });
          }
        }
      });
    }
    
    if (inventoryTypes.includes('weapons')) {
      // Add weapons
      weaponsData.forEach(category => {
        // Filter weapon types based on shop tier
        if ((tier === 'poor' && category.type !== 'Martial Melee' && category.type !== 'Martial Ranged') ||
            (tier === 'average' && category.type !== 'Martial Ranged') ||
            (tier === 'wealthy' || tier === 'premium')) {
          
          if (category.items) {
            // Take a subset of items based on shop tier
            let itemsToAdd = [];
            switch(tier) {
              case 'poor':
                itemsToAdd = category.items.slice(0, Math.max(2, Math.floor(category.items.length * 0.3)));
                break;
              case 'average':
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.6));
                break;
              case 'wealthy':
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.9));
                break;
              case 'premium':
                itemsToAdd = category.items;
                break;
              default:
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.6));
            }
            
            // Add items with adjusted prices
            itemsToAdd.forEach(item => {
              const itemWithPrice = { 
                ...item, 
                category: category.name,
                calculatedPrice: calculateAdjustedPrice(item.cost, priceMultiplier),
                originalPrice: item.cost
              };
              shopInventory.push(itemWithPrice);
            });
          }
        }
      });
    }
    
    if (inventoryTypes.includes('armor')) {
      // Add armor
      armorData.forEach(category => {
        // Filter armor types based on shop tier
        if ((tier === 'poor' && category.type === 'Light Armor') ||
            (tier === 'average' && (category.type === 'Light Armor' || category.type === 'Medium Armor')) ||
            (tier === 'wealthy' || tier === 'premium')) {
          
          if (category.items) {
            // Take a subset of items based on shop tier
            let itemsToAdd = [];
            switch(tier) {
              case 'poor':
                itemsToAdd = category.items.slice(0, Math.max(1, Math.floor(category.items.length * 0.3)));
                break;
              case 'average':
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.6));
                break;
              case 'wealthy':
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.9));
                break;
              case 'premium':
                itemsToAdd = category.items;
                break;
              default:
                itemsToAdd = category.items.slice(0, Math.floor(category.items.length * 0.6));
            }
            
            // Add items with adjusted prices
            itemsToAdd.forEach(item => {
              const itemWithPrice = { 
                ...item, 
                category: category.name,
                calculatedPrice: calculateAdjustedPrice(item.cost, priceMultiplier),
                originalPrice: item.cost
              };
              shopInventory.push(itemWithPrice);
            });
          }
        }
      });
    }
    
    if (inventoryTypes.includes('magic')) {
      // Add magic items based on shop tier
      magicItemsData.forEach(category => {
        if (category.items) {
          let itemsToAdd = [];
          
          // Determine which items to include based on rarity and shop tier
          switch(tier) {
            case 'poor':
              // Poor magic shops hardly have any magic items
              itemsToAdd = category.items.filter(item => 
                item.rarity === 'Common'
              ).slice(0, Math.max(1, Math.floor(category.items.length * 0.1)));
              break;
            case 'average':
              itemsToAdd = category.items.filter(item => 
                item.rarity === 'Common' || item.rarity === 'Uncommon'
              ).slice(0, Math.floor(category.items.length * 0.3));
              break;
            case 'wealthy':
              itemsToAdd = category.items.filter(item => 
                item.rarity === 'Common' || item.rarity === 'Uncommon' || item.rarity === 'Rare'
              ).slice(0, Math.floor(category.items.length * 0.5));
              break;
            case 'premium':
              itemsToAdd = category.items.filter(item => 
                item.rarity !== 'Legendary' && item.rarity !== 'Artifact'
              ).slice(0, Math.floor(category.items.length * 0.7));
              break;
            default:
              itemsToAdd = category.items.filter(item => 
                item.rarity === 'Common' || item.rarity === 'Uncommon'
              ).slice(0, Math.floor(category.items.length * 0.3));
          }
          
          // Add items with adjusted prices
          itemsToAdd.forEach(item => {
            const itemWithPrice = { 
              ...item, 
              category: category.name,
              calculatedPrice: calculateAdjustedPrice(item.cost, priceMultiplier),
              originalPrice: item.cost
            };
            shopInventory.push(itemWithPrice);
          });
        }
      });
    }
    
    if (inventoryTypes.includes('potions')) {
      // Add potions
      const potionCategory = magicItemsData.find(cat => cat.id === 'potions');
      if (potionCategory && potionCategory.items) {
        let itemsToAdd = [];
        
        // Determine which potions to include based on shop tier
        switch(tier) {
          case 'poor':
            itemsToAdd = potionCategory.items.filter(item => 
              item.rarity === 'Common'
            ).slice(0, Math.max(1, Math.floor(potionCategory.items.length * 0.2)));
            break;
          case 'average':
            itemsToAdd = potionCategory.items.filter(item => 
              item.rarity === 'Common' || item.rarity === 'Uncommon'
            ).slice(0, Math.floor(potionCategory.items.length * 0.5));
            break;
          case 'wealthy':
            itemsToAdd = potionCategory.items.filter(item => 
              item.rarity === 'Common' || item.rarity === 'Uncommon' || item.rarity === 'Rare'
            ).slice(0, Math.floor(potionCategory.items.length * 0.8));
            break;
          case 'premium':
            itemsToAdd = potionCategory.items;
            break;
          default:
            itemsToAdd = potionCategory.items.filter(item => 
              item.rarity === 'Common' || item.rarity === 'Uncommon'
            ).slice(0, Math.floor(potionCategory.items.length * 0.5));
        }
        
        // Add potions with adjusted prices
        itemsToAdd.forEach(item => {
          const itemWithPrice = { 
            ...item, 
            category: potionCategory.name,
            calculatedPrice: calculateAdjustedPrice(item.cost, priceMultiplier),
            originalPrice: item.cost
          };
          shopInventory.push(itemWithPrice);
        });
      }
    }
    
    return shopInventory;
  };
  
  // Calculate adjusted price based on shop tier and location
  const calculateAdjustedPrice = (originalPrice, multiplier) => {
    if (!originalPrice) return "—";
    
    // Handle prices like "50 gp"
    const matches = originalPrice.match(/(\d+,*\d*)\s*([a-zA-Z]{2})/);
    if (matches) {
      const numericValue = parseFloat(matches[1].replace(',', ''));
      const currency = matches[2];
      
      // Apply multiplier
      const adjustedValue = Math.round(numericValue * multiplier);
      
      // Format with commas for thousands
      return `${adjustedValue.toLocaleString()} ${currency}`;
    }
    
    return originalPrice;
  };
  
  // Filter items based on search term
  const filterItems = (items, search) => {
    if (!search) return items;
    
    const searchLower = search.toLowerCase();
    return items.filter(item => 
      item.name.toLowerCase().includes(searchLower) ||
      (item.description && item.description.toLowerCase().includes(searchLower))
    );
  };
  
  // Toggle item expanded state
  const toggleItem = (itemId) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };
  
  // Group items by category
  const groupItemsByCategory = (items) => {
    return items.reduce((acc, item) => {
      const category = item.category || 'Miscellaneous';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
  };
  
  // Get rarity color class for magic items
  const getRarityColorClass = (rarity) => {
    switch (rarity?.toLowerCase()) {
      case 'common': return 'text-gray-200';
      case 'uncommon': return 'text-green-300';
      case 'rare': return 'text-blue-300';
      case 'very rare': return 'text-purple-300';
      case 'legendary': return 'text-orange-300';
      case 'artifact': return 'text-rose-300';
      default: return 'text-amber-100';
    }
  };
  
  // Initialize shop when type, tier, or location changes
  useEffect(() => {
    const newInventory = generateInventory(shopType, shopTier, shopLocation);
    setInventory(newInventory);
    setDisplayedItems(newInventory);
    setShopkeeper(generateShopkeeper());
  }, [shopType, shopTier, shopLocation]);
  
  // Update displayed items when search changes
  useEffect(() => {
    setDisplayedItems(filterItems(inventory, searchTerm));
  }, [inventory, searchTerm]);
  
  // Group items by category for display
  const groupedItems = useMemo(() => {
    return groupItemsByCategory(displayedItems);
  }, [displayedItems]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Shop Generator</h2>
      
      {/* Shop Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Shop Type</h3>
          <select
            value={shopType}
            onChange={(e) => setShopType(e.target.value)}
            className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100 mb-3"
          >
            {shopTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Quality</label>
              <select
                value={shopTier}
                onChange={(e) => setShopTier(e.target.value)}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              >
                <option value="poor">Poor</option>
                <option value="average">Average</option>
                <option value="wealthy">Wealthy</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Location</label>
              <select
                value={shopLocation}
                onChange={(e) => setShopLocation(e.target.value)}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              >
                <option value="urban">Urban</option>
                <option value="rural">Rural</option>
                <option value="frontier">Frontier</option>
              </select>
            </div>
          </div>
          
          <div className="mt-3 flex justify-between">
            <button
              onClick={() => {
                const newInventory = generateInventory(shopType, shopTier, shopLocation);
                setInventory(newInventory);
                setDisplayedItems(filterItems(newInventory, searchTerm));
              }}
              className="py-2 px-4 bg-stone-700 hover:bg-stone-600 text-amber-100 text-sm rounded-lg"
            >
              Refresh Inventory
            </button>
            
            <button
              onClick={() => setShopkeeper(generateShopkeeper())}
              className="py-2 px-4 bg-stone-700 hover:bg-stone-600 text-amber-100 text-sm rounded-lg"
            >
              New Shopkeeper
            </button>
          </div>
        </div>
        
        {/* Shopkeeper Info */}
        {shopkeeper && (
          <div className="md:col-span-2 bg-stone-800 rounded-lg p-4 border border-amber-900/30">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-amber-100">
                  {shopkeeper.shopName}
                </h3>
                <p className="text-amber-100/70 text-sm mb-2">
                  {shopTypes.find(t => t.id === shopType)?.description || ''}
                </p>
              </div>
              
              <div className="text-right">
                <span className="px-2 py-1 bg-amber-900/30 text-amber-100 text-xs rounded-full">
                  {shopTier.charAt(0).toUpperCase() + shopTier.slice(1)} Quality
                </span>
              </div>
            </div>
            
            <div className="border-t border-amber-900/30 pt-2 mt-2">
              <h4 className="font-medium text-amber-100 mb-1">Proprietor: {shopkeeper.name}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-sm">
                <div>
                  <span className="text-amber-200">Personality:</span> {shopkeeper.personality}
                </div>
                <div>
                  <span className="text-amber-200">Appearance:</span> {shopkeeper.appearance}
                </div>
                <div>
                  <span className="text-amber-200">Motivation:</span> {shopkeeper.motivation}
                </div>
                <div>
                  <span className="text-amber-200">Quirk:</span> {shopkeeper.quirk}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Inventory */}
      <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
          <h3 className="text-lg font-medium text-amber-100">Inventory</h3>
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search inventory..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-stone-700 border border-amber-900/30 rounded-md py-1 px-3 text-sm text-amber-100 w-full"
            />
            {searchTerm && (
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-100/60"
                onClick={() => setSearchTerm('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        {Object.keys(groupedItems).length > 0 ? (
          Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h4 className="text-md font-medium text-amber-100 mb-2 border-b border-amber-900/30 pb-1">
                {category}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map((item, index) => (
                  <div 
                    key={`${category}-${index}`}
                    className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20"
                  >
                    <div 
                      className="flex justify-between items-center p-3 bg-stone-800 cursor-pointer"
                      onClick={() => toggleItem(`${category}-${index}`)}
                    >
                      <div className="flex items-center">
                        <h5 className="font-medium text-amber-100">{item.name}</h5>
                        {item.rarity && (
                          <span className={`ml-2 text-xs px-1 rounded ${getRarityColorClass(item.rarity)}`}>
                            {item.rarity}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-200 font-medium">{item.calculatedPrice}</span>
                        {item.originalPrice !== item.calculatedPrice && (
                          <span className="text-xs text-amber-100/40 line-through">{item.originalPrice}</span>
                        )}
                        <span className="text-xs text-amber-100/60">
                          {expandedItems.has(`${category}-${index}`) ? '▼' : '▶'}
                        </span>
                      </div>
                    </div>
                    
                    {expandedItems.has(`${category}-${index}`) && (
                      <div className="p-3 text-sm">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-xs">
                          {item.weight && (
                            <div>
                              <span className="text-amber-100/70">Weight:</span> {item.weight}
                            </div>
                          )}
                          {item.damage && (
                            <div>
                              <span className="text-amber-100/70">Damage:</span> {item.damage}
                            </div>
                          )}
                          {item.properties && (
                            <div>
                              <span className="text-amber-100/70">Properties:</span> {item.properties}
                            </div>
                          )}
                          {item.ac && (
                            <div>
                              <span className="text-amber-100/70">AC:</span> {item.ac}
                            </div>
                          )}
                          {item.strength && item.strength !== "" && (
                            <div>
                              <span className="text-amber-100/70">Strength:</span> {item.strength}
                            </div>
                          )}
                          {item.stealth && item.stealth !== "" && (
                            <div>
                              <span className="text-amber-100/70">Stealth:</span> {item.stealth}
                            </div>
                          )}
                          {item.attunement !== undefined && (
                            <div>
                              <span className="text-amber-100/70">Attunement:</span> {item.attunement ? "Required" : "Not required"}
                            </div>
                          )}
                        </div>
                        
                        {item.description && <p>{item.description}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-amber-100/60">
            No items found matching your criteria.
          </div>
        )}
      </div>
      
      {/* Shop Suggestions */}
      <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
        <h3 className="text-lg font-medium text-amber-100 mb-3">DM Tips</h3>
        
        <div className="text-sm space-y-2">
          <p>
            <span className="text-amber-200 font-medium">Poor Shops:</span> Limited selection, possibly run-down or in poor districts. Might have questionable merchandise or be desperate for sales.
          </p>
          <p>
            <span className="text-amber-200 font-medium">Average Shops:</span> Standard offerings found in most settlements. Fair prices and decent selection.
          </p>
          <p>
            <span className="text-amber-200 font-medium">Wealthy Shops:</span> Higher-end establishments with quality merchandise. May cater to nobles or adventurers.
          </p>
          <p>
            <span className="text-amber-200 font-medium">Premium Shops:</span> The finest establishments with rare items and excellent craftsmanship. Often have renowned reputations.
          </p>
          <p>
            <span className="text-amber-200 font-medium">Haggling:</span> Consider allowing Charisma (Persuasion) checks to negotiate prices. DC 15 might reduce prices by 10%, DC 20 by 20%.
          </p>
          <p>
            <span className="text-amber-200 font-medium">Special Orders:</span> For items not in stock, shops might offer to acquire or craft them for an additional fee and time delay.
          </p>
        </div>
      </div>
    </div>
  );
}
