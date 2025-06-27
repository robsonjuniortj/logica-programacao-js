const prompt = require('prompt-sync')();

let produtos = [];
let total = 0;

let qtd = parseInt(prompt("Quantos produtos deseja cadastrar? "));

for (let i = 1; i <= qtd; i++) {
  console.log(`\nProduto ${i}:`);
  let nome = prompt("Nome do produto: ");
  let preco = parseFloat(prompt("Preço: "));
  
  produtos.push({ nome, preco });
  total += preco;
}

console.log("\nProdutos cadastrados:");
for (let p of produtos) {
  console.log(`- ${p.nome}: R$ ${p.preco.toFixed(2)}`);
}

console.log(`\nTotal do carrinho: R$ ${total.toFixed(2)}`);
