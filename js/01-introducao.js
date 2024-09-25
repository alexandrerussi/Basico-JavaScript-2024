//  PARA DECLARAR VARIÁVEIS EU TENHO:
// let
// var -- não consigo explicar agora -- EVITEM!!!
// const 


/*

    isso é um commentário
    em multiplas
    linhas

*/


// TEXTO - STRING
let nomePessoa = "Alexandre";
console.log(nomePessoa, typeof(nomePessoa));

// NUMEROS - NUMBERS
let idade = 25; // numero inteiro => integer
console.log(idade, typeof(idade));

let preco = 10.90; // numero decimal => float ou double
console.log(preco, typeof(preco));

// VALORES LÓGICAS -- BOOLEANS
let autenticado = true;
console.log(autenticado, typeof(autenticado));

let email;
console.log(email, typeof(email));

let nulo = null;
console.log(nulo, typeof(nulo));

email = "a@b.com";
console.log(email, typeof(email));

// VARIÁVEIS CONSTANTES
const CPF = "123.456.789-00";
console.log(CPF, typeof(CPF));

// CPF = "987.654.321-00";
// console.log(CPF);

// ======================================================

// CONVERSÕES

// COERÇÃO IMPLÍCITA -- CONVERSÃO DE VALORES DE FORMA IMPLÍCITA

let variavelQualquer = 2 + "3";
console.log(variavelQualquer);

// COERÇÃO EXPLÍCITA -- CONVERSÃO DE VALORES DE FORMA EXPLÍCITA

// Number()
let pontos = Number('120'); // string para number
console.log(pontos, typeof(pontos));

// Boolean()
let valorLogico = ""; // TEXTO!!!
valorLogico = Boolean(valorLogico);
console.log(valorLogico, typeof(valorLogico));

// PEDIR VALORES PARA O USUARIO
let nomeDigitado = prompt("Digite seu nome aqui");

alert(`Olá, ${nomeDigitado}! Seja bem-vindo!`); // TEMPLATE STRING JS
alert("Olá, " + nomeDigitado + "! Seja bem-vindo!");