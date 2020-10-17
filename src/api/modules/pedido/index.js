const { Router } = require("express");
const pedido = require("./pedido.controller");
//const auth = require('../../middlewares/auth.middleware')

const pedidoRoutes = Router();

pedidoRoutes.post("/pedido", pedido.create);
pedidoRoutes.get("/pedido", pedido.read);
// pedidoRoutes.post("/login", pedido.login);

// pedidoRoutes.get("/pedido/:id", auth, pedido.showOne);
// pedidoRoutes.put("/pedido/:id", pedido.update);
// pedidoRoutes.delete("/pedido/:id", auth, pedido.delete);

module.exports = pedidoRoutes;
