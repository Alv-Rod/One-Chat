import { signupErrorHandling } from "./signup-handler.js";

const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

export function signupEvent() {
    const userObject = {
        userName: userName.value,
        name: null,
        email: email.value,
        password: password.value
    }
    let signupSucessful = signupErrorHandling(userObject);
    console.log(signupSucessful)
    if (signupSucessful) {
        console.log(userObject)
        sessionStorage.setItem('userObject', JSON.stringify(userObject));
        return true;
    }
    else {
        return false;
    }
}
