/* Faça um progrma para calcular o valor de uma viagem.

Você terá 3 variaveis, sendo elas: 
    1 - Preço Etanol;
    2 - Preço Gasolina;
    3 - Tipo de combustivel no carro;
    4 - Gasto médio de Combustível do carro por km;
    5 - Distancia em KM da viagem;

Imprima o resultado
*/

const ValorEtanol = 3.79;
const ValorGasolina = 4.79;
const KmPorLitroEtanol = 12;
const KmPorLitroGasolina = 10;
const DistanciaKM = 100;
const TipoCombustivel = 'Etanol';

if (TipoCombustivel === 'Etanol') {
    const LitrosConsumidosEtanol = DistanciaKM / KmPorLitroEtanol;
    const ValorGastoEtanol = LitrosConsumidosEtanol * ValorEtanol;
    
    console.log("Etanol:");
    console.log("Foram consumidos de Etanol " + LitrosConsumidosEtanol.toFixed(2) + "L");
    console.log("Foram gasto com Etanol R$" + ValorGastoEtanol.toFixed(2));
} else {
    const LitrosConsumidosGasolina = DistanciaKM / KmPorLitroGasolina;
    const ValorGastoGasolina = LitrosConsumidosGasolina * ValorGasolina;
    console.log("Gasolina:");
    console.log("Foram consumidos de Gasolina" + LitrosConsumidosGasolina.toFixed(2) + "L");
    console.log("Foram gasto com Gasolina R$" + ValorGastoGasolina.toFixed(2));
}

