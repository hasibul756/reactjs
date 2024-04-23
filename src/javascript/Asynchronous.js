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
