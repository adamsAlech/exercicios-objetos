/*Exercício 01

## Cadastro de usuário

1. Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada `endereco`. Cada propriedade deve receber um valor apropriado.

    - rua
    - numero
    - complemento
    - bairro
    - cep
    - cidade
    - estado
    - pais

2. Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada `usuario`. Cada propriedade deve receber um valor apropriado.

    - nome
    - email
    - telefone
    - data_nascimento
    - endereco
    */
const endereco = {
    rua: 'Clementino Porfirio',
    numero: 328,
    complemento: 'ap 1',
    bairro: 'Centro',
    cep: '83570-000',
    cidade: 'Cerro Azul',
    estado: 'Paraná',
    pais: 'Brasil'
};

const usuario = {
    nome: 'Adams de Andrade Lech',
    email: 'adams.a.lech@hotmail.com',
    telefone: 41_9_997698572,
    data_nascimento: '04/06/1988',
    endereco
};

console.log(usuario);