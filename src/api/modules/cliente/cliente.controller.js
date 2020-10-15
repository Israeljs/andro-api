//const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Cliente = mongoose.model("Cliente");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class ClienteController {
  async create(req, res) {
    //const { email } = req.body;
    try {
      const cliente = await Cliente.create(req.body);

      cliente.password = undefined;

      const token = jwt.sign(
        { id: cliente.id, email: cliente.email },
        process.env.SECRET_KEY,
        {
          expiresIn: 86400,
        }
      );

      return res.send({
        cliente,
        token,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const cliente = await Cliente.find({});
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ClienteController();
