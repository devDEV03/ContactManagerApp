const mongoose = require("mongoose");

// This will have all the values that we want in our contact resource
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