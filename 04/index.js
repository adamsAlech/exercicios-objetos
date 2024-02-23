/*Exercício 04

## Adicionando maior idade

1. Dado a lista de objetos abaixo, adicione uma nova propriedade chamada `maior_idade` 
para cada objeto da lista. A propriedade deverá receber um valor booleano de acordo 
com a propriedade `idade` de cada objeto. Caso a idade seja maior que 17, o valor deve 
ser `true`, caso contrário `false`.*/

const usuarios = [
    {
        nome: "João",
        idade: 15,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 25,
    },
    {
        nome: "Carlos",
        idade: 36,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];
let maiorIdade = '';
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade >= 18) {
        usuarios[i].maiorIdade = true;
    } else {
        usuarios[i].maiorIdade = false;
    }
};

const objetosFundidos = {
    ...usuarios,
    ...maiorIdade,
};

console.log(objetosFundidos);