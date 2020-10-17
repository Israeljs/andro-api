const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompoePedidoSchema = new Schema({
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  itemCardapio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ItenCardapio",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CompoePedido", CompoePedidoSchema);
