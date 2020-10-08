const { Router } = require("express");
const user = require("./user.controller");
const auth = require('../../middlewares/auth.middleware')

const userRoutes = Router();

userRoutes.post("/register", user.create);
userRoutes.get("/user", auth, user.read);
userRoutes.post("/login", user.login);

userRoutes.get("/user/:id", auth, user.showOne);
userRoutes.put("/user/:id", user.update);
userRoutes.delete("/user/:id", auth, user.delete);

module.exports = userRoutes;
