export function textAreaResize() {
    this.style.height = 'auto';
    if (this.scrollHeight >= 100) {
        this.style.height = '100px';
    } else {
        this.style.height = this.scrollHeight + 'px';
    }
}