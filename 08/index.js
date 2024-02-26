/*Exercício 08

## Meus pets

1. Abaixo, temos uma lista de pessoas. Cada pessoa possui uma lista 
com **um**, **vários** ou **nenhum** pet. Percorra cada pessoa da 
lista e imprima uma mensagem de acordo com as condições a seguir:

a. Se a pessoa não tiver pets, a mensagem deve ser: `Sou João e não tenho pets`.

b. Se a pessoa tiver mais de um pet, a mensagem deve ser: `Sou Ana e tenho 2 pets`.

c. Se a pessoa tiver um pet, a mensagem deve ser: `Sou Beatriz e tenho 1 pet`.*/

const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];
// for (const usuario of usuarios) {
//     const { nome, pets } = usuario

//     console.log(`Sou o ${nome} e tenho ${pets.length} pet(s).`)
// }
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].pets.length < 1) {
        console.log(`Eu sou ${usuarios[i].nome} e não tenho nenhum pet.`);
    } else {
        console.log(`Eu sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} pets.`);
    }
};
