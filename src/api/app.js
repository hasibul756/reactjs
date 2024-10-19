import express from 'express';
import cors from 'cors'; // Import CORS
import connectDB from './config/db.js';
import errorHandler from './utils/errorHandler.js';
import userRoutes from './routes/userRoutes.js';  // Existing user routes
import postRoutes from './routes/postRoutes.js';  // Import post routes

const app = express();

// Connect to the Database
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors()); // Use CORS middleware

// Define Routes
app.use('/api/users', userRoutes);  // Routes for user-related actions
app.use('/api/posts', postRoutes);  // Routes for post-related actions

// Global Error Handler Middleware
app.use(errorHandler);

export default app;