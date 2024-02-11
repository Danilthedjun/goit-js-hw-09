const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function getFormData(form) {
  const message = form.message.value.trim();
  const email = form.email.value.trim();
  return {
    message,
    email,
  };
}

form.addEventListener('input', e => {
  const data = getFormData(e.currentTarget);
  console.log(data);
  const jData = JSON.stringify(data);
  localStorage.setItem(LS_KEY, jData);
});

const rawData = localStorage.getItem(LS_KEY);
if (rawData) {
  const data = JSON.parse(rawData);
  form.message.value = data.message;
  form.email.value = data.email;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(LS_KEY);
  form.reset();
});
