document.getElementById("somar").addEventListener("click", function () {
    let primeiroNum = +document.getElementById("primeiro-numero").value;
    let segundoNum = +document.getElementById("segundo-numero").value;

    let soma = primeiroNum + segundoNum;

    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da soma é: ${soma}`;
});

function subtrair() {
    let primeiroNum = +document.getElementById("primeiro-numero").value;
    let segundoNum = +document.getElementById("segundo-numero").value;

    let sub = primeiroNum - segundoNum;

    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da subtração é: ${sub}`;
}

// DESAFIO: FAÇA DIVISÃO COM VERIFICAÇÃO DE NUMERO ZERO