const mongoose = require("mongoose");
const CompoePedidoSchema = require("./compoePedido").schema;

const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
  description: {
    type: String,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
  },
  compoe: [CompoePedidoSchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pedido", PedidoSchema);
//
