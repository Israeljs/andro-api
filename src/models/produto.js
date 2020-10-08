const mongoose = require("mongoose");
//var TaskSchema = require("./tasks").schema;

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
  category: {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:false,
    },
    status: {
        type: String,
        enum: ['active', 'desable'],
        default: ['active'],
    },
    quantity: {
        type: Number,
    }

  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// ProdutoSchema.pre("save", async function (next) {
//   const hash = await bcrypt.hash(this.password, 10);
//   this.password = hash;

//   next();
// });

module.exports = mongoose.model("Produto", ProdutoSchema);
