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

// ArrowFunction
function nomeDaFuncao(param) {
    return param
}

const nomeDaFuncao2 = (param) => {
    return param
}

const getData = (data) => ({manipulado: data.teste});
console.log(getData({teste: "teste"}));

// ARRAYS / LISTAS
const armario = [
    { item: "camisetas"},
    { item: "pijamas"},
    { item: "calcas"},
    { item: "meias"},
];

/*
UNSHIFT - Adiciona o item ao inicio da lista
PUSH - Adiciona novo item ao fim

SHIFT - remove o item do inicio da lista
POP - Remove o ultimo item
 */

console.log(armario);
armario.push({ item: "cuecas"});
console.log(armario);
console.log("Tamanho:", armario.length, "itens");
armario.pop();

// FOREACH
armario.forEach((item, index, array) => {
    console.log(item);
});
armario.unshift({ item: "chapeu"});
console.log(armario);


const lista = [1, 2, 3, 4, 5];
// MAP -> imutabilidade. o map nao altera a lista original, ele cria uma nova
const novaLista = lista.map((item, index, array) => {
    return { number: item }
});
console.log(novaLista);

const novoArmario = armario.map((itemArmario) => {
    return { name: itemArmario, isDurty: false }
});
console.log(novoArmario);

// FILTER - imutabilidade. ele nao modifica o array anterior
const armario2 = [
    { name: "camiseta", cor: "vermelha"},
    { name: "camiseta", cor: "vermelha"},
    { name: "camiseta", cor: "azul"},
    { name: "camiseta", cor: "amarela"},
    { name: "camiseta", cor: "vermelha"},
]

const novoArmario2 = armario2.filter((item, index, array) => {
    return item.cor === "vermelha";
})
console.log(novoArmario2);

// REDUCE - Devolve um unico valor
const armario3 = [
    { tipo: "camisetas", qtd: 25 },
    { tipo: "calças", qtd: 25 },
    { tipo: "bermudas", qtd: 25 },
    { tipo: "camisetas", qtd: 25 },
    { tipo: "camisetas", qtd: 25 },
]
armario3.reduce((valorPrevio, proximoValor) => {
    console.log(valorPrevio);
    return valorPrevio + proximoValor.qtd;
}, 0);


// SOME - verifica se algum satisfaz a condicao
const isIqualOrGReaterThan8 = lista.some((item) => {
    return item >= 8;
});
console.log("É maior ou igual a 8?", isIqualOrGReaterThan8);

// EVERY - Verifica se todos satisfazem a condicao
const isNumber = lista.every(item => {
    return typeof item === "number";
});
console.log("é um numero? ", isNumber);

// SORT - organizar
const listaa = [ 11, 12, 13, 14, 4, 5, 6, 7, 8, 9, 10,  15, 16, 1, 2, 3];
const listaOrdenada = listaa.sort();
console.log(listaOrdenada);
console.log(listaa.sort((firstValue, secondValue) => secondValue - firstValue));
console.log(listaa.sort().reverse())


const listab = ["g", "b", "c", "v", "t", "e", "d", "a"]
const listaOrdenadaB = listab.sort()
console.log(listaOrdenadaB);

const listObj = [
    { id: 1, name: "Jorge"},
    { id: 3, name: "Lary"},
    { id: 9, name: "Junior"},
    { id: 2, name: "Fabio"}
]
const listaObjOrdenada = listObj.sort((firstValue, secondValue) => secondValue.id - firstValue.id);
console.log(listaObjOrdenada);


const armario5 = [
    { type: 'camisetas', items: [
        { name: 'camisa 1' }, 
        { name: 'camisa 2' }, 
        { name: 'camisa 3' }] 
    },
    { type: 'calças', items: [
        { name: 'calça 1' }, 
        { name: 'calça 2' }] 
    },
    { type: 'meias', items: [
        { name: 'meia 1' }, 
        { name: 'meia 2' }, 
        { name: 'meia 3' }, 
        { name: 'meia 4' }] 
    }
]
const armarioSorteado = armario5.sort((gavetaUm, gavetaDois) => { 
    return gavetaDois.items.length - gavetaUm.items.length 
});
