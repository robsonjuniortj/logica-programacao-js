// Importa a função prompt
const prompt = require('prompt-sync')();

// Coleta dados do usuário
let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let cidade = prompt("Digite sua cidade: ");
let profissao = prompt("Digite sua profissão: ");
let altura = prompt("Digite sua altura: ");

// Mostra no terminal
console.log(`Você se chama ${nome}, tem ${idade} anos, mora em ${cidade}, é ${profissao} e tem ${altura}m de altura.`);
