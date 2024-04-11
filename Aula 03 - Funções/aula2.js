// Aprendendo a organizar as Funções 

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function main() {
    console.log("Calculadora de IMC")
    const altura = 1.73;
    const peso = 96;

    const imc = calcularIMC(peso, altura);

    console.log(classificarIMC(imc));
}

function classificarIMC(imc){
    if (imc < 18.5) {
        return ('Seu IMC é de ' + imc.toFixed(2) + ' Abaixo do Peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Seu IMC é de ' + imc.toFixed(2) + ' Peso Normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Seu IMC é de ' + imc.toFixed(2) + ' Acima do Peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Seu IMC é de ' + imc.toFixed(2) + ' Obeso');
    } else if (imc >= 40) {
        return ('Seu IMC é de ' + imc.toFixed(2) + ' Obesidade Grave')
    }
}

main();