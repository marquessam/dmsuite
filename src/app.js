import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import CharacterRandomizer from './tools/CharacterRandomizer';

function App() {
  // State to track which tool is currently selected
  const [currentTool, setCurrentTool] = useState('character-randomizer');

  // All available tools
  const tools = [
    { id: 'character-randomizer', name: 'Character Randomizer' }
    // Add more tools here as they are developed
    // { id: 'encounter-builder', name: 'Encounter Builder' },
    // { id: 'npc-generator', name: 'NPC Generator' },
    // etc.
  ];

  // Render the selected tool
  const renderTool = () => {
    switch (currentTool) {
      case 'character-randomizer':
        return <CharacterRandomizer />;
      // Add cases for future tools
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
