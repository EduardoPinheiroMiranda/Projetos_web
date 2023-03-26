const routes = require("express").Router()
const rotas = require("../controller/Actions")

routes.get("/home", rotas.display)
routes.post("/insertLembrete", rotas.create)

module.exports = routes