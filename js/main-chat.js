import {textAreaResize} from './textarea.js';
import * as msg from './message.js';
import { showDashboard } from './dashboard-controller.js';
import { changeSlide } from './config-slides.js';
import { scrollToBottom } from './chat-screen.js';

let textArea = document.querySelector('#msg-input');
textArea.addEventListener('input', textAreaResize)

const submitButton = document.getElementById("msg-submit-btn");
submitButton.addEventListener('click', (event) =>{
    event.preventDefault()
    msg.submitMessage(textArea);
});

textArea.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        msg.submitMessage(textArea);
        event.preventDefault();
        textArea.style.height = 'auto';
    }
})

textArea.addEventListener("submit", function (event) {
    event.preventDefault();
    msg.submitMessage(textArea);
})

document.querySelector('.dashboard-btn').addEventListener('click', showDashboard);

const radioNodeList = document.querySelectorAll('.config-radio');
radioNodeList.forEach(radio => {
    radio.addEventListener('change', (event) => {
        changeSlide(event);
    })
})

window.addEventListener('resize', scrollToBottom);
window.addEventListener('orientationchange', scrollToBottom);
// window.addEventListener('focusin', scrollToBottom);

const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', () => {
    let sideBar = document.querySelector('.contact-listing');
    sideBar.style.display = 'flex';
    document.addEventListener('click', function hideSideBar(event) {
        if (!menuButton.contains(event.target) && !sideBar.contains(event.target)) sideBar.style.display = 'none';
    })
})