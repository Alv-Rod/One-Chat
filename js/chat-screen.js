export function scrollToBottom() {
    const mainScreen = document.querySelector('#chat-screen');
    mainScreen.scrollTop =  mainScreen.scrollHeight;
}
