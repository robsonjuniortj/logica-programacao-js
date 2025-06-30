function atualizarRelogio() {
  const agora = new Date();
  let horas = agora.getHours().toString().padStart(2, '0');
  let minutos = agora.getMinutes().toString().padStart(2, '0');
  let segundos = agora.getSeconds().toString().padStart(2, '0');

  const horario = `${horas}:${minutos}:${segundos}`;
  document.getElementById("horario").textContent = horario;

  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
  const ano = agora.getFullYear();
  const dataCompleta = `📅 ${dia}/${mes}/${ano}`;
  document.getElementById("dataAtual").textContent = dataCompleta;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Chama uma vez ao carregar
