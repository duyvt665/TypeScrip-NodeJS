const express = require("express");
const router = express.Router();
const { authenticateToken, authenticateAndAuthorizeToken } = require("../middleware/authenMiddleware");
const { register, login, getInformation, deleteUser, getAllUsers, getUsersById, updateInformation } = require("../controllers/authenControllers");

router.post("/api/users", register);
router.post("/api/login", login);
router.get("/api/userInfo", authenticateToken, getInformation);
router.delete("/api/delete/:id", deleteUser);
router.get("/api/getallusers",authenticateAndAuthorizeToken, getAllUsers);
router.get("/api/getusersbyid/:id", getUsersById);
router.patch("/api/updateinformations/:id", updateInformation);

module.exports = router;
