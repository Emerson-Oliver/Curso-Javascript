const meses = ["Janeiro", "Fevereiro", "Maio", "Segunda-Feira", "Terça -Feira"];

meses.splice(3); // Apaga do indice 3 para frente
meses.splice(2, 0, "Março", "Abril");

console.log(meses);
