const express = require('express')
const path = require("path")
const routes = require("../Agenda/routes/routes")



const port = 5500
const app = express()

app.set("views engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(routes)


app.listen(port, () => {
    console.log(`servidor ligado: http://localhost:${port}/`)
})