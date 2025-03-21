// src/tools/DMScreen/MagicItemsPanel.js
import React, { useState, useMemo } from 'react';
import { 
  magicItemsData,
  magicItemTables
} from '../../data/dmscreen';

export default function MagicItemsPanel({ onPin, pinnedItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [showTables, setShowTables] = useState(false);
  
  // Get unique types from magic items data
  const itemTypes = useMemo(() => {
    const types = new Set(magicItemsData.map(item => item.type));
    return ['all', ...types];
  }, []);
  
  // Get unique rarities from magic items
  const rarities = useMemo(() => {
    const raritySet = new Set();
    
    magicItemsData.forEach(category => {
      if (category.items) {
        category.items.forEach(item => {
          if (item.rarity) {
            raritySet.add(item.rarity);
          }
        });
      }
    });
    
    return ['all', ...raritySet];
  }, []);
  
  // Filter items based on search, type, and rarity
  const filteredItems = useMemo(() => {
    return magicItemsData.filter(category => {
      // Type filter (category level)
      if (selectedType !== 'all' && category.type !== selectedType) {
        return false;
      }
      
      // For category items, check if any item matches search and rarity
      if (category.items) {
        // Filter items within the category
        const matchingItems = category.items.filter(item => {
          // Rarity filter
          if (selectedRarity !== 'all' && item.rarity !== selectedRarity) {
            return false;
          }
          
          // Search filter
          if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            return (
              item.name.toLowerCase().includes(searchLower) ||
              (item.description && item.description.toLowerCase().includes(searchLower))
            );
          }
          
          return true;
        });
        
        // Include category if it has any matching items
        if (matchingItems.length > 0) {
          // Replace original items with filtered items for display
          category = { ...category, items: matchingItems };
          return true;
        }
        return false;
      }
      
      // If category doesn't have items, just check against category name
      if (searchTerm) {
        return category.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      
      return true;
    });
  }, [magicItemsData, searchTerm, selectedType, selectedRarity]);
  
  // Check if an item is pinned
  const isItemPinned = (id) => {
    return pinnedItems.some(item => item.id === id && item.type === 'magic-item');
  };
  
  // Handle pinning an item
  const handlePinItem = (item) => {
    onPin({
      id: item.id,
      type: 'magic-item',
      name: item.name
    });
  };

  // Toggle an item's expanded state
  const toggleItem = (itemId) => {
    setExpandedItems(prevExpanded => {
      const newExpanded = new Set(prevExpanded);
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId);
      } else {
        newExpanded.add(itemId);
      }
      return newExpanded;
    });
  };

  // Get rarity color class
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

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
        <h2 className="text-xl font-semibold text-amber-200">Magic Items</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-stone-700 border border-amber-900/30 rounded-md py-1 px-2 text-sm text-amber-100"
          >
            {itemTypes.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type}
              </option>
            ))}
          </select>
          
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="bg-stone-700 border border-amber-900/30 rounded-md py-1 px-2 text-sm text-amber-100"
          >
            {rarities.map(rarity => (
              <option key={rarity} value={rarity} className={getRarityColorClass(rarity)}>
                {rarity === 'all' ? 'All Rarities' : rarity}
              </option>
            ))}
          </select>
          
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search magic items..."
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
      </div>
      
      {/* Toggle for Magic Item Tables */}
      <div className="mb-4">
        <button 
          onClick={() => setShowTables(!showTables)}
          className="flex items-center text-amber-200 hover:text-amber-100 bg-stone-800 px-3 py-2 rounded-lg border border-amber-900/30"
        >
          <span className="mr-2">{showTables ? '▼' : '▶'}</span>
          Magic Item Random Tables
        </button>
        
        {showTables && (
          <div className="mt-3 p-4 bg-stone-800 rounded-lg border border-amber-900/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        )}
      </div>
      
      {filteredItems.length > 0 ? (
        filteredItems.map(category => (
          <div key={category.id} className="mb-6">
            <h3 className="text-lg font-medium text-amber-100 mb-2 border-b border-amber-900/30 pb-1">
              {category.name}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items && category.items.map((item, index) => (
                <div 
                  key={`${category.id}-${index}`}
                  className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20"
                >
                  <div 
                    className="flex justify-between items-center p-3 bg-stone-800 cursor-pointer"
                    onClick={() => toggleItem(`${category.id}-${index}`)}
                  >
                    <div className="flex items-center">
                      <h4 className="font-medium text-amber-100">{item.name}</h4>
                      {item.rarity && (
                        <span className={`ml-2 text-xs px-1 rounded ${getRarityColorClass(item.rarity)}`}>
                          {item.rarity}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        className={`text-xs ${isItemPinned(`${category.id}-${index}`) ? 'text-amber-300' : 'text-amber-100/60'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePinItem({
                            id: `${category.id}-${index}`,
                            name: item.name
                          });
                        }}
                        title={isItemPinned(`${category.id}-${index}`) ? "Unpin" : "Pin for quick access"}
                      >
                        📌
                      </button>
                      <span className="text-xs text-amber-100/60">
                        {expandedItems.has(`${category.id}-${index}`) ? '▼' : '▶'}
                      </span>
                    </div>
                  </div>
                  
                  {expandedItems.has(`${category.id}-${index}`) && (
                    <div className="p-3 text-sm">
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-xs">
                        {item.type && (
                          <div>
                            <span className="text-amber-100/70">Type:</span> {item.type}
                          </div>
                        )}
                        {item.rarity && (
                          <div>
                            <span className="text-amber-100/70">Rarity:</span> {item.rarity}
                          </div>
                        )}
                        {item.attunement !== undefined && (
                          <div>
                            <span className="text-amber-100/70">Attunement:</span> {item.attunement ? "Required" : "Not required"}
                          </div>
                        )}
                        {item.cost && (
                          <div>
                            <span className="text-amber-100/70">Value:</span> {item.cost}
                          </div>
                        )}
                        {item.weight && (
                          <div>
                            <span className="text-amber-100/70">Weight:</span> {item.weight}
                          </div>
                        )}
                      </div>
                      
                      {item.description && <p className="mb-2">{item.description}</p>}
                      
                      {item.properties && (
                        <div className="mt-2">
                          <h5 className="text-amber-200 text-sm font-medium mb-1">Properties</h5>
                          <p>{item.properties}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8 text-amber-100/60">
          No magic items found matching your criteria. Try a different search or category.
        </div>
      )}
    </div>
  );
}
