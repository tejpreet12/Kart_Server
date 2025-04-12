import mongoose, { Schema } from "mongoose";

const TransactionSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    paymendId: { type: String, requried: true },
    orderId: { type: String, requried: true },
    status: {
      type: String,
      enum: ["Success", "Failed", "Pending"],
      required: true,
    },
    amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction",TransactionSchema);

export default Transaction;
