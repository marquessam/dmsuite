# DM Suite

A collection of tools to help Dungeon Masters run better D&D games. Currently features a Character Randomizer to quickly generate NPCs with detailed backgrounds, appearances, and deity information.

## Features

- **Character Randomizer**: Generate random characters with:
  - Race and class combinations
  - Detailed descriptions
  - Unique backgrounds
  - Distinctive physical features
  - Deity affiliations
  - Complete with appearance details

## Planned Tools

- Encounter Builder
- NPC Generator
- Treasure Generator
- Quest Plot Hook Generator
- Random Dungeon Generator
- Tavern & Inn Creator

## Tech Stack

- React
- TailwindCSS
- Deployed via Netlify

## Development

1. Clone the repository
```
git clone https://github.com/marquessam/dmsuite.git
```

2. Install dependencies
```
cd dmsuite
npm install
```

3. Start the development server
```
npm start
```

4. Build for production
```
npm run build
```

## Expanding Data Sets

One of the key features of this project is the ability to expand the data sets easily. Each data type is stored in its own file:

- `src/data/characterRandomizer/races.js`
- `src/data/characterRandomizer/classes.js`
- `src/data/characterRandomizer/backgrounds.js`
- `src/data/characterRandomizer/features.js`
- `src/data/characterRandomizer/appearances.js`
- `src/data/characterRandomizer/deities.js`
- `src/data/characterRandomizer/nameComponents.js`

Feel free to add more items to any of these files to expand the possibilities!

## Deployment

The site is automatically deployed through Netlify when changes are pushed to the main branch.

## License

MIT
