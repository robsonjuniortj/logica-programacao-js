const input = document.getElementById("tarefaInput");
const botao = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefas");

botao.addEventListener("click", function () {
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;

  // Clique para marcar como concluída
  li.addEventListener("click", function () {
    li.classList.toggle("concluida");
  });

  // Botão de remover
  const remover = document.createElement("button");
  remover.textContent = "X";
  remover.title = "Remover tarefa";
  remover.addEventListener("click", function (e) {
    e.stopPropagation(); // impede que o clique marque como concluída
    lista.removeChild(li);
  });

  li.appendChild(remover);
  lista.appendChild(li);
  input.value = ""; // limpa o campo
});
