const frutas = ["Laranja", "Pera", "Figo", "Abacaxi", "Zimbro", "Amora", "Banana"];

const novasFrutas = frutas.concat("Melancia", "Amora");

console.log(frutas);
console.log(novasFrutas);

novasFrutas.reverse();
console.log(novasFrutas);
console.log(novasFrutas.join("-"));

frutas.sort();
console.log(frutas);

const sliceFrutas = frutas.slice(1, 3);
console.log(sliceFrutas);

const carros = ["HB20", "Corsa", "Fiesta", "Palio", "Polo"]

console.log(carros.indexOf("HB20"));
