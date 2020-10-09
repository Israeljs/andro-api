const { Router } = require("express");
const userRoutes = require("./user");
const projectRoutes = require("./project");
const produtoRoutes = require("./produto");

const routes = Router();

routes.use(userRoutes);
routes.use(projectRoutes);
routes.use(produtoRoutes);

module.exports = routes;
