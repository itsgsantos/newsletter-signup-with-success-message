const form = document.querySelector('#subscribe');
const successSection = document.querySelector('[data-success]');
const email = document.querySelector('[data-email]');
const subscribeButton = document.querySelector('[data-subscribe]');
const fieldEmail = document.querySelector('input#email');
const spanInvalid = document.querySelector('span.invalid');
const mainComponent = document.querySelector('#component');
const dismissButton = document.querySelector('[data-dismiss]');

function handleSubmit(e) {
  e.preventDefault();
  if (form.checkValidity()) {
    mainComponent.style.display = 'none';
    successSection.classList.add('show');
    form.reset();
  }
}

function handleChange(e) {
  email.innerText = e.target.value;
  if (!fieldEmail.checkValidity()) spanInvalid.classList.add('show');
  else spanInvalid.classList.remove('show');
}

function handleKeyup() {
  spanInvalid.classList.remove('show');
  fieldEmail.classList.remove('invalid', 'show');
}

function handleClick(e) {
  e.preventDefault();
  fieldEmail.value = '';
  mainComponent.style.display = 'grid';
  successSection.classList.remove('show');
}

form.addEventListener('change', handleChange);
form.addEventListener('submit', handleSubmit);
fieldEmail.addEventListener('keyup', handleKeyup);
dismissButton.addEventListener('click', handleClick);
