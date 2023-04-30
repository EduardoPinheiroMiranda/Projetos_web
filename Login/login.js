const moverInstrucao = document.querySelectorAll(".card_body")
const instrucao = document.querySelectorAll(".instruction")

const criarConta = document.querySelector("#criarConta")
const login = document.querySelector("#login")


login.onclick = () => {
    moverInstrucao[1].classList.add("mover")
    instrucao[0].classList.add("ocultarInstrucao")
    instrucao[1].classList.remove("display")
    
    
}

criarConta.onclick = () => {
    moverInstrucao[1].classList.remove("mover")
    instrucao[0].classList.remove("ocultarInstrucao")
    instrucao[1].classList.add("display")

}
