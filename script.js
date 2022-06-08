// Botão de login
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

function btnValidation() {
  if (agreement.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'true');
  }
}

agreement.addEventListener('click', btnValidation);

const retName = document.getElementById('name-return');
const retEmail = document.getElementById('email-return');
const retHouse = document.getElementById('house-return');
const retFamily = document.getElementById('family-return');
const retMateria = document.getElementById('materia-return');
const retAva = document.getElementById('ava-return');
const retObs = document.getElementById('obs-return');
// const logo = document.getElementById('trybewarts-forms-logo');
const getNone = document.getElementById('container-none');
const button = document.getElementById('button');
const form = document.getElementById('form-data');
const getName = document.getElementById('input-name');
const getLast = document.getElementById('input-lastname');
const getEmail = document.getElementById('input-email');
const getgouse = document.getElementById('house');
const getTextarea = document.getElementById('textarea');

function returnValue(event) {
  getNone.style.display = 'none';
  event.preventDefault();
  retName.innerText = `${getName.value} ${getLast.value}`;
  retEmail.innerText = getEmail.value;
  retHouse.innerText = getgouse.value;
  // retFamily.innerText =
  // retMateria.innerText =
  // retAva.innerText =
  retObs.innerText = getTextarea.value;
  form.style.display = 'flex';
  form.style.order = '0';
}

button.addEventListener('click', returnValue);
