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
//     return num>4; // need to return value ()=>{return //condition}
// })

// console.log(getnum);

