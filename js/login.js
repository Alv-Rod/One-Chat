export function loginEvent() {
    let userLoginJson = sessionStorage.getItem('userObject')
    let userLoginObject = JSON.parse(userLoginJson);
    sessionStorage.setItem('isLogged', 'true');
    location = './chat/main';
}

export function logoutEvent() {
    sessionStorage.setItem('isLogged', 'false');
    location = '../login';
}