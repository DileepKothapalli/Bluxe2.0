import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const EmailSchema = new mongoose.Schema(
  {
    _id: Number,
    email: {
      type: String,
      required: true,
    },
    account: {
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
const Email = mongoose.model("emails", EmailSchema);

export default Email;
