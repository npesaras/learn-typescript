/*
Introduction to Data Types

Data types are used to define the type of data that a variable can hold.

Primitive Types
- string
- number
- boolean
- null
- undefined

Objects
- interface
- type
- class

*/

//Primitive Types
let stringVar: string = "Hello";           // strings
let numberVar: number = 42;                // numbers (includes integers and floats)
let booleanVar: boolean = true;            // booleans
let nullVar: null = null;                  // null
let undefinedVar: undefined = undefined;   // undefined
let symbolVar: symbol = Symbol("sym");     // symbols
let bigIntVar: bigint = BigInt(9007199254740991); // big integers

//arrays
let numberArray: number[] = [1, 2, 3];
let stringArray: string[] = ["apple", "banana", "cherry"];
let mixedArray: (number | string)[] = [1, "apple", 2, "banana"];

console.log(mixedArray); //[1, "apple", 2, "banana"]

//tuple
let tupleVar: [number, string, boolean] = [1, "apple", true];
let optionalTuple: [number, string, boolean?] = [1, "apple", false];

console.log(optionalTuple); //access by index

