const mongoose = require("mongoose");
const ItenCardapio = mongoose.model("ItenCardapio");

class ItenCardapioController {
  async create(req, res) {
    //const { email } = req.body;
    try {
      const itenCardapio = await ItenCardapio.create(req.body);

      return res.json(itenCardapio);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try { 
      
     const itenCardapio = await ItenCardapio.find({})
    //   const { produto } = req.body

    //   const itenCardapio = await ItenCardapio.findById(function (err, item) {
    //     item.Produto.id(produto._id);
    // });

  //   ItemCardapio.findOne({name: 'Macarronada'}, function (err, item) {
  //     item.produtos.id(produto._id);
  // });

      return res.json(itenCardapio);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new ItenCardapioController();
