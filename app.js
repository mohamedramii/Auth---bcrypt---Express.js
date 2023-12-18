const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRegister = require("./routes/userRoute");




const app = express();
const port = 3000;




// MiddleWare


app.use(express.json());

//DB Connection
mongoose.connect(process.env.URI);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Connection Error!");
});
db.once("open", () => {
  console.log("Connected DB!");
});

app.use(userRegister);

app.listen(port, () => {
    console.log("on port 3000");
  });


