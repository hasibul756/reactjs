// Closure and Lexical Scope

// Lexical Scoping:

// function init() {
//     let name = "Sahil";
//     function displayName() {
//       console.log(name);
//     }
//     displayName();
//   }
// init();

function outer() {
    let user = "Sahil";
}
console.log(user);