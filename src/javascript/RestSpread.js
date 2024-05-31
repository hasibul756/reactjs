// The rest and spread syntax in JavaScript may look similar because they both use the ... operator,
// but they serve different purposes and are used in different contexts.
// Here’s a detailed comparison to help understand the differences between them:


// Rest Syntax:
// Purpose: The rest syntax is used to collect multiple elements (array items or object properties) into a single array or object.
// Context: Rest syntax is used in function parameters, array destructuring, and object destructuring.
// Behavior: It gathers the remaining elements after a specific point into a new array or object.

// Spread Syntax
// Purpose: The spread syntax is used to expand or spread elements from an array or object into another array, object, or function arguments.
// Context: Spread syntax is used in array literals, object literals, and function calls.
// Behavior: It splits an array or object into individual elements or properties.


//REST:
// The rest operator in javaScript allows a function to take an indefinite number of arguments and bundle them in an array.
// Eg:

// function sum(...numbers) {
//     let total = 0;
//     for (const num of numbers) {
//       total += num;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3, 4, 5)); // 15

// 1. Usage in Functions
// In function parameters, the rest syntax collects all remaining arguments into an array.
// Eg:
// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10
  
// 2. Usage in Array Destructuring
// In array destructuring, the rest syntax can be used to collect the remaining elements into a new array.
// Eg:

// const array = [1,2,3,4,5];

// const [first, second, ...rest] = array;

// // 'first' gets the first element of the array: 1
// // 'second' gets the second element of the array: 2
// // 'rest' is an array containing the remaining elements: [3, 4, 5]

// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]


// 3. Usage in Object Destructuring
// In object destructuring, the rest syntax can be used to collect the remaining elements into a new object.
// Eg:

// const person = {
//     name: 'Alice',
//     age: 25,
//     email: 'alice@example.com',
//     address: {
//       city: 'Wonderland',
//       zip: '12345'
//     }
//   };
  
//   // Destructuring with rest syntax
//   const { name, email, ...otherDetails } = person;
  
//   // 'name' and 'email' are extracted as individual variables
//   console.log(name); // Output: Alice
//   console.log(email); // Output: alice@example.com
  
//   // 'otherDetails' is a new object containing the remaining properties
//   console.log(otherDetails); 
//   // Output: { age: 25, address: { city: 'Wonderland', zip: '12345' } }


//Spread:

// 1. Usage in Arrays
// The spread syntax allows you to expand elements of an array into another array or function arguments.
// Eg:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // Combining two arrays using spread syntax
// const combined = [...arr1, ...arr2];

// // 'combined' is now [1, 2, 3, 4, 5, 6]
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// // Creating a copy of an array using spread syntax
// const copy = [...arr1];

// // 'copy' is now [1, 2, 3]
// console.log(copy); // Output: [1, 2, 3]

// 2. Usage in Objects
// You can also use the spread syntax to combine objects or create copies of objects.
// Eg:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// // Combining two objects using spread syntax
// const combined = { ...obj1, ...obj2 };

// // 'combined' is now { a: 1, b: 2, c: 3, d: 4 }
// console.log(combined); // Output: { a: 1, b: 2, c: 3, d: 4 }

// // Creating a copy of an object using spread syntax
// const copy = { ...obj1 };

// // 'copy' is now { a: 1, b: 2 }
// console.log(copy); // Output: { a: 1, b: 2 }

// 3. Usage in Function Arguments
// The spread syntax can also be used to pass array elements as individual arguments to a function.
// Eg:

// const numbers = [1, 2, 3, 4];

// // Using spread syntax to pass array elements as individual arguments
// console.log(Math.max(...numbers)); // Output: 4
