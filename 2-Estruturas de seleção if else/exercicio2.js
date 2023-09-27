/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que recebe um valor numérico pelo teclado e imprime no console se o número é par ou ímpar.
 */

const prompt = require("prompt-sync")();

const numero = Number(prompt("Informe o numero: "));

if (numero % 2 === 0){
    console.log("Par");
}
else{
    console.log("Impar");
}