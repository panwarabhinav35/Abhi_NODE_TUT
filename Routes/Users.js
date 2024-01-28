const express = require("express");

const usersController = require("../Controller/user.js");
const userRouter = express.Router();

userRouter
  .post("/", usersController.createData)
  //READ GET 
  .get("/", usersController.getAllProduct)
  //using params
  .get("/:id", usersController.readProduct)
  //Update PUT API  /:id
  .put("/:id", usersController.replaceProduct)
  .patch("/:id", usersController.updateProduct)
  .delete("/:id", usersController.deleteProduct)

exports.userRouter =userRouter;