const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authen = require("./routes/authen");
const db = require("./models/index");
const Role = db.role;
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/authen", authen);

//////////////Connect Database/////////////
mongoose
  .connect(
    "mongodb+srv://duy950630:5102002duyvt@jwt.vp62ffr.mongodb.net/your-database-name?retryWrites=true&w=majority&appName=JWT"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    initial();
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });
//////////////Connect Database/////////////

// async function initial() {
//   return await Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       console.log("No roles found. Adding default roles...");
//       new Role({
//         name: "user",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'user' to roles collection");
//       });
//       new Role({
//         name: "moderator",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'moderator' to roles collection");
//       });
//       new Role({
//         name: "admin",
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }
//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }

async function initial() {
  const count = await Role.estimatedDocumentCount();
  if (count === 0) {
    console.log("No roles found. Adding default roles...");
    try {
      await Promise.all([
        new Role({ name: "user" }).save(),
        new Role({ name: "moderator" }).save(),
        new Role({ name: "admin" }).save(),
      ]);
      console.log("Added default roles to roles collection");
    } catch (error) {
      console.error("Error while adding default roles:", error);
    }
  }
}
