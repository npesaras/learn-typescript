import {GlobalVariable} from "../globalVariable";

GlobalVariable.firstName = "Super Mario";
console.log(GlobalVariable.firstName); //prints Super Mario



//String Methods

//Get the length of the string
console.log(GlobalVariable.firstName.length); //prints 11

//Convert to uppercase
console.log(GlobalVariable.firstName.toUpperCase()); //prints SUPER MARIO

//Convert to lowercase
console.log(GlobalVariable.firstName.toLowerCase()); //prints super mario

//Accessing key value
console.log(GlobalVariable.firstName[2]); //prints p

//Check if the string contains a substring
console.log(GlobalVariable.firstName.includes("Mario")); //prints true

//Check if the string starts with a substring
console.log(GlobalVariable.firstName.startsWith("Super")); //prints true

//Search for a substring and return the index number
console.log(GlobalVariable.firstName.search("ar")); //return index number of the substring

//Replace a substring
console.log(GlobalVariable.firstName.replace("Mario", "Luigi")); //prints Super Mario

//Split a string into an array
console.log(GlobalVariable.firstName.split(" ")); //prints ["Super", "Mario"]




