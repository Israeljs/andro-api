const { Router } = require("express");

const userRoutes = require("./user");
const produtoRoutes = require("./produto");
const itenCardapioRoutes = require("./itenCardapio");
const clienteRoutes = require("./cliente");
const pedidoRoutes = require("./pedido");
const colaboradorRoutes = require("./colaborador");
const cardapioRoutes = require("./cardapio");

const routes = Router();

routes.use(userRoutes);
routes.use(produtoRoutes);
routes.use(itenCardapioRoutes);
routes.use(clienteRoutes);
routes.use(pedidoRoutes);
routes.use(colaboradorRoutes);
routes.use(cardapioRoutes);

module.exports = routes;
