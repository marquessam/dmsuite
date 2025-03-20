// src/tools/DMScreen/RulesPanel.js
import React, { useState } from 'react';
import { rulesData } from '../../data/dmScreenData';

export default function RulesPanel({ onPin, pinnedItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedRule, setExpandedRule] = useState(null);
  
  // Get unique categories from rules data
  const categories = ['all', ...new Set(rulesData.map(rule => rule.category))];
  
  // Filter rules based on search and category
  const filteredRules = rulesData.filter(rule => {
    const matchesSearch = searchTerm 
      ? rule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (rule.description && rule.description.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;
    
    const matchesCategory = selectedCategory === 'all' || rule.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Check if a rule is pinned
  const isItemPinned = (id) => {
    return pinnedItems.some(item => item.id === id && item.type === 'rule');
  };
  
  // Handle pinning a rule
  const handlePinRule = (rule) => {
    onPin({
      id: rule.id,
      type: 'rule',
      name: rule.name
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
        <h2 className="text-xl font-semibold text-amber-200">Rules Reference</h2>
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
              placeholder="Search rules..."
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRules.map(rule => (
          <div 
            key={rule.id}
            className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20"
          >
            <div 
              className="flex justify-between items-center p-3 bg-stone-800 cursor-pointer"
              onClick={() => setExpandedRule(expandedRule === rule.id ? null : rule.id)}
            >
              <div>
                <h3 className="font-medium text-amber-100">{rule.name}</h3>
                <span className="text-xs text-amber-100/60">{rule.category}</span>
              </div>
              <div className="flex gap-2">
                <button 
                  className={`text-xs ${isItemPinned(rule.id) ? 'text-amber-300' : 'text-amber-100/60'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePinRule(rule);
                  }}
                  title={isItemPinned(rule.id) ? "Unpin" : "Pin for quick access"}
                >
                  📌
                </button>
                <span className="text-xs text-amber-100/60">
                  {expandedRule === rule.id ? '▼' : '▶'}
                </span>
              </div>
            </div>
            
            {expandedRule === rule.id && (
              <div className="p-3 text-sm">
                {rule.description && <p className="mb-2">{rule.description}</p>}
                
                {rule.table && (
                  <div className="overflow-x-auto mt-2">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr>
                          {rule.table.headers.map((header, index) => (
                            <th 
                              key={index}
                              className="border border-amber-900/30 bg-stone-800 px-2 py-1 text-left text-amber-100"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rule.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <td 
                                key={cellIndex}
                                className="border border-amber-900/30 px-2 py-1"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                
                {rule.lists && rule.lists.map((list, listIndex) => (
                  <div key={listIndex} className="mt-2">
                    {list.title && <h4 className="font-medium text-amber-100 mb-1">{list.title}</h4>}
                    <ul className="list-disc list-inside space-y-1">
                      {list.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-amber-100/90">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {filteredRules.length === 0 && (
        <div className="text-center py-8 text-amber-100/60">
          No rules found matching your criteria. Try a different search or category.
        </div>
      )}
    </div>
  );
}
