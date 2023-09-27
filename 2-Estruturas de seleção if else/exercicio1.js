/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que recebe um valor numérico pelo teclado, multiplica o valor por ele mesmo e imprime o resultado.
 * Entretanto, se o valor fornecido for maior do que 10, ele deve ser ajustado para 10 antes da multiplicação
 */

const prompt = require("prompt-sync")();

let valor = Number(prompt(" Digite o valor: "));

if (valor > 10){
    valor = 10;
    let novoValor = valor * valor;
    console.log(novoValor);
}
else if (valor <= 10){
    novoValor = valor * valor;
    console.log(novoValor);
}
