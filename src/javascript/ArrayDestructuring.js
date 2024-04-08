// Define an array
const numbers = [1, 2, 3, 4, 5];

// Basic Array Destructuring
const [first, second, third] = numbers; // Destructure array into individual variables

// Skipping Elements
const [firstSkip, , thirdSkip] = numbers; // Skip the second element while destructuring

// Using Rest Parameter
const [firstRest, ...rest] = numbers; // Gather remaining elements into a new array

// Default Values
const [firstDefault = 0, secondDefault = 0] = numbers; // Set default values for missing elements

// Swapping Variables
let a = 1;
let b = 2;
[a, b] = [b, a]; // Swap the values of variables using array destructuring

// Nested Array Destructuring
const nestedNumbers = [1, [2, 3], 4];
const [firstNested, [secondNested, thirdNested], fourthNested] = nestedNumbers; // Destructure nested arrays

// Ignoring Remaining Values
const [firstIgnore, secondIgnore, ...restIgnore] = numbers; // Ignore and gather remaining values

// Ignoring Elements
const [, secondElem] = numbers; // Ignore the first element

// Using a Mix of Skipping, Rest Parameter, and Default Values
const mixedArray = [1, , 3, 4];
const [firstMixed, , thirdMixed = 0, ...restMixed] = mixedArray; // Combine skipping, rest parameter, and default values

// Destructuring with Functions
function getNumbers() {
  return [10, 20, 30];
}
const [num1, num2, num3] = getNumbers(); // Destructure directly within a function call

// Destructuring in Function Parameters
function displayNumbers([num1, num2]) { // Destructure directly in function parameters
  console.log(num1);
  console.log(num2);
}
displayNumbers([50, 60]); // Output: 50 \n 60

// Log the variables for all examples
console.log("Basic Array Destructuring:");
console.log(first, second, third); // Output: 1 2 3

console.log("\nSkipping Elements:");
console.log(firstSkip, thirdSkip); // Output: 1 3

console.log("\nUsing Rest Parameter:");
console.log(firstRest, rest); // Output: 1 [2, 3, 4, 5]

console.log("\nDefault Values:");
console.log(firstDefault, secondDefault); // Output: 1 2

console.log("\nSwapping Variables:");
console.log(a, b); // Output: 2 1

console.log("\nNested Array Destructuring:");
console.log(firstNested, secondNested, thirdNested, fourthNested); // Output: 1 2 3 4

console.log("\nIgnoring Remaining Values:");
console.log(firstIgnore, secondIgnore, restIgnore); // Output: 1 2 [3, 4, 5]

console.log("\nIgnoring Elements:");
console.log(secondElem); // Output: 2

console.log("\nUsing a Mix of Skipping, Rest Parameter, and Default Values:");
console.log(firstMixed, thirdMixed, restMixed); // Output: 1 3 [4]

console.log("\nDestructuring with Functions:");
console.log(num1, num2, num3); // Output: 10 20 30


