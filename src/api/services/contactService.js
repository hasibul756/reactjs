import Contact from '../models/Contact.js';

const findAllContact = async () => {
  return await Contact.find();
};

const createContact = async ( name, email, message ) => {
  const contact = new Contact({ name, email, message });
  return await contact.save();
};

export default { findAllContact, createContact };