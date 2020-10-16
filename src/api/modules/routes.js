const { Router } = require("express");

const userRoutes = require("./user");
const produtoRoutes = require("./produto");
const itenCardapioRoutes = require("./itenCardapio");
const clienteRoutes = require("./cliente");
const pedidoRoutes = require("./pedido");
const colaboradorRouter = require("./colaborador");
const colaborador = require("../../models/colaborador");

const { route } = require("./colaborador");

const routes = Router();

routes.use(userRoutes);
routes.use(produtoRoutes);
routes.use(itenCardapioRoutes);
routes.use(clienteRoutes);
routes.use(pedidoRoutes);
routes.use(colaboradorRouter)

module.exports = routes;
