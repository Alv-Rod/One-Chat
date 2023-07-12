// import 'submit.js'
import {textAreaResize} from './textarea.js';
import * as msg from './message.js';

import { showDashboard } from './dashboard-controller.js';
import { changeSlide } from './config-slides.js';

let textArea = document.querySelector('#msg-input');
textArea.addEventListener('input', textAreaResize)

const submitButton = document.getElementById("msg-submit-btn");
submitButton.addEventListener('click', () =>{
    msg.submitMessage(textArea);
});

textArea.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        msg.submitMessage(textArea);
        event.preventDefault();
        textArea.style.height = 'auto';
    }
})

document.querySelector('.dashboard-btn').addEventListener('click', showDashboard);

//codificação do overlay dashboard
// var dashBtn = document.querySelector('.dashboard-btn');
// var returnBtns = document.querySelectorAll('.return-btn');
// var dashboardIcon = document.querySelector('#dashboard-icon');
// // var returnIcon = document.querySelector('.dashboard-icon-wrapper .return-icon');
// var sideBar = document.querySelector('.contact-listing');

// dashBtn.addEventListener('click', function (event) {
//     var dashboardOverlay = document.getElementById('dashboard-overlay')
//     dashboardOverlay.style.display = 'flex';

//     sideBar.classList.remove('contact-listing');
//     sideBar.classList.add('contact-listing-disabled');
//     sideBar.style.transitionProperty = "none"

//     dashBtn.classList.remove('dashboard-btn');
//     dashboardIcon.style.display = 'none';
//     returnIcon.style.display = 'block';
// })

// for (let i = 0; i < returnBtnsList.length; i++) {
//     returnBtnsList[i].addEventListener('click', () => {
//         var dashboardOverlay = document.getElementById('dashboard-overlay')
//         dashboardOverlay.style.display = 'none';

//         sideBar.classList.remove('contact-listing-disabled');
//         sideBar.classList.add('contact-listing');
//         sideBar.style.transitionProperty = "width"

//         dashBtn.removeAttribute('class');
//         dashBtn.id = 'dashboard-btn';
//         dashboardIcon.style.display = 'block';
//         returnIcon.style.display = 'none';
//     })
// }
// returnBtnsList.forEach((returnBtn => {
//     returnBtn.addEventListener('click', () => {
//         var dashboardOverlay = document.getElementById('dashboard-overlay')
//         dashboardOverlay.style.display = 'none';

//         sideBar.classList.remove('contact-listing-disabled');
//         sideBar.classList.add('contact-listing');
//         sideBar.style.transitionProperty = "width"

//         dashBtn.removeAttribute('class');
//         dashBtn.id = 'dashboard-btn';
//         dashboardIcon.style.display = 'block';
//         returnIcon.style.display = 'none';
//     })
// }))

//seleção da janela de configuração atual
// const radioNodeList = document.querySelectorAll('.config-radio');
// const slideNodeList = document.querySelectorAll('.config-container > div');

const radioNodeList = document.querySelectorAll('.config-radio');
const slideNodeList = document.querySelectorAll('.config-container > div');

radioNodeList.forEach(radio => {
    radio.addEventListener('change', (event) => {
        changeSlide(event);
    })
})

