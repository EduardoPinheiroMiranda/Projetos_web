const routes = require("express").Router()
const routesController = require("../controller/controler_lembrete")

routes.get("/", routesController.displayLembrete)
routes.post("/criarLembrete", routesController.criarLembrete)


module.exports = routes