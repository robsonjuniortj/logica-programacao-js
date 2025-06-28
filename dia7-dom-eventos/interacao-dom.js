document.getElementById('enviar').addEventListener('click', function () {
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const resposta = document.getElementById('resposta');

  if (nome === "" || mensagem === "") {
    resposta.textContent = "Por favor, preencha todos os campos!";
    resposta.style.color = "red";
  } else {
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida com sucesso.`;
    resposta.style.color = "green";
  }
});
