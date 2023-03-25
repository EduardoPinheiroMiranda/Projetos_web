const routes = require("express").Router()
const rotas = require("../controller/lembretes")

routes.get("/home", rotas.display)

module.exports = routes