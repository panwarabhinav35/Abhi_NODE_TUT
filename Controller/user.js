const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");

const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
const users =data.users;

exports.createData = (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProduct = (req, res) => {
  //res.json(product)
  //res.send('hello')
  // res.sendFile('/Users/DELL/Desktop/Node tut/index.html')
  res.json(users);
};
exports.readProduct = (req, res) => {
  const id = req.params.id;
  const product = users.find((item) => +id === item.id);
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((item) => +id === item.id);
  users.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json({ type: "PUT" });
};
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((item) => +id === item.id);
  users.splice(productIndex, 1, { ...users[productIndex], ...req.body });
  res.status(201).json({ type: "PATCH" });
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((item) => +id === item.id);
  users.splice(productIndex, 1);
  res.status(201).json({ type: "DELETE" });
};
