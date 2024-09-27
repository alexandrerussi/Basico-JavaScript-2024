// ARRAYS SÃO LISTAS

// 1ª FORMA DE DECLARAR ARRAYS
let lista1 = new Array("elemento1", "elemento2");
// console.log(lista1);

// 2ª FORMA
let lista2 = ["elementoA", "elementoB", 3, true, false, ["fiap", "legal"]];
console.log(lista2);
console.log(lista2[5][1]);

// LISTA DE STRINGS - FRUTAS
let frutas = ["Banana", "Abacaxi", "Pera", "Melão"];
// console.log(frutas);

// TAMANHO DE LISTAS ==> LENGTH
let qtdFrutas = frutas.length;
console.log(`Qtd de frutas ${qtdFrutas}`);

// frutas[INDICE] = VALOR
// frutas[0] = Banana
// frutas[1] = Abacaxi
// frutas[2] = Pera
// frutas[3] = Melão

// console.log(frutas[2]);


// GRADE DE PRODUTOS == MATRIZ == TABELA

let gradeProdutos = [
    ["Nome 1", "Marca 1", 5.90], // LINHA
    ["Nome 2", "Marca 2", 10.90], // LINHA
    ["Nome 3", "Marca 3", 20.90], // LINHA
]

console.table(gradeProdutos);

// gradeProdutos[linha][coluna]
console.log(gradeProdutos[2][1]);

// frutas[INDICE] = VALOR
// frutas[0] = Banana
// frutas[1] = Abacaxi
// frutas[2] = Pera
// frutas[3] = Melão

// frutas[i] = ?

// FOR CLÁSSICO -- FOR INDEXADO

for (let i = 0; i < frutas.length; i++) {
    console.log(`Pos: ${i} | Valor ${frutas[i]} | Sintaxe frutas[${i}]`);
}

// FOR IN

// for (let posicao in frutas) {
//     console.log(frutas[posicao]);
// }


// FOR OF
for (let fruta of frutas) {
    console.log(fruta);
}