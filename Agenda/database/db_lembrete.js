const mongosse = require("mongoose")
const connect_DBlembrete = () => {
    mongosse.connect(
        "mongodb+srv://Eduardo:eduardo123@agenda.sgvjkov.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then( () => {
        console.log("Banco conectado.")
    }).catch( (erro) => {
        console.log("erro ao se conectar ao banco:" + erro)
    })
}

module.exports = connect_DBlembrete