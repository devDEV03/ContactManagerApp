const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
const connectDb = require("./Config/dbConnection");
const dotenv = require("dotenv").config();

// For connecting to mongodb
connectDb();

// importing express app
const app = express();


// If no port is provided then we take it as 5000
const port = process.env.PORT || 5000;


// Middleware
// We are using a Middleware to parse the incoming json object so that we will be able to read it,  here we are
// using inbuilt body parser
// We are also using the error handler as middleware which will catch all the errors happening and display it according to our needs
app.use(express.json());
app.use("/api/contacts",require("./Routes/contactRoutes"));
app.use("/api/users",require("./Routes/userRoutes"));
app.use(errorHandler);

// The epicenter of the project
app.listen(port, () => {
    console.log("Server has started");
})