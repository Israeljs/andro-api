const mongoose = require("mongoose");
//var produtoId = require("./produto").schema;

const Schema = mongoose.Schema;

const ItenCardapioSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  produto: {
    type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ItenCardapio", ItenCardapioSchema);
