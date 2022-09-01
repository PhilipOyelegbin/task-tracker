const express = require("express");
const { register, login, logout, logoutAll } = require("../controller/auth.controller");
const { userRequired, userRequiredLogout } = require("../middleware/auth.middleware");
const { notFound, errorHandler } = require("../middleware/error.middleware");
const authRoute = express.Router();

authRoute.post("/register",register);
authRoute.post("/login",login);
authRoute.post("/logout",userRequired, logout);
authRoute.post("/logout/all",userRequiredLogout, logoutAll);

authRoute.all("*", notFound);
authRoute.use(errorHandler);

module.exports = authRoute;



