import express from 'express';
import { getPosts, createPost } from '../controllers/postController.js';  // Import the post controller functions

const router = express.Router();

// Route to fetch all posts
router.get('/', getPosts);

// Route to create a new post
router.post('/', createPost);

export default router;  // Export the router to be used in other parts of the app