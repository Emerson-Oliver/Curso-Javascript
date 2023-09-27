/**
 * EXERCÍCIO
 * ---------
 * 
 * Escreva um programa que, com base em uma idade fornecida, classifica a pessoa nos grupos abaixo:
 * 
 * - CRIANÇA: 0 a 12 anos
 * - ADOLESCENTE: 13 a 17 anos
 * - ADULTO: 18 a 65 anos
 * - SÊNIOR: 66 anos ou mais
 * 
 * Idades negativas ou acima de 110 anos devem ser consideradas como inválidas.
 */

const prompt = require("prompt-sync")();

const idade = Number(prompt("Informe a idade: "));

if (idade > 0 && idade <= 12){
    console.log("Criança");
}
else if (idade >= 13 && idade <= 17){
    console.log("Adolescente");
}
else if (idade >= 18 && idade <= 65){
    console.log("Adulto");
}
else if (idade >= 66){
    console.log("Senior");
}
else {
    console.log("Idade Invalida");
}