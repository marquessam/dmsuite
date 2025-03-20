import React, { useState } from 'react';

const Header = ({ tools, currentTool, setCurrentTool }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleToolSelect = (toolId) => {
    setCurrentTool(toolId);
    setIsDropdownOpen(false);
  };

  // Find the name of the current tool
  const currentToolName = tools.find(tool => tool.id === currentTool)?.name || 'Select Tool';

  return (
    <header className="bg-stone-800 border-b border-amber-900/30 px-4 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-amber-200">DM Suite</h1>
          <div className="hidden md:block ml-6 text-sm text-amber-100/60">Tools for Dungeon Masters</div>
        </div>
        
        <div className="relative">
          <button 
            onClick={toggleDropdown}
            className="flex items-center py-2 px-4 bg-gradient-to-r from-stone-700 to-amber-900 text-amber-100 rounded-lg shadow border border-amber-800/50 hover:from-stone-800 hover:to-amber-950"
          >
            <span>{currentToolName}</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-stone-800 border border-amber-900/30 rounded-lg shadow-lg z-10">
              <ul className="py-1">
                {tools.map((tool) => (
                  <li key={tool.id}>
                    <button
                      className={`w-full text-left px-4 py-2 hover:bg-amber-900/20 ${currentTool === tool.id ? 'text-amber-200 font-medium' : 'text-amber-100/80'}`}
                      onClick={() => handleToolSelect(tool.id)}
                    >
                      {tool.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
