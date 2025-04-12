import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, requried: true },
  },
  {
    timestamps: true,
  }
);

const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  deliveryDate: { type: Date, require: true },
  address: { type: String },
  items: { type: [ItemSchema], required: true },
  status: {
    type: String,
    enum: [
      "Order Placed",
      "Shipping",
      "Out for Delivery",
      "Delivered",
      "Cancelled",
    ],

    default: "Order Placed",
    required: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
