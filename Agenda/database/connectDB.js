const mongoose = require("mongoose")
const connectDB_Lembrete = () => {
    mongoose.connect(
        "mongodb+srv://Eduardo:eduardo123@agenda.sgvjkov.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log(`Banco conectado`)
    }).catch((err) => {
        console.log(`erro:`+err)
    })
}

module.exports = connectDB_Lembrete