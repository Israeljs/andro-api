const { Router } = require("express");
const produto = require("./produto.controller");
//const auth = require('../../middlewares/auth.middleware')

const produtoRoutes = Router();

produtoRoutes.post("/produto", produto.create);
produtoRoutes.get("/produto", produto.read);
// produtoRoutes.post("/login", produto.login);

// produtoRoutes.get("/produto/:id", auth, produto.showOne);
// produtoRoutes.put("/produto/:id", produto.update);
// produtoRoutes.delete("/produto/:id", auth, produto.delete);

module.exports = produtoRoutes;
