// Conseguimos criar uma função onde podemos repetir oque ela faz utilizando somente o nome da função

function SayMyName(name) {
    console.log('Seu nome é ' + name);
}

SayMyName('Vitor');
SayMyName('Arruda');


// Podemos fazer um calculo tambem e retornar o valor

function quadrado(valor){
    return valor * valor;
}

const QuadradoDeDez = quadrado(10);
console.log(QuadradoDeDez);

// Podemos adicionar mais de um valor 

function incrementoJuros(valor, percentualJuros) {
    const ValorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + ValorDeAcrecimo;
}

console.log(incrementoJuros(100, 10));