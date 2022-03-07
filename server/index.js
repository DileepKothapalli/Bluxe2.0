const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const { connectWalletHandler } = require("./functions");
const port = process.env.PORT || 8080;
const Info = require("./models/Info.js");
const mongoose = require("mongoose");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
mongoose.connect(
  "mongodb+srv://bluxe:bluxepass@cluster0.fuilb.mongodb.net/wingx?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/newpost", function (req, res, next) {
  console.log("Inside Home Login");
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  console.log("Books : ", JSON.stringify(books));
  res.end(JSON.stringify(books));
});

app.post("/newpost", async (req, res) => {
  const email_id = req.body.email;
  const wallet = req.body.wallet;
  const balance = req.body.balance;
  const data = new Info({ email: email_id, wallet: wallet, balance: balance });

  try {
    await data.save();
    console.log(email_id);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, function () {
  console.log("Running on " + port);
});
module.exports = app;
