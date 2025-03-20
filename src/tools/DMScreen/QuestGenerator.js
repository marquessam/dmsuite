// src/tools/DMScreen/QuestGenerator.js
import React, { useState, useEffect } from 'react';

// Quest elements data
const questData = {
  questType: [
    { name: 'Fetch/Retrieve', desc: 'Obtain an item or person and bring them back' },
    { name: 'Kill/Defeat', desc: 'Eliminate or overcome an enemy or threat' },
    { name: 'Escort/Protect', desc: 'Keep someone or something safe while moving' },
    { name: 'Discover/Explore', desc: 'Find a location or learn some information' },
    { name: 'Deliver', desc: 'Take an item to a different location' },
    { name: 'Escape/Survive', desc: 'Get out of a dangerous situation' },
    { name: 'Negotiate/Persuade', desc: 'Convince someone to do something' },
    { name: 'Sabotage/Destroy', desc: 'Damage or ruin something' },
    { name: 'Infiltrate', desc: 'Get into a place without being detected' },
    { name: 'Research/Investigate', desc: 'Gather clues to solve a mystery' },
    { name: 'Heist/Steal', desc: 'Take something that belongs to someone else' },
    { name: 'Rescue', desc: 'Save someone or something from a bad situation' }
  ],
  
  antagonist: [
    { name: 'Cult Leader', desc: 'A charismatic figure leading followers down a dark path' },
    { name: 'Crime Boss', desc: 'The head of a criminal organization with extensive networks' },
    { name: 'Corrupt Official', desc: 'Someone abusing their position of power' },
    { name: 'Rival Adventurer', desc: 'Another adventuring party with opposing goals' },
    { name: 'Ancient Evil', desc: 'A long-dormant force of malevolence now awakened' },
    { name: 'Monster Tribe', desc: 'A group of organized creatures threatening an area' },
    { name: 'Dark Wizard', desc: 'A magic user pursuing forbidden knowledge' },
    { name: 'Vengeful Spirit', desc: 'A ghost or revenant seeking retribution' },
    { name: 'Foreign Power', desc: 'Representatives of another kingdom with hostile intent' },
    { name: 'Secret Society', desc: 'A hidden group with mysterious objectives' },
    { name: 'Aberration', desc: 'A strange creature from beyond normal reality' },
    { name: 'Dragon', desc: 'A powerful draconic entity pursuing its own agenda' },
    { name: 'Usurper', desc: 'Someone trying to seize power illegitimately' },
    { name: 'Betrayer', desc: 'A traitor undermining from within' },
    { name: 'Cursed Being', desc: 'A victim of a curse now causing harm to others' }
  ],
  
  motivation: [
    { name: 'Revenge', desc: 'Seeking to right a perceived wrong' },
    { name: 'Wealth', desc: 'Pursuing riches or valuable treasures' },
    { name: 'Power', desc: 'Desiring control over others or magical might' },
    { name: 'Knowledge', desc: 'Seeking forgotten lore or secrets' },
    { name: 'Freedom', desc: 'Attempting to escape confinement or restrictions' },
    { name: 'Survival', desc: 'Doing whatever is necessary to stay alive' },
    { name: 'Love', desc: 'Actions driven by deep attachment or passion' },
    { name: 'Fear', desc: 'Responding to terrifying threats or prophecies' },
    { name: 'Duty', desc: 'Fulfilling obligations or following orders' },
    { name: 'Faith', desc: 'Acting in accordance with religious beliefs' },
    { name: 'Corruption', desc: 'Twisted by dark forces or influences' },
    { name: 'Justice', desc: 'Setting right an injustice or wrong' },
    { name: 'Legacy', desc: 'Creating a lasting impact on the world' },
    { name: 'Glory', desc: 'Seeking fame and recognition' },
    { name: 'Obsession', desc: 'Unhealthily fixated on a goal or object' }
  ],
  
  complication: [
    { name: 'Time Pressure', desc: 'The task must be completed before a deadline' },
    { name: 'Mistaken Identity', desc: 'Someone has been confused with someone else' },
    { name: 'Hidden Agenda', desc: 'The quest giver has secret motives' },
    { name: 'Moral Dilemma', desc: 'Completing the quest requires difficult choices' },
    { name: 'Betrayal', desc: 'A trusted ally turns against the party' },
    { name: 'Unexpected Alliance', desc: 'An enemy offers to help for their own reasons' },
    { name: 'Environmental Hazard', desc: 'Natural dangers complicate the mission' },
    { name: 'Innocent Bystanders', desc: 'Civilians could be harmed during the quest' },
    { name: 'Resource Scarcity', desc: 'Essential supplies are limited or unavailable' },
    { name: 'Competing Interest', desc: 'Others are trying to accomplish the same goal' },
    { name: 'False Information', desc: 'Critical details about the quest are wrong' },
    { name: 'Trap', desc: 'The entire quest is a setup to ensnare the party' },
    { name: 'Public Scrutiny', desc: 'The party's actions are being closely watched' },
    { name: 'Magical Interference', desc: 'Arcane forces disrupt normal operations' },
    { name: 'Divided Loyalties', desc: 'Party members have conflicting obligations' }
  ],
  
  twist: [
    { name: 'The villain is a victim', desc: 'The antagonist is actually being manipulated or forced' },
    { name: 'False quest giver', desc: 'The person who gave the quest is an imposter' },
    { name: 'Double-cross', desc: 'The party is meant to be sacrificed or captured' },
    { name: 'Hidden identity', desc: 'A key NPC is not who they appear to be' },
    { name: 'Unexpected consequence', desc: 'Completing the quest triggers a worse problem' },
    { name: 'Third party interference', desc: 'An uninvolved group suddenly takes interest' },
    { name: 'The real threat', desc: 'The quest is a distraction from the actual danger' },
    { name: 'Moral reversal', desc: 'What seemed evil is good, or vice versa' },
    { name: 'Personal connection', desc: 'A party member has unknown ties to the quest' },
    { name: 'Time manipulation', desc: 'Time flows differently or events are out of sequence' },
    { name: 'The quest never ends', desc: 'Completion reveals a much larger problem' },
    { name: 'Mistaken objective', desc: 'The party has been pursuing the wrong goal' }
  ],
  
  location: [
    { name: 'Ancient Ruins', desc: 'The crumbling remains of a past civilization' },
    { name: 'Dense Forest', desc: 'A thick woodland with limited visibility' },
    { name: 'Mountain Pass', desc: 'A narrow route through treacherous peaks' },
    { name: 'Underground Cavern', desc: 'A natural or excavated subterranean space' },
    { name: 'Forgotten Temple', desc: 'An abandoned place of worship' },
    { name: 'Noble Estate', desc: 'The home of a wealthy or influential family' },
    { name: 'Border Fortress', desc: 'A military structure defending a boundary' },
    { name: 'Cursed Village', desc: 'A settlement affected by dark magic' },
    { name: 'Wizard's Tower', desc: 'The domain of a practitioner of the arcane' },
    { name: 'Desert Oasis', desc: 'A fertile area surrounded by arid wasteland' },
    { name: 'Coastal Town', desc: 'A settlement on the edge of the sea' },
    { name: 'Planar Gateway', desc: 'A point of connection between worlds' },
    { name: 'Royal Court', desc: 'The political center of a kingdom' },
    { name: 'Monster Lair', desc: 'The home territory of dangerous creatures' },
    { name: 'Magical Academy', desc: 'A school for training spellcasters' },
    { name: 'Floating Island', desc: 'Land suspended in the air by magic or other means' },
    { name: 'Thieves' Guild', desc: 'The headquarters of a criminal organization' },
    { name: 'Battlefield', desc: 'A site of past or ongoing conflict' },
    { name: 'Trading Post', desc: 'A center for commerce in a frontier region' },
    { name: 'Sunken Ship', desc: 'A vessel that has gone down beneath the waves' }
  ],
  
  reward: [
    { name: 'Gold and gems', desc: 'Standard monetary payment' },
    { name: 'Magic item', desc: 'A useful enchanted object' },
    { name: 'Rare resource', desc: 'Valuable materials for crafting or trade' },
    { name: 'Political favor', desc: 'Support from someone in power' },
    { name: 'Valuable information', desc: 'Knowledge that could be useful later' },
    { name: 'Property', desc: 'Land, a building, or business ownership' },
    { name: 'Special privilege', desc: 'Permission for something normally restricted' },
    { name: 'Potential ally', desc: 'Someone who will help in the future' },
    { name: 'Rare mount', desc: 'An unusual or powerful creature to ride' },
    { name: 'Ancient artifact', desc: 'A historically significant object with special properties' },
    { name: 'Training opportunity', desc: 'A chance to learn new skills or abilities' },
    { name: 'Reputation boost', desc: 'Increased standing with a group or community' }
  ],
  
  questGiver: [
    { name: 'Town Mayor', desc: 'The leader of a local settlement' },
    { name: 'Mysterious Stranger', desc: 'A person with an unclear identity or background' },
    { name: 'Guild Representative', desc: 'A member of a professional organization' },
    { name: 'Desperate Parent', desc: 'A mother or father in urgent need' },
    { name: 'Noble Scion', desc: 'A young member of an aristocratic family' },
    { name: 'Court Wizard', desc: 'A magic user employed by the local ruler' },
    { name: 'Eccentric Merchant', desc: 'An unusual trader with exotic goods' },
    { name: 'Religious Leader', desc: 'A priest, cleric, or spiritual guide' },
    { name: 'Royal Messenger', desc: 'A courier delivering orders from the monarch' },
    { name: 'Elderly Scholar', desc: 'An aged academic seeking assistance' },
    { name: 'Military Officer', desc: 'A ranking member of an armed force' },
    { name: 'Spirit or Apparition', desc: 'A supernatural entity requesting aid' },
    { name: 'Childhood Friend', desc: 'Someone with a connection to a party member's past' },
    { name: 'Talking Animal', desc: 'A beast with the unusual ability to speak' },
    { name: 'Anonymous Letter', desc: 'Written instructions from an unknown source' }
  ]
};

// NPC name generation
const nameComponents = {
  firstNamePrefixes: ["Ael", "Aer", "Af", "Ak", "Al", "Am", "An", "Ap", "Ar", "As", "At", "Av", "Ban", "Bar", "Bel", "Ben", "Ber", "Bok", "Bor", "Bran", "Breg", "Bren", "Brod", "Cam", "Car", "Chal", "Cham", "Ch", "Cuth", "Dag", "Dain", "Dal", "Dan", "Dar", "Dav", "De", "Deth", "Dor", "Duer", "Dun", "Ed", "Ein", "El", "En", "Er", "Es", "Fal", "Fen", "Fer", "Fhar", "Frath", "Gal", "Gan", "Gar", "Gath", "Gil", "Gor", "Gray", "Hal", "Han", "Har", "Hath", "Hen", "Hil", "Hor", "Hul", "In", "Ir", "Is", "Jal", "Jar", "Jor", "Kan", "Kar", "Kel", "Khal", "Kor", "Kra", "Kul", "Lam", "Lan", "Lev", "Lin", "Lor", "Mar", "Mas", "Me", "Mor", "Muel", "Mul", "Mur", "Nal", "Nar", "Nev", "Nil", "Nor", "Nyr", "Ol", "On", "Or", "Oth", "Pae", "Per", "Pet", "Qar", "Qil", "Qin", "Qor", "Quan", "Quil", "Rag", "Ran", "Rath", "Re", "Ren", "Rhud", "Riv", "Ron", "Sal", "Sam", "San", "Ser", "Sha", "Sil", "Sim", "Sol", "Sor", "Sum", "Syr", "Tar", "Tel", "Teth", "Thal", "Ther", "Thul", "Thur", "Til", "Tor", "Tras", "Trin", "Tul", "Tur", "Ul", "Um", "Un", "Ur", "Val", "Van", "Var", "Ved", "Ven", "Vil", "Von", "Vor", "War", "Wil", "Wor", "Xan", "Xen", "Xil", "Xor", "Yal", "Yan", "Yer", "Yor", "Yul", "Zen", "Zin", "Zor", "Zul"],
  
  firstNameSuffixes: ["a", "ac", "ace", "ach", "ad", "ade", "ae", "af", "ag", "ah", "ai", "ak", "ake", "al", "ale", "am", "an", "ane", "ar", "arc", "ard", "as", "ash", "at", "ath", "ayne", "az", "e", "ea", "ec", "ech", "ed", "ee", "ef", "eh", "ei", "ek", "el", "ele", "en", "ene", "ent", "er", "es", "esh", "ett", "ez", "i", "ia", "ic", "ich", "id", "ie", "ig", "ih", "ik", "il", "im", "in", "ine", "ing", "ioe", "ir", "is", "ish", "it", "ith", "ive", "iz", "o", "oa", "oe", "oi", "ok", "ol", "om", "on", "oo", "op", "or", "os", "osh", "ot", "oth", "ow", "oz", "u", "ue", "uh", "uk", "ul", "um", "un", "ur", "us", "uth", "uz"],
  
  lastNamePrefixes: ["Amber", "Angel", "Ash", "Astral", "Autumn", "Battle", "Black", "Blaze", "Blood", "Blue", "Bold", "Bright", "Bronze", "Brown", "Clear", "Copper", "Crag", "Crimson", "Dark", "Dawn", "Dead", "Deep", "Divine", "Double", "Dread", "Dream", "Dusk", "Dust", "Earth", "Ember", "Even", "Ever", "Far", "Fire", "Flame", "Flat", "Flint", "Fog", "Frost", "Ghost", "Gloom", "Gold", "Golden", "Grand", "Gray", "Great", "Green", "Grim", "Half", "Hard", "Haven", "High", "Hill", "Hollow", "Holy", "Honor", "Ice", "Iron", "Keen", "Light", "Long", "Mage", "Marsh", "Mighty", "Mist", "Moon", "Moss", "Mountain", "Mourn", "Night", "Noble", "Ocean", "Pale", "Plain", "Pride", "Proud", "Quick", "Rage", "Rain", "Rapid", "Raven", "Red", "River", "Rock", "Rose", "Rough", "Rumble", "Rune", "Sacred", "Sage", "Salt", "Sand", "Sea", "Serpent", "Shadow", "Sharp", "Shield", "Silent", "Silver", "Simple", "Single", "Sky", "Smoke", "Snow", "Soft", "Solid", "Spell", "Spider", "Spirit", "Spring", "Star", "Steel", "Still", "Stone", "Storm", "Strong", "Summer", "Sun", "Swift", "Thunder", "True", "Truth", "Tusk", "Twilight", "Water", "White", "Wild", "Wind", "Winter", "Wise", "Wolf", "Wood"],
  
  lastNameSuffixes: ["arm", "arrow", "bane", "bash", "basher", "bear", "blade", "blood", "bloom", "blossom", "bluff", "born", "bough", "bow", "brace", "branch", "brand", "breaker", "brew", "bringer", "brook", "brow", "caller", "chaser", "claw", "cleaver", "cloud", "crest", "crusher", "cut", "cutter", "dance", "dancer", "dark", "dawn", "day", "draw", "dream", "dusk", "dust", "eye", "eyes", "fall", "fang", "fighter", "fire", "fist", "flame", "flare", "flow", "flower", "follower", "font", "foot", "force", "forest", "forge", "fury", "gaze", "gazer", "gem", "gleam", "glide", "glow", "grace", "guard", "gut", "hand", "heart", "herald", "hewn", "horn", "hunter", "jumper", "keep", "keeper", "knife", "knight", "lance", "lash", "leaf", "light", "mace", "maid", "maker", "mane", "mantle", "mark", "master", "might", "moon", "more", "mourn", "peak", "pelt", "rage", "reaper", "reaver", "rider", "rift", "rock", "root", "runner", "scale", "scar", "seeker", "shade", "shadow", "shaper", "shield", "shine", "shot", "singer", "sky", "slayer", "snarl", "snap", "snare", "song", "sorrow", "spark", "spear", "spell", "spire", "spirit", "splitter", "sprinter", "stalker", "star", "steel", "stone", "storm", "stride", "striker", "sun", "surge", "sword", "sworn", "tail", "talon", "thorn", "tide", "toe", "tower", "tracker", "trap", "tree", "vale", "valor", "walker", "ward", "watcher", "water", "wave", "weave", "whisper", "willow", "wind", "wing", "wolf", "wood", "word", "wound", "wraith", "wrath"]
};

// Generate a random name
const generateName = () => {
  const firstNamePrefix = nameComponents.firstNamePrefixes[Math.floor(Math.random() * nameComponents.firstNamePrefixes.length)];
  const firstNameSuffix = nameComponents.firstNameSuffixes[Math.floor(Math.random() * nameComponents.firstNameSuffixes.length)];
  const lastNamePrefix = nameComponents.lastNamePrefixes[Math.floor(Math.random() * nameComponents.lastNamePrefixes.length)];
  const lastNameSuffix = nameComponents.lastNameSuffixes[Math.floor(Math.random() * nameComponents.lastNameSuffixes.length)];
  
  return {
    firstName: `${firstNamePrefix}${firstNameSuffix}`,
    lastName: `${lastNamePrefix}${lastNameSuffix}`
  };
};

export default function QuestGenerator() {
  const [quest, setQuest] = useState(null);
  const [savedQuests, setSavedQuests] = useState([]);
  const [questTitle, setQuestTitle] = useState('');
  
  // Additional options
  const [includeQuestGiver, setIncludeQuestGiver] = useState(true);
  const [includeLocation, setIncludeLocation] = useState(true);
  const [includeTwist, setIncludeTwist] = useState(true);
  const [generateNames, setGenerateNames] = useState(true);
  
  // Load saved quests from localStorage
  useEffect(() => {
    const savedQuestsData = localStorage.getItem('dm-screen-saved-quests');
    if (savedQuestsData) {
      setSavedQuests(JSON.parse(savedQuestsData));
    }
  }, []);
  
  // Save quests to localStorage
  useEffect(() => {
    localStorage.setItem('dm-screen-saved-quests', JSON.stringify(savedQuests));
  }, [savedQuests]);
  
  // Helper to get random item from array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  
  // Generate a random quest
  const generateQuest = () => {
    // Generate base quest elements
    const questType = getRandomItem(questData.questType);
    const antagonist = getRandomItem(questData.antagonist);
    const motivation = getRandomItem(questData.motivation);
    const complication = getRandomItem(questData.complication);
    const reward = getRandomItem(questData.reward);
    
    // Optional elements
    const questGiver = includeQuestGiver ? getRandomItem(questData.questGiver) : null;
    const location = includeLocation ? getRandomItem(questData.location) : null;
    const twist = includeTwist ? getRandomItem(questData.twist) : null;
    
    // Generate NPC names if enabled
    let antagonistName = null;
    let giverName = null;
    
    if (generateNames) {
      const antName = generateName();
      antagonistName = `${antName.firstName} ${antName.lastName}`;
      
      if (questGiver) {
        const givName = generateName();
        giverName = `${givName.firstName} ${givName.lastName}`;
      }
    }
    
    // Generate a quest summary
    let summary = '';
    
    if (questGiver) {
      summary += giverName 
        ? `${giverName}, a ${questGiver.name.toLowerCase()}, ` 
        : `A ${questGiver.name.toLowerCase()} `;
      summary += 'needs adventurers to ';
    } else {
      summary += 'The party needs to ';
    }
    
    // Add quest type to summary
    summary += questType.name.toLowerCase() + ' ';
    
    // Add antagonist to summary
    if (antagonistName) {
      summary += `${antagonistName}, a ${antagonist.name.toLowerCase()} who is motivated by ${motivation.name.toLowerCase()}. `;
    } else {
      summary += `a ${antagonist.name.toLowerCase()} who is motivated by ${motivation.name.toLowerCase()}. `;
    }
    
    // Add location if included
    if (location) {
      summary += `This task will take them to ${location.name.toLowerCase()}. `;
    }
    
    // Add complication
    summary += `The challenge is complicated by ${complication.name.toLowerCase()}. `;
    
    // Add reward
    summary += `If successful, the reward will be ${reward.name.toLowerCase()}.`;
    
    // Add twist if included
    if (twist) {
      summary += ` However, there's a twist: ${twist.name.toLowerCase()}.`;
    }
    
    // Generate a quest title if not provided
    const autoTitle = `The ${questType.name} of ${antagonistName || 'the ' + antagonist.name}`;
    
    // Create the quest object
    const newQuest = {
      id: Date.now().toString(),
      title: questTitle || autoTitle,
      summary,
      elements: {
        questType,
        antagonist,
        antagonistName,
        motivation,
        complication,
        reward,
        questGiver,
        giverName,
        location,
        twist
      },
      timestamp: new Date().toISOString()
    };
    
    setQuest(newQuest);
    
    // Reset title field
    setQuestTitle('');
  };
  
  // Save the current quest
  const saveQuest = () => {
    if (!quest) return;
    
    setSavedQuests([quest, ...savedQuests]);
  };
  
  // Delete a saved quest
  const deleteQuest = (id) => {
    setSavedQuests(savedQuests.filter(q => q.id !== id));
  };
  
  // Load a saved quest
  const loadQuest = (savedQuest) => {
    setQuest(savedQuest);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Quest Generator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Generator Controls */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Quest Options</h3>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Quest Title (optional)</label>
            <input 
              type="text" 
              value={questTitle} 
              onChange={(e) => setQuestTitle(e.target.value)}
              placeholder="Leave blank for auto-generated title"
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            />
          </div>
          
          <div className="mb-3 grid grid-cols-2 gap-2">
            <label className="flex items-center text-amber-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={includeQuestGiver}
                onChange={(e) => setIncludeQuestGiver(e.target.checked)}
                className="mr-2 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              Quest Giver
            </label>
            
            <label className="flex items-center text-amber-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={includeLocation}
                onChange={(e) => setIncludeLocation(e.target.checked)}
                className="mr-2 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              Location
            </label>
            
            <label className="flex items-center text-amber-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={includeTwist}
                onChange={(e) => setIncludeTwist(e.target.checked)}
                className="mr-2 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              Include Twist
            </label>
            
            <label className="flex items-center text-amber-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={generateNames}
                onChange={(e) => setGenerateNames(e.target.checked)}
                className="mr-2 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              NPC Names
            </label>
          </div>
          
          <button 
            onClick={generateQuest}
            className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
          >
            Generate Quest
          </button>
          
          {/* Quest Elements Reference */}
          <div className="mt-4">
            <div 
              className="flex justify-between items-center text-amber-200 cursor-pointer"
              onClick={() => document.getElementById('quest-elements').classList.toggle('hidden')}
            >
              <span className="font-medium">Quest Elements</span>
              <span className="text-xs">▼</span>
            </div>
            
            <div id="quest-elements" className="hidden mt-2 max-h-48 overflow-y-auto">
              <p className="text-sm mb-2">Each quest consists of several key elements:</p>
              <ul className="text-xs space-y-1 text-amber-100/80">
                <li><span className="text-amber-200">Quest Type:</span> The basic goal of the mission</li>
                <li><span className="text-amber-200">Antagonist:</span> The main obstacle or opponent</li>
                <li><span className="text-amber-200">Motivation:</span> Why the antagonist acts as they do</li>
                <li><span className="text-amber-200">Complication:</span> Additional challenge that makes the quest harder</li>
                <li><span className="text-amber-200">Quest Giver:</span> Who is assigning the mission</li>
                <li><span className="text-amber-200">Location:</span> Where the quest takes place</li>
                <li><span className="text-amber-200">Reward:</span> What the party gets for success</li>
                <li><span className="text-amber-200">Twist:</span> Unexpected development that changes the situation</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Generated Quest */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Current Quest</h3>
          
          {quest ? (
            <div>
              <div className="mb-3 p-3 bg-stone-700 rounded-lg">
                <h3 className="text-xl font-bold text-amber-200 mb-2">{quest.title}</h3>
                
                <p className="mb-4">{quest.summary}</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="col-span-2">
                    <span className="text-amber-200 font-medium">Quest Type:</span> {quest.elements.questType.name}
                  </div>
                  
                  <div className="col-span-2">
                    <span className="text-amber-200 font-medium">Antagonist:</span> {quest.elements.antagonistName || quest.elements.antagonist.name}
                  </div>
                  
                  {quest.elements.questGiver && (
                    <div className="col-span-2">
                      <span className="text-amber-200 font-medium">Quest Giver:</span> {quest.elements.giverName || quest.elements.questGiver.name}
                    </div>
                  )}
                  
                  <div>
                    <span className="text-amber-200 font-medium">Motivation:</span> {quest.elements.motivation.name}
                  </div>
                  
                  <div>
                    <span className="text-amber-200 font-medium">Reward:</span> {quest.elements.reward.name}
                  </div>
                  
                  {quest.elements.location && (
                    <div>
                      <span className="text-amber-200 font-medium">Location:</span> {quest.elements.location.name}
                    </div>
                  )}
                  
                  <div>
                    <span className="text-amber-200 font-medium">Complication:</span> {quest.elements.complication.name}
                  </div>
                  
                  {quest.elements.twist && (
                    <div className="col-span-2">
                      <span className="text-amber-200 font-medium">Twist:</span> {quest.elements.twist.name}
                    </div>
                  )}
                </div>
                
                <div className="mt-3 text-center">
                  <button
                    onClick={saveQuest}
                    className="px-4 py-1 bg-amber-700 hover:bg-amber-600 text-amber-100 text-sm rounded"
                  >
                    Save Quest
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              Generate a quest to see it here.
            </div>
          )}
        </div>
      </div>
      
      {/* Saved Quests */}
      <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30 mb-6">
        <h3 className="text-lg font-medium text-amber-100 mb-3">Saved Quests</h3>
        
        {savedQuests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedQuests.map((savedQuest) => (
              <div 
                key={savedQuest.id} 
                className="p-3 bg-stone-700 rounded-lg relative group"
              >
                <div className="mb-2">
                  <h4 className="text-lg font-medium text-amber-200">{savedQuest.title}</h4>
                  <div className="flex justify-between text-xs text-amber-100/60">
                    <span>{new Date(savedQuest.timestamp).toLocaleDateString()}</span>
                    <button
                      className="text-red-400 opacity-0 group-hover:opacity-100"
                      onClick={() => deleteQuest(savedQuest.id)}
                      title="Delete quest"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                
                <p className="text-sm line-clamp-3 mb-2">{savedQuest.summary}</p>
                
                <button
                  className="w-full mt-2 py-1 text-xs bg-stone-600 hover:bg-stone-500 rounded"
                  onClick={() => loadQuest(savedQuest)}
                >
                  Load Quest
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-amber-100/60">
            No saved quests yet. Generate and save quests to see them here.
          </div>
        )}
      </div>
      
      {/* Quest Development Tips */}
      <div className="bg-stone-800 rounded-lg overflow-hidden border border-amber-900/30">
        <div 
          className="flex justify-between items-center p-3 bg-stone-700 cursor-pointer"
          onClick={() => document.getElementById('quest-tips').classList.toggle('hidden')}
        >
          <h3 className="font-medium text-amber-100">Quest Development Tips</h3>
          <span className="text-xs text-amber-100/60">Click to Expand/Collapse</span>
        </div>
        
        <div id="quest-tips" className="hidden p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-amber-200 font-medium mb-2">Expanding on Generated Quests</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Add specific NPCs with personalities and goals</li>
                <li>Create a timeline of events if the party doesn't intervene</li>
                <li>Develop 2-3 possible approaches to solving the quest</li>
                <li>Think about how the quest connects to your larger campaign</li>
                <li>Consider what happens if the party fails or only partially succeeds</li>
                <li>Add interesting environmental features to encounter locations</li>
                <li>Include a small side quest or secondary objective</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-amber-200 font-medium mb-2">Quest Structure Tips</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><span className="font-medium">Hook:</span> Make the initial quest offer intriguing</li>
                <li><span className="font-medium">Investigation:</span> Let players gather information creatively</li>
                <li><span className="font-medium">Escalation:</span> Include a mid-quest complication</li>
                <li><span className="font-medium">Climax:</span> Design a memorable final encounter</li>
                <li><span className="font-medium">Resolution:</span> Allow for meaningful consequences and rewards</li>
                <li><span className="font-medium">Foreshadowing:</span> Include hints to future adventures</li>
                <li><span className="font-medium">Player Skills:</span> Design challenges for different character abilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
