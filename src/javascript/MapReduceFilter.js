//const arr = ["Sahil","Hasibul","Siza","Saifa","Serif","Sako","Zeeshan"];

// forEach method:-
// The forEach method in JavaScript is a built-in array method that allows you to execute a function once for each array element.
// It's a convenient way to iterate over the elements of an array without needing to write a traditional for loop.


// arr.forEach(element => {
//     console.log(element);
// });

// 1.element: The current element being processed in the array.
// 2.index (optional): The index of the current element being processed.
// 3.array (optional): The array that forEach is being applied to.
//4. thisArg (optional): Value to use as this when executing the callback.

// arr.forEach((element, index, array) => {
//     console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
// },thisArg);
  

// forEach does not return values.
// const value = arr.forEach(element=>{
//     // console.log(element);
//     return element //undefined
// });

// console.log(value);

// If you need to return or create a new array based on the elements of an existing array, you should use the map method instead.

// Filter Method:--
// The filter method does not modify the original array; instead, it returns a new array where each element is the result of the callback function.

// const num = [1,2,3,4,5,6,7,8,9];

// array.filter(function(element, index, array) {
//     // Your test condition here
// }, thisArg);
  

// An implicit return is when the arrow function directly returns an expression without using the return keyword and curly braces {}.
// Implicit Return: Only suitable for single expressions. If you need multiple statements, you cannot use implicit return.
// Eg:
// const getnum = num.filter((num)=>(num>4)); //implicit return function ()=>()


// An explicit return is when the arrow function uses the return keyword inside curly braces {} to specify the return value.
// Explicit Return: Allows for multiple statements within the function body.
// Eg:
// const getnum = num.filter((num)=>{
//     return num>4; // need to return value ()=>{return //condition}, Scope {}
// })
// console.log(getnum);

// Example: Filtering Based on Object Properties
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     { title: 'Book Three', genre: 'Science', publish: 2009, edition: 2014},
//     { title: 'Book Four', genre: 'Fiction', publish: 1999, edition: 2012},
// ]

// const userBooks = books.filter((bk)=>bk.genre === 'Fiction');

// const userBooks = books.filter((bk)=>bk.publish >= 1992 && bk.edition <=2012);

// console.log(userBooks);

// Example: Filtering Using Index
// const numbers = [10, 20, 30, 40, 50];
// const filteredNumbers = numbers.filter((number, index) => index % 2 === 0);

// console.log(filteredNumbers); // Output: [10, 30, 50]

// 1. Filtering Out Missing Items
// To remove undefined, null, or other falsy values (e.g., 0, NaN, "", false), you can use the filter method:
// const arrayWithHoles = [1, undefined, 2, null, 3, 0, NaN, '', 4, false];
// const filteredArray = arrayWithHoles.filter(Boolean);

// console.log(filteredArray); // Output: [1, 2, 3, 4]

// 2. Filtering Only undefined and null
// const arrayWithHoles = [1, undefined, 2, null, 3, 0, NaN, '', 4, false];
// const filteredArray = arrayWithHoles.filter(item => item !== undefined && item !== null);

// console.log(filteredArray); // Output: [1, 2, 3, 0, NaN, '', 4, false]

// console.log(filledArray); // Output: [1, 'default', 2, 'default', 3]


// Map Method:--
// The map method does not modify the original array; instead, it returns a new array where each element is the result of the callback function.
// Syntax:
// array.map(callback(element, index, array), thisArg);

// * callback: A function that is executed on each element in the array. It takes three arguments:
// 1.element: The current element being processed in the array.
// 2.index (optional): The index of the current element being processed.
// 3.array (optional): The array map was called upon.

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);

// console.log(doubled); // [2, 4, 6, 8, 10]

// Using Index:
// const numbers = [10, 20, 30];
// const withIndex = numbers.map((number, index) => number + index);

// console.log(withIndex); // [10, 21, 32]

// Example: Working with Objects
// const users = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Peter', lastName: 'Jones' }
// ];

// const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);

// console.log(fullNames); // ["John Doe", "Jane Smith", "Peter Jones"]
  

// Example : Mapping to an Array of Objects
// const numbers = [1, 2, 3];
// const numberObjects = numbers.map(number => ({ value: number }));

// console.log(numberObjects); // [{ value: 1 }, { value: 2 }, { value: 3 }]

// Example: Handling Missing Values
// const numbers = [1, 2, , 4, 5];
// const incremented = numbers.map(number => number ? number + 1 : number);

// console.log(incremented); // [2, 3, undefined, 5, 6]

// ** skips the sparse array slots (like the missing value between 2 and 4).

// Replacing Missing Items
// const arrayWithHoles = [1, undefined, 2, null, 3];
// const filledArray = arrayWithHoles.map(item => item ?? 'default');

// Reduce Method:--
// Syntax:

// const numbers = [1, 2, 3, 4, 5];

// // The reduce method
// const sum = numbers.reduce(
//   // The callback function that processes each array element
//   (accumulator, currentValue, index, array) => {
//     // Add the current value to the accumulated result
//     return accumulator + currentValue;
//   },
//   // The initial value for the accumulator
//   0
// );

// // Output the result
// console.log(sum); // Output: 15

// Parameters:
// * accumulator: Holds the accumulated result. Starts with an initial value initialValue (0 in this case).
// * currentValue: The current element in the array being processed.
// * index (optional): The current index of the element being processed.
// * array (optional): The array reduce was called upon.

// Body:
// * Adds currentValue to accumulator.
// * Returns the new value of accumulator to be used in the next iteration.

// Initial Value: The initial value for accumulator. Always start with an initial value to avoid problems.
// If not provided, the first element of the array is used as the initial accumulator value, and the callback function starts with the second element.

// What is the Accumulator?
// The accumulator is like a basket that you use to collect and combine all the elements of an array into a single result.
// As the reduce method iterates through the array, it continuously updates the accumulator with each element processed.

// In each iteration, the callback function updates the accumulator based on the current element (currentValue).
// The accumulator retains its updated value across iterations, accumulating the result.
// The final value of the accumulator after the last iteration becomes the result of the reduce method.

// How Reduce Function Works:

// const numbers = [1, 2, 3];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 6

// 1. Initial Call:

// accumulator: 0 (initial value)
// currentValue: 1 (first element of the array)
// Operation: accumulator + currentValue => 0 + 1 = 1
// Updated accumulator: 1

// 2. Second Iteration:

// accumulator: 1
// currentValue: 2
// Operation: 1 + 2 = 3
// Updated accumulator: 3

// 3. Third Iteration:

// accumulator: 3
// currentValue: 3
// Operation: 3 + 3 = 6
// Updated accumulator: 6

// Final Result: 6

// Eg:--

// const arr1 = [1,2,3];

// const initialValue = 0;

// const myTotal = arr1.reduce((acc,curVal)=>{
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc+curVal;
// },initialValue);

// console.log(`Final Value: ${myTotal}`);