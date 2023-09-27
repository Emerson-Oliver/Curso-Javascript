/*1. Crie um programa que exiba o dia da semana com base em um número de 1 a 7. */

const prompt = require("prompt-sync")();

const dia = Number(prompt("Informe o número correspondente ao dia: "));

switch(dia){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda feira");
        break;    
    case 3:
        console.log("Terça feira");
        break;
    case 4:
        console.log("Quarta feira");
        break;    
    case 5:
        console.log("Quinta feira");
        break;
    case 6:
        console.log("Sexta feira");
        break;
    case 7:
        console.log("Sabado");
        break;
        default:
        console.log("Dia Inválido");
        break;        
}