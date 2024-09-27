let i = 0; // variavel auxiliar contadora

while (i < 5) {
    console.log(i);
    i++;
}

// FOMO FAZER PARA IR DE 10 ATÉ 0

let j = 10;

while (j >= 0) {
    console.log(j);
    j--;
}

// COMO VERIFICAR QUE O USUÁRIO DIGITOU ALGO ERRADO E SOLICITAR NOVAMENTE

// Number() --> transforma string para number

// let num = +prompt("Adivinhe um número: ");

let vida = 3;

// while (num != 7) {
//     num = +prompt("Tente novamente... Adivinhe um número: ");

//     vida--;

//     if (vida == 0) {
//         break;
//     }
// }

console.log("Parabéns!!");


// --------------------------------------


// DO/WHILE

/*
    do {

    } while (condicao for verdadeira);

*/

let numero;

// do {
//     numero = +prompt("Adivinhe um numero: ");
// } while (numero != 5);


// USUARIO DEVE DIGITAR ENTRE NUMERO 0 E 1000

do {
    numero = +prompt("Digite um numero entre 0 e 1000");
} while (numero < 0 || numero > 1000);