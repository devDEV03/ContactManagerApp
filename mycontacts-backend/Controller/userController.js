const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Register User
// @route POST /api/contacts/register
// @access public
const registerUser = asyncHandler(async (req,res) => {
    const {username,email,password} = req.body;

    if(!username || !email ||!password) {
        res.status(404);
        throw new Error("All the fields are mandatory");
    }

    const existingUser = await User.findOne({email});
    console.log(existingUser);
    
    if(existingUser){
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);
    
    const user = await User.create({
        username,
        email,
        password : hashedPassword
    })

    if(user){
        res.status(201).json({id : user.id , email : user.email});
    }
    else{
        res.status(400);
        throw new Error("User data is not valid");
    }

})


// @desc Login User
// @route POST /api/contacts/login
// @access public
const loginUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        res.status(404);
        throw new Error("Email or Password missing");
    }

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        const accesstoken = jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                id : user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : "15m"
        })

        res.status(200).json(accesstoken);
    }
})



// @desc Current User Info
// @route GET /api/contacts/current
// @access private
const currentUser = asyncHandler(async (req,res) => {
    
    res.json(req.user);
})

// @desc Delete all users
// @route DELETE /api/contacts/removeUsers
// @access public
const removeUsers = asyncHandler(async (req,res) => {
    await User.remove();
    res.json({message : "Info of the current user"});
})




module.exports = {registerUser,loginUser,currentUser,removeUsers}
