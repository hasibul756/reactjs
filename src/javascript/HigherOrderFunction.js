// In JavaScript, a higher-order function is a function that either takes one or more functions as arguments,
// returns a function, or both.


// X is the Call Back Function
// function x(){ 
//     console.log("Hello");
// }

// Y is the Higher Order Function
// function y(x){
//     x()
// }

// y(x)

const arr = [2,4,6,8];

// function CalculateRadius(arr){
//     let output = [];
//     for(let i =0;i<arr.length;i++){
//         output.push(Math.PI * arr[i]*arr[i]);
//     }
//     return output;
// }
// console.log(CalculateRadius(arr));


// function CalculateDiameter(arr){
//     let output = [];
//     for(let i =0;i<arr.length;i++){
//         output.push(2 * arr[i]);
//     }
//     return output;
// }
// console.log(CalculateDiameter(arr));

// DRY(Dont repeat Yourself)

// try to create a generic function.

const area = function (arr) {
    return Math.PI * arr * arr;
}

const circumferences = function (arr) {
    return 2 * Math.PI * arr;
}

const calculate = function(arr,logic){
    const output = [];
    for(let i=0;i<arr.length;i++) {
        output.push(logic(arr[i]));
    }
    return output;
};
console.log(calculate(arr,area));

// Using Map Function we can achieve the same result.
console.log(arr.map(area));




// 1. Functions as Arguments:
// Higher-order functions can accept other functions as parameters.
// This is commonly seen in array methods like map, filter, and reduce.

// const numbers = [1, 2, 3, 4, 5];

// // Using map (higher-order function)
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]

// Using filter (higher-order function)
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]

// 2. Functions as Return Values:
// Higher-order functions can return other functions.

