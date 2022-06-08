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

const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const maxLetters = textArea.maxLength;

function btnValidation() {
  if (agreement.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'true');
  }
}

function textCounter() {
  const letters = textArea.value.length;
  const counterLetters = maxLetters - letters;
  counter.setAttribute('value', counterLetters);
  counter.innerHTML = counterLetters;
}

agreement.addEventListener('click', btnValidation);
textArea.addEventListener('keyup', textCounter);
