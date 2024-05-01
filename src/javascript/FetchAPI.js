// Fetching API in JavaScript

// The Fetch API provides an interface for fetching (sending/receiving) resources.

// It uses Request and Response objects.
// The fetch() method id used to fetch recourses (data).API

// let promise = fetch(url, [options])

// API = Application Programming Interface


// Understanding Terms

// Ajax = Asynchronous JS & XML
// JSON = JavaScript Object Notation
// json() method = returns a second promise that resolves with the result of parsing
// the response body text as JSON.(Input is JSON, output is JS object).


const url = 'https://cat-fact.herokuapp.com/facts';

// *** Using Async/Await for fetching data ***

const getFacts = async () => {
    console.log("Getting Data...");
    try {
        let response = await fetch(url); // Fetch data from the API
        console.log(response); // Output: Response object in JSON format
        let data = await response.json(); // Parse the response body as JSON
        console.log(data); // Output: Parsed JSON data
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// *** Using Promise Chaining for fetching data ***

function getData() {
    fetch(url) // Fetch data from the API
        .then((response) => {
            return response.json(); // Parse the response body as JSON
        })
        .then((data) => {
            console.log(data); // Output: Parsed JSON data
        })
        .catch((error) => {
            console.log("Error fetching data:", error);
        });
}

// Displaying Data on Button Click

const fact = document.querySelector('#fact'); // Element to display the fact
const btn = document.querySelector('#btn'); // Button to trigger data fetching

const displayFacts = async () => {
    console.log("Getting Data...");
    try {
        let response = await fetch(url); // Fetch data from the API
        console.log(response); // Output: Response object in JSON format
        let data = await response.json(); // Parse the response body as JSON
        fact.innerHTML = data[0].text; // Display the first fact on the webpage
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

btn.addEventListener('click', displayFacts); // Event listener for button click



// *** Request & Response ***


// HTTP response status codes
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)


// *HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.

// 1.GET: Retrieves data from a server. It should only retrieve data and should have no other effect on the server.

// Example: 
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// 2. POST: Submits data to be processed to a specified resource. It often results in the creation of a new resource or the update of an existing one.

// Example:
// const postData = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// 3. DELETE: Requests the removal of the specified resource.

// Example:
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE'
// })
// .then(response => response.json())
// .then(data => console.log(data)) // Typically, DELETE requests won't return data
// .catch(error => console.error('Error:', error));

// 4. HEAD Request: Similar to GET but only retrieves the headers of the response without the actual content. It's often used to check the validity of a resource or to obtain metadata about a resource.

// Example:
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'HEAD'
// })
// .then(response => {
//   console.log('Headers:', response.headers);
//   console.log('Status:', response.status);
// })
// .catch(error => console.error('Error:', error));

// 5. PATCh: PATCH: Applies partial modifications to a resource.

// Example:
// const patchData = {
//     body: 'Updated body content'
//   };
  
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(patchData)
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


  





