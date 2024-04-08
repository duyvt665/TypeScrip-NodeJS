const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authen = require('./routes/authen');
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use('/authen',authen);

//////////////Connect Database/////////////
mongoose
  .connect(
    "mongodb+srv://duy950630:5102002duyvt@backend.vqopvlp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
//////////////Connect Database/////////////
