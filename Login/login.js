const moverInstrucao = document.querySelectorAll(".card_body")
const instrucao = document.querySelectorAll(".instruction")

const criarConta = document.querySelector("#criarConta")
const login = document.querySelector("#login")

criarConta.onclick = () => {
    moverInstrucao[1].classList.add("mover")
    instrucao[1].classList.add("ocultarInstrucao")
    instrucao[0].classList.add("mostrarInformacao")
}

login.onclick = () => {
    moverInstrucao[1].classList.remove("mover")
    instrucao[1].classList.remove("ocultarInstrucao")

}

