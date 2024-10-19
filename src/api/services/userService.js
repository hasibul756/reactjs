// services/userService.js
import User from '../models/User.js';

const findAllUsers = async () => {
  return await User.find();
};

const createUser = async (name, email, age) => {
  const user = new User({ name, email, age });
  return await user.save();
};

export default { findAllUsers, createUser };