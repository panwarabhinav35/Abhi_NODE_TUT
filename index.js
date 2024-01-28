require ("dotenv").config()
const express = require("express");
const server = express();
const mongoose = require('mongoose')


//db connection

main().catch(err=>console.log(err));
async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  console.log("db connected")
}     
 




//body parser 
server.use(express.json());
const Router = require('./Routes/Product.js')
const userRouter =require('./Routes/Users.js');


server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products', Router.productRouter)
server.use('/users', userRouter.userRouter)
//console.log('env',process.env.DB_PASSWORD)
//MVC model-view-controller
//MIDDLEWARE
server.use((req, res, next) => {
  console.log(
    req.method,
    req.ip,
    req.hostname,
    new Date(),
    req.get("User-Agent")
  );    
  next();
});

// const auth = (req,res,next)=>{
//   console.log(req.body)
//   if(req.body.password=='123'){
//     next()
//   }
//   else{
//     res.sendStatus(401)
//   }
// }

//API -ENDPOINT -ROURE
//API ROOT ,base URL

//Create API using POST /products


server.listen(8080, () => {
  console.log("server started");
});
 