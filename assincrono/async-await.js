console.log("Criar um pedido online em uma loja");

// PEDIDO 
let confirmarPedido = async () => new Promise((resolve, reject) => {
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
let processarPagamento = async (pedido) => new Promise((resolve, reject) => {
    console.log("Aguardando confirmação do pagamento por cartão");
    setTimeout(() => {
        let pagamentoAprovado = true;
        if(pagamentoAprovado) {
            console.log("Pagamento aprovado com sucesso!");
            resolve({ confirmation: true, payment: "APPROVED"});
        } else {
            reject("Ocorreu um erro ao realizar o pagamento. Pedido cancelado!")
        }
    }, 5000);
})

// EXECUÇÃO
try {
    const pedidoConfirmado = await confirmarPedido();
    const pagamentoAprovado = await processarPagamento(pedidoConfirmado);
    console.log(pagamentoAprovado)
} catch{(erro) => {
    console.error("Opah! Ocorreu um erro:", erro)
}}
