const express = require("express");

const productController = require("../Controller/Product.js");
const productRouter = express.Router();


productRouter
  .post("/", productController.createData)
  //READ GET 
  .get("/", productController.getAllProduct)
  //using params
  .get("/:id", productController.readProduct)
  //Update PUT API  /:id
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct)

exports.productRouter =productRouter;