const mongoose = require("mongoose");
const Pedido = mongoose.model("Pedido");

class PedidoController {
  async create(req, res) {
    try {
      const pedido = await Pedido.create(req.body);

      return res.json(pedido);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  async read(req, res) {
    try {
      const pedido = await Pedido.find({});
      return res.json(pedido);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new PedidoController();
