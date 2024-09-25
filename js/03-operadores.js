// OPERADORES ARITMÉTICOS

let numeroA = 5;
let numeroB = 2;

console.log(`Número A: ${numeroA}`);
console.log(`Número B: ${numeroB}`);

// desafio: usar o DOM ao invés de console.log()

console.log("--------");

// SOMA
let soma = numeroA + numeroB;
console.log(`Soma é: ${soma}`);

// SUBTRAÇÃO
let sub = numeroA - numeroB;
console.log(`Subtração é: ${sub}`);

// MULTIPLICAÇÃO
let multi = numeroA * numeroB;
console.log(`Multiplicação é: ${multi}`);

// DIVISÃO
let div = numeroA / numeroB;
console.log(`Divisão é: ${div}`);

// RESTO DA DIVISÃO - MÓDULO
let resto = numeroA % numeroB;
console.log(`O resto é: ${resto}`);

// OPERADORES DE INCREMENTO E DECREMENTO

let num = 6;

num = num + 1; // num = 7

// OPERADOR UNÁRIO
num++; // num = 8

console.log(num); // num = 8

// OPERADOR PÓS FIXADO!!!!!!
console.log(num++); // num = 8

console.log(num); // num = 9

// OPERADOR PRÉ FIXADO!!!!
console.log(++num); // num = 10

num--;

console.log(num); // num = 9

// OPERADORES DE ATRIBUIÇÃO

num += 1; // num = 10

num += 5; // num = 15

let titulo = "<h1>Título Legal</h1>";
let subtitulo = "<h2>Subtítulo Legal</h2>";

let divMessage = document.getElementById("message");

divMessage.innerHTML = titulo;
divMessage.innerHTML += subtitulo;