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

// Idade 2
idade >= 18 ? console.log("pode comprar"): console.log("NAO pode");

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
  