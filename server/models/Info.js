import AutoIncrementFactory from "mongoose-sequence";
import mongoose from "mongoose";

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

InfoSchema.plugin(AutoIncrement, { inc_field: "_id" });
const Info = mongoose.model("data", InfoSchema);

export default Info;
