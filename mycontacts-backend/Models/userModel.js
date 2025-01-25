const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is mandatory"],
    },
    password: {
      type: String,
      required: [true, "Password is mandatory"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User",userSchema);
