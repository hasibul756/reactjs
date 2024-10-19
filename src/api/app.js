import express from 'express';
import cors from 'cors'; // Import CORS
import connectDB from './config/db.js';
import errorHandler from './utils/errorHandler.js';
import userRoutes from './routes/userRoutes.js';  // Existing user routes
import postRoutes from './routes/postRoutes.js';  // Import post routes
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// Connect to the Database
connectDB();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors()); // Use CORS middleware

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/contacts', contactRoutes);

// Global Error Handler Middleware
app.use(errorHandler);

export default app;