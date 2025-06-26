// Importa prompt-sync
const prompt = require('prompt-sync')();

// Exemplo 1 - Contando de 1 até 10 com FOR
console.log("Contagem com for:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exemplo 2 - Contando de 1 até 10 com WHILE
console.log("\nContagem com while:");
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// MISSÃO PRÁTICA DO DIA - DESAFIO 1
let nomes = [];

for (let i = 1; i <= 5; i++) {
  let nome = prompt(`Digite o nome da pessoa ${i}: `);
  nomes.push(nome);
}

console.log("\nNomes digitados:");
for (let i = 0; i < nomes.length; i++) {
  console.log(`- ${nomes[i]}`);
}

// MISSÃO PRÁTICA DO DIA - DESAFIO 2
let numero;
let soma = 0;

console.log("\nDigite números para somar. Digite 0 para finalizar.");

while (true) {
  numero = parseFloat(prompt("Número: "));
  if (numero === 0) {
    break; // Encerra o loop
  }
  soma += numero;
}

console.log(`\nA soma total é: ${soma}`);
