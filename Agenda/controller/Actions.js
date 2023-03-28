const DBroot = require("../model/model_BD_Lembrete")

const formatData = (Lembretes) => {
    
    const dateNow = new Date().toLocaleDateString().split("/")


    let lembretes = JSON.parse(JSON.stringify(Lembretes))
    lembretes.forEach((item) => {
        item.data = item.data.slice(0,10).split("-").reverse()
    })

    lembretes.forEach((item) => {
        if(item.data[0] < dateNow[0] && item.data[1] <= dateNow[1]){
            return res.redirect("")
        }
    })
    

    return lembretes

}

const display = async (req,res) => {

    const lembretes = await DBroot.find()
    const getLembrete = formatData(lembretes)
    const dateNow = new Date().toLocaleDateString().split("/")

    

    return res.render("lembretes.ejs", {
        getLembrete ,dateNow
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

const delet = async (req,res) => {

    await DBroot.deleteOne({_id:req.params.id})
    return res.redirect("/home")
    
}

module.exports = {
    display,
    create,
    delet
}
