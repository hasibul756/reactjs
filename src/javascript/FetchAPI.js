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

// HTTP Verbs

// Response Status Code


