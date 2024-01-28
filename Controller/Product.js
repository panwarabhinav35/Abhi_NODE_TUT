// const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");

// const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
// const products =data.products;
const model=require('../Model/product.js')
const Product =model.Product;

exports.createData = (req, res) => {
  // products.push(req.body);
  // res.status(201).json(req.body);
  const product =new Product(req.body);
  product.save()
  .then(() => {
    res.status(201).json(product);
  })
  .catch(err => {
    res.status(400).json(err);

  });

  
};

exports.getAllProduct = (req, res) => {
  //res.json(product)
  //res.send('hello')
  // res.sendFile('/Users/DELL/Desktop/Node tut/index.html')
  res.json(products);
};
exports.readProduct = (req, res) => {
  const id = req.params.id;
  const product = products.find((item) => +id === item.id);
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => +id === item.id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({ type: "PUT" });
};
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => +id === item.id);
  products.splice(productIndex, 1, { ...products[productIndex], ...req.body });
  res.status(201).json({ type: "PATCH" });
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => +id === item.id);
  products.splice(productIndex, 1);
  res.status(201).json({ type: "DELETE" });
};
