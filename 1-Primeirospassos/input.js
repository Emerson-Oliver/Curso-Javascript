//Lendo ionformações via teclado
//1. Instalar o pacote prompt-sync "npm install prompt-sync"

const prompt = require("prompt-sync")(); // Sintaxe para trabalhar com a importação de um pacote no caso prompt-sync

const nome = prompt("Qual é o seu nome? ");
console.log(`Ola, ${nome}! Muito prazer.`);

