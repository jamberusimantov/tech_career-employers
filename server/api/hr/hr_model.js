const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hr = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: String,
    company: String,
    name: String,
    phone: String,
    token: String,
    isAuth: { type: Boolean, default: true },
    isActive: Boolean,
    role: { type: String, default: "Hr" },
    isCompanyFirstUser: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,

    date: {
      type: Date,
      default: Date.now,
    },
  }
  //  { timestamps: true }
);
module.exports = mongoose.model("hr", hr);
