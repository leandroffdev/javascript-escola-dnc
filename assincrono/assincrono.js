console.log("primeiro");
console.log("segundo");
console.log("terceiro");
/**
 * setTimeout(() => {
    console.log("quarto");
    console.log("quinto");
}, [10000]);
 */

/*
let count = 0;
setInterval(() => {
    console.log("ola", count)
    count++
}, [1000]);
*/

// Promessa
console.log("Preciso comprar um caderno!")
let promessaDeCompra = new Promise((resolve, reject) => {
    console.log("Estou indo comprar...");
    setTimeout(() => {
        let sucesso = false;
        if(sucesso) {
            resolve("Aqui está o caderno!")
        } else {
            reject("A loja estava fechada!")
        }
    }, [1000])
});

// Resposta da promessa
promessaDeCompra.then((e) => {
    console.log(e);
}).catch((err) => {
    console.error(err);
}).finally(() => {
    console.log("Fim da requisição")
})

// Requisicao ao servidor
console.log("Buscar dados em um servidor");
let promessaDeBusca = new Promise((resolve, reject) => {
    console.log("Iniciando busca de dados no servidor");
    setTimeout(() => {
        let sucesso = true;
        if(sucesso) resolve({ name: "Fabio", age: 28 })
            else reject("Opa, aconteceu um erro no servidor! Dados não encontrados")
    }, 5000)
});

promessaDeBusca.then(console.log)
.catch((err) => console.log)
.finally(() => console.log("Fim da requisicao ao servidor"))


// 