/**
 * EXERCÍCIO 
 * Crie um gerador de tabuada de um número especificado (solicitado via teclado). A tabuada deve mostrar os valores da multiplicação de 1 a 10.
 */

const prompt = require("prompt-sync")();

const numero = Number(prompt("Informe um numero:  "));

let index = 1;
while (index <= 10) {
    console.log(numero + " x " + index + " = " + (numero * index));
    index +=1;
}