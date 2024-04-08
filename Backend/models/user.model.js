const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      require: [true, "Please enter firstname"],
    },

    lastname: {
      type: String,
      require: [true, "Please enter lastname"],
    },

    company: {
      type: String,
      require: false,
    },

    mail: {
      type: String,
      require: [true, "Please enter email address"],
    },

    Password: {
      type: String,
      require: [true, "Please enter your password"],
    },

    image: {
      type: String,
      require: false,
    },

    isAdmin: {
      type: Boolean,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
