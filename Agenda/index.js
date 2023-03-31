
const express = require("express")
const path = require("path")

const routes = require("./routes/routes")
const dbLembrete = require("./database/connectDB")




const app = express()
const port = 5500

app.set("views engine", "ejs")
app.locals.formatData

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())
app.use(routes)
dbLembrete()



app.listen(port, () => {
    console.log(`http://localhost:${port}/home`)
})