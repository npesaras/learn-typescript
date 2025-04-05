/**
 * Example of using global variables in TypeScript
 * Demonstrates importing and using variables from a namespace
 * Shows how to access and modify global state
 */

import { GlobalVariable } from "../globalVariable";

GlobalVariable.firstName ="Super";
GlobalVariable.lastName = "Mario";

console.log(GlobalVariable.firstName);
console.log(GlobalVariable.lastName);
