// src/tools/DMScreen/QuestGenerator.js
import React, { useState, useEffect } from 'react';
import { 
  npcData, 
  locationTypes, 
  monstersByEnvironment, 
  itemsData, 
  magicItemsData 
} from '../../data/dmscreen';

// Quest data
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
    { name: 'Public Scrutiny', desc: 'The party\'s actions are being closely watched' },
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
    { name: 'Ancient Ruins', desc: 'The crumbling remains of a past civilization', environment: 'Dungeon' },
    { name: 'Dense Forest', desc: 'A thick woodland with limited visibility', environment: 'Forest' },
    { name: 'Mountain Pass', desc: 'A narrow route through treacherous peaks', environment: 'Mountain' },
    { name: 'Underground Cavern', desc: 'A natural or excavated subterranean space', environment: 'Underdark' },
    { name: 'Forgotten Temple', desc: 'An abandoned place of worship', environment: 'Dungeon' },
    { name: 'Noble Estate', desc: 'The home of a wealthy or influential family', environment: 'Urban' },
    { name: 'Border Fortress', desc: 'A military structure defending a boundary', environment: 'Mountain' },
    { name: 'Cursed Village', desc: 'A settlement affected by dark magic', environment: 'Urban' },
    { name: 'Wizard\'s Tower', desc: 'The domain of a practitioner of the arcane', environment: 'Urban' },
    { name: 'Desert Oasis', desc: 'A fertile area surrounded by arid wasteland', environment: 'Desert' },
    { name: 'Coastal Town', desc: 'A settlement on the edge of the sea', environment: 'Coastal' },
    { name: 'Planar Gateway', desc: 'A point of connection between worlds', environment: 'Dungeon' },
    { name: 'Royal Court', desc: 'The political center of a kingdom', environment: 'Urban' },
    { name: 'Monster Lair', desc: 'The home territory of dangerous creatures', environment: 'Dungeon' },
    { name: 'Magical Academy', desc: 'A school for training spellcasters', environment: 'Urban' },
    { name: 'Floating Island', desc: 'Land suspended in the air by magic or other means', environment: 'Mountain' },
    { name: 'Thieves\' Guild', desc: 'The headquarters of a criminal organization', environment: 'Urban' },
    { name: 'Battlefield', desc: 'A site of past or ongoing conflict', environment: 'Grassland' },
    { name: 'Trading Post', desc: 'A center for commerce in a frontier region', environment: 'Urban' },
    { name: 'Sunken Ship', desc: 'A vessel that has gone down beneath the waves', environment: 'Coastal' }
  ],
  
  reward: [
    { name: 'Gold and gems', desc: 'Standard monetary payment', value: 'medium' },
    { name: 'Magic item', desc: 'A useful enchanted object', value: 'high' },
    { name: 'Rare resource', desc: 'Valuable materials for crafting or trade', value: 'medium' },
    { name: 'Political favor', desc: 'Support from someone in power', value: 'high' },
    { name: 'Valuable information', desc: 'Knowledge that could be useful later', value: 'medium' },
    { name: 'Property', desc: 'Land, a building, or business ownership', value: 'high' },
    { name: 'Special privilege', desc: 'Permission for something normally restricted', value: 'medium' },
    { name: 'Potential ally', desc: 'Someone who will help in the future', value: 'medium' },
    { name: 'Rare mount', desc: 'An unusual or powerful creature to ride', value: 'high' },
    { name: 'Ancient artifact', desc: 'A historically significant object with special properties', value: 'very high' },
    { name: 'Training opportunity', desc: 'A chance to learn new skills or abilities', value: 'medium' },
    { name: 'Reputation boost', desc: 'Increased standing with a group or community', value: 'low' }
  ],
  
  questGiver: [
    { name: 'Town Mayor', desc: 'The leader of a local settlement', trustworthiness: 'high' },
    { name: 'Mysterious Stranger', desc: 'A person with an unclear identity or background', trustworthiness: 'low' },
    { name: 'Guild Representative', desc: 'A member of a professional organization', trustworthiness: 'medium' },
    { name: 'Desperate Parent', desc: 'A mother or father in urgent need', trustworthiness: 'high' },
    { name: 'Noble Scion', desc: 'A young member of an aristocratic family', trustworthiness: 'medium' },
    { name: 'Court Wizard', desc: 'A magic user employed by the local ruler', trustworthiness: 'medium' },
    { name: 'Eccentric Merchant', desc: 'An unusual trader with exotic goods', trustworthiness: 'medium' },
    { name: 'Religious Leader', desc: 'A priest, cleric, or spiritual guide', trustworthiness: 'high' },
    { name: 'Royal Messenger', desc: 'A courier delivering orders from the monarch', trustworthiness: 'high' },
    { name: 'Elderly Scholar', desc: 'An aged academic seeking assistance', trustworthiness: 'high' },
    { name: 'Military Officer', desc: 'A ranking member of an armed force', trustworthiness: 'high' },
    { name: 'Spirit or Apparition', desc: 'A supernatural entity requesting aid', trustworthiness: 'low' },
    { name: 'Childhood Friend', desc: 'Someone with a connection to a party member\'s past', trustworthiness: 'high' },
    { name: 'Talking Animal', desc: 'A beast with the unusual ability to speak', trustworthiness: 'medium' },
    { name: 'Anonymous Letter', desc: 'Written instructions from an unknown source', trustworthiness: 'very low' }
  ],
  
  macguffin: [
    { name: 'Ancient Scroll', desc: 'A parchment containing forgotten knowledge or a powerful spell' },
    { name: 'Family Heirloom', desc: 'An item with sentimental or historical value to an important person' },
    { name: 'Magic Key', desc: 'An enchanted key that opens a specific important lock' },
    { name: 'Sacred Relic', desc: 'A holy item with religious significance' },
    { name: 'Royal Signet', desc: 'A ring or seal that proves authority or lineage' },
    { name: 'Mysterious Orb', desc: 'A spherical object with unknown magical properties' },
    { name: 'Rare Herb', desc: 'A plant with special medicinal or magical properties' },
    { name: 'Ancient Weapon', desc: 'A legendary weapon from a past age' },
    { name: 'Lost Map', desc: 'A chart showing the way to a valuable location' },
    { name: 'Magical Gem', desc: 'A precious stone with arcane powers' },
    { name: 'Stolen Goods', desc: 'Items taken unlawfully that need to be recovered' },
    { name: 'Creature Egg', desc: 'The egg of a rare or magical creature' },
    { name: 'Important Document', desc: 'Papers containing vital information or legal authority' },
    { name: 'Puzzle Box', desc: 'A container with a complex mechanism hiding something valuable' },
    { name: 'Enchanted Mirror', desc: 'A looking glass with supernatural capabilities' }
  ],
  
  obstacle: [
    { name: 'Guard Patrol', desc: 'Armed sentries protecting an area' },
    { name: 'Complex Lock', desc: 'A sophisticated mechanism requiring special skills to open' },
    { name: 'Magical Barrier', desc: 'An arcane field blocking progress' },
    { name: 'Deep Chasm', desc: 'A wide gap that must be crossed' },
    { name: 'Trap-filled Corridor', desc: 'A passageway laden with dangerous devices' },
    { name: 'Riddle Door', desc: 'A portal that only opens when a puzzle is solved' },
    { name: 'Hostile Environment', desc: 'Natural conditions that threaten survival' },
    { name: 'Enchanted Guardian', desc: 'A magical construct defending a location' },
    { name: 'Local Customs', desc: 'Cultural practices that must be respected to proceed' },
    { name: 'Rival Party', desc: 'Competitors with the same goal' },
    { name: 'Resource Limitation', desc: 'A shortage of something essential' },
    { name: 'Time Constraint', desc: 'A critical deadline adding pressure' },
    { name: 'Political Opposition', desc: 'Authorities working against the party' },
    { name: 'Monster Encounter', desc: 'Creatures that must be overcome' },
    { name: 'Moral Choice', desc: 'An ethical dilemma with consequences' }
  ],

  skillChallenges: [
    { name: 'Athletics', desc: 'Climbing a steep cliff, swimming through rough waters' },
    { name: 'Acrobatics', desc: 'Balancing on a narrow ledge, tumbling past guards' },
    { name: 'Sleight of Hand', desc: 'Picking a lock, planting an item on someone' },
    { name: 'Stealth', desc: 'Sneaking past sentries, moving silently through a crowded room' },
    { name: 'Arcana', desc: 'Identifying a magical effect, understanding an arcane ritual' },
    { name: 'History', desc: 'Recalling information about an ancient civilization, recognizing a noble crest' },
    { name: 'Investigation', desc: 'Finding hidden clues, noticing inconsistencies in a story' },
    { name: 'Nature', desc: 'Identifying plants and animals, predicting weather patterns' },
    { name: 'Religion', desc: 'Knowing details about religious practices, recognizing divine symbols' },
    { name: 'Animal Handling', desc: 'Calming a frightened creature, directing a mount through danger' },
    { name: 'Insight', desc: 'Detecting a lie, reading someone\'s intentions' },
    { name: 'Medicine', desc: 'Diagnosing an illness, stabilizing a dying person' },
    { name: 'Perception', desc: 'Spotting a hidden foe, hearing a distant conversation' },
    { name: 'Survival', desc: 'Following tracks, finding food in the wilderness' },
    { name: 'Deception', desc: 'Telling a convincing lie, creating a diversion' },
    { name: 'Intimidation', desc: 'Frightening someone into cooperation, breaking someone\'s will' },
    { name: 'Performance', desc: 'Drawing a crowd, creating a distraction' },
    { name: 'Persuasion', desc: 'Convincing someone to help, negotiating a better deal' }
  ]
};

// NPC name generation
const nameComponents = {
  firstNamePrefixes: ["Ael", "Aer", "Af", "Ak", "Al", "Am", "An", "Ap", "Ar", "As", "At", "Av", "Ban", "Bar", "Bel", "Ben", "Ber", "Bok", "Bor", "Bran", "Breg", "Bren", "Brod", "Cam", "Car", "Chal", "Cham", "Ch", "Cuth", "Dag", "Dain", "Dal", "Dan", "Dar", "Dav", "De", "Deth", "Dor", "Duer", "Dun", "Ed", "Ein", "El", "En", "Er", "Es", "Fal", "Fen", "Fer", "Fhar", "Frath", "Gal", "Gan", "Gar", "Gath", "Gil", "Gor", "Gray", "Hal", "Han", "Har", "Hath", "Hen", "Hil", "Hor", "Hul", "In", "Ir", "Is", "Jal", "Jar", "Jor", "Kan", "Kar", "Kel", "Khal", "Kor", "Kra", "Kul", "Lam", "Lan", "Lev", "Lin", "Lor", "Mar", "Mas", "Me", "Mor", "Muel", "Mul", "Mur", "Nal", "Nar", "Nev", "Nil", "Nor", "Nyr", "Ol", "On", "Or", "Oth", "Pae", "Per", "Pet", "Qar", "Qil", "Qin", "Qor", "Quan", "Quil", "Rag", "Ran", "Rath", "Re", "Ren", "Rhud", "Riv", "Ron", "Sal", "Sam", "San", "Ser", "Sha", "Sil", "Sim", "Sol", "Sor", "Sum", "Syr", "Tar", "Tel", "Teth", "Thal", "Ther", "Thul", "Thur", "Til", "Tor", "Tras", "Trin", "Tul", "Tur", "Ul", "Um", "Un", "Ur", "Val", "Van", "Var", "Ved", "Ven", "Vil", "Von", "Vor", "War", "Wil", "Wor", "Xan", "Xen", "Xil", "Xor", "Yal", "Yan", "Yer", "Yor", "Yul", "Zen", "Zin", "Zor", "Zul"],
  
  firstNameSuffixes: ["a", "ac", "ace", "ach", "ad", "ade", "ae", "af", "ag", "ah", "ai", "ak", "ake", "al", "ale", "am", "an", "ane", "ar", "arc", "ard", "as", "ash", "at", "ath", "ayne", "az", "e", "ea", "ec", "ech", "ed", "ee", "ef", "eh", "ei", "ek", "el", "ele", "en", "ene", "ent", "er", "es", "esh", "ett", "ez", "i", "ia", "ic", "ich", "id", "ie", "ig", "ih", "ik", "il", "im", "in", "ine", "ing", "ioe", "ir", "is", "ish", "it", "ith", "ive", "iz", "o", "oa", "oe", "oi", "ok", "ol", "om", "on", "oo", "op", "or", "os", "osh", "ot", "oth", "ow", "oz", "u", "ue", "uh", "uk", "ul", "um", "un", "ur", "us", "uth", "uz"],
  
  lastNamePrefixes: ["Amber", "Angel", "Ash", "Astral", "Autumn", "Battle", "Black", "Blaze", "Blood", "Blue", "Bold", "Bright", "Bronze", "Brown", "Clear", "Copper", "Crag", "Crimson", "Dark", "Dawn", "Dead", "Deep", "Divine", "Double", "Dread", "Dream", "Dusk", "Dust", "Earth", "Ember", "Even", "Ever", "Far", "Fire", "Flame", "Flat", "Flint", "Fog", "Frost", "Ghost", "Gloom", "Gold", "Golden", "Grand", "Gray", "Great", "Green", "Grim", "Half", "Hard", "Haven", "High", "Hill", "Hollow", "Holy", "Honor", "Ice", "Iron", "Keen", "Light", "Long", "Mage", "Marsh", "Mighty", "Mist", "Moon", "Moss", "Mountain", "Mourn", "Night", "Noble", "Ocean", "Pale", "Plain", "Pride", "Proud", "Quick", "Rage", "Rain", "Rapid", "Raven", "Red", "River", "Rock", "Rose", "Rough", "Rumble", "Rune", "Sacred", "Sage", "Salt", "Sand", "Sea", "Serpent", "Shadow", "Sharp", "Shield", "Silent", "Silver", "Simple", "Single", "Sky", "Smoke", "Snow", "Soft", "Solid", "Spell", "Spider", "Spirit", "Spring", "Star", "Steel", "Still", "Stone", "Storm", "Strong", "Summer", "Sun", "Swift", "Thunder", "True", "Truth", "Tusk", "Twilight", "Water", "White", "Wild", "Wind", "Winter", "Wise", "Wolf", "Wood"],
  
  lastNameSuffixes: ["arm", "arrow", "bane", "bash", "basher", "bear", "blade", "blood", "bloom", "blossom", "bluff", "born", "bough", "bow", "brace", "branch", "brand", "breaker", "brew", "bringer", "brook", "brow", "caller", "chaser", "claw", "cleaver", "cloud", "crest", "crusher", "cut", "cutter", "dance", "dancer", "dark", "dawn", "day", "draw", "dream", "dusk", "dust", "eye", "eyes", "fall", "fang", "fighter", "fire", "fist", "flame", "flare", "flow", "flower", "follower", "font", "foot", "force", "forest", "forge", "fury", "gaze", "gazer", "gem", "gleam", "glide", "glow", "grace", "guard", "gut", "hand", "heart", "herald", "hewn", "horn", "hunter", "jumper", "keep", "keeper", "knife", "knight", "lance", "lash", "leaf", "light", "mace", "maid", "maker", "mane", "mantle", "mark", "master", "might", "moon", "more", "mourn", "peak", "pelt", "rage", "reaper", "reaver", "rider", "rift", "rock", "root", "runner", "scale", "scar", "seeker", "shade", "shadow", "shaper", "shield", "shine", "shot", "singer", "sky", "slayer", "snarl", "snap", "snare", "song", "sorrow", "spark", "spear", "spell", "spire", "spirit", "splitter", "sprinter", "stalker", "star", "steel", "stone", "storm", "stride", "striker", "sun", "surge", "sword", "sworn", "tail", "talon", "thorn", "tide", "toe", "tower", "tracker", "trap", "tree", "vale", "valor", "walker", "ward", "watcher", "water", "wave", "weave", "whisper", "willow", "wind", "wing", "wolf", "wood", "word", "wound", "wraith", "wrath"]
};

// Quest arc templates for different quest types
const questStepTemplates = {
  'Fetch/Retrieve': [
    { name: "Meeting the Quest Giver", template: "{questGiver.name} requests the party to retrieve {macguffin.name} from {location.name}. {questGiver.desc} They offer {reward.name} as payment." },
    { name: "Gathering Information", template: "The party learns that {macguffin.name} is guarded by {antagonist.name} who is motivated by {motivation.name}. {obstacle.name} stands in their way." },
    { name: "Journey to the Location", template: "The party travels to {location.name}. {location.desc} Along the way, they face a challenge: {skillChallenges.desc}" },
    { name: "Confronting the Obstacle", template: "At {location.name}, the party encounters {obstacle.name}. {obstacle.desc} They must overcome this to proceed." },
    { name: "Retrieving the Objective", template: "The party finds {macguffin.name} but faces {antagonist.name}. {complication.desc} complicates the situation." },
    { name: "Return and Reward", template: "Upon returning to {questGiver.name} with {macguffin.name}, the party receives {reward.name}. {twist.desc}" }
  ],
  'Kill/Defeat': [
    { name: "Receiving the Contract", template: "{questGiver.name} hires the party to defeat {antagonist.name} who is threatening the region. {questGiver.desc} They offer {reward.name} as payment." },
    { name: "Learning About the Target", template: "The party discovers that {antagonist.name} is motivated by {motivation.name} and resides at {location.name}. They learn of {antagonist.name}'s strengths and weaknesses." },
    { name: "Preparing for Battle", template: "The party prepares for the confrontation, gathering supplies and information. They learn about {obstacle.name} that protects {antagonist.name}." },
    { name: "Approaching the Lair", template: "The party travels to {location.name}. {location.desc} They face {obstacle.name} on the way." },
    { name: "The Final Confrontation", template: "The party battles {antagonist.name}. {complication.desc} makes the fight more challenging. The combat requires careful tactics." },
    { name: "Aftermath and Reward", template: "With {antagonist.name} defeated, the party returns to {questGiver.name} for their {reward.name}. {twist.desc}" }
  ],
  'Escort/Protect': [
    { name: "Accepting the Mission", template: "{questGiver.name} asks the party to escort/protect {macguffin.name} on a journey to {location.name}. {questGiver.desc} They offer {reward.name} as compensation." },
    { name: "Meeting the Ward", template: "The party meets {macguffin.name} and learns why protection is needed. {antagonist.name} motivated by {motivation.name} wants to capture/harm {macguffin.name}." },
    { name: "Beginning the Journey", template: "The party sets out with {macguffin.name} towards {location.name}. They must plan their route carefully to avoid danger." },
    { name: "Ambush!", template: "During the journey, {antagonist.name}'s forces ambush the party. {complication.desc} makes the situation dire." },
    { name: "Final Stretch", template: "Near {location.name}, the party faces {obstacle.name}. They must overcome this while keeping {macguffin.name} safe." },
    { name: "Safe Delivery", template: "The party successfully delivers {macguffin.name} to {location.name} and receives {reward.name}. {twist.desc}" }
  ],
  'Discover/Explore': [
    { name: "The Commission", template: "{questGiver.name} hires the party to explore {location.name} and discover its secrets. {questGiver.desc} They promise {reward.name} for a successful expedition." },
    { name: "Research and Preparation", template: "The party researches {location.name} and learns about its history and dangers. They discover that {antagonist.name} may also be interested in the location." },
    { name: "The Expedition Begins", template: "The party travels to {location.name}. {location.desc} The journey itself presents challenges: {skillChallenges.desc}" },
    { name: "Exploration Challenges", template: "Inside {location.name}, the party faces {obstacle.name}. {obstacle.desc} They must overcome this to continue their exploration." },
    { name: "Major Discovery", template: "The party makes a significant discovery but encounters {antagonist.name} who is there for {motivation.name}. {complication.desc} adds tension to the situation." },
    { name: "Return with Knowledge", template: "The party returns to {questGiver.name} with their discoveries and receives {reward.name}. {twist.desc}" }
  ],
  'Deliver': [
    { name: "Taking the Job", template: "{questGiver.name} hires the party to deliver {macguffin.name} to {location.name}. {questGiver.desc} They offer {reward.name} for successful delivery." },
    { name: "Receiving the Package", template: "The party receives {macguffin.name} and specific instructions for its delivery. They learn that {antagonist.name} wants to intercept it." },
    { name: "Setting Out", template: "The party begins their journey to {location.name}. {location.desc} They must be vigilant against {antagonist.name}'s agents." },
    { name: "Complications Arise", template: "During the journey, {complication.desc} creates problems. The party also faces {obstacle.name} that blocks their path." },
    { name: "Final Approach", template: "Near {location.name}, {antagonist.name} makes a final attempt to steal {macguffin.name}, motivated by {motivation.name}." },
    { name: "Delivery Complete", template: "The party successfully delivers {macguffin.name} to its destination and receives {reward.name}. {twist.desc}" }
  ],
  'default': [
    { name: "Receiving the Quest", template: "{questGiver.name} tasks the party with a mission involving {macguffin.name}. {questGiver.desc} They offer {reward.name} as payment." },
    { name: "Gathering Information", template: "The party learns more about their objective and discovers that {antagonist.name} motivated by {motivation.name} opposes them." },
    { name: "Preparation", template: "The party prepares for the mission, gathering resources and information about {location.name} where their objective is." },
    { name: "Facing Challenges", template: "At {location.name}, the party encounters {obstacle.name}. {obstacle.desc} They must overcome this challenge." },
    { name: "Climactic Confrontation", template: "The party faces {antagonist.name} in a decisive confrontation. {complication.desc} makes this more difficult." },
    { name: "Resolution", template: "The mission complete, the party returns to {questGiver.name} for their {reward.name}. {twist.desc}" }
  ]
};

// Difficulty ratings for skill challenges
const difficultyLevels = [
  { name: "Very Easy", dc: 5 },
  { name: "Easy", dc: 10 },
  { name: "Medium", dc: 15 },
  { name: "Hard", dc: 20 },
  { name: "Very Hard", dc: 25 },
  { name: "Nearly Impossible", dc: 30 }
];

// Locations for each step
const stepLocations = [
  { name: "Local Tavern", desc: "A bustling establishment with drinks, food, and gossip" },
  { name: "Town Square", desc: "The central gathering place for the community" },
  { name: "Guild Hall", desc: "Headquarters of a professional organization" },
  { name: "Market District", desc: "A busy area filled with merchants and shoppers" },
  { name: "Noble's Manor", desc: "The luxurious home of a wealthy individual" },
  { name: "Temple", desc: "A place of worship dedicated to a deity" },
  { name: "Library", desc: "A repository of books and knowledge" },
  { name: "Harbor", desc: "Where ships dock and maritime business occurs" },
  { name: "Castle", desc: "The fortified residence of the local ruler" },
  { name: "Wilderness Camp", desc: "A temporary settlement in the untamed lands" }
];

export default function QuestGenerator() {
  const [quest, setQuest] = useState(null);
  const [savedQuests, setSavedQuests] = useState([]);
  const [questTitle, setQuestTitle] = useState('');
  const [partyLevel, setPartyLevel] = useState(5);
  const [partySize, setPartySize] = useState(4);
  const [selectedQuestType, setSelectedQuestType] = useState(''); // Allow specific quest type selection
  const [includeTwist, setIncludeTwist] = useState(true);
  const [questDifficulty, setQuestDifficulty] = useState('medium');
  const [questLength, setQuestLength] = useState(6); // Number of steps
  
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
  
  // Generate a random name based on common fantasy patterns
  const generateRandomName = () => {
    const prefixes = nameComponents.firstNamePrefixes;
    const suffixes = nameComponents.firstNameSuffixes;
    const lastPrefixes = nameComponents.lastNamePrefixes;
    const lastSuffixes = nameComponents.lastNameSuffixes;
    
    const firstNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const firstNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const lastNamePrefix = lastPrefixes[Math.floor(Math.random() * lastPrefixes.length)];
    const lastNameSuffix = lastSuffixes[Math.floor(Math.random() * lastSuffixes.length)];
    
    return `${firstNamePrefix}${firstNameSuffix} ${lastNamePrefix}${lastNameSuffix}`;
  };
  
  // Helper to get random item from array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  // Generate a random location name
  const generateLocationName = () => {
    const prefixes = ["North", "South", "East", "West", "Upper", "Lower", "Old", "New", "Great", "Little", "Far", "Near", "High", "Low"];
    const baseNames = ["wood", "field", "bridge", "cross", "ton", "ville", "bury", "haven", "ford", "brook", "dale", "valley", "port", "wick", "castle", "stead", "garden"];
    
    const usePrefix = Math.random() > 0.5;
    const baseName = baseNames[Math.floor(Math.random() * baseNames.length)];
    
    let locationName = "";
    
    if (usePrefix) {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      locationName = prefix + baseName.charAt(0).toUpperCase() + baseName.slice(1);
    } else {
      // Create compound name
      const element = ["stone", "oak", "elm", "river", "lake", "hill", "mountain", "spring", "cliff", "marsh", "meadow", "shadow", "sun", "moon", "star"];
      const selectedElement = element[Math.floor(Math.random() * element.length)];
      locationName = selectedElement.charAt(0).toUpperCase() + selectedElement.slice(1) + baseName.charAt(0).toUpperCase() + baseName.slice(1);
    }
    
    return locationName;
  };
  
  // Get monsters based on environment and challenge level
  const getMonstersForLocation = (environment, difficulty) => {
    if (!environment || !monstersByEnvironment[environment]) {
      // Default to Dungeon if environment not found
      environment = 'Dungeon';
    }
    
    const monsters = monstersByEnvironment[environment][difficulty] || [];
    return monsters.length > 0 ? getRandomItem(monsters) : null;
  };
  
  // Determine an appropriate skill check DC based on party level and difficulty
  const getSkillCheckDC = () => {
    const difficultyModifiers = {
      'easy': -2,
      'medium': 0,
      'hard': 2,
      'deadly': 4
    };
    
    // Base DC scaled to party level
    const baseDC = 10 + Math.floor(partyLevel / 3);
    
    // Apply difficulty modifier
    const adjustedDC = baseDC + (difficultyModifiers[questDifficulty] || 0);
    
    // Find the closest standard DC
    let closestDifficulty = difficultyLevels[0];
    let minDifference = Math.abs(adjustedDC - difficultyLevels[0].dc);
    
    for (let i = 1; i < difficultyLevels.length; i++) {
      const difference = Math.abs(adjustedDC - difficultyLevels[i].dc);
      if (difference < minDifference) {
        minDifference = difference;
        closestDifficulty = difficultyLevels[i];
      }
    }
    
    return closestDifficulty;
  };
  
  // Fill in the template with actual values
  const populateTemplate = (template, elements) => {
    let populatedText = template;
    
    // Replace all placeholders with actual values
    for (const key in elements) {
      const regex = new RegExp(`{${key}}`, 'g');
      populatedText = populatedText.replace(regex, elements[key]);
      
      // Replace nested properties
      const nestedRegex = new RegExp(`{${key}\\.([^}]+)}`, 'g');
      let match;
      
      while ((match = nestedRegex.exec(template)) !== null) {
        const fullMatch = match[0];
        const property = match[1];
        
        if (elements[key] && elements[key][property] !== undefined) {
          populatedText = populatedText.replace(fullMatch, elements[key][property]);
        }
      }
    }
    
    return populatedText;
  };
  
  // Generate a random quest with detailed steps
  const generateQuest = () => {
    // Select the quest type
    const questType = selectedQuestType 
                      ? questData.questType.find(type => type.name === selectedQuestType) 
                      : getRandomItem(questData.questType);
    
    // Select other quest elements
    const antagonist = getRandomItem(questData.antagonist);
    const antagonistName = generateRandomName();
    const motivation = getRandomItem(questData.motivation);
    const complication = getRandomItem(questData.complication);
    const location = getRandomItem(questData.location);
    const locationName = generateLocationName();
    const reward = getRandomItem(questData.reward);
    const questGiver = getRandomItem(questData.questGiver);
    const questGiverName = generateRandomName();
    const macguffin = getRandomItem(questData.macguffin);
    const obstacle = getRandomItem(questData.obstacle);
    const skillChallenge = getRandomItem(questData.skillChallenges);
    
    // Get twist if enabled
    const twist = includeTwist ? getRandomItem(questData.twist) : { name: "No twist", desc: "The quest resolves as expected." };
    
    // Determine monsters appropriate for the location
    const monster = getMonstersForLocation(location.environment, questDifficulty);
    
    // Get skill check difficulty
    const skillDC = getSkillCheckDC();
    
    // Create template replacement elements
    const templateElements = {
      questGiver: { ...questGiver, name: questGiverName },
      antagonist: { ...antagonist, name: antagonistName },
      motivation,
      complication,
      location: { ...location, name: locationName },
      reward,
      twist,
      macguffin,
      obstacle,
      skillChallenges: skillChallenge,
      monster: monster || { name: "Unknown creature", cr: "?", notes: "No specific monster data available" },
      dc: skillDC.dc,
      difficulty: skillDC.name
    };
    
    // Select the appropriate template for this quest type
    const stepTemplate = questStepTemplates[questType.name] || questStepTemplates['default'];
    
    // Generate the quest steps
    const steps = [];
    const numSteps = Math.min(questLength, stepTemplate.length);
    
    for (let i = 0; i < numSteps; i++) {
      const stepBase = stepTemplate[i];
      const stepLocation = i === 0 ? getRandomItem(stepLocations) : (i === numSteps - 1 ? getRandomItem(stepLocations) : null);
      
      // Add location to template elements if this is a meeting step
      if (stepLocation) {
        templateElements.stepLocation = stepLocation;
      }
      
      const step = {
        number: i + 1,
        name: stepBase.name,
        description: populateTemplate(stepBase.template, templateElements)
      };
      
      // Add optional elements based on step type
      if (i === 3 || i === 4) { // Middle steps often have combat or skill challenges
        step.challenge = {
          type: Math.random() > 0.5 ? 'combat' : 'skill',
          description: Math.random() > 0.5 
            ? `Combat encounter with ${monster ? monster.name : 'hostile creatures'}` 
            : `${skillChallenge.name} check (DC ${skillDC.dc}, ${skillDC.name})`
        };
      }
      
      steps.push(step);
    }
    
    // Generate a quest summary
    let summary = `${questGiverName}, a ${questGiver.name.toLowerCase()}, needs adventurers to ${questType.name.toLowerCase()} `;
    
    if (questType.name === 'Fetch/Retrieve' || questType.name === 'Deliver') {
      summary += `${macguffin.name.toLowerCase()} `;
    } else if (questType.name === 'Kill/Defeat') {
      summary += `${antagonistName}, a ${antagonist.name.toLowerCase()} who `;
    } else if (questType.name === 'Escort/Protect') {
      summary += `an important person or item `;
    }
    
    summary += `at ${locationName}. `;
    summary += `The antagonist, ${antagonistName}, is motivated by ${motivation.name.toLowerCase()}. `;
    summary += `If successful, the reward will be ${reward.name.toLowerCase()}.`;
    
    // Auto-generate title if not provided
    const autoTitle = questTitle || `The ${questType.name} of ${locationName}`;
    
    // Create the quest object
    const newQuest = {
      id: Date.now().toString(),
      title: autoTitle,
      summary,
      questType: questType.name,
      questGiver: {
        name: questGiverName,
        type: questGiver.name,
        description: questGiver.desc
      },
      antagonist: {
        name: antagonistName,
        type: antagonist.name,
        description: antagonist.desc,
        motivation: motivation.name
      },
      location: {
        name: locationName,
        type: location.name,
        description: location.desc,
        environment: location.environment
      },
      objective: macguffin.name,
      reward: {
        type: reward.name,
        description: reward.desc,
        value: reward.value
      },
      complication: complication.name,
      twist: includeTwist ? twist.name : "None",
      party: {
        level: partyLevel,
        size: partySize
      },
      difficulty: questDifficulty,
      steps,
      timestamp: new Date().toISOString()
    };
    
    setQuest(newQuest);
    
    // Reset title field
    setQuestTitle('');
    
    return newQuest;
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
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Quest Arc Generator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Generator Controls */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Quest Arc Settings</h3>
          
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
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Quest Type</label>
            <select 
              value={selectedQuestType} 
              onChange={(e) => setSelectedQuestType(e.target.value)}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              <option value="">Random (Any Type)</option>
              {questData.questType.map(type => (
                <option key={type.name} value={type.name}>{type.name}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Party Level</label>
              <input 
                type="number" 
                min="1" 
                max="20" 
                value={partyLevel} 
                onChange={(e) => setPartyLevel(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              />
            </div>
            
            <div>
              <label className="block text-amber-200 text-sm font-medium mb-1">Party Size</label>
              <input 
                type="number" 
                min="1" 
                max="10" 
                value={partySize} 
                onChange={(e) => setPartySize(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Difficulty</label>
            <select 
              value={questDifficulty} 
              onChange={(e) => setQuestDifficulty(e.target.value)}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="deadly">Deadly</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Quest Length</label>
            <select 
              value={questLength} 
              onChange={(e) => setQuestLength(parseInt(e.target.value))}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              <option value="3">Short (3 steps)</option>
              <option value="4">Brief (4 steps)</option>
              <option value="5">Standard (5 steps)</option>
              <option value="6">Complete (6 steps)</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label className="flex items-center text-amber-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={includeTwist}
                onChange={(e) => setIncludeTwist(e.target.checked)}
                className="mr-2 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              Include Plot Twist
            </label>
          </div>
          
          <button 
            onClick={generateQuest}
            className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
          >
            Generate Quest Arc
          </button>
        </div>
        
        {/* Quest Overview */}
        {quest && (
          <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-amber-100 mb-3">Quest Overview</h3>
              <button
                onClick={saveQuest}
                className="px-3 py-1 bg-amber-700 hover:bg-amber-600 text-amber-100 text-sm rounded"
              >
                Save Quest
              </button>
            </div>
            
            <div className="bg-stone-700 rounded-lg p-3 mb-4">
              <h3 className="text-xl font-bold text-amber-200 mb-2">{quest.title}</h3>
              
              <p className="mb-3">{quest.summary}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm mt-3">
                <div>
                  <span className="text-amber-200 font-medium">Quest Type:</span> {quest.questType}
                </div>
                <div>
                  <span className="text-amber-200 font-medium">Difficulty:</span> {quest.difficulty.charAt(0).toUpperCase() + quest.difficulty.slice(1)}
                </div>
                <div>
                  <span className="text-amber-200 font-medium">Quest Giver:</span> {quest.questGiver.name} ({quest.questGiver.type})
                </div>
                <div>
                  <span className="text-amber-200 font-medium">Location:</span> {quest.location.name} ({quest.location.type})
                </div>
                <div>
                  <span className="text-amber-200 font-medium">Antagonist:</span> {quest.antagonist.name} ({quest.antagonist.type})
                </div>
                <div>
                  <span className="text-amber-200 font-medium">Objective:</span> {quest.objective}
                </div>
                <div>
                  <span className="text-amber-200 font-medium">Reward:</span> {quest.reward.type}
                </div>
                <div>
                  <span className="text-amber-200 font-medium">Complication:</span> {quest.complication}
                </div>
                {quest.twist !== "None" && (
                  <div className="col-span-full">
                    <span className="text-amber-200 font-medium">Twist:</span> {quest.twist}
                  </div>
                )}
                <div className="col-span-full text-xs text-amber-100/70">
                  Designed for {quest.party.size} level {quest.party.level} characters
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Quest Steps */}
      {quest && (
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30 mb-6">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Quest Steps</h3>
          
          <div className="space-y-4">
            {quest.steps.map((step, index) => (
              <div key={index} className="bg-stone-700 rounded-lg p-3 relative">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center text-amber-100 font-bold mr-3">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-medium text-amber-100">{step.name}</h4>
                </div>
                
                <p className="mb-3">{step.description}</p>
                
                {step.challenge && (
                  <div className="mt-2 p-2 bg-stone-800/70 rounded-md">
                    <div className="text-amber-200 font-medium text-sm">
                      {step.challenge.type === 'combat' ? 'Combat Challenge:' : 'Skill Challenge:'}
                    </div>
                    <div className="text-sm">{step.challenge.description}</div>
                  </div>
                )}
                
                {index < quest.steps.length - 1 && (
                  <div className="absolute left-4 -bottom-4 h-4 border-l-2 border-amber-900/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
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
                
                <div className="flex justify-between text-xs">
                  <span className="text-amber-100/80">{savedQuest.questType}</span>
                  <span className="text-amber-100/80">
                    {savedQuest.steps?.length || "?"} steps
                  </span>
                </div>
                
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
      
      {/* Quest Design Tips */}
      <div className="bg-stone-800 rounded-lg overflow-hidden border border-amber-900/30">
        <div 
          className="flex justify-between items-center p-3 bg-stone-700 cursor-pointer"
          onClick={() => document.getElementById('quest-tips').classList.toggle('hidden')}
        >
          <h3 className="font-medium text-amber-100">Quest Design Tips</h3>
          <span className="text-xs text-amber-100/60">Click to Expand/Collapse</span>
        </div>
        
        <div id="quest-tips" className="hidden p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-amber-200 font-medium mb-2">The Five-Room Dungeon Model</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li><span className="text-amber-200 font-medium">Entrance and Guardian:</span> Introduction and initial challenge</li>
                <li><span className="text-amber-200 font-medium">Puzzle or Roleplaying Challenge:</span> Problem that can't be solved with combat</li>
                <li><span className="text-amber-200 font-medium">Red Herring:</span> Optional encounter or distraction</li>
                <li><span className="text-amber-200 font-medium">Climax/Boss Fight:</span> Major challenge that's the focus of the quest</li>
                <li><span className="text-amber-200 font-medium">Reward/Revelation:</span> Treasure, information, or plot development</li>
              </ol>
            </div>
            
            <div>
              <h4 className="text-amber-200 font-medium mb-2">Making Quests Memorable</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Include a unique NPC with distinctive traits</li>
                <li>Add a moral choice with meaningful consequences</li>
                <li>Use environmental elements during key encounters</li>
                <li>Incorporate foreshadowing of future plot points</li>
                <li>Create connections to character backstories</li>
                <li>Subvert expectations with an unexpected twist</li>
                <li>Design varied challenges beyond just combat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
