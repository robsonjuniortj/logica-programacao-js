const prompt = require('prompt-sync')();

// Coletar 5 nomes
let nomes = [];
for (let i = 1; i <= 5; i++) {
  let nome = prompt(`Digite o nome da pessoa ${i}: `);
  nomes.push(nome);
}
console.log("\nNomes digitados:");
for (let i = 0; i < nomes.length; i++) {
  console.log(`- ${nomes[i]}`);
}

// Somar até digitar 0
let numero;
let soma = 0;
console.log("\nDigite números para somar. Digite 0 para finalizar.");
while (true) {
  numero = parseFloat(prompt("Número: "));
  if (numero === 0) {
    break;
  }
  soma += numero;
}
console.log(`\nA soma total é: ${soma}`);
