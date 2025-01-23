const express = require("express");
const { getAllContacts,createContact, getContactByID, deleteContact, updatingContact } = require("../Controller/contactController");
const router = express.Router();

// One way to Write
// router.route("/").get(getAllContacts);

// router.route("/").post(createContact);

// router.route("/:id").get(getContactByID);

// router.route("/:id").delete(deleteContact)

// router.route("/:id").put(updatingContact)

router.route("/").get(getAllContacts).post(createContact)
router.route("/:id").get(getContactByID).put(updatingContact).delete(deleteContact);


module.exports = router;