const loginForm = document.querySelector('#signin');
const loginBtn = loginForm.querySelector('#signin__btn');
const welcome = document.querySelector('#welcome');

if (localStorage.getItem('user_id')) {
                welcome.querySelector('#user_id').innerText = localStorage.getItem('user_id');
                loginForm.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
            };

document.querySelector('#signin__form').addEventListener('submit', (e) => {
    console.log('sub')
    e.preventDefault();

    const fd = new FormData(loginForm.querySelector('#signin__form'));
    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    request.send(fd);

    request.addEventListener('readystatechange', () => {
        if (request.readyState === request.DONE) {
            if (JSON.parse(request.responseText)['success'] == true) {
                localStorage.setItem('user_id', `${JSON.parse(request.responseText)['user_id']}`);
                welcome.querySelector('#user_id').innerText = JSON.parse(request.responseText)['user_id'];
                loginForm.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
            } else {
                alert('Введёт неверный логин или пароль!');
            };
        };
    });
});

