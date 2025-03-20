// src/tools/DMScreen/WeatherGenerator.js
import React, { useState, useEffect } from 'react';

// Weather data by climate
const weatherData = {
  temperate: {
    spring: {
      temperature: [
        { range: [1, 5], description: 'Unseasonably cold', modifier: -10 },
        { range: [6, 10], description: 'Chilly', modifier: -5 },
        { range: [11, 16], description: 'Cool', modifier: 0 },
        { range: [17, 19], description: 'Warm', modifier: 5 },
        { range: [20, 20], description: 'Unseasonably warm', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 10], description: 'Clear' },
        { range: [11, 14], description: 'Light rain' },
        { range: [15, 17], description: 'Moderate rain' },
        { range: [18, 19], description: 'Heavy rain' },
        { range: [20, 20], description: 'Thunderstorm' }
      ],
      baseTemp: { min: 45, max: 65 }
    },
    summer: {
      temperature: [
        { range: [1, 3], description: 'Unseasonably cold', modifier: -10 },
        { range: [4, 6], description: 'Cool', modifier: -5 },
        { range: [7, 14], description: 'Warm', modifier: 0 },
        { range: [15, 17], description: 'Hot', modifier: 5 },
        { range: [18, 20], description: 'Sweltering', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 14], description: 'Clear' },
        { range: [15, 16], description: 'Light rain' },
        { range: [17, 18], description: 'Moderate rain' },
        { range: [19, 19], description: 'Heavy rain' },
        { range: [20, 20], description: 'Thunderstorm' }
      ],
      baseTemp: { min: 70, max: 85 }
    },
    fall: {
      temperature: [
        { range: [1, 5], description: 'Unseasonably cold', modifier: -10 },
        { range: [6, 10], description: 'Chilly', modifier: -5 },
        { range: [11, 16], description: 'Cool', modifier: 0 },
        { range: [17, 19], description: 'Warm', modifier: 5 },
        { range: [20, 20], description: 'Unseasonably warm', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 12], description: 'Clear' },
        { range: [13, 16], description: 'Light rain' },
        { range: [17, 18], description: 'Moderate rain' },
        { range: [19, 20], description: 'Heavy rain' }
      ],
      baseTemp: { min: 50, max: 70 }
    },
    winter: {
      temperature: [
        { range: [1, 4], description: 'Bitter cold', modifier: -15 },
        { range: [5, 10], description: 'Cold', modifier: -5 },
        { range: [11, 16], description: 'Chilly', modifier: 0 },
        { range: [17, 19], description: 'Mild', modifier: 5 },
        { range: [20, 20], description: 'Unseasonably warm', modifier: 15 }
      ],
      precipitation: [
        { range: [1, 12], description: 'Clear' },
        { range: [13, 16], description: 'Light snow' },
        { range: [17, 18], description: 'Moderate snow' },
        { range: [19, 20], description: 'Snowstorm' }
      ],
      baseTemp: { min: 25, max: 40 }
    }
  },
  desert: {
    spring: {
      temperature: [
        { range: [1, 3], description: 'Cool', modifier: -15 },
        { range: [4, 8], description: 'Mild', modifier: -5 },
        { range: [9, 14], description: 'Warm', modifier: 0 },
        { range: [15, 17], description: 'Hot', modifier: 5 },
        { range: [18, 20], description: 'Very hot', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 18], description: 'Clear' },
        { range: [19, 19], description: 'Light rain' },
        { range: [20, 20], description: 'Sandstorm' }
      ],
      baseTemp: { min: 60, max: 80 }
    },
    summer: {
      temperature: [
        { range: [1, 2], description: 'Hot', modifier: -5 },
        { range: [3, 8], description: 'Very hot', modifier: 0 },
        { range: [9, 14], description: 'Sweltering', modifier: 5 },
        { range: [15, 19], description: 'Scorching', modifier: 10 },
        { range: [20, 20], description: 'Deadly heat', modifier: 15 }
      ],
      precipitation: [
        { range: [1, 19], description: 'Clear' },
        { range: [20, 20], description: 'Sandstorm' }
      ],
      baseTemp: { min: 85, max: 110 }
    },
    fall: {
      temperature: [
        { range: [1, 3], description: 'Cool', modifier: -15 },
        { range: [4, 8], description: 'Mild', modifier: -5 },
        { range: [9, 14], description: 'Warm', modifier: 0 },
        { range: [15, 17], description: 'Hot', modifier: 5 },
        { range: [18, 20], description: 'Very hot', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 18], description: 'Clear' },
        { range: [19, 19], description: 'Light rain' },
        { range: [20, 20], description: 'Sandstorm' }
      ],
      baseTemp: { min: 60, max: 85 }
    },
    winter: {
      temperature: [
        { range: [1, 4], description: 'Cold', modifier: -15 },
        { range: [5, 10], description: 'Cool', modifier: -5 },
        { range: [11, 16], description: 'Mild', modifier: 0 },
        { range: [17, 19], description: 'Warm', modifier: 10 },
        { range: [20, 20], description: 'Hot', modifier: 15 }
      ],
      precipitation: [
        { range: [1, 17], description: 'Clear' },
        { range: [18, 19], description: 'Light rain' },
        { range: [20, 20], description: 'Sandstorm' }
      ],
      baseTemp: { min: 40, max: 60 }
    }
  },
  arctic: {
    spring: {
      temperature: [
        { range: [1, 5], description: 'Bitter cold', modifier: -10 },
        { range: [6, 12], description: 'Cold', modifier: 0 },
        { range: [13, 18], description: 'Chilly', modifier: 5 },
        { range: [19, 20], description: 'Mild', modifier: 15 }
      ],
      precipitation: [
        { range: [1, 12], description: 'Clear' },
        { range: [13, 16], description: 'Light snow' },
        { range: [17, 19], description: 'Moderate snow' },
        { range: [20, 20], description: 'Blizzard' }
      ],
      baseTemp: { min: 10, max: 30 }
    },
    summer: {
      temperature: [
        { range: [1, 3], description: 'Cold', modifier: -10 },
        { range: [4, 10], description: 'Chilly', modifier: 0 },
        { range: [11, 17], description: 'Mild', modifier: 5 },
        { range: [18, 20], description: 'Warm', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 14], description: 'Clear' },
        { range: [15, 18], description: 'Light rain' },
        { range: [19, 20], description: 'Moderate rain' }
      ],
      baseTemp: { min: 35, max: 50 }
    },
    fall: {
      temperature: [
        { range: [1, 5], description: 'Bitter cold', modifier: -10 },
        { range: [6, 12], description: 'Cold', modifier: 0 },
        { range: [13, 18], description: 'Chilly', modifier: 5 },
        { range: [19, 20], description: 'Mild', modifier: 15 }
      ],
      precipitation: [
        { range: [1, 12], description: 'Clear' },
        { range: [13, 16], description: 'Light snow' },
        { range: [17, 19], description: 'Moderate snow' },
        { range: [20, 20], description: 'Blizzard' }
      ],
      baseTemp: { min: 15, max: 35 }
    },
    winter: {
      temperature: [
        { range: [1, 8], description: 'Frigid', modifier: -15 },
        { range: [9, 16], description: 'Bitter cold', modifier: 0 },
        { range: [17, 19], description: 'Cold', modifier: 10 },
        { range: [20, 20], description: 'Chilly', modifier: 20 }
      ],
      precipitation: [
        { range: [1, 10], description: 'Clear' },
        { range: [11, 15], description: 'Light snow' },
        { range: [16, 18], description: 'Moderate snow' },
        { range: [19, 20], description: 'Blizzard' }
      ],
      baseTemp: { min: -20, max: 10 }
    }
  },
  tropical: {
    spring: {
      temperature: [
        { range: [1, 3], description: 'Mild', modifier: -10 },
        { range: [4, 8], description: 'Warm', modifier: -5 },
        { range: [9, 14], description: 'Hot', modifier: 0 },
        { range: [15, 18], description: 'Very hot', modifier: 5 },
        { range: [19, 20], description: 'Sweltering', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 8], description: 'Clear' },
        { range: [9, 14], description: 'Light rain' },
        { range: [15, 17], description: 'Moderate rain' },
        { range: [18, 19], description: 'Heavy rain' },
        { range: [20, 20], description: 'Monsoon' }
      ],
      baseTemp: { min: 75, max: 85 }
    },
    summer: {
      temperature: [
        { range: [1, 2], description: 'Warm', modifier: -10 },
        { range: [3, 6], description: 'Hot', modifier: -5 },
        { range: [7, 14], description: 'Very hot', modifier: 0 },
        { range: [15, 18], description: 'Sweltering', modifier: 5 },
        { range: [19, 20], description: 'Oppressive', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 6], description: 'Clear' },
        { range: [7, 10], description: 'Light rain' },
        { range: [11, 14], description: 'Moderate rain' },
        { range: [15, 18], description: 'Heavy rain' },
        { range: [19, 20], description: 'Monsoon' }
      ],
      baseTemp: { min: 80, max: 95 }
    },
    fall: {
      temperature: [
        { range: [1, 3], description: 'Mild', modifier: -10 },
        { range: [4, 8], description: 'Warm', modifier: -5 },
        { range: [9, 14], description: 'Hot', modifier: 0 },
        { range: [15, 18], description: 'Very hot', modifier: 5 },
        { range: [19, 20], description: 'Sweltering', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 8], description: 'Clear' },
        { range: [9, 14], description: 'Light rain' },
        { range: [15, 17], description: 'Moderate rain' },
        { range: [18, 19], description: 'Heavy rain' },
        { range: [20, 20], description: 'Monsoon' }
      ],
      baseTemp: { min: 75, max: 90 }
    },
    winter: {
      temperature: [
        { range: [1, 5], description: 'Mild', modifier: -5 },
        { range: [6, 10], description: 'Warm', modifier: 0 },
        { range: [11, 16], description: 'Hot', modifier: 5 },
        { range: [17, 20], description: 'Very hot', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 10], description: 'Clear' },
        { range: [11, 14], description: 'Light rain' },
        { range: [15, 18], description: 'Moderate rain' },
        { range: [19, 20], description: 'Heavy rain' }
      ],
      baseTemp: { min: 70, max: 85 }
    }
  },
  coastal: {
    spring: {
      temperature: [
        { range: [1, 5], description: 'Cool', modifier: -10 },
        { range: [6, 10], description: 'Mild', modifier: -5 },
        { range: [11, 16], description: 'Warm', modifier: 0 },
        { range: [17, 19], description: 'Very warm', modifier: 5 },
        { range: [20, 20], description: 'Hot', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 8], description: 'Clear' },
        { range: [9, 13], description: 'Foggy' },
        { range: [14, 17], description: 'Light rain' },
        { range: [18, 19], description: 'Moderate rain' },
        { range: [20, 20], description: 'Stormy seas' }
      ],
      baseTemp: { min: 50, max: 65 }
    },
    summer: {
      temperature: [
        { range: [1, 3], description: 'Mild', modifier: -10 },
        { range: [4, 8], description: 'Warm', modifier: -5 },
        { range: [9, 15], description: 'Very warm', modifier: 0 },
        { range: [16, 19], description: 'Hot', modifier: 5 },
        { range: [20, 20], description: 'Very hot', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 10], description: 'Clear' },
        { range: [11, 15], description: 'Foggy' },
        { range: [16, 18], description: 'Light rain' },
        { range: [19, 19], description: 'Moderate rain' },
        { range: [20, 20], description: 'Tropical storm' }
      ],
      baseTemp: { min: 65, max: 80 }
    },
    fall: {
      temperature: [
        { range: [1, 5], description: 'Cool', modifier: -10 },
        { range: [6, 10], description: 'Mild', modifier: -5 },
        { range: [11, 16], description: 'Warm', modifier: 0 },
        { range: [17, 19], description: 'Very warm', modifier: 5 },
        { range: [20, 20], description: 'Hot', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 7], description: 'Clear' },
        { range: [8, 11], description: 'Foggy' },
        { range: [12, 15], description: 'Light rain' },
        { range: [16, 18], description: 'Moderate rain' },
        { range: [19, 20], description: 'Coastal storm' }
      ],
      baseTemp: { min: 55, max: 70 }
    },
    winter: {
      temperature: [
        { range: [1, 4], description: 'Cold', modifier: -10 },
        { range: [5, 10], description: 'Chilly', modifier: -5 },
        { range: [11, 16], description: 'Cool', modifier: 0 },
        { range: [17, 19], description: 'Mild', modifier: 5 },
        { range: [20, 20], description: 'Warm', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 6], description: 'Clear' },
        { range: [7, 10], description: 'Foggy' },
        { range: [11, 14], description: 'Light rain' },
        { range: [15, 17], description: 'Moderate rain' },
        { range: [18, 19], description: 'Heavy rain' },
        { range: [20, 20], description: 'Winter storm' }
      ],
      baseTemp: { min: 40, max: 55 }
    }
  },
  mountain: {
    spring: {
      temperature: [
        { range: [1, 5], description: 'Cold', modifier: -15 },
        { range: [6, 12], description: 'Chilly', modifier: -5 },
        { range: [13, 17], description: 'Cool', modifier: 0 },
        { range: [18, 20], description: 'Mild', modifier: 5 }
      ],
      precipitation: [
        { range: [1, 8], description: 'Clear' },
        { range: [9, 12], description: 'Foggy' },
        { range: [13, 16], description: 'Light rain/snow' },
        { range: [17, 19], description: 'Moderate rain/snow' },
        { range: [20, 20], description: 'Mountain storm' }
      ],
      baseTemp: { min: 35, max: 55 }
    },
    summer: {
      temperature: [
        { range: [1, 3], description: 'Chilly', modifier: -10 },
        { range: [4, 10], description: 'Cool', modifier: -5 },
        { range: [11, 16], description: 'Mild', modifier: 0 },
        { range: [17, 19], description: 'Warm', modifier: 5 },
        { range: [20, 20], description: 'Hot', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 10], description: 'Clear' },
        { range: [11, 14], description: 'Foggy' },
        { range: [15, 17], description: 'Light rain' },
        { range: [18, 19], description: 'Thunderstorm' },
        { range: [20, 20], description: 'Mountain storm' }
      ],
      baseTemp: { min: 50, max: 70 }
    },
    fall: {
      temperature: [
        { range: [1, 5], description: 'Cold', modifier: -15 },
        { range: [6, 12], description: 'Chilly', modifier: -5 },
        { range: [13, 17], description: 'Cool', modifier: 0 },
        { range: [18, 20], description: 'Mild', modifier: 5 }
      ],
      precipitation: [
        { range: [1, 8], description: 'Clear' },
        { range: [9, 12], description: 'Foggy' },
        { range: [13, 16], description: 'Light rain/snow' },
        { range: [17, 19], description: 'Moderate rain/snow' },
        { range: [20, 20], description: 'Mountain storm' }
      ],
      baseTemp: { min: 40, max: 60 }
    },
    winter: {
      temperature: [
        { range: [1, 8], description: 'Frigid', modifier: -20 },
        { range: [9, 14], description: 'Bitter cold', modifier: -10 },
        { range: [15, 19], description: 'Cold', modifier: 0 },
        { range: [20, 20], description: 'Chilly', modifier: 10 }
      ],
      precipitation: [
        { range: [1, 8], description: 'Clear' },
        { range: [9, 12], description: 'Light snow' },
        { range: [13, 16], description: 'Moderate snow' },
        { range: [17, 19], description: 'Heavy snow' },
        { range: [20, 20], description: 'Blizzard' }
      ],
      baseTemp: { min: 0, max: 35 }
    }
  }
};

// Wind data
const windData = [
  { range: [1, 5], description: 'Calm', details: 'Smoke rises vertically, still air' },
  { range: [6, 10], description: 'Light breeze', details: 'Wind felt on face, leaves rustle' },
  { range: [11, 15], description: 'Moderate breeze', details: 'Raises dust, small branches move' },
  { range: [16, 19], description: 'Strong wind', details: 'Large branches in motion, whistling heard' },
  { range: [20, 20], description: 'Gale', details: 'Walking against the wind is difficult, twigs break from trees' }
];

// Weather effects
const weatherEffects = {
  'Blizzard': [
    'Heavily obscured (visibility severely limited)',
    'Difficult terrain due to snow accumulation',
    'Disadvantage on Perception checks relying on sight or hearing',
    'Ranged weapon attacks have disadvantage',
    'DC 10 Constitution saving throw every hour or gain one level of exhaustion'
  ],
  'Sandstorm': [
    'Heavily obscured (visibility severely limited)',
    'Disadvantage on Perception checks relying on sight or hearing',
    'Ranged weapon attacks have disadvantage',
    'Non-magical flames extinguished',
    'DC 10 Constitution saving throw every hour or gain one level of exhaustion'
  ],
  'Monsoon': [
    'Lightly obscured (dim light conditions)',
    'Disadvantage on Perception checks relying on hearing',
    'Ranged weapon attacks beyond normal range impossible',
    'Non-magical flames extinguished',
    'Difficult terrain in low-lying areas due to flooding'
  ],
  'Heavy rain': [
    'Lightly obscured (dim light conditions)',
    'Disadvantage on Perception checks relying on hearing',
    'Ranged weapon attacks beyond normal range have disadvantage',
    'Non-magical flames may be extinguished'
  ],
  'Heavy snow': [
    'Lightly obscured (dim light conditions)',
    'Difficult terrain due to snow accumulation',
    'Tracks easy to follow (+5 to Survival checks)'
  ],
  'Foggy': [
    'Heavily obscured beyond 60 feet',
    'Lightly obscured within 60 feet',
    'Disadvantage on Perception checks relying on sight'
  ],
  'Thunderstorm': [
    'Lightly obscured (dim light conditions)',
    'Loud thunder obscures other sounds',
    'Disadvantage on Perception checks relying on hearing',
    'Lightning strikes possible (1 in 20 chance each hour in exposed areas)'
  ],
  'Moderate rain': [
    'Normal visibility',
    'Slight penalty to Perception checks relying on hearing',
    'Non-magical flames might be extinguished in exposed areas'
  ],
  'Light rain': [
    'Normal visibility',
    'No significant game effects',
    'Wet conditions may affect some activities'
  ],
  'Mountain storm': [
    'Heavily obscured (visibility severely limited)',
    'Strong winds make ranged attacks difficult',
    'Risk of lightning strikes in exposed areas',
    'Difficult terrain at higher elevations'
  ],
  'Frigid': [
    'DC 10 Constitution saving throw every hour or gain one level of exhaustion if not properly dressed',
    'Water may freeze',
    'Risk of hypothermia for prolonged exposure'
  ],
  'Bitter cold': [
    'DC 5 Constitution saving throw every hour or gain one level of exhaustion if not properly dressed',
    'Standing water freezes'
  ]
};

export default function WeatherGenerator() {
  const [climate, setClimate] = useState('temperate');
  const [season, setSeason] = useState('spring');
  const [weatherReport, setWeatherReport] = useState(null);
  const [recentWeather, setRecentWeather] = useState([]);
  const [useMetric, setUseMetric] = useState(false);
  
  // Load recent weather from localStorage when component mounts
  useEffect(() => {
    const savedWeather = localStorage.getItem('dm-screen-recent-weather');
    if (savedWeather) {
      setRecentWeather(JSON.parse(savedWeather));
    }
  }, []);
  
  // Save recent weather to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('dm-screen-recent-weather', JSON.stringify(recentWeather));
  }, [recentWeather]);
  
  // Roll dice function
  const rollDice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Find appropriate weather based on roll
  const findWeatherForRoll = (array, roll) => {
    for (const item of array) {
      if (roll >= item.range[0] && roll <= item.range[1]) {
        return item;
      }
    }
    return array[0]; // Fallback to first item
  };
  
  // Convert temperature from F to C
  const convertTemp = (temp) => {
    if (useMetric) {
      return Math.round((temp - 32) * 5 / 9);
    }
    return temp;
  };
  
  // Generate weather based on selected climate and season
  const generateWeather = () => {
    const weatherForClimate = weatherData[climate][season];
    
    // Roll for temperature description and modifier
    const tempRoll = rollDice(1, 20);
    const tempResult = findWeatherForRoll(weatherForClimate.temperature, tempRoll);
    
    // Roll for precipitation
    const precipRoll = rollDice(1, 20);
    const precipResult = findWeatherForRoll(weatherForClimate.precipitation, precipRoll);
    
    // Roll for wind
    const windRoll = rollDice(1, 20);
    const windResult = findWeatherForRoll(windData, windRoll);
    
    // Calculate actual temperature ranges
    const baseTemp = weatherForClimate.baseTemp;
    const minTemp = baseTemp.min + tempResult.modifier;
    const maxTemp = baseTemp.max + tempResult.modifier;
    
    // Generate exact temperature in the range
    const exactTemp = rollDice(minTemp, maxTemp);
    
    // Find game effects
    const effects = weatherEffects[precipResult.description] || 
                   weatherEffects[tempResult.description] || 
                   [];
    
    // Create the weather report
    const report = {
      climate,
      season,
      temperature: {
        description: tempResult.description,
        exact: exactTemp,
        unit: useMetric ? '°C' : '°F'
      },
      precipitation: precipResult.description,
      wind: windResult,
      effects,
      timestamp: new Date().toISOString(),
      day: getDayName(),
      time: getTimeName()
    };
    
    // Add to recent reports (max 10)
    setRecentWeather(prev => {
      const updated = [report, ...prev];
      if (updated.length > 10) {
        return updated.slice(0, 10);
      }
      return updated;
    });
    
    setWeatherReport(report);
  };
  
  // Get a fantasy day name
  const getDayName = () => {
    const days = ['Starday', 'Sunday', 'Moonday', 'Godsday', 'Waterday', 'Earthday', 'Freeday'];
    return days[Math.floor(Math.random() * days.length)];
  };
  
  // Get a time of day
  const getTimeName = () => {
    const times = ['Dawn', 'Morning', 'Midday', 'Afternoon', 'Evening', 'Dusk', 'Night', 'Midnight'];
    return times[Math.floor(Math.random() * times.length)];
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-200 mb-4">Weather Generator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Generator Controls */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Generate Weather</h3>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Climate</label>
            <select 
              value={climate} 
              onChange={(e) => setClimate(e.target.value)}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              <option value="temperate">Temperate</option>
              <option value="desert">Desert</option>
              <option value="arctic">Arctic</option>
              <option value="tropical">Tropical</option>
              <option value="coastal">Coastal</option>
              <option value="mountain">Mountain</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label className="block text-amber-200 text-sm font-medium mb-1">Season</label>
            <select 
              value={season} 
              onChange={(e) => setSeason(e.target.value)}
              className="w-full bg-stone-700 border border-amber-900/50 rounded-lg p-2 text-amber-100"
            >
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall/Autumn</option>
              <option value="winter">Winter</option>
            </select>
          </div>
          
          <div className="mb-3 flex items-center">
            <label className="flex items-center text-amber-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={useMetric}
                onChange={() => setUseMetric(!useMetric)}
                className="mr-2 rounded border-amber-600 text-amber-600 focus:ring-amber-500"
              />
              Use Metric (Celsius)
            </label>
          </div>
          
          <button 
            onClick={generateWeather}
            className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-600 text-amber-100 font-medium rounded-lg"
          >
            Generate Weather
          </button>
          
          {/* Climate Information */}
          <div className="mt-4 p-3 bg-stone-700/50 rounded-lg">
            <h4 className="text-amber-200 text-sm font-medium mb-2">Climate Information:</h4>
            <p className="text-sm">
              {climate === 'temperate' && "Temperate climates have moderate seasonal variations, with distinct spring, summer, fall, and winter. Conditions are generally mild, with regular rainfall distributed throughout the year."}
              {climate === 'desert' && "Desert climates are hot and dry with extreme temperature fluctuations between day and night. Precipitation is rare, and when it does occur, it's often in brief intense storms."}
              {climate === 'arctic' && "Arctic climates are characterized by long, bitterly cold winters and brief, cool summers. Precipitation is primarily snow, with frozen ground and potentially permanent ice."}
              {climate === 'tropical' && "Tropical climates are consistently warm to hot with high humidity. Instead of four seasons, they typically have wet and dry seasons, with abundant rainfall during monsoon periods."}
              {climate === 'coastal' && "Coastal climates are influenced by nearby bodies of water, resulting in moderate temperatures with smaller seasonal variations. They often feature foggy conditions and sea breezes."}
              {climate === 'mountain' && "Mountain climates vary dramatically based on elevation, with cooler temperatures and increased precipitation compared to surrounding lowlands. Weather can change rapidly and unpredictably."}
            </p>
          </div>
        </div>
        
        {/* Weather Display */}
        <div className="bg-stone-800 rounded-lg p-4 border border-amber-900/30">
          <h3 className="text-lg font-medium text-amber-100 mb-3">Current Weather</h3>
          
          {weatherReport ? (
            <div className="p-3 bg-stone-700 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-amber-200 font-medium">{weatherReport.day}, {weatherReport.time}</h4>
                  <p className="text-sm text-amber-100/70 capitalize">{weatherReport.climate} region, {weatherReport.season}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{convertTemp(weatherReport.temperature.exact)}{weatherReport.temperature.unit}</p>
                  <p className="text-sm">{weatherReport.temperature.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-stone-800/50 p-2 rounded">
                  <p className="text-amber-200 text-sm font-medium">Precipitation</p>
                  <p>{weatherReport.precipitation}</p>
                </div>
                <div className="bg-stone-800/50 p-2 rounded">
                  <p className="text-amber-200 text-sm font-medium">Wind</p>
                  <p>{weatherReport.wind.description}</p>
                  <p className="text-xs text-amber-100/70">{weatherReport.wind.details}</p>
                </div>
              </div>
              
              {weatherReport.effects.length > 0 && (
                <div className="mt-3">
                  <p className="text-amber-200 text-sm font-medium">Game Effects:</p>
                  <ul className="text-sm mt-1 pl-4 list-disc">
                    {weatherReport.effects.map((effect, index) => (
                      <li key={index}>{effect}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-amber-100/60">
              Generate weather to see results here.
            </div>
          )}
          
          <div className="mt-4">
            <h4 className="text-amber-200 text-sm font-medium mb-2">Recent Weather:</h4>
            {recentWeather.length > 0 ? (
              <div className="max-h-48 overflow-y-auto">
                {recentWeather.map((weather, index) => (
                  index > 0 && (
                    <div 
                      key={index}
                      className="p-2 mb-2 rounded bg-stone-700/50 text-sm cursor-pointer"
                      onClick={() => setWeatherReport(weather)}
                    >
                      <div className="flex justify-between">
                        <span>
                          {weather.precipitation}, {weather.temperature.description}
                        </span>
                        <span>
                          {convertTemp(weather.temperature.exact)}{weather.temperature.unit}
                        </span>
                      </div>
                      <div className="text-xs text-amber-100/70">
                        {weather.day}, {weather.time} - {new Date(weather.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  )
                ))}
              </div>
            ) : (
              <p className="text-sm text-amber-100/70">No recent weather records.</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Weather Tables Reference (Collapsed by default) */}
      <div className="bg-stone-800 rounded-lg overflow-hidden border border-amber-900/30">
        <div 
          className="flex justify-between items-center p-3 bg-stone-700 cursor-pointer"
          onClick={() => document.getElementById('weather-tables-reference').classList.toggle('hidden')}
        >
          <h3 className="font-medium text-amber-100">Weather Tables Reference</h3>
          <span className="text-xs text-amber-100/60">Click to Expand/Collapse</span>
        </div>
        
        <div id="weather-tables-reference" className="hidden p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-amber-200 font-medium mb-2">Common Weather Effects</h4>
              <div className="bg-stone-700 p-3 rounded-lg max-h-60 overflow-y-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-xs text-amber-100/80 pb-1">Condition</th>
                      <th className="text-left text-xs text-amber-100/80 pb-1">Effects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(weatherEffects).slice(0, 6).map(([condition, effects], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-stone-800/30' : ''}>
                        <td className="py-1 px-1 align-top font-medium">{condition}</td>
                        <td className="py-1 px-1 text-sm">
                          <ul className="list-disc list-inside">
                            {effects.map((effect, i) => (
                              <li key={i}>{effect}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h4 className="text-amber-200 font-medium mb-2">Wind Effects</h4>
              <div className="bg-stone-700 p-3 rounded-lg max-h-60 overflow-y-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-xs text-amber-100/80 pb-1">Type</th>
                      <th className="text-left text-xs text-amber-100/80 pb-1">Effects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {windData.map((wind, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-stone-800/30' : ''}>
                        <td className="py-1 px-1 font-medium">{wind.description}</td>
                        <td className="py-1 px-1 text-sm">{wind.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
