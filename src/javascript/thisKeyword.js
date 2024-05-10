/*
  The 'this' Keyword in JavaScript

  Introduction:
  In JavaScript, the 'this' keyword is a special identifier that refers to the object that is currently executing
  the function where 'this' is used. Its value is determined by how a function is called, rather than where it's written
  in the code. Understanding 'this' is crucial for working with object-oriented programming features in JavaScript.

  Table of Contents:
  1. Global Context
  2. Object Method
  3. Constructor Function
  4. Event Handlers
  5. Explicit Binding
*/

// Global Context: 'this' refers to the global object (window in browsers)
console.log(this);

// Object Method: 'this' refers to the object itself
const obj = {
  name: 'Alice',
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

obj.greet(); // logs "Hello, Alice!"

// Constructor Function: 'this' refers to the newly created object
function Person(name) {
  this.name = name;
}

const person1 = new Person('Bob');
console.log(person1.name); // logs "Bob"

// Event Handlers: 'this' refers to the element that triggered the event
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // refers to the button element
});

// Explicit Binding: 'this' is explicitly set to the 'person' object
// The this keyword can be explicitly set using call, apply, or bind methods.
// In the greet function, greet.call(person) sets this to the person object, allowing it to access the name property and greet "Charlie".
function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: 'Charlie' };

greet.call(person); // logs "Hello, Charlie!"
