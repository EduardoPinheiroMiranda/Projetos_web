const routes = require("express").Router()
const rotas = require("../controller/Actions")

routes.get("/home", rotas.display)

module.exports = routes