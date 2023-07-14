const userNameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

export function signupErrorHandling(userObject) {
    if (userObject.userName.length === 0) {
        userNameError.textContent = 'O nome de usuário é obrigatório';
        userNameError.style.display = 'inline'
        userNameError.style.animation = 'errorFadeIn 0.1s ease-in-out';
    } else {
        userNameError.textContent = null;
    }
    
    if (userObject.email.length === 0) {
        emailError.textContent = 'O e-mail é obrigatório (pode ser fictício)';
        emailError.style.display = 'inline'
        emailError.style.animation = 'errorFadeIn 0.1s ease-in-out';
    } else {
        emailError.textContent = null;
    }

    if (userObject.password.length === 0) {
        passwordError.textContent = 'a senha é obrigatória';
        passwordError.style.display = 'inline'
        passwordError.style.animation = 'errorFadeIn 0.1s ease-in-out';
    } else {
        passwordError.textContent = null;
    }

    if (userObject.userName.length === 0 || userObject.email.length === 0 || userObject.password.length === 0) {
        return false;
    } else {
        return true;
    }
}