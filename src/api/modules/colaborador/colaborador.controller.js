//const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Colaborador = mongoose.model("Colaborador");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class ColaboradorController {
  async create(req, res) {
    //const { email } = req.body;
    try {
      const colaborador = await Colaborador.create(req.body);

      colaborador.password = undefined;

      const token = jwt.sign(
        { id: colaborador.id, email: colaborador.email },
        process.env.SECRET_KEY,
        {
          expiresIn: 86400,
        }
      );

      return res.send({
        colaborador,
        token,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const colaborador = await Colaborador.find({});
      return res.json(colaborador);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ColaboradorController();
