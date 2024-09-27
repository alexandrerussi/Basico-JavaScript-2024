// FOR

// FOR INDEXADO

// for (let contador = 0; contador < 10; contador++) {
//     console.log(contador);
// }

let qtdProduto = +prompt("Digite a qtd de produto que deseja exibir");

for (let i = 0; i < qtdProduto; i++) {
    console.log(`Produto ${i+1}`);

    // criar tags <p></p> de forma dinâmica
    let pProduto = document.createElement("p");
    console.log(pProduto);

    // <p>aqui é o innerHTML</p>
    pProduto.innerHTML = `Produto ${i+1}`;

    document.body.appendChild(pProduto);
}