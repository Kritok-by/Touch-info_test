const form = document.getElementById('form'),
  input = document.querySelector('.input'),
  success = document.querySelector('.alert-success'),
  error = document.querySelector('.alert-danger');

const sendToServer = async (value) => {
  input.value = '';
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: value,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await res.json();
    success.innerHTML = `"${data.body}" добавлен в список!`;
    success.classList.add('view');
    setTimeout(() => {
      success.classList.remove('view');
    }, 2000);
  } catch (e) {
    new Error(e);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  input.value.trim()
    ? sendToServer(input.value)
    : (error.classList.add('view'),
      setTimeout(() => {
        error.classList.remove('view');
      }, 2000));
});
