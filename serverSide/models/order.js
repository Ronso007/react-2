var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const Product = require("./Product");
const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  items: [{ type: Schema.Types.ObjectId, ref: "products" }],
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
