/*Exercício 06

## Separando jovens de adultos

1. Dado a lista de usuários abaixo, separe os usuários que possuem menos de 18 anos 
dos demais. Para isso, você deverá criar duas novas constantes `jovens` e `adultos`. 
Todos os usuários menores de 18 anos devem ser inseridos na constante `jovens` e os 
demais na constante `adultos`.

```javascript*/

const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 28,
    },
    {
        nome: "Beatriz",
        idade: 25,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 12,
    },
];
const jovens = [];
const adultos = [];

for (let i = 0; i < usuarios.length; i++) {
    //console.log(usuarios[i].idade);
    if (usuarios[i].idade <= 18) {
        jovens.push(usuarios[i]);
    } else if (usuarios[i].idade >= 18) {
        adultos.push(usuarios[i]);
    }
}
console.log(jovens);
console.log(adultos);