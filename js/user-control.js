import { loginEvent } from "./login";
import { signupEvent } from "./signup";

let signupBtn = document.querySelector('#signup-btn');
signupBtn.addEventListener('click', function signUser() {
    authUser()
})


function authUser() {
    if (sessionStorage.getItem('email') === null) {
        signupEvent();
    } else {
        location = './signup';
    }
}

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