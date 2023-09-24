const data = new Date("2010-03-15 14:00:00.000 -0300");
console.log(data);
console.log(data.toDateString());
console.log(data.toISOString());
console.log(data.toLocaleTimeString());
console.log(data.toLocaleDateString());

console.log(data.getTime()); //Milisegundos
console.log(data.getDay()); //Dia
console.log(data.getMonth()); //Mês em meses Janeiro começa em 0 EX: Janeiro = 0, Fevereiro = 1, Março = 2 ...
console.log(data.getFullYear()); //Ano