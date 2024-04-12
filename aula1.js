// Dentro de uma variavel podemos colocar um objeto e dentro dele adicionar mais de 1 valor

const Vitor = {
    name: "Vitor Arruda",
    idade: 18,

    // Podemos colocar uma Função dentro de um objeto 

    descrever: function () {
       console.log(`Meu nome é ${this.name} e minha idade é ${this.idade}`);
    }
};


// Podemos incrementa ou deletar um objeto 

Vitor.data = '15 de agosto';

// delete Vitor.name;

// Podemos chamar os 2 objetos ou somente 1

console.log(Vitor.name + Vitor.idade);
console.log(Vitor.idade);
console.log(Vitor);
Vitor.descrever();

// Podemos acessar somente 1 atributo ou mais

console.log(Vitor['name']);