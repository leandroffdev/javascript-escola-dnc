/**
 * 
 * Exercício

Passo a passo
[OK] Criar a Lista de Tarefas:
- Crie um array de objetos representando as tarefas.
- Cada objeto deve ter as seguintes propriedades: descricao, prioridade (pode ser 1, 2 ou 3, sendo a 3 a mais baixa), e status (pode ser "pendente" ou "concluída")


Verificar se Todas as Tarefas Estão Concluídas:
- Utilize o método every para verificar se todas as tarefas têm o status "concluída".
 */
const listaTarefas = [];
function tarefa(descricao, prioridade, status) {        
    return {
        descricao: descricao,       //descricao
        prioridade: prioridade,     //1(mais alta), 2, 3(mais baixa)
        status: status              //pendente ou concluída
    }
}
// [OK] Adicionar Novas Tarefas:
// - Utilize o método push para adicionar novas tarefas à lista.
listaTarefas.push(tarefa("correr", 3, "pendente"));
listaTarefas.push(tarefa("dormir", 1, "pendente"));
listaTarefas.push(tarefa("caminhar", 2, "concluída"));
listaTarefas.push(tarefa("falar", 1, "pendente"));
console.log(listaTarefas);

// [OK] Remover Tarefas Concluídas:
// - Utilize o método filter para criar uma nova lista apenas com as tarefas pendentes.
/*
const tarefasPendentes = listaTarefas.filter((item) => {            // Forma 1
    return item.status == "pendente";
});
*/
const tarefasPendentes = listaTarefas.filter(({status}) => {        // Forma 2
    return status === "pendente";
})
console.log("Tarefas pendentes:", tarefasPendentes);

// [OK] Marcar Tarefas como Concluídas:
// - Utilize o método map para alterar o status de uma tarefa específica para "concluída".
const alteraStatus = listaTarefas.map((item) => {
    if(item.status == "pendente") item.status = "concluída";
    return item;
});
console.log(alteraStatus);

// [OK] Ordenar Tarefas por Prioridade:
// - Utilize o método sort para ordenar as tarefas pela propriedade prioridade.
const ordenaPrioridade = listaTarefas.sort((anterior, posterior)=> {
    // if(anterior.prioridade < posterior.prioridade) return -1     // Forma 1
    return anterior.prioridade - posterior.prioridade               // Forma 2
});
console.log("Lista ordenada:", ordenaPrioridade);

// [OK] Contar Tarefas Pendentes:
listaTarefas.push(tarefa("jogar", 3, "pendente"));
listaTarefas.push(tarefa("estudar", 3, "pendente"));
// - Utilize o método reduce para contar quantas tarefas estão pendentes.
const contaPendentes = listaTarefas.reduce((contador, proxItem) => {
    if (proxItem.status === "pendente") contador++;
    return contador;
}, 0);
console.log("Contador:", contaPendentes);

// [OK] Encontrar Tarefa Específica:
// - Utilize o método find para localizar uma tarefa específica pela descrição.
const oQue = "dormir";
const task = listaTarefas.find((item) => {  // Retorna a primeira ocorrencia
    return item.descricao === oQue;
});
console.log(task);

// Verificar se todas as tarefas estao concluídas
const isEveryTasksDone = listaTarefas.every(task => task.status === "concluída")
console.log("Todas as tarefas estão concluídas:", isEveryTasksDone)

// Verificar se algumas das tarefas estao concluídas
const isSomeTasksDone = listaTarefas.some(task => task.status === "concluída")
console.log("Algumas das tarefas estão concluídas:", isSomeTasksDone);