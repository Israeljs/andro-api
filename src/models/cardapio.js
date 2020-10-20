const mongoose = require("mongoose");
//var produtoId = require("./produto").schema;

const Schema = mongoose.Schema;

const CardapioSchema = new Schema({
  description: {
      type: String,
  },
  colaborador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Colaborador",
  },
  itemCardapio: [
    {type: mongoose.Schema.Types.ObjectId,
    ref: "ItenCardapio",}
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cardapio", CardapioSchema);
