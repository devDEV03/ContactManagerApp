const asyncHandler = require("express-async-handler");
const Contact = require("../Models/contactModel");


// @desc Get All Contacts
// @route GET /api/contacts
// @access public
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
  res.status(200).json({ contacts : contacts,message: "Getting All the Contacts" });
});

// @desc Get Contact with ID
// @route GET /api/contacts/:id
// @access public
const getContactByID = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ contact,message: `Getting Contact with ID : ${req.params.id}` });
});

// @desc Posting Contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email,phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }

//   In the ES6, if the key and value have the same name we can just use one and put a comma
  const contact = await Contact.create({
    name,
    email,
    phone
  })

  res.status(200).json({ contact : contact,message: `Creating Contacts` });
});

// @desc Updating a Specific Contact
// @route PUT /api/contacts
// @access public
const updatingContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
      res.status(404);
      throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new : true}
    );
  
    res.status(200).json({updatedContact, message: `Updating Contact with ID : ${req.params.id}` });
});

// @desc Deleting Contact
// @route DELETE /api/contacts
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

    if(!contact){
      res.status(404);
      throw new Error("Contact not found");
    }
  await Contact.remove();

  res.status(200).json({ deletedContact : contact, message: `Deleting Contact with ID : ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  createContact,
  deleteContact,
  updatingContact,
  getContactByID,
};


// We make each function as async because we are using MongoDb and dealing it with gives you a promise so we make all of them async
// We use async handler instead of using the try catch block inside the async function so that when
// there is an error inside the function we use async handler to deal with it and send it to the error handler