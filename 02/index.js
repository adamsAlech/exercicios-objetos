/*## Lista de veículos

1. Crie uma lista de objetos com as propriedades abaixo e guarde numa variável/constante chamada `carros`.

    - marca
    - modelo
    - ano
    - cor
    - quantidade_portas
    - automatico

    Obs.: a propriedade `automatico` deve receber um valor booleano que indicará se o carro é automático ou não. 
    */

const carros = {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    ano: 2020,
    cor: 'Preto',
    quantidade_portas: 2,
    automatico: false
};
let cambio = '';
if (carros.automatico === true) {
    cambio = 'tem cambio automático';
} else {
    cambio = 'não tem cambio automático';
}

console.log(`A ${carros.marca} no seu carro modelo ${carros.modelo}, ${carros.ano}, na cor ${carros.cor}, tem ${carros.quantidade_portas} portas, e ${cambio}`);