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
