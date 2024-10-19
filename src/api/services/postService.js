// Import the Post model from the models folder
import Post from '../models/Post.js';

// Function to retrieve all posts from the database
const findAllPost = async () => {
  return await Post.find();  // Fetches all documents in the "Post" collection
};

// Function to create a new post with a title and body
const createPost = async (title, body) => {
  const post = new Post({ title, body });  // Creates a new instance of the Post model with the given title and body
  return await post.save();                // Saves the post to the database and returns the saved document
};

// Export the functions so they can be used in other parts of the application
export default { findAllPost, createPost };