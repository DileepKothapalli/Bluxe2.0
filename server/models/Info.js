import AutoIncrementFactory from "mongoose-sequence";
const mongoose = require("mongoose");

const AutoIncrement = AutoIncrementFactory(mongoose);

const InfoSchema = new mongoose.Schema(
  {
    _id: Number,
    email: {
      type: String,
      required: true,
    },
    wallet: {
      type: String,
      required: true,
    },
    balance: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  { _id: false }
);

EmailSchema.plugin(AutoIncrement, { inc_field: "_id" });
const Info = mongoose.model("emails", InfoSchema);

export default Info;
