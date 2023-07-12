let signupBtn = document.querySelector('#signup-btn');
signupBtn.addEventListener('click', function signUser() {
    const userName = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const userNameError = document.querySelector('#username-error')
    const emailError = document.querySelector('#email-error')
    const passwordError = document.querySelector('#password-error')


    if (userName.length === 0) {
        userNameError.textContent = 'O nome de usuário é obrigatório';
        userNameError.style.display = 'inline'
        userNameError.style.animation = 'errorFadeIn 0.1s ease-in-out';
    } else {
        userNameError.textContent = null;
    }
    
    if (email.length === 0) {
        emailError.textContent = 'O e-mail é obrigatório (pode ser fictício)';
        emailError.style.display = 'inline'
        emailError.style.animation = 'errorFadeIn 0.1s ease-in-out';
    } else {
        emailError.textContent = null;
    }

    if (password.length === 0) {
        passwordError.textContent = 'a senha é obrigatória';
        passwordError.style.display = 'inline'
        passwordError.style.animation = 'errorFadeIn 0.1s ease-in-out';
    } else {
        passwordError.textContent = null;
    }

    if (userName.length === 0 || email.length === 0 || password.length === 0) {
        return
    }

    sessionStorage.setItem('userName', userName);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);

    location = 'chat/main';
})

