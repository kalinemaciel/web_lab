
let res = document.querySelector('section#result')
let computador = 0
let jogador = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Digite um número'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você digitou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você digitou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Era o número ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}