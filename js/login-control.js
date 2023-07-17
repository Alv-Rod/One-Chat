let loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', authLogin);

function authLogin() {
    let userObject = JSON.parse(sessionStorage.getItem('userObject'));
    const userName = document.querySelector('#username');
    const password = document.querySelector('#password');

    if (userName.value === userObject.userName && password.value === userObject.password) {
        location = 'chat/main.html';
    } else {
        console.log('failed authentication');
    }
}