const mongoose = require("mongoose")
const connect_DBLembrete = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    data:{
        type: Date,
        require: true
    }
})
module.exports = mongoose.model("Lembrete", connect_DBLembrete)