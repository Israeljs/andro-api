const mongoose = require("mongoose");
const Cardapio = mongoose.model("Cardapio");

class CardapioController {
  async create(req, res) {
    //const { email } = req.body;
    try {
      const cardapio = await Cardapio.create(req.body);

      return res.json(cardapio);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      await Cardapio.find({})
        .populate("colaborador")
        .populate({
          path: "itemCardapio",
          populate: { path: "produto" },
        })
        .exec(function (err, cardapio) {
          if (err) console.log(err);
          else return res.json(cardapio);
        });
      //   const { produto } = req.body

      //   const cardapio = await Cardapio.findById(function (err, item) {
      //     item.Produto.id(produto._id);
      // });

      //   ItemCardapio.findOne({name: 'Macarronada'}, function (err, item) {
      //     item.produtos.id(produto._id);
      // });

      // return res.json(cardapio);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new CardapioController();
