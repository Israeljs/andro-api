const { Router } = require("express");
const userRoutes = require("./user");
const projectRoutes = require("./project");

const routes = Router();

routes.use(userRoutes);
routes.use(projectRoutes);

module.exports = routes;
