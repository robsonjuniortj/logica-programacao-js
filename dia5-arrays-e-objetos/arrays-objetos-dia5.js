// Array simples
let linguagens = ["JavaScript", "Python", "Java", "C#"];

console.log("Linguagens aprendidas:");
for (let i = 0; i < linguagens.length; i++) {
  console.log(`- ${linguagens[i]}`);
}

// Objeto simples
let aluno = {
  nome: "Robson",
  idade: 22,
  curso: "Programação Full Stack"
};

console.log(`\nAluno: ${aluno.nome}, ${aluno.idade} anos, curso: ${aluno.curso}`);

// Array de objetos
let pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 25 },
  { nome: "Luiza", idade: 30 }
];

console.log("\nLista de pessoas:");
for (let pessoa of pessoas) {
  console.log(`- ${pessoa.nome}, ${pessoa.idade} anos`);
}
