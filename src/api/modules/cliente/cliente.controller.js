const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Cliente = mongoose.model("Cliente");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class ClienteController {
  async create(req, res) {

    try {
      const { name, telefone, email, dateBirth, password } = req.body;
      if (!name || !telefone  || !email || !dateBirth || !password )
        throw new Error("parametros invalidos!!");
      if (await Cliente.findOne({ email }))
        return res.status(400).send({ error: "O usuário já existe!" });

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
  async showOne(req, res, next) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findById(id);
      if (!cliente)
        return res.status(400).send("cliente não encontrado no banco de dados!");
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async update(req, res) {
    try {
      // const { name, telefone, email, dateBirth, password } = req.body;
      // if (!name || !telefone  || !email || !dateBirth || !password )
      //   throw new Error("parametros invalidos!!");
      // if (await Cliente.findOne({ email }))
      //   return res.status(400).send({ error: "O usuário já existe!" });


      const { id } = req.params;
      // const { name, email, telefone, tasks } = req.body
      // if (!name || !email || !telefone || !tasks)
      var cliente = await Cliente.findById(id);
      if (!cliente)
        return res
          .status(400)
          .send("Usuário não encontrado no banco de dados!");
      //if (!tasks) throw new Error("parametros invalidos!!");
      // cliente = await cliente.findByIdAndUpdate(id, req.body, { new: true });
      await cliente.update(id, req.body, { new: true });
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      // if (!id) throw new Error('parametros invalidos');
      const user = await User.findById(id);
      if (!user)
        return res.status(400).send("user não encontrado no banco de dados!");
      await user.remove();
      return res.send("Usuário removido com sucesso!");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const cliente = await Cliente.findOne({ email }).select("+password");

      if (!cliente)
        return res.status(404).send({ error: "Usuário não encontrado!" });

      if (!(await bcrypt.compare(password, cliente.password)))
        return res.status(404).send({ error: "Senha inválida!" });

      cliente.password = undefined;

      const token = jwt.sign(
        { id: cliente.id, email: cliente.email },
        process.env.SECRET_KEY,
        {
          expiresIn: 86400,
        }
      );

      res.send({
        cliente,
        token,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ClienteController();
