const Lembrete = require("../modules/infoLembrete")


const print = async (req,res) => {
    const lembretes = await Lembrete.find()
    console.log(`${lembretes}`)
}


const displayLembrete = async (req, res) => {

    const getLembrete = await Lembrete.find()
    return res.render("lembrete.ejs",{getLembrete})

}

const criarLembrete = async (req,res) => {
    const lembrete = req.body
    const dateNow = new Date().toLocaleDateString().split('/').reverse()
    const dateLembrete = req.body.data.split('-')
   
    
    if(req.body.nome.length == 0 || dateLembrete[0]<dateNow[0] || dateLembrete[1]<dateNow[1]){
        res.send("data invalida + nome vazio")
    }else if(dateLembrete[1]==dateNow[1] && dateLembrete[2]<dateNow[2] ){
        res.send("data invalida")
    }else{
        await Lembrete.create(lembrete)
        res.redirect("/")
    }
}


module.exports = {
    displayLembrete,
    criarLembrete,
    print
}