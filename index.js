const form = document.getElementById('form'),
  input = document.querySelector('.input');

const sendToServer = async (value) => {
  try {
    const res = await fetch('https://docs.postman-echo.com', {
      method: 'POST',
      body: JSON.stringify(value),
    });
    const data = await res.json();
    console.log(data);
  } catch (e) {
    new Error(e);
  }
};

form.addEventListener('submit', (e) => {
  input.value.trim() ? sendToServer(input.value) : alert('Вы ничего не ввели');
  e.preventDefault();
});
