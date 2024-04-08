const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
//Register
const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login
const login = async (req, res) => {
  const { mail, Password } = req.body;
  try {
    const user = await User.findOne({ mail });
    if (!user || user.Password !== Password) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }

    const accessToken = jwt.sign(
      { mail, isAdmin: user.isAdmin },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // res.json({ accessToken });
    res.status(200).json({ message: "Login successful", accessToken, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//getInformation
const getInformation = async (req, res) => {
  const { mail } = req.user;
  console.log(req.headers);
  try {
    const user = await User.findOne({ mail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete user by id
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ errors: "No such user" });
    }
    const user = await User.findByIdAndDelete({ _id: id });
    if (!user) {
      res.status(400).json({ errors: "No such user" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get users by id
const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ errors: "No such user" });
    }
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ errors: "No such user" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update user by id
const updateInformation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ errors: "No such user" });
    }
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(400).json({ errors: "No such user" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  getInformation,
  deleteUser,
  getAllUsers,
  getUsersById,
  updateInformation,
};
