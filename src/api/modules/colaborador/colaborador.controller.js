const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Colaborador = mongoose.model("Colaborador");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class ColaboradorController {
  async create(req, res) {
    try {
      const { name, telefone, email, dateBirth, password } = req.body;
      if (!name || !telefone || !email || !dateBirth || !password)
        throw new Error("parametros invalidos!!");
      if (await Colaborador.findOne({ email }))
        return res.status(400).send({ error: "O usuário já existe!" });
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

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const colaborador = await Colaborador.findOne({ email }).select(
        "+password"
      );

      if (!colaborador)
        return res.status(404).send({ error: "Usuário não encontrado!" });

      if (!(await bcrypt.compare(password, colaborador.password)))
        return res.status(404).send({ error: "Senha inválida!" });

      colaborador.password = undefined;

      const token = jwt.sign(
        { id: colaborador.id, email: colaborador.email },
        process.env.SECRET_KEY,
        {
          expiresIn: 86400,
        }
      );

      res.send({
        colaborador,
        token,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ColaboradorController();
