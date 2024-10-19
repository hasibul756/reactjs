// config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';
import { DB_NAME } from '../constants.js';

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    console.log(`Connecting at :${process.env.MONGODB_URI}/${DB_NAME}`);
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);  // Exit process with failure
  }
};

// Export the connectDB function as the default export
export default connectDB;