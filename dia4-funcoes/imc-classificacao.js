const prompt = require('prompt-sync')();

// Função que calcula o IMC
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Função que retorna o diagnóstico com base no IMC
function diagnostico(imc) {
  if (imc <= 18.5) return "Abaixo do normal";
  else if (imc <= 24.9) return "Normal";
  else if (imc <= 29.9) return "Sobrepeso";
  else if (imc <= 34.9) return "Obesidade grau 1";
  else if (imc <= 39.9) return "Obesidade grau 2";
  else return "Obesidade grau 3";
}

// Entrada de dados
let peso = parseFloat(prompt("Digite seu peso (kg): "));
let altura = parseFloat(prompt("Digite sua altura (m): "));

// Cálculo e exibição
let imc = calcularIMC(peso, altura);
let resultado = diagnostico(imc);

console.log(`Seu IMC é ${imc.toFixed(2)} - ${resultado}`);
