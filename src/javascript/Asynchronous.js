// Synchronous Programming

/* Synchronous programming means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its executions. */

// Example of Synchronous Code
console.log('one'); // Executes first
console.log('two'); // Executes second
console.log('three'); // Executes third

// Asynchronous Programming

/* Asynchronous code execution allows executing the next instructions immediately
without blocking the flow, which is beneficial for UI responsiveness. */

// Example of Asynchronous Code using setTimeout
function hello() {
    console.log("Hello Function");
}
setTimeout(hello, 2000); // Executes after 2 seconds asynchronously

// Callback Functions

/* Callback functions are functions passed as arguments to other functions and are executed later
when a certain condition or task is completed. */

// Example of Callback Function
function sum(a, b) {
    console.log(a + b);
}

function callback(a, b, sumCallback) {
    sumCallback(a, b);
}

callback(1, 2, sum); // Outputs: 3

// Callback Hell

/* Callback Hell refers to nested callbacks stacked below one another,
forming a pyramid structure which can be hard to manage. */

// Example of Callback Hell
function getData(id, nextId) {
    setTimeout(() => {
        console.log(id);
        if (nextId) {
            nextId();
        }
    }, 2000);
}

// Nested Callbacks forming a pyramid structure
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});

// Promises

/* Promises represent the eventual completion or failure of an asynchronous operation.
They provide a cleaner way to handle asynchronous tasks compared to callbacks.
With 3 states: pending, resolved, rejected */

// Example of Creating and Using a Promise
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Data retrieved successfully!");
        } else {
            reject("Error: Unable to retrieve data.");
        }
    }, 2000);
});

// Using the Promise
myPromise.then((result) => {
    console.log(result); // Outputs: Data retrieved successfully!
}).catch((error) => {
    console.log(error); // Outputs: Error: Unable to retrieve data.
});

// Promise Chaining

/* Promise chaining allows sequential execution of asynchronous tasks,
making code more readable and manageable. */

// Example of Promise Chaining
fetchData1()
    .then((result1) => {
        console.log(result1); // Output: Data from fetchData1
        return fetchData2(); // Return a new promise to continue the chain
    })
    .then((result2) => {
        console.log(result2); // Output: Data from fetchData2
        console.log("Promise chaining completed.");
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Async-Await

/* Async-await is a syntactic sugar over promises, making asynchronous code
look synchronous, easier to read, write, and maintain. */

// Example of Async-Await
async function fetchData() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Cleanup and final actions here...");
    }
}

fetchData(); // Outputs: Data retrieved successfully!, Async function execution complete.

// IIFE (Immediately Invoked Function Expression)

/* IIFE is a JavaScript function that runs as soon as it is defined,
helpful for creating encapsulated code and avoiding variable scope issues. */

// Example of IIFE with Async Function
(async () => {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("IIFE execution complete.");
    }
})();
