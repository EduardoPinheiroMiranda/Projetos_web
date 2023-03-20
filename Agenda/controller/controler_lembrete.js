const insert = require("../modules/infoLembrete")



const displayLembrete = (req, res) => {
    return res.render("lembrete.ejs")
}

const criarLembrete = (req,res) => {
    const dateNow = new Date().toLocaleDateString().split('/').reverse()
    const dateLembrete = req.body.data.split('-')
   
    
    if(dateLembrete[1]<dateNow[1] || dateLembrete[0]<dateNow[0]){
        return res.send("data informada invalida")
    }else if(dateLembrete[2]<dateNow[2] || dateLembrete[1]<dateNow[1]) {
        return res.send("data informada invalida")
    }else if(dateLembrete[1]>dateNow[1]){
        return res.send("data valida")
    }else{
        return res.send("data valida")
    }
    

//  dateLembrete[0]<dateNow[0] || dateLembrete[1]<dateNow[1] || dateLembrete[2]<dateNow[2]

    
    //res.send(` ${dateNow} ${ dateLembrete}`)

}

module.exports = {
    displayLembrete,
    criarLembrete
}