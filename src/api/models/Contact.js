import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name must be less than 100 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    index: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    minlength: [4, 'Message must be at least 4 characters long'],
    maxlength: [500, 'Message must be less than 500 characters long']
  }
}, { timestamps: true });

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;