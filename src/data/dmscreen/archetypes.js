// src/data/dmscreen/archetypes.js
// Class archetypes (subclasses) organized by class

export const archetypes = {
  // Barbarian archetypes (Primal Paths)
  barbarian: [
    {
      name: "Path of the Berserker",
      description: "The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
      features: [
        {
          name: "Frenzy",
          level: 3,
          description: "You can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion."
        },
        // Additional features will be added here
      ]
    },
    {
      name: "Path of the Totem Warrior",
      description: "The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration.",
      features: [
        {
          name: "Spirit Seeker",
          level: 3,
          description: "You gain the ability to cast the beast sense and speak with animals spells, but only as rituals."
        },
        // Additional features will be added here
      ]
    },
    // Additional barbarian paths will be added here
  ],
  
  // Bard archetypes (Bard Colleges)
  bard: [
    {
      name: "College of Lore",
      description: "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales.",
      features: [
        {
          name: "Bonus Proficiencies",
          level: 3,
          description: "You gain proficiency with three skills of your choice."
        },
        {
          name: "Cutting Words",
          level: 3,
          description: "You learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others."
        },
        // Additional features will be added here
      ]
    },
    {
      name: "College of Valor",
      description: "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes.",
      features: [
        {
          name: "Bonus Proficiencies",
          level: 3,
          description: "You gain proficiency with medium armor, shields, and martial weapons."
        },
        {
          name: "Combat Inspiration",
          level: 3,
          description: "You learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made."
        },
        // Additional features will be added here
      ]
    },
    // Additional bard colleges will be added here
  ],
  
  // Additional class archetypes will be added here
};
