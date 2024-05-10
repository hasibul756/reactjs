// **** Function, this keyword, call(), apply(), bind() ****


// JavaScript functions are defined with the function keyword.

// You can use a function declaration or a function expression.
// Function Declarations: --
// function functionName(parameters) {
    // code to be executed
//   }

// Function Expressions:--
// const x = function (a, b) {return a * b};

// const app = function () {
//     console.log("Hello World!");
//   }
// Call the function
//   app();
  

// The function above is actually an anonymous function (a function without a name).

// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.


// Self-Invoking Functions:--
// (function () {
//     let x = "Hello!!";  // I will invoke myself
//   })();


// Parameter vs Argument:--
// Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.


// Arguments are Passed by Value:--

// Declare a global variable 'a' and assign it a value of 10
//let a = 10;

// Define a function 'App' that doesn't take any parameters
//function App() {
    // Inside the function, return the value of 'a' multiplied by 2
    //return a * 2;
//}

// Log the result of calling the 'App' function to the console
//console.log(App()); // Output: 20

// Log the value of the global variable 'a' to the console
//console.log(a); // Output: 10


// Function with Rest Operator as argument.

// function Sum(...numbers) {
//     return numbers.map((num)=>num * 2);
// }

// console.log(Sum(1,2,3,4,5,6,7,8,9));

// One more Example:--
// Define a function called Sum that takes in a variable number of arguments (numbers)
//function Sum (...numbers) {
    // Create an empty array called arr to store the doubled values of the input numbers
//    const arr = [];
    // Iterate through each element of the input numbers using a for loop
 //   for(let i = 0; i < numbers.length; i++) {
        // Output the current number to the console
//        console.log(numbers[i]);
        // Multiply the current number by 2 and push the result to the arr array
//        arr.push(numbers[i] * 2);
//    }

    // Return the array containing the doubled values of the input numbers
//    return arr;
// }

// Call the Sum function with some sample numbers (1, 5, 6, 9, 7, 8, 5) and output the result
// console.log(Sum(1, 5, 6, 9, 7, 8, 5));



// This Keyword:

// call(), apply(), bind()

// In JavaScript, call, apply, and bind are methods that are used to manipulate the this keyword and pass arguments to functions in different ways.

// Example: -- 

// const obj = {
//     name: 'John'
//   };
  
//   function greet(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
//   }
  
//   // Using call
//   greet.call(obj, 'Hello');
  
//   // Using apply
//   greet.apply(obj, ['Hello']);
  
//   // Using bind
//   const boundGreet = greet.bind(obj);
//   boundGreet('Hello');


// 1. call method:
// Executes the function immediately.
// Allows you to specify the context (the value of this) explicitly.
// Parameters are passed in directly after the context argument.


// 2. apply method:
// Executes the function immediately.
// Allows you to specify the context (the value of this) explicitly.
// Accepts arguments as an array or an array-like object.

// 3. bind method:
// Returns a new function with the specified context (the value of this).
// Does not execute the function immediately.
// Allows you to curry the function by pre-filling some arguments.
// The returned function can be executed later on.

// In Details Explaination with Example:

// call(): --

// const obj = {
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName: "Sahil",
//     lastName: "Alam"
// }
// const person2 = {
//     firstName: "Hasibul",
//     lastName: "Alam"
// }

// console.log(obj.fullName.call(person1));



// The call() Method with Arguments: --

// const obj = {
//     fullName: function(a,b) {
//         return this.firstName + " " + this.lastName + " " + a + " " + b;
//     }
// }

// const person1 = {
//     firstName: "Sahil",
//     lastName: "Alam"
// }

// console.log(obj.fullName.call(person1,"A", "B"));


// apply():----

// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

// Example: --

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.apply(person1, ["Oslo", "Norway"]);

// bind():--
// The bind() method creates a new function that, when called, has its this keyword set to the provided value,
// with a given sequence of arguments preceding any provided when the new function is called.
// It essentially creates a new function with a fixed this value.
// The syntax is function.bind(thisArg, arg1, arg2, ...).Example:


//***** Interview Questions:-- *****

// Q1) Give Example of each methods:
// call():--
// const obj = {
//     name: "Sahil"
// }

// function sayHello(note) {
//     return "Hello " + this.name + " " + note;
// }

// console.log(sayHello.call(obj,"How are You?"));

// apply():--

// const obj = {
//     name: "Sahil"
// }

// function sayHello(age,designation) {
//     return `${this.name}, ${age}, ${designation}`;
// }

// console.log(sayHello.apply(obj,[24,"Dev"]));

// bind():--

// const obj = {
//     name: "Sahil"
// }

// function sayHello(age,designation) {
//     return `${this.name}, ${age}, ${designation}`;
// }

// const bindFunction = sayHello.bind(obj);

// reusability
// console.log(bindFunction());
// console.log(bindFunction(24, "dev"));
// console.log(bindFunction(25, "intern"));


// use Call, Apply, Bind in JavaScript (Explicit Binding)

// Q2) Guess the Output:
// const person = {
//     name: 'Sahil'
// }

// function sayHello(age) {
//     return  `${this.name} is ${age}`
// }

// console.log(sayHello.call(person, 24)); //this will execute instantly
// console.log(sayHello.bind(person, 24)); // this will returns a new function that can be utilised later on.

// Q3) Call with Function inside Object

// const obj = {
//     name: 'Sahil',
//     age: 24,
//     getData: function (param) {
//         return `${this.name}, ${this.age}, ${param}`
//     }
// }

// const obj2 = {
//     name: 'Hasibul',
//     age: 26
// }

// console.log(obj.getData("This is Normal Function Call"));
// console.log(obj.getData.call(obj2, "This is the Call"));
// console.log(obj.getData.apply(obj2,["This is the Apply"]));
// console.log(obj.getData.bind(obj2)()); // Empty () Executes the function immediately.

// Q4)