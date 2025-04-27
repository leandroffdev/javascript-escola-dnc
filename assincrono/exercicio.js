console.log("Criar um pedido online em uma loja");

// PEDIDO 
let promessaDePedidoConfirmado = new Promise((resolve, reject) => {
    console.log("Iniciando o pedido online");
    setTimeout(() => {
        let sucesso = true;
        if(sucesso) {
            console.log("Pedido confirmado com sucesso!");
            resolve({ confirmation: true, payment: "WAITING"});
        } else {
            reject("O pedido nao pode ser confirmado")
        }
    }, 5000)
})

// PROMESSA DE PAGAMENTO
let promessaDePagamento = (pedido) => new Promise((resolve, reject) => {
    console.log("Aguardando confirmação do pagamento por cartão");
    setTimeout(() => {
        let pagamentoAprovado = false;
        if(pagamentoAprovado) {
            console.log("Pagamento aprovado com sucesso!");
            resolve({ confirmation: true, payment: "APPROVED"});
        } else {
            reject("Ocorreu um erro ao realizar o pagamento. Pedido cancelado!")
        }
    }, 5000);
})

// EXECUÇÃO
let PromessaResolvida = promessaDePedidoConfirmado.then((pedido) => {
    console.log({pedido})
    return promessaDePagamento(pedido);
}).then((pagamento) => {
    console.log({pagamento});
    return "Pagamento aprovado! Aguardando envio do pedido."
}).catch((error) => {
    console.error(error)
}).finally(() => {
    console.log("Fim do processo")
});
console.log(PromessaResolvida);

