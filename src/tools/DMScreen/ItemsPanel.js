// src/tools/DMScreen/ItemsPanel.js
import React, { useState, useMemo } from 'react';
import { 
  itemsData, 
  weaponsData, 
  armorData, 
  magicItemsData 
} from '../../data/dmscreen';

export default function ItemsPanel({ onPin, pinnedItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Use a Set to track multiple expanded items
  const [expandedItems, setExpandedItems] = useState(new Set());
  
  // Combine all item data
  const allItemData = useMemo(() => {
    return [
      ...itemsData,
      ...weaponsData, 
      ...armorData, 
      ...magicItemsData.filter(item => item.id !== 'scrolls') // Don't include magic item tables
    ];
  }, []);
  
  // Get unique categories from combined items data
  const categories = useMemo(() => {
    const uniqueCategories = new Set(allItemData.map(item => item.category));
    return ['all', ...uniqueCategories];
  }, [allItemData]);
  
  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return allItemData.filter(item => {
      const matchesSearch = searchTerm 
        ? (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())))
        : true;
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [allItemData, searchTerm, selectedCategory]);
  
  // Group items by type within category
  const groupedItems = useMemo(() => {
    return filteredItems.reduce((acc, item) => {
      const type = item.type || 'Miscellaneous';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(item);
      return acc;
    }, {});
  }, [filteredItems]);
  
  // Check if an item is pinned
  const isItemPinned = (id) => {
    return pinnedItems.some(item => item.id === id && item.type === 'item');
  };
  
  // Handle pinning an item
  const handlePinItem = (item) => {
    onPin({
      id: item.id,
      type: 'item',
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

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
        <h2 className="text-xl font-semibold text-amber-200">Items Reference</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-stone-700 border border-amber-900/30 rounded-md py-1 px-2 text-sm text-amber-100"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search items..."
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
      
      {Object.keys(groupedItems).length > 0 ? (
        Object.entries(groupedItems).map(([type, items]) => (
          <div key={type} className="mb-6">
            <h3 className="text-lg font-medium text-amber-100 mb-2 border-b border-amber-900/30 pb-1">
              {type}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map(item => (
                <div 
                  key={item.id}
                  className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20"
                >
                  <div 
                    className="flex justify-between items-center p-3 bg-stone-800 cursor-pointer"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-center">
                      <h4 className="font-medium text-amber-100">{item.name}</h4>
                      {item.cost && (
                        <span className="ml-2 text-xs bg-amber-900/30 text-amber-100/80 px-1 rounded">
                          {item.cost}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        className={`text-xs ${isItemPinned(item.id) ? 'text-amber-300' : 'text-amber-100/60'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePinItem(item);
                        }}
                        title={isItemPinned(item.id) ? "Unpin" : "Pin for quick access"}
                      >
                        📌
                      </button>
                      <span className="text-xs text-amber-100/60">
                        {expandedItems.has(item.id) ? '▼' : '▶'}
                      </span>
                    </div>
                  </div>
                  
                  {expandedItems.has(item.id) && (
                    <div className="p-3 text-sm">
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-xs">
                        {item.category && (
                          <div>
                            <span className="text-amber-100/70">Category:</span> {item.category}
                          </div>
                        )}
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
                        {item.rarity && (
                          <div>
                            <span className="text-amber-100/70">Rarity:</span> {item.rarity}
                          </div>
                        )}
                        {item.attunement && (
                          <div>
                            <span className="text-amber-100/70">Attunement:</span> {item.attunement ? "Required" : "Not required"}
                          </div>
                        )}
                      </div>
                      
                      {item.description && <p>{item.description}</p>}
                      
                      {/* Display individual items for item groups */}
                      {item.items && item.items.length > 0 && (
                        <div className="mt-3">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="bg-stone-800/50">
                                <th className="text-left p-1">Name</th>
                                {item.items[0].cost && <th className="text-left p-1">Cost</th>}
                                {item.items[0].damage && <th className="text-left p-1">Damage</th>}
                                {item.items[0].weight && <th className="text-left p-1">Weight</th>}
                                {item.items[0].properties && <th className="text-left p-1">Properties</th>}
                                {item.items[0].ac && <th className="text-left p-1">AC</th>}
                                {item.items[0].strength && <th className="text-left p-1">Str</th>}
                                {item.items[0].stealth && <th className="text-left p-1">Stealth</th>}
                                {item.items[0].rarity && <th className="text-left p-1">Rarity</th>}
                              </tr>
                            </thead>
                            <tbody>
                              {item.items.map((subItem, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-stone-800/20' : ''}>
                                  <td className="p-1">{subItem.name}</td>
                                  {subItem.cost && <td className="p-1">{subItem.cost}</td>}
                                  {subItem.damage && <td className="p-1">{subItem.damage}</td>}
                                  {subItem.weight && <td className="p-1">{subItem.weight}</td>}
                                  {subItem.properties && <td className="p-1">{subItem.properties}</td>}
                                  {subItem.ac && <td className="p-1">{subItem.ac}</td>}
                                  {subItem.strength && <td className="p-1">{subItem.strength}</td>}
                                  {subItem.stealth && <td className="p-1">{subItem.stealth}</td>}
                                  {subItem.rarity && <td className="p-1">{subItem.rarity}</td>}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      
                      {item.notes && (
                        <div className="mt-2 p-2 bg-stone-800/50 rounded-md text-amber-100/80 italic">
                          <p>{item.notes}</p>
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
          No items found matching your criteria. Try a different search or category.
        </div>
      )}
    </div>
  );
}
