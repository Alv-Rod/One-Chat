function createMessageBubble(sender) {
    const mainScreen = document.getElementById("chat-screen")
    let row = document.createElement("div");
    row.classList.add("row");

    const bubbleDiv = document.createElement("div");
    bubbleDiv.classList.add("msg-bubble");

    const msgContentSpan = document.createElement("span");
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

function scrollToMsg(msgSpan) {
    const msgBubble = msgSpan.parentNode;
    const msgRow = msgBubble.parentNode;
    
    msgRow.scrollIntoView({
        block: "end",
        inline: "end"
    });
}

export function submitMessage(textArea) {
    const message = textArea.value.trim();

    if (message.length === 0) {
        return
    }

    let msgSpan = createMessageBubble("you");
    msgSpan.textContent = message;
    scrollToMsg(msgSpan);
    textArea.value = null;
}


