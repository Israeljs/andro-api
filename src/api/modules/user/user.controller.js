const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
//const authConfig = require("../../../config/auth.json");
require('dotenv').config()

class UserController {
  // generateToken(params = {}) {
  //   return jwt.sign({ params }, authConfig.secret, {
  //     expiresIn: 86400,
  //   });
  // }

  async create(req, res) {
    //const { email } = req.body;
    try {
      const { name, email, telefone, password, tasks } = req.body;
      if (!name || !email || !telefone || !password || !tasks)
        throw new Error("parametros invalidos!!");
      if (await User.findOne({ email }))
        return res.status(400).send({ error: "O usuário já existe!" });

      const user = await User.create(req.body);

      user.password = undefined;

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY,
        {
          expiresIn: 86400,
        }
      );

      // const token = generateToken({ id: user.id });

      return res.send({
        user,
        token,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const user = await User.find({});
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async showOne(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user)
        return res.status(400).send("user não encontrado no banco de dados!");
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      // const { name, email, telefone, tasks } = req.body
      // if (!name || !email || !telefone || !tasks)
      var user = await User.findById(id);
      const { tasks } = req.body;
      if (!user)
        return res
          .status(400)
          .send("Usuário não encontrado no banco de dados!");
      if (!tasks) throw new Error("parametros invalidos!!");
      // user = await User.findByIdAndUpdate(id, req.body, { new: true });
      await user.update(id, req.body, { new: true });
      return res.json(user);
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

      const user = await User.findOne({ email }).select("+password");

      if (!user)
        return res.status(404).send({ error: "Usuário não encontrado!" });

      if (!(await bcrypt.compare(password, user.password)))
        return res.status(404).send({ error: "Senha inválida!" });

      user.password = undefined;

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY,
        {
          expiresIn: 86400,
        }
      );

      res.send({
        user,
        token,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  // async login(req, res, next) {
  //   try {
  //     const { email, password } = req.body;
  //     const token = await Usuario.findByEmail(email, password);
  //     return res.json({ token });
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
}

module.exports = new UserController();
