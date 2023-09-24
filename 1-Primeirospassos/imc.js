/**
 * EXERCICIO
 * Escreva um programa que, com base no peso e na altura de uma pessoa calcule o seu IMC.
 * O calculo do IMC é dado pelo peso dividido pela altura elevada ao quadrado
 */

const prompt = require("prompt-sync")();

const peso = Number(prompt("Peso: "));
const altura = Number(prompt("Altura: "));
const IMC = peso / (altura * altura);

console.log(`Calculo IMC: ${IMC.toFixed(2)}`);