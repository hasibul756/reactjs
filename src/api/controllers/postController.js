import postService from '../services/postService.js';  // Import the correct service (postService)

// Controller to fetch all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await postService.findAllPost();  // Calls service to get all posts
    res.json(posts);  // Respond with posts in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message });  // Handle any errors
  }
};

// Controller to create a new post
export const createPost = async (req, res) => {
  const { title, body } = req.body;  // Destructure title and body from the request body
  try {
    const newPost = await postService.createPost(title, body);  // Calls service to create a new post
    res.status(201).json(newPost);  // Respond with the newly created post
  } catch (err) {
    res.status(500).json({ message: err.message });  // Handle any errors
  }
};