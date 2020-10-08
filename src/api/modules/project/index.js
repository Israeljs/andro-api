const { Router } = require("express");
const project = require("./project.controller");
const auth = require('../../middlewares/auth.middleware')

const projectRoutes = Router();

projectRoutes.get("/project", auth, project.ok)

module.exports = projectRoutes;