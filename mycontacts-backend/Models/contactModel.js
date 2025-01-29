const mongoose = require("mongoose");

// This will have all the values that we want in our contact resource, we have added a user_id column which will tell us who has made the contact
// and accordingly she/he can update instanceof, it is referring to the user schema
const contactSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    name : {
        type: String,
        required:[true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the email"],
    },
    phone: {
        type: String,
        required: [true, "Please add the contact phone number"],
    },
},
{
    timestamps : true
}
);

module.exports = mongoose.model("Contact", contactSchema);