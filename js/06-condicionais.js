// IF ==> SE a CONDIÇÃO for verdadeira ENTÃO executa algo

// ------------------------------
// ESTRUTURA CONDICIONAL SIMPLES
// ------------------------------

let idade = 65;

let spanIdade = document.getElementById("span-idade");
spanIdade.innerHTML = idade;

let verificaIdade = document.querySelector("#verifica-idade");

if (idade < 18) {
    verificaIdade.innerHTML = "O usuário pe menor de idade";
}

// ESTURUTRA CONDICIONAL COMPOSTA

/*

    SE (CONDIÇÃO) {

    } SENAO {

    }

*/

if (idade < 18) {
    verificaIdade.innerHTML = "O usuário é menor de idade";
    verificaIdade.className = "dark";
} else if (idade < 55) {
    verificaIdade.innerHTML = "O usuário é maior de idade e ainda tá bem";
    verificaIdade.className = "light";
} else {
    verificaIdade.innerHTML = "Sua hora está chegando";
    verificaIdade.className = "dark";
}

// IF TERNÁRIO

let mes = 9; // julho

let semestre;

if (mes <= 6) {
    semestre = "1º semestre";
} else {
    semestre = "2º semestre";
}

let semestreTernario = mes <= 6 ? "1º semestre" : "2º semestre";

console.log(`Estamos no ${semestreTernario}`);