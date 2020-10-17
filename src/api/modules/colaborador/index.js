const { Router } = require("express");
const colaborador = require("./colaborador.controller");
//const auth = require('../../middlewares/auth.middleware')

const colaboradorRoutes = Router();

colaboradorRoutes.post("/colaborador", colaborador.create);
colaboradorRoutes.get("/colaborador", colaborador.read);
// colaboradorRoutes.post("/login", colaborador.login);

// colaboradorRoutes.get("/colaborador/:id", auth, colaborador.showOne);
// colaboradorRoutes.put("/colaborador/:id", colaborador.update);
// colaboradorRoutes.delete("/colaborador/:id", auth, colaborador.delete);

module.exports = colaboradorRoutes;
