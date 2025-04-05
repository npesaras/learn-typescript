// 1. Type Inference (Recommended for simple strings)
let greeting = "Hello";  // TypeScript automatically infers this as string

// 2. Explicit Type Annotation (Use when you want to be explicit)
let userName: string = "John";

// 3. Const for Immutable Strings (Recommended for values that won't change)
const API_KEY: string = "abc123";

// 4. String Literal Types (When you want to restrict to specific values)
let direction: "north" | "south" | "east" | "west" = "north";

// 5. Template Literals (Modern way to concatenate strings)
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;

// 6. String Arrays
const names: string[] = ["Alice", "Bob", "Charlie"];

// 7. ReadOnly String Arrays (Immutable)
const VALID_STATUSES: readonly string[] = ["pending", "approved", "rejected"];

// 8. Type Aliases with Strings
type Color = "red" | "green" | "blue";
let favoriteColor: Color = "blue";

// 9. String with Union Types
let identifier: string | number = "abc123";

// 10. Optional String Properties in Interface
interface User {
    name: string;
    title?: string;  // Optional string property
}

// Example usage
const user: User = {
    name: "John"
    // title is optional
}; 