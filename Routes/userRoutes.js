const express = require('express');
const { getUserController,updateUserController,resetPasswordController, deleteProfileController } = require('../controllers/userController');
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//REGISTER || POST
router.get("/getUser",authMiddleware, getUserController);

//UPDATE PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

//PASSWORD UPDATE
router.post("/resetPassword", authMiddleware,resetPasswordController);

//DELETE PASSWORD
router.delete('/deleteUser/:id', authMiddleware , deleteProfileController);
 
module.exports = router;
