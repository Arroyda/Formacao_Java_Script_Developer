/*
    Calcular o IMC

    Formula IMC:
    IMC = peso / (altuira * altura)

    Elabore um algoritimo que dado o peso e a altura de um adulto mostre a sua condição de acordo com a tabela abaixo

    IMC em adultos Condição:
    - Abaixo de 18.5 = Abaixo do peso
    - Entre 18.5 e 25 = Peso Normal
    - Entre 25 e 30 = Acima do Peso
    - Entre 30 e 40 = Obeso
    - Acima de 40 = Obesidade Grave
*/

const altura = 1.73;
const peso = 96;

const imc = peso / (altura * altura) ;

if (imc < 18.5) {
    console.log('Seu IMC é de ' + imc.toFixed(2) + ' Abaixo do Peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Seu IMC é de ' + imc.toFixed(2) + ' Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Seu IMC é de ' + imc.toFixed(2) + ' Acima do Peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Seu IMC é de ' + imc.toFixed(2) + ' Obeso');
} else if (imc >= 40) {
    console.log('Seu IMC é de ' + imc.toFixed(2) + ' Obesidade Grave')
}