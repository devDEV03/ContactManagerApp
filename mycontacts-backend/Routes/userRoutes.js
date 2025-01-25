const express = require("express");
const { registerUser, loginUser, currentUser, removeUsers } = require("../Controller/userController");
const validateToken = require("../Middleware/validateToken");

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/current",validateToken,currentUser);
router.delete("/removeUsers",removeUsers);

module.exports = router;