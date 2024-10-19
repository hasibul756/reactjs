// utils/errorHandler.js

// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: 'Server Error' });
};

// Export the error handler as default
export default errorHandler;