// Scoping in JavaScript

// * Block Scope
// * Function Scope
// * Global Scope

// **** Block Scope:---
// Variables declared inside a { } block cannot be accessed from outside the block:
// {
//     let x = 2;
// }
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
// {
//     var x = 2;
// }
// x CAN be used here

// **** Local Scope:---
// Variables declared within a JavaScript function, are LOCAL to the function:

// code here can NOT use carName

// function myFunction() {
//     let carName = "Volvo";
     // code here CAN use carName
// }
  
// code here can NOT use carName

// Local variables have Function Scope:
// They can only be accessed from within the function.
// Local variables are created when a function starts, and deleted when the function is completed.

// **** Function Scope:---
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// They all have Function Scope:

// function myFunction() {
//     var carName = "Volvo";   // Function Scope
// }

// function myFunction() {
//     let carName = "Volvo";   // Function Scope
// }

// function myFunction() {
//     const carName = "Volvo";   // Function Scope
// }

// **** Global Scope:---
// A variable declared outside a function, becomes GLOBAL.
// let carName = "Volvo";
// code here can use carName

// function myFunction() {
// code here can also use carName
// }

// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.
// var x = 2;       // Global scope
// let x = 2;       // Global scope
// const x = 2;       // Global scope

// ***Point:--
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// myFunction();

// code here can use carName

// function myFunction() {
//   carName = "Volvo";
// }

// In "Strict Mode", undeclared variables are not automatically global.

// *** The Lifetime of JavaScript Variables: --
// * The lifetime of a JavaScript variable starts when it is declared.
// * Function (local) variables are deleted when the function is completed.
// * In a web browser, global variables are deleted when you close the browser window (or tab).