const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");

const registerUser = asyncHandler(async (req,res) => {
    const {username,password} = req.body;

    if(!username || !password) {
        res.status(404);
        throw new Error("All the fields are mandatory");
    }

    const user = await User.create({
        username,
        password
    })

    res.status(200).json({user : user,message : "User registered"});
})

const loginUser = asyncHandler(async (req,res) => {
    res.json({message : "User logged in"});
})

const currentUser = asyncHandler(async (req,res) => {
    res.json({messgae : "Info of the current user"});
})


module.exports = {registerUser,loginUser,currentUser}
