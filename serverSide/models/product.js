const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
    min: 0,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
    min: 0,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
