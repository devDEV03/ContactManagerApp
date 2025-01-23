// @desc Get All Contacts
// @route GET /api/contacts 
// @access public
const getAllContacts = (req,res) => {
    res.status(200).json({message : "Getting All the Contacts"});
};

// @desc Get Contact with ID
// @route GET /api/contacts/:id 
// @access public
const getContactByID = (req,res) => {
    const id = req.params.id;
    res.status(200).json({message : `Getting Contact with ID : ${id}`});
};

// @desc Posting Contact
// @route POST /api/contacts 
// @access public
const createContact = (req,res) => {

    const {name ,contact} = req.body;
    if(!name || !contact){
        res.status(400);
        throw new Error("All fields are required");
    }

    res.status(200).json({message : `Creating Contacts`});
};

// @desc Updating a Specific Contact
// @route PUT /api/contacts 
// @access public
const updatingContact = (req,res) => {
    res.status(200).json({message : `Updating Contact with ID : ${req.params.id}`});
};

// @desc Deleting Contact
// @route DELETE /api/contacts 
// @access public
const deleteContact = (req,res) => {
    res.status(200).json({message : `Deleting Contact with ID : ${req.params.id}`});
};



module.exports = {getAllContacts , createContact, deleteContact, updatingContact, getContactByID};