let lista = ["Joaquina", 25];
console.log(lista[0]);

// JSON - JAVASCRIPT OBJECT NOTATION
// SINTAXE BÁSICA PARA DECLARAÇÃO DE OBJETOS

// ATRIBUTOS nome, idade
let pessoa = {
    nome: "Joaquina",
    idade: 25
}

// O OBJETO
console.log(pessoa);

// 2 formas para acessar valors nos objetos

// 1ª
console.log(pessoa.nome);
console.log(pessoa.idade);

// 2ª
console.log(pessoa["nome"]);
console.log(pessoa["idade"]);

// CONVERSÃO DE OBJETO PARA STRING

const jsonString = JSON.stringify(pessoa);
console.log(jsonString);


let stringRetorno = `
    {
        "id": 1,
        "gender": "Male",
        "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    }
`;

let objetoRetorno = JSON.parse(stringRetorno);
console.log(objetoRetorno.image);

let img = document.createElement("img");
img.src = objetoRetorno.image;
document.body.appendChild(img);