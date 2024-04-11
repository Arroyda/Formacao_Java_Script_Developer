/* 
    Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo

    Média = (nota 1 + nota 2 + nota 3) / 3

    Classificação:
    - Média menor que 5 = reprovado
    - Média entre 5 e 7 = recuperação
    - Média acima de 7 = aprovado
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Sua média foi " + media.toFixed(2) + '. !REPROVADO!')
} else if (media >= 5 && media < 7) {
    console.log("Sua média foi " + media.toFixed(2) + '. !RECUPERAÇÃO!')
} else if (media >=7) {
    console.log("Sua média foi " + media.toFixed(2) + '. !Aprovado!')
}