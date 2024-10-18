// Import axios library
import axios from "axios";

// Create an axios instance with a base URL and default headers
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // The base URL for the API
  headers: {
    "Content-Type": "application/json", // Specifies that we'll be sending/receiving JSON
  },
});

// Fetch all posts
export const getPosts = async () => {
  try {
    // Make a GET request to fetch all posts
    const response = await api.get("/posts");
    return response.data; // Return the data (list of posts)
  } catch (error) {
    // Log any error encountered
    console.error("Error fetching posts:", error);
  }
};

// Create a post
export const createPost = async (postData) => {
  try {
    const response = await api.post("/posts", postData);
    console.log("API response:", response.data); // Log response
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};

// Update an existing post by ID
export const updatePost = async (id, updatedData) => {
  try {
    const response = await api.put(`/posts/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating post with id ${id}:`, error);
  }
};

// Delete a post by ID
export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data; // Successfully deleted post
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
  }
};