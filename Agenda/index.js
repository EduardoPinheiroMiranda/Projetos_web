
const express = require("express")
const path = require("path")

const routes = require("./routes/routes")



const app = express()
const port = 5500

app.set("views engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())
app.use(routes)

app.listen(port, () => {
    console.log(`http://localhost:${port}/home`)
})