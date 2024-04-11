/*
    Elabore um algorimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento
    Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

    Código condição pagamento:
    - Débito = 10% desconto
    - Dinheiro = 15% desconto
    - 2x = preço normal sem juros
    - Acimda de 2x = preço normal + juros 10%
*/

function AplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function AplicarJuros(valor){
    const parcelas = 4
    return ((valor) + (valor * 0.1 * parcelas))
}

const preço = 100;
const formapagamento = 4;


if (formapagamento === 1) {
    console.log(AplicarDesconto(preço, 10));
} else if (formapagamento === 2) {
    console.log(AplicarDesconto(preço, 15));
} else if (formapagamento === 3) {
    console.log('O Valor da compra é de R$' + preço);
} else if (formapagamento === 4) {
    console.log(AplicarJuros(preço));
}