// Closure and Lexical Scope

// Lexical Scoping:

// when a function is defined within another function, the inner function has access to variables declared in the outer function.
// This is because JavaScript uses lexical scoping.

// Note:--
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

function init() {
    let name = "Sahil";
    function displayName() {
      console.log(name);
    }
    displayName();
  }
// init();

function outer() {
    let user = "Sahil";
    function inner() {
        // can access variable of outer function.
        console.log(user)
    }
    inner();
}
outer();
console.log("outer", user);

