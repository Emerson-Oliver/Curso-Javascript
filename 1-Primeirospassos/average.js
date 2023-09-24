//average = media
const prompt = require("prompt-sync")();

const num1 = Number(prompt("Valor 1: ")); //Number(prompt("Valor 1: ") Converte String para Number                                   
const num2 = Number(prompt("Valor 2: ")); 
const num3 = Number(prompt("Valor 3: "));

const average = (num1 + num2 + num3) / 3;

console.log(`Media: ${average.toFixed(2)}`);