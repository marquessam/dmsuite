module.exports = {
  extends: "react-app",
  rules: {
    // Downgrade unused variables from error to warning
    "no-unused-vars": "warn"
  },
  // Add overrides for specific files
  overrides: [
    {
      files: [
        "src/tools/DMScreen/RandomEncounterGenerator.js",
        "src/tools/DMScreen/TreasureGenerator.js",
        "src/tools/DMScreen/index.js",
        "src/App.js"
      ],
      rules: {
        "no-unused-vars": "off" // Turn off the rule completely for these files
      }
    }
  ]
};
