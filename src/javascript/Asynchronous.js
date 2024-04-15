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

function hello(){
    console.log("Hello Function");
}

setTimeout(hello,2000);

// Callback function

function sum(a,b) {
    console.log(a+b);
}

function callback(a,b,sumCallback){
 sumCallback(a,b)
}

callback(1,2,sum)
