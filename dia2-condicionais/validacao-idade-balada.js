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
