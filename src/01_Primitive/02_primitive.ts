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
