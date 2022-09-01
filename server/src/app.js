const express = require("express");
const { config } = require("./config");
const app = express();
const cors =require("cors");
const morgan = require("morgan");
require("dotenv").config();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded());
app.use(express.json());

app.use("/api/status",(req,res)=>{
    res.send(`Yes!... ${config.APP_NAME} APP, created by techathon mentees group2 team 5`);
});

module.exports=app;
