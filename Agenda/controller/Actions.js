const display = (req,res) => {
    return res.render("lembretes.ejs")
}

const create = (req,res) => {
    res.send("oi")
}

module.exports = {
    display,
    create
}
