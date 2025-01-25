const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
const connectDb = require("./Config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;


// Middleware
// We are using a Middleware to parse the incoming json object so that we will be able to read it,  here we are
// using inbuilt body parser
app.use(express.json());
app.use("/api/contacts",require("./Routes/contactRoutes"));
app.use("/api/users",require("./Routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server has started");
})