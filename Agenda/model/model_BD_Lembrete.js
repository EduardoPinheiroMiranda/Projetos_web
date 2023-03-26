const mongoose = require("mongoose")
const createLembrete = new mongoose({
    nome:{
        type: String,
        require: true
    },
    data:{
        type: Date,
        require: true
    }
})

module.exports = mongoose.model("DBroot", createLembrete)