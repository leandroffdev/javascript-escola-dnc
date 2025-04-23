// FUNÇÕES -> dado de referencia, objeto

// Funções com parametros
function somaValores(v1, v2) {
    return v1 + v2;
}
console.log(somaValores(5, 7))

// Funções com lista como parametro
function somaArrays(listaValores) {
    let total = 0;
    for(let valor of listaValores) {
        total += valor;
    }
    return total;
}
console.log(somaArrays([1, 2, 3, 4, 5]));

// Função verifica Par ou impar
function verificaPar(valor) {
    return valor % 2 == 0 ? "Par" : "Ímpar";
}
console.log(verificaPar(30));

// Exercicio funcoes - Contador regressivo
function iniciarContador(tempo) {}


let getTimeInMilliseconds = function(tempoInSec) {
    return tempoInSec * 1000;
}
setInterval(function () {
    console.log("Faz algo");
}, getTimeInMilliseconds(5));

function iniciarContador(tempo) {
    let segundosRestantes = tempo;
    let atualizadorContador = setInterval(() => {
        console.log(segundosRestantes)
        if(segundosRestantes == 0) {
            clearInterval(atualizadorContador)
        } else {
            segundosRestantes--;
        }
    }, 1000);
}
iniciarContador(5);

