// Import the mongoose package
import mongoose from 'mongoose';

// Define a new schema for a "Post" model with title and body fields
const PostSchema = new mongoose.Schema({
  title: {
    type: String,      // The title field will be a string
    required: true,    // The title is required (cannot be empty)
  },
  body: {
    type: String,      // The body field will be a string
    required: true,    // The body is required (cannot be empty)
  },
}, { timestamps: true });  // Enable timestamps to automatically add createdAt and updatedAt fields

// Create a Mongoose model for the "Post" schema
const Post = mongoose.model('Post', PostSchema);

// Export the "Post" model to be used in other parts of the application
export default Post;