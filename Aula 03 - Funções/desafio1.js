// Praticando Funções

function SayMyName(name) {
    return ("Meu nome é " + name);
}

SayMyName('Vitor');

function verificar18(idade) {
    if (idade >= 18) {
        console.log(SayMyName('Vitor') + ' e sou maior de idade!');
    } else {
        console.log(SayMyName('Vitor') + ' e sou de menor de idade!');
    }
}

verificar18('17');
