const { Router } = require("express");
const cardapio = require("./cardapio.controller");
//const auth = require('../../middlewares/auth.middleware')

const cardapioRoutes = Router();

cardapioRoutes.post("/cardapio", cardapio.create);
cardapioRoutes.get("/cardapio", cardapio.read);
// cardapioRoutes.post("/login", cardapio.login);

// cardapioRoutes.get("/cardapio/:id", auth, cardapio.showOne);
// cardapioRoutes.put("/cardapio/:id", cardapio.update);
// cardapioRoutes.delete("/cardapio/:id", auth, cardapio.delete);

module.exports = cardapioRoutes;
