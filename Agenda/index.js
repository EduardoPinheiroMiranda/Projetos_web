const express = require('express')
const path = require("path")

const routes = require("./routes/routes")
const DBlembrete = require("./database/db_lembrete")



const port = 5500
const app = express()

DBlembrete()

app.set("views engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())
app.use(routes)



app.listen(port, () => {
    console.log(`servidor ligado: http://localhost:${port}`)
})