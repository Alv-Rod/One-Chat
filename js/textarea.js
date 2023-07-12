// const textArea = document.getElementById("msg-input");

// textArea.addEventListener("input", function textAreaResize() {
//     textArea.style.height = 'auto';
//     console.log(textArea.scrollHeight);
//     if (textArea.scrollHeight >= 100) {
//         textArea.style.height = '100px';
//     } else {
//         textArea.style.height = textArea.scrollHeight + 'px'
//     }
// })

export function textAreaResize() {
    this.style.height = 'auto';
    if (this.scrollHeight >= 100) {
        this.style.height = '100px';
    } else {
        this.style.height = this.scrollHeight + 'px';
    }
}