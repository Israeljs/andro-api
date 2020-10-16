const crypto = require("crypto");
//const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
//var TaskSchema = require("./tasks").schema;

const Schema = mongoose.Schema;

const ColaboradorSchema = new Schema({
  name: {
    type: String,
    required: "Por favor informe o seu nome!",
  },
  telefone: {
    type: String,
    required: "Por favor informe o seu telefone!",
  },
  email: {
    type: String,
    required: "Por favor informe o seu email!",
    uniqued: true,
    lowercase: true,
    trim: true,
  },
  dateBirth: {
    type: Date,  
  },
  role: {
    type: [
      {
        type: String,
        enum: ["Cliente", "Colaborador", "Administrador"],
      },
    ],
    default: ["Colaborador"],
  },
  password: {
    type: String,
    required: "Por favor digite uma senha!",
    select: false,
    set: (value) => crypto.createHash("md5").update(value).digest("hex"),
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// ColaboradorSchema.pre("save", async function (next) {
//   const hash = await bcrypt.hash(this.password, 10);
//   this.password = hash;

//   next();
// });

module.exports = mongoose.model("Colaborador", ColaboradorSchema);
