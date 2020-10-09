const mongoose = require("mongoose");
var CategoriaSchema = require("./categoria").schema;

const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
  name: {
    type: String,
    required: "Por favor informe o seu nome do produto!",
  },
  price: {
    type: Number,
    required: true,
  },
  category: CategoriaSchema,

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Produto", ProdutoSchema);
