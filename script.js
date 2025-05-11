const form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valido = true;

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  // Limpa mensagens anteriores
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  document.getElementById('sucesso').textContent = '';

  // Nome: Letra maiúscula seguida de minúsculas, espaço, depois a mesma regra
  const regexNome = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  if (!regexNome.test(nome)) {
    document.getElementById('erroNome').textContent = 'Nome inválido. Use Nome Sobrenome com letras.';
    valido = false;
  }

  // E-mail: caracteres antes e depois do @, termina com .br
  const regexEmail = /^[a-z]+@[a-z]+\.(com\.br|br)$/;
  if (!regexEmail.test(email)) {
    document.getElementById('erroEmail').textContent = 'E-mail inválido. Ex: exemplo@dominio.br';
    valido = false;
  }

  // Senha: exatamente 8 caracteres, pelo menos 1 maiúscula e 1 número
  const regexSenha = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8}$/;
  if (!regexSenha.test(senha)) {
    document.getElementById('erroSenha').textContent = 'Senha deve ter 8 caracteres, incluindo 1 letra maiúscula e 1 número.';
    valido = false;
  }

  // CPF: formato 000.000.000-00
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!regexCPF.test(cpf)) {
    document.getElementById('erroCPF').textContent = 'CPF inválido. Ex: 123.456.789-09';
    valido = false;
  }

  // Telefone: (xx) 9xxxx-xxxx ou (xx) 9xxxxxxxx ou xx 9xxxxxxxx
  const regexTelefone = /^(\(\d{2}\)\s9\d{4}-\d{4}|\(\d{2}\)\s9\d{8}|\d{2}\s9\d{8})$/;
  if (!regexTelefone.test(telefone)) {
    document.getElementById('erroTelefone').textContent = 'Telefone inválido. Ex: (91) 99999-9999';
    valido = false;
  }

  if (valido) {
    document.getElementById('sucesso').textContent = 'Todos os dados foram validados com sucesso!';
    form.reset();
  }
});