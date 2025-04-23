
// 1.Escreva um laço for que imprime os números de 1 a 10 no console.
console.log("Exercicio 1")
for (let i = 1; i <=10; i++) {
    console.log(i);
}

// 2.Crie um laço while que imprime os números de 1 a 5 no console.
console.log("Exercicio 2")
let j = 0;
while(j < 5) {
    j++
    console.log(j)
}

// 3.Escreva um laço do...while que imprime os números de 1 a 3 no console.
console.log("Execrcício 3")
let k = 0;
do{
    k++;
    console.log(k)
}while(k < 3)
    
// 4.Escreva um laço for que imprime os números pares de 2 a 20 no console.
console.log("Exercicio 4")
for(let l = 0; l <=20;l++) {
    if(l % 2 === 0) {
        console.log(l);
    }
}
// 5.Crie um laço while que imprime os números de 10 a 1 no console (em ordem decrescente).
console.log("Exercicio 5");
let m = 10;
while (m >= 1) {
    console.log(m); 
    m--;
}

// 6.Escreva um laço for que imprime a tabuada do 5 (5, 10, 15, ..., 50).
console.log("Exercício 6");
for(let n = 1; n <= 10; n++) {
    console.log(n * 5);
}

// 7.Crie um laço for que calcula e imprime a soma dos números de 1 a 100.
console.log("Exercício 7");
let soma = 0;
for (let o = 1; o <= 100; o++) {
    soma += o;
}
console.log(soma);

// 8.Escreva um laço while que imprime apenas os números ímpares de 1 a 20.
let p = 1;
while (p <= 20) {
    console.log(p); 
    p += 2;
}

