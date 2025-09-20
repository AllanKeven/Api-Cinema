const express = require('express');
const {userController}= require('../controller/userController');

const userRoutes = express.Router();

userRoutes.post("/", new userController().register);
userRoutes.delete("/:id", new userController().deleteUser);
userRoutes.post("/logi", new userController().login);
userRoutes.put("/:id", new userController().updateUser);

module.exports = userRoutes;