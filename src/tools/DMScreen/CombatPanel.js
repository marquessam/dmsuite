// src/tools/DMScreen/CombatPanel.js
import React, { useState } from 'react';
import { combatData } from '../../data/dmScreenData';

export default function CombatPanel({ onPin, pinnedItems }) {
  const [expandedSection, setExpandedSection] = useState('actions');
  
  // Check if an item is pinned
  const isItemPinned = (id) => {
    return pinnedItems.some(item => item.id === id && item.type === 'combat');
  };
  
  // Handle pinning a combat rule
  const handlePinCombatRule = (item) => {
    onPin({
      id: item.id,
      type: 'combat',
      name: item.name
    });
  };

  // Combat flow steps
  const combatFlow = [
    { id: 'initiative', name: 'Roll Initiative', description: 'Each participant makes a Dexterity check to determine turn order.' },
    { id: 'start', name: 'Start of Combat', description: 'Decide surprise. Determine positions. Roll initiative. Establish turn order.' },
    { id: 'turn', name: 'On Your Turn', description: 'Move, take one action, and possible bonus action in any order. Can split up movement.' },
    { id: 'action', name: 'Take Action', description: 'Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, Use Object, etc.' },
    { id: 'reaction', name: 'Reactions', description: 'Special actions triggered by specific circumstances, like opportunity attacks.' },
    { id: 'end', name: 'End of Turn', description: 'Make saving throws for ongoing effects. Some effects end at the end of turn.' }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Combat Reference</h2>
      
      {/* Combat Flow Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-amber-100 mb-2">Combat Flow</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {combatFlow.map((step, index) => (
            <div 
              key={step.id}
              className="bg-stone-700 rounded-lg p-3 border border-amber-900/20 relative"
            >
              <div className="flex justify-between">
                <h4 className="font-medium text-amber-200">{index + 1}. {step.name}</h4>
                <button 
                  className={`text-xs ${isItemPinned(step.id) ? 'text-amber-300' : 'text-amber-100/60'}`}
                  onClick={() => handlePinCombatRule(step)}
                  title={isItemPinned(step.id) ? "Unpin" : "Pin for quick access"}
                >
                  📌
                </button>
              </div>
              <p className="text-sm mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Combat Sections Tabs */}
      <div className="flex mb-3 border-b border-amber-900/30">
        {Object.keys(combatData).map(section => (
          <button
            key={section}
            className={`px-4 py-2 text-sm font-medium ${
              expandedSection === section 
                ? 'text-amber-200 border-b-2 border-amber-600' 
                : 'text-amber-100/70 hover:text-amber-100'
            }`}
            onClick={() => setExpandedSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Selected Combat Section Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {combatData[expandedSection].map(item => (
          <div 
            key={item.id}
            className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20"
          >
            <div className="flex justify-between items-center p-3 bg-stone-800">
              <h3 className="font-medium text-amber-100">{item.name}</h3>
              <button 
                className={`text-xs ${isItemPinned(item.id) ? 'text-amber-300' : 'text-amber-100/60'}`}
                onClick={() => handlePinCombatRule(item)}
                title={isItemPinned(item.id) ? "Unpin" : "Pin for quick access"}
              >
                📌
              </button>
            </div>
            
            <div className="p-3 text-sm">
              <p>{item.description}</p>
              
              {item.details && (
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              
              {item.example && (
                <div className="mt-2 p-2 bg-stone-800/50 rounded-md text-amber-100/80 italic">
                  <strong>Example:</strong> {item.example}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Cover and AC Table */}
      {expandedSection === 'environment' && (
        <div className="mt-4">
          <h3 className="text-lg font-medium text-amber-100 mb-2">Cover & Environment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20">
              <div className="p-3 bg-stone-800">
                <h3 className="font-medium text-amber-100">Cover Types</h3>
              </div>
              <div className="p-3">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="border border-amber-900/30 bg-stone-800 px-2 py-1 text-left">Cover</th>
                      <th className="border border-amber-900/30 bg-stone-800 px-2 py-1 text-left">Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-amber-900/30 px-2 py-1">Half Cover</td>
                      <td className="border border-amber-900/30 px-2 py-1">+2 bonus to AC and Dex saving throws</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-900/30 px-2 py-1">Three-Quarters Cover</td>
                      <td className="border border-amber-900/30 px-2 py-1">+5 bonus to AC and Dex saving throws</td>
                    </tr>
                    <tr>
                      <td className="border border-amber-900/30 px-2 py-1">Total Cover</td>
                      <td className="border border-amber-900/30 px-2 py-1">Can't be targeted directly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-stone-700 rounded-lg overflow-hidden border border-amber-900/20">
              <div className="p-3 bg-stone-800">
                <h3 className="font-medium text-amber-100">Difficult Terrain</h3>
              </div>
              <div className="p-3 text-sm">
                <p>Moving through difficult terrain costs 1 extra foot of movement for every foot moved.</p>
                <p className="mt-2"><strong>Examples:</strong> Rubble, ice, undergrowth, shallow water, stairs, snow</p>
                <p className="mt-2"><strong>Effect:</strong> Each foot of movement in difficult terrain costs 2 feet of speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
