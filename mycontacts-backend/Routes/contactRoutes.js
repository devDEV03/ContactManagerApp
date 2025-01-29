const express = require("express");
const { getAllContacts,createContact, getContactByID, deleteContact, updatingContact } = require("../Controller/contactController");
const validateToken = require("../Middleware/validateToken");
const router = express.Router();

// One way to Write
// router.route("/").get(getAllContacts);

// router.route("/").post(createContact);

// router.route("/:id").get(getContactByID);

// router.route("/:id").delete(deleteContact)

// router.route("/:id").put(updatingContact)

// We are applying middleware validateToken here by using router.use()
// We can also do it specifically but here we chose to do it on all the functions
router.use(validateToken);
router.route("/").get(getAllContacts).post(createContact)
router.route("/:id").get(getContactByID).put(updatingContact).delete(deleteContact);


module.exports = router;