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