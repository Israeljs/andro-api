const mongoose = require("mongoose");
const Produto = mongoose.model("Produto");

class ProdutoController {
  async create(req, res) {
    //const { email } = req.body;
    try {
      const produto = await Produto.create(req.body);

      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async read(req, res) {
    try {
      const produto = await Produto.find({})
        // .populate("produto")
        // .exec(function (err, produto) {
        //   if (err) console.log(err);
        //   else return res.json(produto);
        // });
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new ProdutoController();
