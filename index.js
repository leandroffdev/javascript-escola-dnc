// Tipos de dados (Primitivos / Referencia)
console.log("ola mundo");

function clickMe() {
    console.log("clicou");
}

function calculateIMC(person) {
    let height = person.height;
    let weight = person.weight;
    const conversionFactor = 0.01;
    height *= conversionFactor;

    let imc = weight / (height * height);
    const result = `O resultado do IMC é de ${imc}"`
    const isHealthy = true;
    const isNull = null;     //inicializado sem valor

    console.log(typeof teste);      // teste não foi definido

    return {
        name: person.name,
        imc,
        result,
        isHealthy
    };
}

const person = { 
    name: "Leandro", 
    height: 180, 
    weight: 75 
}

console.log(calculateIMC(person));

// Estrutura de controle
// Tempo
let estaEnsolarado = true;
if(estaEnsolarado) {
    console.log("Vista roupas leves");
} else {
    console.log("Vista um casaco e pegue o guarda chuvas");
}
// Idade
let idade = 18;
if(idade >= 18) {
    console.log("Pode comprar bebida alcoolica");
} else if(idade > 16 && idade < 18) {
    console.log("Pode comprar bebida com supervisão");
} else {
    console.log("NÃO pode comprar bebida alcoolica");
}

// Idade 2 - Operador ternário
idade >= 18 ? console.log("pode comprar"): console.log("NAO pode");

let numero = 10
let resultado = numero > 0 ? "Positivo" : (numero < 0 ? "Negativo" : "Zero");
console.log(resultado);

//  IMC classificador
const imc = calculateIMC(person).imc
if( imc < 18.5) {
    console.log("Classificação: Abaixo do peso / Underweight");
} else if(imc > 18.5 && imc < 25) {
    console.log("Classificação: Peso normal / Regular");
} else if (imc >= 25 && imc < 30) {
    console.log("Classificação: Sobrepeso / Overweight");
} else {
    console.log("Classificação: Obesidade / Obesidade severa / Severe obesity");
}

// Estrutura de controle - Switch case
const bebidaEscolhida = "coca-cola";
switch(bebidaEscolhida) {
    case "coca-cola":
        console.log("Você escolheu: ", bebidaEscolhida);
        break;
    case "fanta":
        console.log("Você escolheu: ", bebidaEscolhida);
        break;
    case "pepsi":
        console.log("Você escolheu: ", bebidaEscolhida);
        break;
    case "sprite":
        console.log("Você escolheu: ", bebidaEscolhida);
        break;
    default:
        console.log("Você escolheu outra bebida qualquer");
        break;
}

// Estrutura de controle - Switch case para dias da semana
const diaSemana = "segunda";
switch (diaSemana) {
    case "segunda":
      console.log('Hoje é dia de Cappuccino');
      break;
    case "terça":
      console.log('Hoje é dia de Latte');
      break;
    case "quarta":
      console.log('Hoje é dia de Mocha');
      break;
    case "quinta":
      console.log("Hoje é dia de Espresso");
      break;
    case "sexta":
        console.log("Hoje é dia de Macchiato");
        break;
    case "sábado":
    case "domingo":
        console.log("Hoje é dia de Café Preto");
        break;
    default:
        console.log("Hoje é dia de descanso");
        break;
}

// Estrutura de controle - Switch case para frutas
const fruta = "maçã";
switch (fruta) {
    case 'maçã':
    case 'banana':
    case 'laranja':
      console.log("essa fruta é comum");
      break;
    case 'kiwi':
    case 'framboesa':
      console.log("Essa fruta é incomum");
      break;
    default:
      console.log('Fruta desconhecida');
  }
  
  // Object Mapping *
  let dia = 0;

  const DAYS_OF_WEEK_DICT = { // Dicionario (chave/valor)
    1: "Domingo",
    2: "Segunda",
    3: "Terça",
    4: "Quarta",
    5: "Quinta",
    6: "Sexta",
    7: "Sábado",
  }

  console.log(DAYS_OF_WEEK_DICT[dia] || "Dia desconhecido");

// Laços e iterações

// FOR
for(let i = 1; i < 7; i++){
    console.log(DAYS_OF_WEEK_DICT[i]);
}

for(let i = 0; i < 7; i++) {
    if(i % 2 == 0) {
        console.log("Número par: " + i);
    }
    else {
        console.log("Número ímpar: " + i);
    }
}

// While
let num = 1;
while(num <= 5) {
    console.log("num: ", num);
    num++;
}
/*
let isCorrect = false;
let selectedNumber = Math.floor(Math.random() * 10) + 1;
console.log(selectedNumber);
while(!isCorrect) {
    //let guess = prompt("Qual valor o computador escolheu entre 1 e 10?");
    if(Number(guess) === selectedNumber) isCorrect = true;
}
*/
// DO-WHILE
let numero1 = 0
do {
    numero1++;
    console.log("Tentativa: ", numero1);
}while(numero1 < 5);

// FOR-IN -> chave-valor (objetos)
let pessoa = {
    name: "Leandro", 
    age: 37, 
    height: 180,
    documento: 12345678900
};
for (let chave in pessoa) {
    console.log(`Chave: ${chave}, Valor: ${pessoa[chave]}`);
}

let tasks = {
    "Caminhar com o cachorro": true,
    "comprar ingredientes para o café da manhã": true,
    "Preparar almoço": false,
    "Ir para academia": false,
}

for (let key in tasks) {
    console.log(`Tarefa: ${key} está ${tasks[key] ? "concluída" : "Incompleta"}`);
}

// FOR-OF -> item por item (arrays, lista, strings)
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador"];
for(let cidade of cidades) {
    console.log(`${cidade}\n`);
}

let nome = "Leandro"
for(let letra of nome) {
    console.log(letra);
}

let produtos = [
    { name: "Café", price: 5.00 }, 
    { name: "Pão", price: 2.50 }, 
    { name: "Leite", price: 3.00 }
]
let total = 0
for(let item of produtos) {
    console.log(`Produto: ${item.name}, Preço: R$ ${item.price.toFixed(2)}`);
    total += item.price;
}
console.log(`Total acumulado: R$ ${total.toFixed(2)}`);