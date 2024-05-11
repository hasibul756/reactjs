// Closure and Lexical Scope

// Lexical Scoping:
// When a function is defined within another function, the inner function has access to variables declared in the outer function.
// JavaScript uses lexical scoping, meaning it resolves variable names by looking at the code structure where the variables are defined.

// Note on Global Variables:
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

// Example 1:
// function init() {
//   let name = "Sahil";
//   function displayName() {
//     console.log(name);
//   }
//   displayName(); // Outputs "Sahil" as displayName() has access to the variable name.
// }
// init();

// Example 2:
// function outer() {
//   let user = "Sahil";
//   function inner() {
//       console.log(user); // Inner function can access variables from the outer function.
//   }
//   inner(); // Outputs "Sahil" as inner() has access to the variable user from outer().
// }
// outer();

// Example 3: Inner Functions with Their Own Scopes
// function outer() {
// let username = "Sahil";

// function inner1(){
//   let secret = "inner 1 secret";
//   console.log("inner1", username);
// }

// function inner2(){
//   console.log("inner2", username);
//   console.log("inner2", secret); // Outputs undefined as secret is not defined in inner2's scope.
// }

// inner1(); // Outputs "inner1 Sahil"
// inner2(); // Outputs "inner2 Sahil" and "inner2 undefined" due to scoping rules.
// console.log(secret); // Outputs undefined as secret is not accessible outside of inner1.
// }

// outer();


// Note: "Inner functions in JavaScript can access variables from their outer enclosing functions due to lexical scoping.
// However, each inner function creates its own function scope, meaning variables declared within one inner function are not accessible to other inner functions or the outer function."

// *** Return the Inner Function:--

// Eg:
// Define the outer function
// function outer(){
//   const username = "Sahil";
//   function inner(){
//     console.log(username);
//   }

//   // Return the inner function
//   return inner; // This returns the complete function definition of inner, including its closure over the username variable.
// }

// const myFunc = outer();

// // Call myFunc, which executes the inner function defined in outer
// myFunc(); // This will log "Sahil" to the console



