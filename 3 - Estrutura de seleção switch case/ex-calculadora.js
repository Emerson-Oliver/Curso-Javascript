/**
 * EXERCÍCIO
 * Implemente uma calculadora capaz de executar as 4 operações matemáticas básicas e que recebe os dados via teclado.
 * Três informações devem ser passadas: o primeiro operando, a operação matemática e o segundo operando.
 * Por exemplo:
 * > 20
 * > +
 * > 4
 * > Resultado: 24
 */

const prompt = require("prompt-sync")();

const valor1 = Number(prompt("Informe o primeiro valor: "));
const operador = prompt("Informe o operador: ");
const valor2 = Number(prompt("Informe o segundo valor: "));

let resultado;

switch(operador){
    case  "+":
       resultado = valor1 + valor2;
       break;
    case "-": 
       resultado = valor1 - valor2;
       break;
    case "*":
        resultado = valor1 * valor2;    
        break;
    case "/":
        resultado = valor1 / valor2;  
        break; 
    default:
        resultado = null;
        break;             
}
console.log("Resultado = " +resultado);