/*Exercício 09

## Encontrando Carlos na multidão

1. Abaixo, temos uma lista de pessoas que representa os participantes 
de uma festa. O `Carlos` se perdeu dos seus amigos e sua tarefa é 
encontrá-lo. O lugar onde o Carlos se encontra é representado pela 
posição do objeto que contém seu nome na lista. Quando encontrar o 
Carlos, caso ele esteja na posição `123`, deverá imprimir `Galera... 
O Carlos está na posição 123, corre lá!`.

*/
const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];
for (let i = 0; i < participantes.length; i++) {
    const { nome } = participantes[i];
    if (nome === 'Carlos') {
        // só fiz assim para representar o que foi pedido no exercício, 
        //o correto e começar no 0 portanto Carlos teria que estar na posião 0
        console.log(`Galera... 
        O ${nome} está na posição ${i + 1}, corre lá!`)
    }
};
