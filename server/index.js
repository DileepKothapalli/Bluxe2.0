import express from "express";
import mongoose from "mongoose";
import Info from "./models/info.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
mongoose.connect(
  "mongodb+srv://bluxe:bluxepass@cluster0.wi4qa.mongodb.net/info?retryWrites=true&w=majority",
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
  const email_id = "check";
  const wallet = "check";
  const balance = "check";
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
