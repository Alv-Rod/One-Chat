export function changeSlide(event) {
    const slideNodeList = document.querySelectorAll('.config-container > div');
    const selectedRadio = event.target.value;

    slideNodeList.forEach(slide => {
        slide.style.display = 'none';
    })

    const selectedSlide = document.querySelector(`.${selectedRadio}-slide`);
    if (selectedSlide) {
        selectedSlide.style.display = "flex";
        selectedSlide.style.animation = "0.2s ease-in slideScaleUp"
    }
}