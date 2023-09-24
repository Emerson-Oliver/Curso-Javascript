/**
 * Escreva um programa que calcula um novo salario de um funcionario que acabou de recebre um porcentagem de aumento.
 * O Salário e a porcentagem devem ser forcecidos pelo usuário 
 */

const prompt = require("prompt-sync")();

const salario = Number(prompt("Salario atual: "));
const aumento = Number(prompt("Aumento em porcentagem: "));

let novoSalario = salario + salario * (aumento / 100);

console.log(`Salario atualizado: ${novoSalario.toFixed(2)}`);