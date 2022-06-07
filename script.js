const getSub = document.getElementById('btn-submit');

function valida() {
  const getEmail = document.getElementById('email');
  const getPsw = document.getElementById('psw');
  const email = getEmail.value;
  const psw = getPsw.value;
  if (email === 'tryber@teste.com' || psw === 123456) {
    alert('Olá, Tryber!');
    return true;
  } alert('Email ou senha inválidos.');
  return false;
}

getSub.addEventListener('click', valida);
