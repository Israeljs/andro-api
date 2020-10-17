const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
name: {
    type: String,
    required: true,
},
description: {
    type: String,
    required:true,
},
status: {
    type: [{
        type: String,
        enum: ['active', 'desable']
    }],
    default: ['active']
},
quantity: {
    type: Number,
},
created_at: {
    type: Date,
    default: Date.now,
},
});

module.exports = mongoose.model("Categoria", CategoriaSchema);
