/**
 * EXERCÍCIO
 * 
 * Escreva um programa que faz a conversão de um valor em R$ para um valor em $ e mostre o valor do resultado.
 * O valor a ser convertido e a cotação devem ser solicitados ao usuário
 */

const prompt = require("prompt-sync")();

const real = prompt("Valor em R$: ");
const cotacaoDolar = prompt("Cotação atual: ");

const dolar = real / cotacaoDolar;

console.log(`Valor em Dolar: ${dolar.toFixed(2)}`);

