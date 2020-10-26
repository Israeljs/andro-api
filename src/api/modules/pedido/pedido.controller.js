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
      await Pedido.find({})
        .populate("cliente")
        .populate({
          path: "compoe",
          populate: { path: "itemCardapio", populate: "produto" },
        })
        .exec(function (err, pedido) {
          if (err) console.log(err);
          //this will log all of the pedido with each of their posts
          else return res.json(pedido);
        });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new PedidoController();
