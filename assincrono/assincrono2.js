console.log("Fazer autenticação no instagram e buscar fotos recentes dos meus seguidores");
// Promise de autenticação
let autenticacaoInstagram = new Promise((resolve, reject) => {
    console.log("início de autenticacao do usuario");
    setTimeout(() => {
        let sucesso = true;
        if(sucesso) resolve({
            username: "fulanodetal", 
            following: [
                {user: 1},
                {user: 2},
                {user: 3}
            ]
        })
            else reject("Ocorreu um erro na autenticação");
    }, 3000);
});

// Promise busca fotos de quem sigo
let buscaDasFotosSeguindo = (quemEuSigo) => new Promise((resolve, reject) => {
    setTimeout(() => {
        let sucesso = true;
        if(sucesso) resolve([
            {foto: "src1", user: 1}, 
            {foto: "src2", user: 2}, 
            {foto: "src3", user: 1},
        ])
            else reject("Ocorreu um erro ao buscar as fotos recentes de quem eu sigo");
    }, 3000);
});

// Requisição
autenticacaoInstagram
    .then((response) => {
        // console.log(response);
        return buscaDasFotosSeguindo(response)
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
