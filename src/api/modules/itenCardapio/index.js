const { Router } = require("express");
const itenCardapio = require("./itenCardapio.controller");
//const auth = require('../../middlewares/auth.middleware')

const itenCardapioRoutes = Router();

itenCardapioRoutes.post("/itenCardapio", itenCardapio.create);
itenCardapioRoutes.get("/itenCardapio", itenCardapio.read);
// itenCardapioRoutes.post("/login", itenCardapio.login);

// itenCardapioRoutes.get("/itenCardapio/:id", auth, itenCardapio.showOne);
// itenCardapioRoutes.put("/itenCardapio/:id", itenCardapio.update);
// itenCardapioRoutes.delete("/itenCardapio/:id", auth, itenCardapio.delete);

module.exports = itenCardapioRoutes;
