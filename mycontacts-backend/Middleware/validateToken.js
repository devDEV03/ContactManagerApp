const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { notify } = require("../Routes/contactRoutes");


// When we get the authentication token in authorization header we take it , split it and verify it whether it is right or not
// then we decode it and send it as part of the request and use the next() function which passes it to the following function
const validateToken = asyncHandler(async (req,res,next) => {
    let token;
    const authorizationToken = req.headers.authorization || req.headers.Authorization;

    if(authorizationToken && authorizationToken.startsWith("Bearer")){
        token = authorizationToken.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,decoded) => {
            if(err){
                res.status(401);
                throw new Error("User is not verified");
            }
            console.log(decoded);
            req.user = decoded.user;
            next();
        })

        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
})

module.exports = validateToken;