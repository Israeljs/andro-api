const mongoose = require("mongoose");
//var produtoId = require("./produto").schema;

const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
  description: {
    type: String,
  },
  cliente: {
    type: Produtomongoose.Schema.Types.ObjectId,
    ref: "Cliente",
  },
  compoe: [
    {
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
        type: Produtomongoose.Schema.Types.ObjectId,
        ref: "ItenCardapio",
      },
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pedido", PedidoSchema);
//
