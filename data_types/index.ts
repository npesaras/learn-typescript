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


//objects
interface Person {
    name: string;
    age: number;
    address?: string;      // Optional property
    readonly id: number;   // Read-only property
}

// Enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Any and Unknown
let anyVar: any = "anything";      // Bypasses type checking
let unknownVar: unknown = "type-safe any";  // Safer than any

// Void, Never, and Null
function logMessage(): void {       // No return value
    console.log("Hello");
}

function throwError(): never {      // Never returns
    throw new Error("error");
}

// Union Types
let unionVar: string | number = "hello";
unionVar = 42; // Also valid

// Intersection Types
type Employee = {
    id: number;
    name: string;
}

type Manager = {
    department: string;
    level: number;
}

type ManagerEmployee = Employee & Manager;

// Literal Types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let dice: DiceRoll = 1;

// Type Aliases
type Point = {
    x: number;
    y: number;
};

// Function Types
type MathFunction = (x: number, y: number) => number;
const add: MathFunction = (a, b) => a + b;

// Generics
interface Container<T> {
    value: T;
    timestamp: Date;
}

// Utility Types
interface Todo {
    title: string;
    description: string;
}

// Partial - all properties optional
type PartialTodo = Partial<Todo>;

// Required - all properties required
type RequiredTodo = Required<Todo>;

// Pick - select specific properties
type TodoTitle = Pick<Todo, "title">;

// Omit - remove specific properties
type TodoNoDescription = Omit<Todo, "description">;

// Index Types
interface StringMap {
    [key: string]: string;  // String index signature
}


// Usage Examples
function demonstrateTypes() {
    // Basic type usage
    let name: string = "Mario";
    let score: number = 100;
    let isActive: boolean = true;

    // Array usage
    let powerUps: string[] = ["Star", "Mushroom"];
    
    // Object usage
    let player: Person = {
        name: "Mario",
        age: 25,
        id: 1
    };

    // Enum usage
    let currentDirection: Direction = Direction.Up;

    // Union type usage
    let identifier: string | number = "player1";
    identifier = 12345; // Also valid

    // Generic usage
    let numberContainer: Container<number> = {
        value: 42,
        timestamp: new Date()
    };

    // Function with types
    function updateScore(currentScore: number, points: number): number {
        return currentScore + points;
    }
}