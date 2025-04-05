/**
 * Defines a Character type for a role-playing game
 * Demonstrates TypeScript's type system with:
 * - Object type definition
 * - String literal unions
 * - Type implementation
 */

// Define the Character type with specific properties and constraints
type Character = {
    characterName: string;
    characterAge: number;
    characterLevel: number;
    characterClass: ("Mage" | "Warrior" | "Archer");
    characterRace: ("Human" | "Elf" | "Dwarf" | "Orc");
    characterGender: ("Male" | "Female");
}

let characterStats: Character = {
    characterName: "Super Mario",
    characterAge: 20,
    characterLevel: 1,
    characterClass: "Warrior",
    characterRace: "Human",
    characterGender: "Male"
}

console.log(characterStats);
