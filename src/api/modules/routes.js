const { Router } = require("express");
const userRoutes = require("./user");
//const projectRoutes = require("./project");
const produtoRoutes = require("./produto");
const itenCardapioRoutes = require("./itenCardapio");

const routes = Router();

routes.use(userRoutes);
//routes.use(projectRoutes);
routes.use(produtoRoutes);
routes.use(itenCardapioRoutes);

module.exports = routes;
