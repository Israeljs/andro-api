const { Router } = require("express");
const cliente = require("./cliente.controller");
const auth = require('../../middlewares/auth.middleware')

const clienteRoutes = Router();

clienteRoutes.post("/cliente", cliente.create);
clienteRoutes.get("/cliente", auth, cliente.read);
// clienteRoutes.post("/login", cliente.login);

// clienteRoutes.get("/cliente/:id", auth, cliente.showOne);
clienteRoutes.put("/cliente/:id", cliente.update);
// clienteRoutes.delete("/cliente/:id", auth, cliente.delete);

module.exports = clienteRoutes;
