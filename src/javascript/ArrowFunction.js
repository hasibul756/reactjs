//  Function Declaration

// function square(num) {
    // return num*num
// }

// Function Expression

// const square = function(num) {
//     return num * num;
// }

// Arrow Function Expression

// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

Syntax: 
let myFunction = (a, b) => a * b;

// const App = (num) => {
//     return num*num;
// }

// with arrow functions there are no binding of this.

// In regular functions the this keyword represented the object that called the function,
// which could be the window, the document, a button or whatever.

// With arrow functions the this keyword always represents the object that defined the arrow function.


// Regular function
const regularFunc = function() {
    console.log(this);
  };
  
  const obj1 = {
    name: 'Object 1',
    func: regularFunc
  };
  
  const obj2 = {
    name: 'Object 2'
  };
  
  obj1.func(); // Logs the obj1 object
  regularFunc.call(obj2); // Logs the obj2 object
  
  // Arrow function
  const arrowFunc = () => {
    console.log(this);
  };
  
  const obj3 = {
    name: 'Object 3',
    func: arrowFunc
  };
  
  const obj4 = {
    name: 'Object 4'
  };
  
  obj3.func(); // Logs the global object (e.g., window in browser)
  arrowFunc.call(obj4); // Logs the global object (e.g., window in browser)
  