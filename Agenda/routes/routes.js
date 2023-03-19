const routes = require("express").Router()
const routesController = require("../controller/controler_lembrete")

routes.get("/", routesController.displayLembrete)



module.exports = routes