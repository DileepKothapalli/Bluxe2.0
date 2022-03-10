import express from "express";
import mongoose from "mongoose";
import Email from "./models/email.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://bluxe:bluxepass@cluster0.wi4qa.mongodb.net/bluxe?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/insert", async (req, res) => {
  const email_id = req.body.email_id;
  const account = req.body.account;
  const balance = req.body.balance;
  const email = new Email({
    email: email_id,
    account: account,
    balance: balance,
  });
  try {
    await email.save();
    console.log(email_id);
  } catch (err) {
    console.log(err);
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080..");
});
