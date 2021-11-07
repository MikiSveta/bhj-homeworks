const form = document.getElementById('signin__form');
const button = document.getElementById('signin__btn');
const signin = document.getElementById('signin');
const user = document.getElementById('user_id');
const welcome = document.getElementById('welcome');

window.addEventListener('load', () => {
    if (localStorage.getItem('id')) {
       user.innerHTML = localStorage.getItem('id');
       welcome.classList.add('welcome_active');
    } else {
        signin.classList.add('signin_active');
    }
})

 button.addEventListener('click', (event) => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';

    xhr.send(formData); 
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 ) {
            const response = xhr.response;
            if (response.success === true) {
                signin.classList.remove('signin_active');
                localStorage.setItem('id', response.user_id);
                user.innerHTML = response.user_id;
                welcome.classList.add('welcome_active');

            } else {
                alert('Неверный логин/пароль')
            }
        }
    }
    event.preventDefault();     
 })



