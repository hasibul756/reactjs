// Synchronous

/* Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its executions. */

//Asynchronous

/* Due to synchronous programming, sometimes important instructions get blocked due to some previous
instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately
and doesn't block the flow. */

// Synchronous

// console.log('one');
// console.log('two');
// console.log('three');

// function hello(){
//     console.log("Hello Function");
// }

// setTimeout(hello,2000);

// Callback function

// function sum(a,b) {
//     console.log(a+b);
// }

// function callback(a,b,sumCallback){
//  sumCallback(a,b)
// }

// callback(1,2,sum)

// const hello = () => {
//     console.log('Hello World');
// }

// setTimeout(hello,3000);

// Callback Hell
// Callback Hell: Nested callbacks stacked below one another forming a pyramid structuredClone.apply

//nesting:
//loop

// let age  = 19;

// if(age>18) {
//     if(age>=60){
//         console.log('senior');
//     } else {
//         console.log('adult');
//     }
// } else {
//     console.log("child");
// }

// for(let i=0;i<5;i++) {
//     let str ='';
//     for(let j=0;j<5;j++) {
//         str+=j
//         console.log(str);
//     }
// }


// function getData(id) {
//     console.log(id);
// }

//Callback Hell Example (Forming a pyramid structure)

// function getData(id, nextId) {
//     setTimeout(() => {
//         console.log(id);
//         if (nextId) {
//             nextId();
//         }
//     }, 2000);
// }

// getData(1, () => {
//      getData(2, ()=> {
//     getData(3,()=>{
//         getData(4)
//     })
// });
// });

// Promises
// Promise is for 'eventual' completion of task. It is an object is JS.
// It is a solution to callback HTMLElement.

// let promise = new Promise((resolve,reject)=>{
//     console.log('I am a promise');
//     resolve('success');
//     reject('some error');
// })

//resolve and reject are callbacks provided by js.

// Promise - pending, fulfilled, rejected

// Creating a promise
// let myPromise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation (e.g., fetching data from a server)
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         // If the operation is successful, resolve the promise
//         resolve("Data retrieved successfully!");
//       } else {
//         // If the operation fails, reject the promise
//         reject("Error: Unable to retrieve data.");
//       }
//     }, 2000); // Simulating a delay of 2 seconds
//   });

// // Using the promise
// myPromise.then((result) => {
// // This block executes if the promise is resolved successfully
// console.log(result); // Output: Data retrieved successfully!
// }).catch((error) => {
// // This block executes if the promise is rejected
// console.log(error); // Output: Error: Unable to retrieve data.
// });

// Promise Chaining

// Simulated asynchronous functions
// function fetchData1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data from fetchData1");
//       }, 1000);
//     });
//   }
  
//   function fetchData2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data from fetchData2");
//       }, 1500);
//     });
//   }
  
//   // Chaining promises
//   fetchData1()
//     .then((result1) => {
//       console.log(result1); // Output: Data from fetchData1
//       return fetchData2(); // Return a new promise to continue the chain
//     })
//     .then((result2) => {
//       console.log(result2); // Output: Data from fetchData2
//       console.log("Promise chaining completed.");
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//     });


// Async-Await