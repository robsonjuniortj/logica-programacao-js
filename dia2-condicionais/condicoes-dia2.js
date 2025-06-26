// Importa prompt-sync para entrada de dados no terminal
const prompt = require('prompt-sync')();

// Recebe a nota do aluno
let nota = parseFloat(prompt("Digite a nota do aluno (0 a 10): "));

// Verifica se a nota é válida
if (nota < 0 || nota > 10) {
  console.log("Nota inválida. Digite um valor entre 0 e 10.");
} else {
  // Verifica a situação do aluno
  if (nota >= 7) {
    console.log("Aluno Aprovado! 🎉");
  } else if (nota >= 5) {
    console.log("Aluno em Recuperação. 🟡");
  } else {
    console.log("Aluno Reprovado. ❌");
  }
}

// MISSÃO PRÁTICA DO DIA - Validação de Idade para Entrada

let idade = parseInt(prompt("\nDigite sua idade: "));

// Verifica a idade e exibe a mensagem correspondente
if (idade < 18) {
  console.log("Entrada Proibida! 🚫");
} else if (idade <= 60) {
  console.log("Entrada Liberada! 🎫");
} else {
  console.log("Entrada Liberada com prioridade! 👴🪪");
}
