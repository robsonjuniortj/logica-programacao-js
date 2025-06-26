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
