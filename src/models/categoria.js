const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
description: {
    type: String,
    required:true,
},
created_at: {
    type: Date,
    default: Date.now,
},
});

module.exports = mongoose.model("Categoria", CategoriaSchema);
