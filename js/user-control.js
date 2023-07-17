import { loginEvent } from "./login.js";
import { signupEvent } from "./signup.js";

let signupBtn = document.querySelector('#signup-btn');
signupBtn.addEventListener('click', function () {
    authSignup();
})

function authSignup() {
    let userObject = JSON.parse(sessionStorage.getItem('userObject'));
    console.log(userObject);
    const userName = document.querySelector('#username');
    const email = document.querySelector('#email');
    console.log(userName.value)
    if (sessionStorage.getItem('userObject') === null) {
        signupEvent();
    } else {
        if (userName.value !== userObject.userName && email.value !== userObject.email) {
            console.log('here')
            console.log('result' + userName.value == userObject.userName)
            let signedUp = signupEvent();
            if (signedUp) {
                location = 'chat/main.html';
            } else {
                return;
            }
        } else {
            console.log('here')
            let signedInMessage = document.querySelector('#signed-in-msg');
            signedInMessage.textContent = 'E-mail ou Nome de usuário já registrado';
            signedInMessage.style.display = 'inline';
        }
    }
}

//sessionStorage.clear()

// function authUser(userObject, operation) {
//     if (operation === 'signup') {
//         if (userObject.isSigned === 'false') {
//             signupEvent();
//         } else {
//             authUser(user, 'login');
//         }
//     }
//     if (operation === 'login') {
//         if (userObject.isLogged === 'false') {
//             loginEvent();
//         } else {
//             location = './chat/main'
//         }
//     }
    
// }