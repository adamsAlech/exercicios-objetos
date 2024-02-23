/*Exercício 03

## Mensagem de apresentação

1. Dado o objeto `usuario` abaixo, monte a mensagem `Olá... Eu sou João e tenho 25 anos de idade. 
Sou programador e minha cor preferida é verde!`, passando dinamicamente as informações contidas no objeto.
*/


const usuario = {
    nome: "Adams",
    idade: 35,
    profissao: "Mecânico de automóveis",
    cor_preferida: "preto",
};

const { nome, idade, profissao, cor_preferida } = usuario;

console.log(`Olá, eu sou ${nome}, tenho ${idade} de idade, sou ${profissao} e minha cor favorita é ${cor_preferida}.`)