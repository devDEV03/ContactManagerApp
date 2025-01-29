const express = require("express");
const { registerUser, loginUser, currentUser, removeUsers } = require("../Controller/userController");
const validateToken = require("../Middleware/validateToken");

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);

// Here also we are applying validateToken middleware but we are applying it specifically only on current user function
router.get("/current",validateToken,currentUser);
router.delete("/removeUsers",removeUsers);

module.exports = router;