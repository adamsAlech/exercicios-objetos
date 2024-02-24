/*Exercício 05

## Cadastro de aulas

1. Um novo curso foi criado e suas aulas precisam ser cadastradas. Abaixo temos o objeto 
`curso`, que possui uma propriedade chamada `aulas`. Sua tarefa é adicionar a lista de 
aulas abaixo na propriedade `aulas` do objeto `curso`.
*/
const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: []
};


const aulasNovas = [{
    Identificador: 1,
    Nome_da_aula: 'Introdução a programação'
},
{
    Identificador: 2,
    Nome_da_aula: 'Variáveis'
},
{
    Identificador: 3,
    Nome_da_aula: 'Condicionais'
},
{
    Identificador: 4,
    Nome_da_aula: 'Arrays'
}];

//let aulas = '';
for (let i = 0; i < aulasNovas.length; i++) {
    curso.aulas.push(aulasNovas[i]);
}

console.log(curso);