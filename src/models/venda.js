const mongoose = require("mongoose");
var ColaboradorSchema = require("./colaborador").schema;
var ClienteSchema = require("./cliente").schema;
var ProdutoSchema = require("./produto").schema;

const Schema = mongoose.Schema;//hhhhhh

const VendaSchema = new Schema({
  colaborador: ColaboradorSchema, required: true,
  cliente: ClienteSchema, required: true,
  produto: ProdutoSchema, required: true,
  formaPagamento: {
    type: String,
    enum: ['Dinheiro', 'Cartao', 'Debito'],
    default: ['Dinheiro'],
  },
  price: {
    type: Double,
    required: true,
  },
  desconto: {
    type: Number,
  },
  status: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Venda", VendaSchema);
