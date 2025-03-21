// src/tools/DMScreen/ConditionsPanel.js
import React, { useState } from 'react';
import { conditionsData } from '../../data/dmScreenData';

export default function ConditionsPanel({ onPin, pinnedItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  // Use a Set instead of a single value to track multiple expanded conditions
  const [expandedConditions, setExpandedConditions] = useState(new Set());
  
  // Filter conditions based on search
  const filteredConditions = searchTerm
    ? conditionsData.filter(condition => 
        condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        condition.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : conditionsData;
  
  // Check if an item is pinned
  const isItemPinned = (id) => {
    return pinnedItems.some(item => item.id === id && item.type === 'condition');
  };
  
  // Handle pinning a condition
  const handlePinCondition = (condition) => {
    onPin({
      id: condition.name,
      type: 'condition',
      name: condition.name
    });
  };
  
  // Toggle a condition's expanded state
  const toggleCondition = (conditionName) => {
    setExpandedConditions(prevExpanded => {
      const newExpanded = new Set(prevExpanded);
      if (newExpanded.has(conditionName)) {
        newExpanded.delete(conditionName);
      } else {
        newExpanded.add(conditionName);
      }
      return newExpanded;
    });
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-amber-200">Conditions</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search conditions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-stone-700 border border-amber-900/30 rounded-md py-1 px-3 text-sm text-amber-100 w-full sm:w-64"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredConditions.map(condition => (
          <div 
            key={condition.name}
            className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20"
          >
            <div 
              className="flex justify-between items-center p-3 bg-stone-800 cursor-pointer"
              onClick={() => toggleCondition(condition.name)}
            >
              <h3 className="font-medium text-amber-100">{condition.name}</h3>
              <div className="flex gap-2">
                <button 
                  className={`text-xs ${isItemPinned(condition.name) ? 'text-amber-300' : 'text-amber-100/60'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePinCondition(condition);
                  }}
                  title={isItemPinned(condition.name) ? "Unpin" : "Pin for quick access"}
                >
                  📌
                </button>
                <span className="text-xs text-amber-100/60">
                  {expandedConditions.has(condition.name) ? '▼' : '▶'}
                </span>
              </div>
            </div>
            
            {expandedConditions.has(condition.name) && (
              <div className="p-3 text-sm">
                <p className="mb-2">{condition.description}</p>
                {condition.effects && (
                  <ul className="list-disc list-inside space-y-1">
                    {condition.effects.map((effect, index) => (
                      <li key={index} className="text-amber-100/90">{effect}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {filteredConditions.length === 0 && (
        <div className="text-center py-8 text-amber-100/60">
          No conditions found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}
