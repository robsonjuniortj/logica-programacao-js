document.getElementById('enviar').addEventListener('click', function () {
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const idade = parseInt(document.getElementById('idade').value);
  const resposta = document.getElementById('resposta');

  if (!nome || !mensagem || isNaN(idade)) {
    resposta.textContent = "Por favor, preencha todos os campos!";
    resposta.style.color = "red";
  } else if (idade < 18) {
    resposta.textContent = "Desculpe, você precisa ter pelo menos 18 anos para enviar uma mensagem.";
    resposta.style.color = "orange";
  } else {
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida com sucesso.`;
    resposta.style.color = "green";
  }
});
