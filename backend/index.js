require('dotenv').config();
const express = require("express");
const { HoldingsModel } = require("./model/HoldingsModel");
const bodyparser =require("body-parser");
const cors = require("cors");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const mongoose =require('mongoose');
const PORT =process.env.PORT || 3002;
const url =process.env.MONGO_URL;
const app = express();
app.use(cors());
app.use(bodyparser.json());
mongoose
  .connect(url)
  .then(() => console.log(" DB connected"))
  .catch((err) => console.error(" DB connection error:", err));
 
 app.get('/allHoldings',async(req,res)=>{
  let allHoldings=await HoldingsModel.find({})
  res.json(allHoldings)
 })
 app.get('/allPositions',async(req,res)=>{
  let allPositions=await PositionsModel.find({})
  res.json(allPositions)
 })
 

app.post('/newOrder',async(req,res)=>{
    let newOrder = new OrdersModel({
      name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order Saved!");
})





 
app.listen(PORT,()=>{
    console.log("app started")
})