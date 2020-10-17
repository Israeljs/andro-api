const crypto = require("crypto");
//const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
var TaskSchema = require("./tasks").schema;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: "Informe o nome do usuário",
  },
  telefone: {
    type: String,
    required: "Informe o telefone do usuario",
  },
  email: {
    type: String,
    required: "Informe o email do usuário",
    uniqued: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    set: (value) => crypto.createHash("md5").update(value).digest("hex"),
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  tasks: [TaskSchema],
});

// UserSchema.pre("save", async function (next) {
//   const hash = await bcrypt.hash(this.password, 10);
//   this.password = hash;

//   next();
// });

module.exports = mongoose.model("User", UserSchema);
