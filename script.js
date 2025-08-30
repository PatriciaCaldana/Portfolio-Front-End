document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita o recarregamento da página
  const nome = document.getElementById("nome").value;
  document.getElementById("mensagemEnviada").innerText = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
  this.reset(); // limpa os campos do formulário
});