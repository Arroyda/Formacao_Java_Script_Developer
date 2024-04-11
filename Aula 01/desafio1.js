/*
Faça um progrma para calcular o valor de uma viagem.

Você terá 3 variaveis, sendo elas: 
    1 - Preço Combustível;
    2 - Gasto médio de Combustível do carro por km;
    3 - Distancia em KM da viagem;

Imprima o resultado
*/

const Combustivel = 4.79;
const KmPorLitros = 9;
const Distancia = 100

const LitrosConsumidos = Distancia / KmPorLitros;

const GastoCombustivel = LitrosConsumidos * Combustivel;

// O .toFixed( ) podemos escolher quantas casas decimas irá aparecer após a virgula, coloca o num dentro dos ( )
console.log("Foram consumidos " + LitrosConsumidos.toFixed(2) + "L");

console.log("Foi gasto R$" + GastoCombustivel.toFixed(2));

