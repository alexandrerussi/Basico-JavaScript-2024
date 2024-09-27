document.addEventListener("DOMContentLoaded", function () {


    // IMAGINA... QUE VOCÊ ESTÁ FAZENDO UMA REQUISIÇÃO A UMA API E RETORNA UMA LISTA DE PRODUTOS

    const produtos = [
        {nome: "Notebook gamer", preco: 4500, categoria: "eletronicos"},
        {nome: "Smarphone", preco: 6500, categoria: "eletronicos"},
        {nome: "Churrasqueira", preco: 800, categoria: "utilitarios"},
    ];

    console.log(produtos);
    console.log(produtos[0]);
    console.log(produtos[0].preco);
    console.log(produtos[0]["nome"]);

    function inserirProdutosNaTela() {
        let containerProdutos = document.getElementById("produtos");

        produtos.forEach(produto => {
            console.log(produto);

            let produtoDiv = document.createElement("div");

            produtoDiv.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco}</p>
                <p>Categoria: ${produto.categoria}</p>
            `;

            containerProdutos.appendChild(produtoDiv);
        })
    }

    inserirProdutosNaTela();

});