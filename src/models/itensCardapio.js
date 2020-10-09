const mongoose = require("mongoose");
var produtoId = require("./produto").schema.mongoose.ob

const Schema = mongoose.Schema;

const ItensCardapioSchema = new Schema({
name: {
    type: String,
    required: true,
},
description: {
    type: String,
    required:true,
},
price: {
    type: Number,
    required: true,
},
produto: produtoId,
created_at: {
    type: Date,
    default: Date.now,
},
});

module.exports = mongoose.model("ItensCardapio", ItensCardapioSchema);
