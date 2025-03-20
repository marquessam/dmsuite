// src/App.js - Updated to include Dungeon Map Maker
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
// Import the tools
import CharacterRandomizer from './tools/CharacterRandomizer';
import DungeonMapMaker from './tools/DungeonMapMaker';
import DMScreen from './tools';

function App() {
  // State to track which tool is currently selected
  const [currentTool, setCurrentTool] = useState('character-randomizer');

  // All available tools
  const tools = [
    { id: 'character-randomizer', name: 'Character Randomizer' },
    { id: 'dungeon-map-maker', name: 'Dungeon Map Maker' }
    // Add more tools here as they are developed
  ];

  // Render the selected tool
  const renderTool = () => {
    switch (currentTool) {
      case 'character-randomizer':
        return <CharacterRandomizer />;
      case 'dungeon-map-maker':
        return <DungeonMapMaker />;
      default:
        return <CharacterRandomizer />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-gray-100">
      <Header tools={tools} currentTool={currentTool} setCurrentTool={setCurrentTool} />
      <Layout>
        {renderTool()}
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
