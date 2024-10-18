// src/api/axiosInstance.js

// Import axios library
import axios from "axios";

// Create an axios instance with a base URL and default headers
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // The base URL for the API
  headers: {
    "Content-Type": "application/json", // Specifies that we'll be sending/receiving JSON
  },
});

// Export the instance so it can be used in other files
export default api;
