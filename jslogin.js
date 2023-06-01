function checkLogin(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Estrutura de dados com usuários e senhas permitidos
  var allowedUsers = [
  { username: 'luiz.marroni', password: 'luiz' },
  { username: 'lucas.dickmann', password: 'lucas' },
  { username: 'pedro.avi', password: 'pedro' },
  { username: 'erick.pereira', password: 'erick' },
  { username: 'igor.sgrott', password: 'igor' },
  { username: 'lucas.mannerich', password: 'lucas' },
  { username: 'marco.zanluca', password: 'marco' },
  { username: 'tiago.wosniak', password: 'tiago' },
  { username: 'vinicius.dalmonico', password: 'vinicius' },
  { username: 'alexsandro.narducci', password: 'alexsandro' },
  { username: 'kevin.depetris', password: 'kevin' },
  { username: 'gabriel.dickmann', password: 'gabriel' },
  { username: 'gabriel.labes', password: 'gabriel' },
  { username: 'jefferson.zimermann', password: 'jefferson' }
];

  // Verifica se o nome de usuário e a senha correspondem a um par válido
  var isValidUser = allowedUsers.some(function(user) {
    return user.username === username && user.password === password;
  });
  
  if (isValidUser) {
    // Redirecionar para a página inicial (home)
    window.location.href = 'home.html';
  } else {
    // Exibir mensagem de erro ou realizar outras ações de acordo com o resultado do login
    alert('Usuário ou senha inválidos!');
  }
