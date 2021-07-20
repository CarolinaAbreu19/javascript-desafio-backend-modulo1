const input = "cubos\nsubocsuboc";

const palavras = input.trim().split("\n");

const senha = palavras[0];
const digitado = palavras[1];

let indexSenha = senha.length - 1;
let indexDigitado = digitado.length - 1;

while(indexDigitado >= 0) {
    if (senha[indexSenha] === digitado[indexDigitado]) {
        indexSenha--;
        if (indexSenha === -1) {
            console.log("SIM");
            break;
        }
    }
    indexDigitado--;
}

if(indexSenha !== -1) {
    console.log("NAO");
}