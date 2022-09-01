const express = require("express");
const { register, login } = require("../controller/auth.controller");
const { notFound, errorHandler } = require("../middleware/error.middleware");
const authRoute = express.Router();

authRoute.post("/register",register);
authRoute.post("/login",login);

authRoute.all("*", notFound);
authRoute.use(errorHandler);

module.exports = authRoute;



