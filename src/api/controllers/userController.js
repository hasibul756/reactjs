// controllers/userController.js
import userService from '../services/userService.js';

// Controller to fetch all users
export const getUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();  // Calls service to get users
    res.json(users);  // Respond with users in JSON format
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to create a new user
export const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = await userService.createUser(name, email, age);  // Calls service to create user
    res.status(201).json(newUser);  // Respond with the newly created user
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};