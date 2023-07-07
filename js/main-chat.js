// 
function createMessageBubble(sender) {
    var mainScreen = document.getElementById("chat-screen")
    var row = document.createElement("div");
    row.classList.add("row");

    var bubbleDiv = document.createElement("div");
    bubbleDiv.classList.add("msg-bubble");

    var msgContentSpan = document.createElement("span");
    msgContentSpan.classList.add("msg-content");
    
    if (sender === "you") {
        bubbleDiv.classList.add("your-msg");
    } else if (sender === "contact"){
        bubbleDiv.classList.add("contact-msg");
    }

    bubbleDiv.appendChild(msgContentSpan);
    row.appendChild(bubbleDiv);
    mainScreen.appendChild(row);

    return msgContentSpan;
}

function submitMessage() {
    var input = document.getElementById("msg-input");
    var message = input.value.trim();

    if (message !== '') {
        msgSpan = createMessageBubble(sender="you");
        
        msgSpan.textContent = message;
    
        scrollToMsg(msgSpan);
    
        input.value = null;
    } else {
        return
    }
    
}

function scrollToMsg(msgSpan) {
    var mainScreen = document.getElementById("chat-screen");
    var msgBubble = msgSpan.parentNode;
    var msgRow = msgBubble.parentNode;
    var bubbleRect = msgRow.clientHeight;
    
    msgRow.scrollIntoView({
        block: "end",
        inline: "end"
    });
}

var textArea = document.getElementById("msg-input");

textArea.addEventListener("input", function textAreaResize() {
    textArea.style.height = 'auto';
    console.log(textArea.scrollHeight);
    if (textArea.scrollHeight >= 100) {
        textArea.style.height = '100px'
    } else {
        textArea.style.height = textArea.scrollHeight + 'px'
    }
})

var submitButton = document.getElementById("msg-submit-btn");
submitButton.addEventListener('click', submitMessage);

var textArea = document.getElementById("msg-input");
textArea.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        submitMessage();
        event.preventDefault();
        textArea.style.height = 'auto';
    }
})

//codificação do overlay dashboard
var dashBtn = document.getElementById('dashboard-btn');
var returnBtnsList = document.getElementsByClassName('return-btn');
var dashboardIcon = document.querySelector('#dashboard-icon');
var returnIcon = document.querySelector('.dashboard-icon-wrapper .return-icon');
var sideBar = document.querySelector('.contact-listing');

dashBtn.addEventListener('click', function (event) {
    var dashboardOverlay = document.getElementById('dashboard-overlay')
    dashboardOverlay.style.display = 'flex';

    sideBar.classList.remove('contact-listing');
    sideBar.classList.add('contact-listing-disabled');
    sideBar.style.transitionProperty = "none"

    dashBtn.classList.remove('dashboard-btn');
    dashboardIcon.style.display = 'none';
    returnIcon.style.display = 'block';
})

for (let i = 0; i < returnBtnsList.length; i++) {
    returnBtnsList[i].addEventListener('click', () => {
        var dashboardOverlay = document.getElementById('dashboard-overlay')
        dashboardOverlay.style.display = 'none';

        sideBar.classList.remove('contact-listing-disabled');
        sideBar.classList.add('contact-listing');
        sideBar.style.transitionProperty = "width"

        dashBtn.removeAttribute('class');
        dashBtn.id = 'dashboard-btn';
        dashboardIcon.style.display = 'block';
        returnIcon.style.display = 'none';
    })
}
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
const radioNodeList = document.querySelectorAll('.config-radio');
const slideNodeList = document.querySelectorAll('.config-container > div');

radioNodeList.forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedRadio = event.target.value;

        slideNodeList.forEach(slide => {
            slide.style.display = 'none';
        })

        const selectedSlide = document.querySelector(`.${selectedRadio}-slide`);
        if (selectedSlide) {
            selectedSlide.style.display = "flex";
            selectedSlide.style.animation = "0.2s ease-in slideScaleUp"
        }
    })
})

