// OPERADORES LÓGICOS

// E    &&
// OU   ||
// NOT  !

// LÓGICA E (&&)

// EMAIL    SENHA       ENTRAR NO SISTEMA (email && senha)
// true     true        true
// true     false       false
// false    true        false
// false    false       false

// imagina que essa é a informação que o usuário precisa acertar
let email = "a@b.com";
let senha = "123";

// USUARIO DIGITA:
let emailDigitado = prompt("Digite seu email");
let senhaDigitada = prompt("Digite sua senha");

console.log(`Verificação do e-mail: ${emailDigitado == email}`);
console.log(`Verificação da senha: ${senhaDigitada == senha}`);

let statusLogin = (emailDigitado == email) && (senhaDigitada == senha);
console.log(`Status de login: ${statusLogin}`);

// LÓGICA OU (||)

// SOLZAO       JOGO BR     CHURRAS NO DOM. (sol || jogoBr)
// true         true        true
// true         false       true
// false        true        true
// false        false       false

let sol = false;
let jogoBr = false;
let aniversario = true;
let chuva = true;

console.log(sol || jogoBr || aniversario);


// VERIFICAÇÃO DE IDADE DO VOTO OPCIONAL

let idade = 17;

let verificaMenorIdade = idade >= 16 && idade < 18;
console.log(`Verifica voto opc para menor idade: ${verificaMenorIdade}`);

let verificaMaiorIdade = idade >= 70;
console.log(`Verifica voto opc para maior idade: ${verificaMaiorIdade}`);

let votoOpcional = verificaMenorIdade || verificaMaiorIdade;