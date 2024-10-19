import contactService from '../services/contactService.js';

export const getContacts = async (req, res) => {
  try {
    const contacts = await contactService.findAllContact();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = await contactService.createContact(name, email, message);
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};