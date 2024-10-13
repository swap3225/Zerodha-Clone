require("dotenv").config();
//initializing app
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//port no and uri of mongodb
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

//middlewares
app.use(cors());
app.use(bodyParser.json());

//importing modules
const { HoldingsModel } = require("./models/HoldingsModel");
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel} = require("./models/OrdersModel");

//connecting to DB
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(uri);
}

//sample routes

app.get("/allHoldings", async (req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async(req,res)=>{
  let newOrder = new OrdersModel({
    name : req.body.name,
    qty : req.body.qty,
    price : req.body.price,
    mode : req.body.mode
  });


  await newOrder.save();

  res.send("Order saved");
});

app.listen(PORT, () => {
  console.log("App Started");
});
