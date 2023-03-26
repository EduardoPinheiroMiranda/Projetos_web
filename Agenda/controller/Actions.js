const DBroot = require("../model/model_BD_Lembrete")

const formatData = async () => {

}

const display = async (req,res) => {

    const getLembrete = await DBroot.find()
    return res.render("lembretes.ejs", {
        getLembrete,
    })
}

const create = async (req,res) => {
    const info = req.body
    const dateLembrete = req.body.data.split("-").reverse()
    const dateNow = new Date().toLocaleDateString().split("/")

    if(dateLembrete[2] < dateNow[2] || dateLembrete[1]<dateNow[1] || info.nome.length == 0){
        res.send("erro")
    }else if(dateLembrete[1]==dateNow[1] && dateLembrete[0]<dateNow[0]){
        res.send("erro tbm")
    }else if(dateLembrete[1]>dateNow[1] && dateLembrete[0]<dateNow[0]){
        await DBroot.create(req.body)
        return res.redirect("/home")
    }else{
        await DBroot.create(req.body)
        return res.redirect("/home")
    }
}

module.exports = {
    display,
    create
}
