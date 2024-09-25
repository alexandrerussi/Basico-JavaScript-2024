// INTERAGINDO COM O DOM

let divMessage = document.getElementById("message");
console.log(divMessage);

divMessage.innerText = "Olá <b>mundo</b>!!!";
divMessage.innerHTML = "Olá <b>mundo</b>!!!";

let nomeDigitado = "Fulano";
let urlImgProfile = "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";

divMessage.innerHTML = `
    <p>
        Olá ${nomeDigitado}! Seja bem-vindo
    </p>
    <img src="${urlImgProfile}" />
`;