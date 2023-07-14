const userName = document.querySelector('#username').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

export function signupEvent() {
    let userObject = {
        userName: userName,
        name: null,
        email: email,
        password: password
    }
    let signupSucessful = signupErrorHandling(user);
    if (signupSucessful) {
        sessionStorage.setItem('userObject', JSON.stringify(userObject));
    } else {
        
    }
}
