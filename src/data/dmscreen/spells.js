// src/data/dmscreen/spells.js
// Spell data organized by level and school of magic

export const spellsData = {
  // Spells by level
  byLevel: {
 "cantrips": [
      {
        "name": "Acid Splash",
        "level": "Cantrip",
        "school": "Conjuration",
        "castingTime": "1 action",
        "range": "60 feet",
        "components": "V, S",
        "duration": "Instantaneous",
        "classes": ["Sorcerer", "Wizard"],
        "description": "You hurl a bubble of acid at one or two creatures you can see within range. Make a ranged spell attack against the target. On a hit, the target takes 1d6 acid damage."
      },
      {
        "name": "Chill Touch",
        "level": "Cantrip",
        "school": "Necromancy",
        "castingTime": "1 action",
        "range": "120 feet",
        "components": "V, S",
        "duration": "1 round",
        "classes": ["Sorcerer", "Wizard"],
        "description": "You create a ghostly skeletal hand in the space of a creature within range. The hand lasts until the start of your next turn. Make a ranged spell attack against the target. On a hit, the target takes 1d8 necrotic damage, and the target cannot regain hit points until the start of your next turn."
      },
      {
        "name": "Dancing Lights",
        "level": "Cantrip",
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "120 feet",
        "components": "V, S",
        "duration": "Concentration, up to 1 minute",
        "classes": ["Sorcerer", "Wizard"],
        "description": "You create up to four torch-sized lights within range. The lights can move as you direct, and they emit dim light in a 10-foot radius."
      },
      {
        "name": "Fire Bolt",
        "level": "Cantrip",
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "120 feet",
        "components": "V, S",
        "duration": "Instantaneous",
        "classes": ["Sorcerer", "Wizard"],
        "description": "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage."
      },
      {
        "name": "Friends",
        "level": "Cantrip",
        "school": "Enchantment",
        "castingTime": "1 action",
        "range": "30 feet",
        "components": "V, S",
        "duration": "Concentration, up to 1 minute",
        "classes": ["Sorcerer", "Wizard"],
        "description": "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you."
      },
      {
        "name": "Light",
        "level": "Cantrip",
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "Touch",
        "components": "V, M (a firefly or phosphorescent moss)",
        "duration": "1 hour",
        "classes": ["Cleric", "Druid", "Sorcerer", "Wizard"],
        "description": "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet."
      },
      {
        "name": "Mage Hand",
        "level": "Cantrip",
        "school": "Conjuration",
        "castingTime": "1 action",
        "range": "30 feet",
        "components": "V, S",
        "duration": "1 minute",
        "classes": ["Sorcerer", "Wizard"],
        "description": "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it (no action required). The hand is capable of manipulating objects, opening unlocked doors, or interacting with items in other ways."
      },
      {
        "name": "Mending",
        "level": "Cantrip",
        "school": "Transmutation",
        "castingTime": "1 minute",
        "range": "Touch",
        "components": "V, S",
        "duration": "Instantaneous",
        "classes": ["Cleric", "Wizard"],
        "description": "You mend a single break or tear in an object you touch. As long as the break or tear is no larger than 1 foot in any dimension, the object is repaired."
      },
      {
        "name": "Minor Illusion",
        "level": "Cantrip",
        "school": "Illusion",
        "castingTime": "1 action",
        "range": "30 feet",
        "components": "V, S",
        "duration": "1 minute",
        "classes": ["Sorcerer", "Wizard"],
        "description": "You create a sound or an image of an object within range. The sound can range from a simple noise to a volume loud enough to be heard 300 feet away. The image cannot create any sound, light, smell, or other sensory effects."
      },
      {
        "name": "Poison Spray",
        "level": "Cantrip",
        "school": "Conjuration",
        "castingTime": "1 action",
        "range": "10 feet",
        "components": "V, S",
        "duration": "Instantaneous",
        "classes": ["Sorcerer", "Wizard"],
        "description": "You extend your hand toward a creature you can see within range. The creature must succeed on a Constitution saving throw or take 1d12 poison damage."
      },
      {
        "name": "Prestidigitation",
        "level": "Cantrip",
        "school": "Transmutation",
        "castingTime": "1 action",
        "range": "10 feet",
        "components": "V, S",
        "duration": "Up to 1 hour",
        "classes": ["Sorcerer", "Wizard"],
        "description": "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range: a harmless sensory effect, a trivial magic effect, or a small item of your choice."
      },
      {
        "name": "Ray of Frost",
        "level": "Cantrip",
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "60 feet",
        "components": "V, S",
        "duration": "Instantaneous",
        "classes": ["Sorcerer", "Wizard"],
        "description": "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 cold damage and its speed is reduced by 10 feet until the start of your next turn."
      },
      {
        "name": "Resistance",
        "level": "Cantrip",
        "school": "Abjuration",
        "castingTime": "1 action",
        "range": "30 feet",
        "components": "V, S",
        "duration": "Concentration, up to 1 minute",
        "classes": ["Cleric"],
        "description": "You touch one willing creature. The target can add a d4 to one saving throw of its choice."
      },
      {
        "name": "Sacred Flame",
        "level": "Cantrip",
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "60 feet",
        "components": "V, S",
        "duration": "Instantaneous",
        "classes": ["Cleric"],
        "description": "The target must succeed on a Dexterity saving throw or take 1d8 radiant damage."
      },
      {
        "name": "Shocking Grasp",
        "level": "Cantrip",
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "Touch",
        "components": "V, S",
        "duration": "Instantaneous",
        "classes": ["Sorcerer", "Wizard"],
        "description": "Lightning springs from your hand to deliver a shock to a target you can touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 lightning damage."
      },
      {
        "name": "Spare the Dying",
        "level": "Cantrip",
        "school": "Necromancy",
        "castingTime": "1 action",
        "range": "Touch",
        "components": "V, S",
        "duration": "Instantaneous",
        "classes": ["Cleric"],
        "description": "You touch a living creature that has 0 hit points. The creature becomes stable."
      },
      {
        "name": "Thaumaturgy",
        "level": "Cantrip",
        "school": "Transmutation",
        "castingTime": "1 action",
        "range": "30 feet",
        "components": "V",
        "duration": "Up to 1 minute",
        "classes": ["Cleric"],
        "description": "You manifest a minor wonder, a sign of supernatural power. You create one of the following magical effects within range: change the color of your eyes, cause flames to flicker, etc."
      },
      {
        "name": "True Strike",
        "level": "Cantrip",
        "school": "Divination",
        "castingTime": "1 action",
        "range": "30 feet",
        "components": "V, S",
        "duration": "Concentration, up to 1 round",
        "classes": ["Sorcerer", "Wizard"],
        "description": "You point a finger at a target within range. The target gains a magical insight into the target’s defenses. The next attack roll against the target is made with advantage."
      }
    ],
   "level1": [
    {
      "name": "Magic Missile",
      "level": "1st",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "120 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target."
    },
    {
      "name": "Shield",
      "level": "1st",
      "school": "Abjuration",
      "castingTime": "1 reaction",
      "range": "Self",
      "components": "V, S",
      "duration": "1 round",
      "classes": ["Sorcerer", "Wizard"],
      "description": "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile."
    },
    {
      "name": "Mage Armor",
      "level": "1st",
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Touch",
      "components": "V, S, M (a piece of cured leather)",
      "duration": "8 hours",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You touch a willing creature who isn't wearing armor. The target's base AC becomes 13 + its Dexterity modifier for the duration."
    },
    {
      "name": "Burning Hands",
      "level": "1st",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "Self (15-foot cone)",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A thin sheet of flames shoots forth from your fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A target takes 3d6 fire damage on a failed save, or half as much damage on a successful one."
    },
    {
      "name": "Detect Magic",
      "level": "1st",
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Self (30-foot radius)",
      "components": "V, S",
      "duration": "Concentration, up to 10 minutes",
      "classes": ["Bard", "Cleric", "Druid", "Paladin", "Sorcerer", "Wizard"],
      "description": "For the duration, you can sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any."
    },
    {
      "name": "Comprehend Languages",
      "level": "1st",
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Self",
      "components": "V, S, M (a pinch of soot and salt)",
      "duration": "1 hour",
      "classes": ["Bard", "Cleric", "Druid", "Sorcerer", "Wizard"],
      "description": "For the duration, you understand the literal meaning of any spoken language that you can hear. You also understand any written language that you can see, but you must be touching the writing."
    },
    {
      "name": "Thunderwave",
      "level": "1st",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "Self (15-foot cube)",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed."
    },
    {
      "name": "Sleep",
      "level": "1st",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "90 feet",
      "components": "V, S",
      "duration": "1 minute",
      "classes": ["Bard", "Sorcerer", "Wizard"],
      "description": "You send creatures into a magical slumber. A creature within range must have a total of 5d8 hit points or fewer. The creature falls unconscious for the duration."
    },
    {
      "name": "Disguise Self",
      "level": "1st",
      "school": "Illusion",
      "castingTime": "1 action",
      "range": "Self",
      "components": "V, S",
      "duration": "1 hour",
      "classes": ["Bard", "Sorcerer", "Wizard"],
      "description": "You make yourself, including your clothing, armor, weapons, and other belongings on your person, look different. You can’t change your body type, but you can appear as any other humanoid."
    },
    {
      "name": "Healing Word",
      "level": "1st",
      "school": "Evocation",
      "castingTime": "1 bonus action",
      "range": "60 feet",
      "components": "V",
      "duration": "Instantaneous",
      "classes": ["Bard", "Cleric"],
      "description": "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier."
    },
    {
      "name": "Mage Armor",
      "level": "1st",
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Touch",
      "components": "V, S, M (a piece of cured leather)",
      "duration": "8 hours",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You touch a willing creature who isn't wearing armor. The target's base AC becomes 13 + its Dexterity modifier for the duration."
    }
  ],
    level2: [
      {
        name: "Misty Step",
        level: "2nd",
        school: "Conjuration",
        castingTime: "1 bonus action",
        range: "Self",
        components: "V",
        duration: "Instantaneous",
        classes: ["Sorcerer", "Wizard"],
        description: "You teleport up to 30 feet to an unoccupied space that you can see."
      },
      {
        name: "Mirror Image",
        level: "2nd",
        school: "Illusion",
        castingTime: "1 action",
        range: "Self",
        components: "V, S",
        duration: "1 minute",
        classes: ["Sorcerer", "Wizard"],
        description: "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions. They provide you with a chance to avoid an attack."
      },
      {
        name: "Hold Person",
        level: "2nd",
        school: "Enchantment",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S",
        duration: "Concentration, up to 1 minute",
        classes: ["Cleric", "Druid", "Paladin", "Sorcerer", "Wizard"],
        description: "You paralyze a humanoid target within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. A paralyzed target can repeat the saving throw at the end of each of its turns."
      },
      {
        name: "Invisibility",
        level: "2nd",
        school: "Illusion",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Concentration, up to 1 hour",
        classes: ["Sorcerer", "Wizard"],
        description: "A creature you touch becomes invisible for the duration. The spell ends if the target attacks or casts a spell."
      },
      {
        name: "Scorching Ray",
        level: "2nd",
        school: "Evocation",
        castingTime: "1 action",
        range: "120 feet",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["Sorcerer", "Wizard"],
        description: "You create three rays of fire and hurl them at targets within range. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage."
      },
      {
        name: "Shatter",
        level: "2nd",
        school: "Evocation",
        castingTime: "1 action",
        range: "60 feet",
        components: "V, S, M (a chip of mica)",
        duration: "Instantaneous",
        classes: ["Sorcerer", "Wizard"],
        description: "A sudden loud ringing noise painfully dissonates in the air around a point of your choice within range. Each creature within a 10-foot-radius sphere centered on that point must make a Constitution saving throw."
      },
      {
        name: "Lesser Restoration",
        level: "2nd",
        school: "Abjuration",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S",
        duration: "Instantaneous",
        classes: ["Cleric"],
        description: "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned."
      },
      {
        name: "Augury",
        level: "2nd",
        school: "Divination",
        castingTime: "1 action",
        range: "30 feet",
        components: "V, S, M (incense and a sacrifice worth 25 gp)",
        duration: "Instantaneous",
        classes: ["Cleric"],
        description: "You speak to your deity or a divine power for guidance on a specific course of action you plan to take within the next 30 minutes. The spell doesn't give a definitive answer, but rather suggests if the action will bring good or bad results."
      },
      {
        name: "Pass without Trace",
        level: "2nd",
        school: "Abjuration",
        castingTime: "1 action",
        range: "Self (30-foot radius)",
        components: "V, S, M (a soot and a pinch of dirt)",
        duration: "Concentration, up to 1 hour",
        classes: ["Druid", "Ranger"],
        description: "For the duration, you and your companions within 30 feet of you have a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means."
      },
      {
        name: "Spider Climb",
        level: "2nd",
        school: "Transmutation",
        castingTime: "1 action",
        range: "Touch",
        components: "V, S, M (a drop of webbing)",
        duration: "Concentration, up to 1 hour",
        classes: ["Druid", "Sorcerer", "Wizard"],
        description: "You touch a willing creature. The target can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
     "level3": [
    {
      "name": "Counterspell",
      "level": "3rd",
      "school": "Abjuration",
      "castingTime": "1 reaction, which you take when you see a creature within 60 feet of you casting a spell",
      "range": "60 feet",
      "components": "V",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You interrupt the creature's casting of a spell. If the spell is of 3rd level or lower, it is automatically interrupted. For spells of 4th level or higher, you must make an ability check using your spellcasting ability. The DC equals 10 + the spell's level."
    },
    {
      "name": "Fireball",
      "level": "3rd",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "150 feet",
      "components": "V, S, M (a tiny ball of bat guano and sulfur)",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A bright streak flashes from your pointing finger to a point you choose within range. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw, taking 8d6 fire damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Fly",
      "level": "3rd",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "Touch",
      "components": "V, S",
      "duration": "Concentration, up to 10 minutes",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You touch a willing creature, granting it a flying speed of 60 feet for the duration. The spell ends if the creature falls unconscious or if the spell is dismissed."
    },
    {
      "name": "Haste",
      "level": "3rd",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "30 feet",
      "components": "V, S, M (a shaving of a sprinting hare's fur)",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A target creature you touch gains double its speed, a +2 bonus to AC, and advantage on Dexterity saving throws. It gains an additional action on each of its turns. The spell ends early if the target is incapacitated or if the spell is dismissed."
    },
    {
      "name": "Lightning Bolt",
      "level": "3rd",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "100 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A stroke of lightning flashes out in a line 100 feet long and 5 feet wide. Each creature in that line must make a Dexterity saving throw, taking 8d6 lightning damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Dispel Magic",
      "level": "3rd",
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "120 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Cleric", "Druid", "Sorcerer", "Wizard"],
      "description": "You attempt to end one spell on a creature, object, or magical effect within range. If the spell is of 3rd level or lower, it is automatically dispelled. For spells of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level."
    },
    {
      "name": "Bestow Curse",
      "level": "3rd",
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "30 feet",
      "components": "V, S, M (a drop of blood, a piece of hair, or a nail)",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Cleric", "Wizard"],
      "description": "You reach out and touch a target, cursing it. The target must make a Wisdom saving throw. On a failed save, the target suffers one of several different effects. While cursed, the target takes disadvantage on certain rolls, and you can cause additional effects at the start of your turn."
    },
    {
      "name": "Leomund's Tiny Hut",
      "level": "3rd",
      "school": "Evocation",
      "castingTime": "1 minute",
      "range": "Self (10-foot-radius hemisphere)",
      "components": "V, S, M (a tiny crystal bead)",
      "duration": "Concentration, up to 8 hours",
      "classes": ["Wizard"],
      "description": "A 10-foot-radius immobile dome of force springs into existence around you and your companions. The dome is opaque from the outside, but you can see out of it. The interior is comfortable and safe, and no harsh weather can penetrate it."
    },
    {
      "name": "Fly",
      "level": "3rd",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "Touch",
      "components": "V, S",
      "duration": "Concentration, up to 10 minutes",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You touch a willing creature. The target gains a flying speed of 60 feet for the duration."
    },
    {
      "name": "Clairvoyance",
      "level": "3rd",
      "school": "Divination",
      "castingTime": "10 minutes",
      "range": "1000 feet",
      "components": "V, S, M (a jeweled horn worth 100 gp)",
      "duration": "Concentration, up to 10 minutes",
      "classes": ["Cleric", "Wizard"],
      "description": "You create an invisible sensor at a location you can visualize or describe within range. You can use it to either see or hear as though you were in the chosen space. The sensor can't be physically interacted with and is impervious to damage."
    }
  ],
      "level4": [
    {
      "name": "Greater Invisibility",
      "level": "4th",
      "school": "Illusion",
      "castingTime": "1 action",
      "range": "Self",
      "components": "V, S",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A target you touch becomes invisible until the spell ends. The spell ends if the target attacks or casts a spell."
    },
    {
      "name": "Polymorph",
      "level": "4th",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S, M (a caterpillar cocoon)",
      "duration": "Concentration, up to 1 hour",
      "classes": ["Druid", "Sorcerer", "Wizard"],
      "description": "You transform a creature you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The target can assume the form of any beast whose CR is equal to or less than its level."
    },
    {
      "name": "Banishment",
      "level": "4th",
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Cleric", "Paladin", "Sorcerer", "Wizard"],
      "description": "You attempt to send one creature that you can see within range to another plane of existence. The target must make a Charisma saving throw. On a failed save, the creature is banished to another plane. If the target is native to the plane of existence you are on, it returns after 1 minute."
    },
    {
      "name": "Dimension Door",
      "level": "4th",
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "500 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You teleport yourself from your current location to a destination you can visualize or describe. You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature within range."
    },
    {
      "name": "Stone Shape",
      "level": "4th",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "Touch",
      "components": "V, S, M (a soft stone worth at least 5 gp)",
      "duration": "Instantaneous",
      "classes": ["Druid", "Sorcerer", "Wizard"],
      "description": "You manipulate stone to form it into any shape you desire, such as a door, a statue, or a weapon. The stone must be within a 5-foot cube, and you can reshape it as long as it isn't larger than that size."
    },
    {
      "name": "Wall of Fire",
      "level": "4th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "150 feet",
      "components": "V, S, M (a tiny piece of phosphorus)",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You create a wall of fire on a solid surface within range. The wall is 20 feet high, 60 feet long, and 1 foot thick. Each creature within 10 feet of the wall must make a Dexterity saving throw, taking 5d8 fire damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Ice Storm",
      "level": "4th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "300 feet",
      "components": "V, S, M (a handful of small crystals)",
      "duration": "Instantaneous",
      "classes": ["Druid", "Sorcerer", "Wizard"],
      "description": "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the area must make a Dexterity saving throw, taking 4d6 bludgeoning damage and 2d6 cold damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Conjure Minor Elementals",
      "level": "4th",
      "school": "Conjuration",
      "castingTime": "1 minute",
      "range": "90 feet",
      "components": "V, S, M (a drop of mercury)",
      "duration": "Concentration, up to 1 hour",
      "classes": ["Druid", "Sorcerer", "Wizard"],
      "description": "You summon elementals of a type you choose (fire, earth, air, or water) to serve you. They appear in an unoccupied space that you can see within range."
    },
    {
      "name": "Phantasmal Killer",
      "level": "4th",
      "school": "Illusion",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You create a phantasmal image of the target's worst fear. The target must make a Wisdom saving throw. On a failed save, the target takes 4d10 psychic damage, and the fear continues to affect it until the spell ends."
    }
  ],
     "level5": [
    {
      "name": "Cloudkill",
      "level": "5th",
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "150 feet",
      "components": "V, S, M (a green dragon's tooth)",
      "duration": "Concentration, up to 10 minutes",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A cloud of poison fills a 20-foot-radius sphere centered on a point you choose within range. The cloud spreads around corners and lasts for the duration. A creature that starts its turn in the cloud must make a Constitution saving throw, taking 5d8 poison damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Cone of Cold",
      "level": "5th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A blast of cold air erupts from your hands in a 60-foot cone. Each creature in the area must make a Constitution saving throw, taking 8d8 cold damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Teleportation Circle",
      "level": "5th",
      "school": "Conjuration",
      "castingTime": "1 minute",
      "range": "Self (10-foot radius)",
      "components": "V, S, M (a gold ring worth 50 gp)",
      "duration": "1 round",
      "classes": ["Cleric", "Sorcerer", "Wizard"],
      "description": "You create a linked teleportation circle between your current location and a destination. You can transport yourself and others to the destination or another location within range. The destination must be a permanent circle that you know or have seen."
    },
    {
      "name": "Wall of Force",
      "level": "5th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "120 feet",
      "components": "V, S",
      "duration": "Concentration, up to 10 minutes",
      "classes": ["Sorcerer", "Wizard"],
      "description": "An invisible, impenetrable wall of force appears within range. The wall can be a sphere, cube, or plane, and it is impervious to physical damage. Nothing can pass through the wall, and it can be shaped into various forms. It lasts for the duration."
    },
    {
      "name": "Dominate Person",
      "level": "5th",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You attempt to control a humanoid creature within range. The creature must succeed on a Wisdom saving throw or be charmed by you for the duration. While charmed, you can issue commands, and the target will do its best to carry them out."
    },
    {
      "name": "Telekinesis",
      "level": "5th",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S, M (a tiny strand of spider's web)",
      "duration": "Concentration, up to 10 minutes",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You can move objects or creatures within range using only your mind. You can move objects that weigh up to 1,000 pounds and control them with your thoughts. You can also attempt to move creatures, causing them to make a Strength saving throw to resist being moved."
    },
    {
      "name": "Animate Objects",
      "level": "5th",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "30 feet",
      "components": "V, S, M (a piece of wood)",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You bring inanimate objects to life, causing them to animate and act according to your will. You can animate up to 10 objects, each of which can be no larger than 1 cubic foot. They act on your turn, moving and attacking as you direct them."
    },
    {
      "name": "Far Step",
      "level": "5th",
      "school": "Conjuration",
      "castingTime": "1 bonus action",
      "range": "Self",
      "components": "V",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You teleport up to 60 feet to an unoccupied space you can see. Once on each of your turns for the duration, you can use your bonus action to teleport in this way."
    },
    {
      "name": "Hold Monster",
      "level": "5th",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "90 feet",
      "components": "V, S",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You paralyze a creature you can see within range. The creature must make a Wisdom saving throw or become paralyzed for the duration. You can take actions to prevent the target from making saving throws on its turns."
    }
  ],
      "level6": [
    {
      "name": "Disintegrate",
      "level": "6th",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A green ray springs from your pointing finger. A creature targeted by the ray must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, its body is turned to dust."
    },
    {
      "name": "Globe of Invulnerability",
      "level": "6th",
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Self (10-foot radius)",
      "components": "V, S",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "An immobile, invisible, spherical barrier surrounds you. The barrier is impervious to any magic that is 5th level or lower, and spells of 6th level or higher can be cast through the barrier, but you are immune to them."
    },
    {
      "name": "True Seeing",
      "level": "6th",
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Self",
      "components": "V, S",
      "duration": "Concentration, up to 1 hour",
      "classes": ["Cleric", "Druid", "Sorcerer", "Wizard"],
      "description": "For the duration, you can see things as they actually are. You can see in normal and magical darkness, see invisible creatures and objects, and see into the Ethereal Plane. You can also see through illusions and transmutations."
    },
    {
      "name": "Sunbeam",
      "level": "6th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "Self (60-foot line)",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A beam of brilliant light flashes out from your hand in a 5-foot wide, 60-foot line. Each creature in the line must make a Constitution saving throw, taking 6d8 radiant damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Chain Lightning",
      "level": "6th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "150 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A bolt of lightning arcs from you to up to three targets within range. Each target must make a Dexterity saving throw, taking 10d8 lightning damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Mass Suggestion",
      "level": "6th",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Concentration, up to 24 hours",
      "classes": ["Bard", "Sorcerer", "Wizard"],
      "description": "You suggest a course of activity (limited to a sentence or two) to up to 12 creatures within range that can hear and understand you. Each target must make a Wisdom saving throw or be charmed by you for the duration. The suggested activity must be something the target can do within its capabilities."
    },
    {
      "name": "Harm",
      "level": "6th",
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Cleric", "Wizard"],
      "description": "You necrotically drain a creature's life force. A creature you can see within range must make a Constitution saving throw, taking 14d6 necrotic damage on a failed save, or half as much on a successful one."
    },
    {
      "name": "Heal",
      "level": "6th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Cleric"],
      "description": "A creature you touch regains hit points equal to 70. This spell also removes any disease or blindness/deafness afflicting the target."
    }
  ],
      "level7": [
    {
      "name": "Plane Shift",
      "level": "7th",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "Self (or touch)",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Cleric", "Druid", "Sorcerer", "Wizard"],
      "description": "You and up to eight willing creatures within range are transported to a different plane of existence. The destination can be a plane you are familiar with or one you specify, and the spell doesn't provide protection from planar effects."
    },
    {
      "name": "Teleport",
      "level": "7th",
      "school": "Conjuration",
      "castingTime": "1 minute",
      "range": "Self",
      "components": "V",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You instantly teleport yourself and up to eight willing creatures within range to a destination you are familiar with. If you have only heard of the place, the spell carries a risk of arriving at a random location within the general area."
    },
    {
      "name": "Delayed Blast Fireball",
      "level": "7th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "150 feet",
      "components": "V, S",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You create a delayed fireball that can be triggered later. The fireball explodes after the delay, dealing 12d6 fire damage to creatures within a 20-foot radius. The damage increases by 1d6 for every additional level of the spell slot you use above 7th."
    },
    {
      "name": "Finger of Death",
      "level": "7th",
      "school": "Necromancy",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A ray of green necrotic energy springs from your finger. A creature you can see within range must make a Constitution saving throw, taking 7d8 + 30 necrotic damage on a failed save, or half as much on a successful one. If this damage reduces the target to 0 hit points, it dies, and you can raise it as a zombie under your control."
    },
    {
      "name": "Power Word Pain",
      "level": "7th",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You utter a word of power that causes intense pain in one creature you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 8d10 psychic damage and is incapacitated until the end of its next turn."
    },
    {
      "name": "Regenerate",
      "level": "7th",
      "school": "Necromancy",
      "castingTime": "1 minute",
      "range": "Touch",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Cleric"],
      "description": "You cause a creature to regain 10d8 hit points. If the creature has lost any limbs or body parts, they are regrown. The spell also cures diseases and neutralizes poisons affecting the creature."
    },
    {
      "name": "Reverse Gravity",
      "level": "7th",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "Up to 100 feet",
      "components": "V, S, M (a piece of iron or lodestone)",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You reverse the gravity in a 50-foot-radius, 100-foot-high cylinder centered on a point within range. All creatures and objects in the area fall upwards, taking damage from falling if they hit a surface. The effect lasts until the spell ends or until you stop concentrating."
    }
  ],
      "level8": [
    {
      "name": "Antimagic Field",
      "level": "8th",
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Self (10-foot radius)",
      "components": "V, S",
      "duration": "Concentration, up to 1 hour",
      "classes": ["Cleric", "Sorcerer", "Wizard"],
      "description": "A 10-foot-radius sphere of antimagic surrounds you. Within this area, magic cannot function. Any creature or object within the sphere is immune to magic, and any active spells are suppressed. The sphere moves with you as you move."
    },
    {
      "name": "Power Word Stun",
      "level": "8th",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You utter a word of power that can stun a creature within range. The target must have fewer than 150 hit points. The target is stunned for 1 minute, or until it succeeds on a Constitution saving throw at the end of each of its turns."
    },
    {
      "name": "Dominate Monster",
      "level": "8th",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V, S",
      "duration": "Concentration, up to 1 hour",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You attempt to bend the will of a creature that you can see within range. The target must make a Wisdom saving throw or be charmed by you for the duration. While charmed, the creature is under your control and obeys your commands."
    },
    {
      "name": "Mind Blank",
      "level": "8th",
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Touch",
      "components": "V, S, M (a tiny silver mirror)",
      "duration": "Up to 24 hours",
      "classes": ["Sorcerer", "Wizard"],
      "description": "The target is immune to psychic damage and can't be charmed or frightened. It also has advantage on saving throws against any effect that would sense its emotions or read its thoughts. If the target is already under the effect of the *mind blank* spell, it cannot be affected by another one."
    },
    {
      "name": "Incendiary Cloud",
      "level": "8th",
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "150 feet",
      "components": "V, S",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A cloud of smoke, fire, and ash billows out in a 20-foot-radius sphere. The cloud moves 10 feet per round in a direction you choose. Creatures that start their turn in the cloud must make a Constitution saving throw or take 10d8 fire damage."
    },
    {
      "name": "Earthquake",
      "level": "8th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "Self (100-foot radius)",
      "components": "V, S, M (a pinch of dirt)",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Cleric", "Druid", "Sorcerer", "Wizard"],
      "description": "A massive earthquake shakes the ground in a 100-foot-radius circle centered on a point you choose within range. The ground cracks open, and structures may collapse. Creatures within the area must make a Dexterity saving throw or fall prone, taking bludgeoning damage."
    },
    {
      "name": "Sunburst",
      "level": "8th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "150 feet",
      "components": "V, S, M (a sun-shaped opal)",
      "duration": "Instantaneous",
      "classes": ["Cleric", "Sorcerer", "Wizard"],
      "description": "A brilliant sphere of sunlight flashes out in a 60-foot radius. Each creature within range must make a Constitution saving throw or take 12d6 radiant damage and be blinded for 1 minute. A successful save results in half damage and no blindness."
    }
  ],
      "level9": [
    {
      "name": "Wish",
      "level": "9th",
      "school": "Conjuration",
      "castingTime": "1 action",
      "range": "Self",
      "components": "V",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You cast a powerful spell that grants you nearly any wish, bending reality to your will. You can duplicate any lower-level spell without needing material components, or you can request nearly any effect. The greater the wish, the greater the likelihood that something will go wrong."
    },
    {
      "name": "Foresight",
      "level": "9th",
      "school": "Divination",
      "castingTime": "1 action",
      "range": "Self",
      "components": "V, S",
      "duration": "8 hours",
      "classes": ["Cleric", "Druid"],
      "description": "You gain a mystical sense that grants you advantage on attack rolls, ability checks, and saving throws. Additionally, any creature that attacks you has disadvantage on its attack rolls. If the effect ends before the duration expires, you can choose a time in the next 8 hours when the effect would end."
    },
    {
      "name": "Time Stop",
      "level": "9th",
      "school": "Transmutation",
      "castingTime": "1 action",
      "range": "Self",
      "components": "V",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You stop time for everyone but yourself. During this time, you can take 1 action and move as you wish, but the spell ends when you make any action that directly affects another creature or object."
    },
    {
      "name": "Meteor Swarm",
      "level": "9th",
      "school": "Evocation",
      "castingTime": "1 action",
      "range": "1,000 feet",
      "components": "V, S",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A rain of meteors falls in a 40-foot radius, dealing 20d6 fire damage and 20d6 bludgeoning damage to creatures within the area of effect. Creatures caught in the impact zone must make a Dexterity saving throw or take full damage, half damage on a successful save."
    },
    {
      "name": "True Polymorph",
      "level": "9th",
      "school": "Transmutation",
      "castingTime": "1 hour",
      "range": "60 feet",
      "components": "V, S, M (a drop of mercury)",
      "duration": "Concentration, up to 1 hour",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You transform a creature or object into a different form. The transformation can be permanent if you maintain concentration. This can include turning a creature into another creature or a mundane object into a magical one."
    },
    {
      "name": "Power Word Kill",
      "level": "9th",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "60 feet",
      "components": "V",
      "duration": "Instantaneous",
      "classes": ["Sorcerer", "Wizard"],
      "description": "You utter a word of power that can instantly slay a creature. The target must have fewer than 100 hit points. The creature dies immediately without a saving throw."
    },
    {
      "name": "Prismatic Wall",
      "level": "9th",
      "school": "Abjuration",
      "castingTime": "1 action",
      "range": "Self (60-foot radius)",
      "components": "V, S, M (a prism of crystal)",
      "duration": "Concentration, up to 1 minute",
      "classes": ["Sorcerer", "Wizard"],
      "description": "A shimmering wall of light appears and extends around you. The wall blocks movement and attacks, and creatures trying to pass through must make saving throws or suffer harmful effects like being blinded or taking radiant damage."
    }
  ],
  },
  
  // Spell schools with descriptions
  schools: [
    { 
      name: "Abjuration", 
      description: "Protective spells that create barriers, negate harmful effects, harm trespassers, or banish creatures to other planes of existence." 
    },
    { 
      name: "Conjuration", 
      description: "Spells that involve transportation of objects and creatures from one location to another." 
    },
    { 
      name: "Divination", 
      description: "Spells that reveal information, whether in the form of secrets long forgotten, glimpses of the future, hidden things, or illusions." 
    },
    { 
      name: "Enchantment", 
      description: "Spells that affect the minds of others, influencing or controlling their behavior." 
    },
    { 
      name: "Evocation", 
      description: "Spells that manipulate magical energy to produce a desired effect, such as dealing damage." 
    },
    { 
      name: "Illusion", 
      description: "Spells that alter the perceptions of others or create false images." 
    },
    { 
      name: "Necromancy", 
      description: "Spells that manipulate the energies of life and death." 
    },
    { 
      name: "Transmutation", 
      description: "Spells that change the properties of a creature, object, or environment." 
    }
  ],
  
  // Spell casting rules
  rules: [
    {
      title: "Components",
      description: "A spell's components are the physical requirements you must meet in order to cast it. Each spell's description indicates whether it requires verbal (V), somatic (S), or material (M) components."
    },
    {
      title: "Concentration",
      description: "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends."
    },
    {
      title: "Casting Time",
      description: "Most spells require a single action to cast, but some spells require a bonus action, a reaction, or much more time to cast."
    },
    {
      title: "Spell Slots",
      description: "Regardless of how many spells a caster knows or prepares, they can cast only a limited number of spells before resting. Manipulating the fabric of magic and channeling its energy into even a simple spell is physically and mentally taxing, and higher-level spells are even more so."
    },
    {
      title: "Spell Level",
      description: "Every spell has a level from 0 to 9. A spell's level is a general indicator of how powerful it is, with the lowly (but still impressive) magic missile at 1st level and the earth-shaking wish at 9th. Cantrips—simple but powerful spells that characters can cast almost by rote—are level 0."
    }
  ]
};
