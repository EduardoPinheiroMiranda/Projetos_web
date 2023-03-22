const mongoose = require("mongoose")
const lembreteSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    data:{
        type: Date,
        require: true
    }
})

module.exports = mongoose.model("insertLembrete", lembreteSchema)