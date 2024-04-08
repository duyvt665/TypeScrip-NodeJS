const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authen = require("./routes/authen");
const bodyParser = require("body-parser");
const db = require("./models/index");
const Role = db.role;
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/authen", authen);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//////////////Connect Database/////////////
mongoose
  .connect(
    "mongodb+srv://duy950630:5102002duyvt@jwt.vp62ffr.mongodb.net/?retryWrites=true&w=majority&appName=JWT"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    initial();
  })
  .catch(() => {
    console.log("Connection failed!");
  });
//////////////Connect Database/////////////

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      console.log("No roles found. Adding default roles...");
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
