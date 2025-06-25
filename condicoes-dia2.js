const prompt = require('prompt-sync')();

// Exemplo 1: Verificando se a pessoa é maior de idade
let idade = parseInt(prompt("Digite sua idade: "));

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Exemplo 2: Verificando nota do aluno
let nota = parseFloat(prompt("Digite sua nota final: "));

if (nota >= 7) {
  console.log("Aprovado!");
} else if (nota >= 5) {
  console.log("Recuperação.");
} else {
  console.log("Reprovado.");
}

// Exemplo 3: Login básico
let usuario = prompt("Digite o nome de usuário: ");
let senha = prompt("Digite a senha: ");

if (usuario === "admin" && senha === "1234") {
  console.log("Acesso permitido.");
} else {
  console.log("Usuário ou senha incorretos.");
}
