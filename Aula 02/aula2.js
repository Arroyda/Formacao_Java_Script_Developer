const numero = 0;

// Quando utilizamos 2 = ele faz comparação com String, já com 3 === somente com numero 
const NumeroDivisivel = (numero % 5) === 0;

if (numero === 0) {
    console.log("O numero é invalido ")
} else if (NumeroDivisivel) {
    console.log("É Divisivel por 5");

} else {
    console.log("Não é Divisivel por 5")
}



console.log(NumeroDivisivel);