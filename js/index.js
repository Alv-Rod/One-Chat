window.addEventListener('load', () => {
    const carousel = document.getElementById("offerings")
    const slides = document.getElementsByClassName("carousel-slide")
    const prevBtn = document.getElementById("carousel-prev")
    const nextBtn = document.getElementById("carousel-next")

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + (carouselRect.width / 2);
    const carouselOneThird = carouselRect.left + (carouselRect.width / 6);

        function getNextSlide() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].getBoundingClientRect();
                if (slides[i].getBoundingClientRect().left < carouselOneThird) {
                    if (slides[i+1].getBoundingClientRect().left < carouselOneThird) {
                        continue
                    } else {
                        let nextSlide = slides[i+1];
                        return nextSlide;
                    } 
                }
            }
        }
        function getPrevSlide() {
            for (let i = 0; i < slides.length; i++) {
                if (slides[i].getBoundingClientRect().left < carouselOneThird) {
                    if (slides[i+1].getBoundingClientRect().left < carouselOneThird) {
                        if (slides[i+2].getBoundingClientRect().left < carouselOneThird) {
                            let prevSlide = slides[i+1]
                            return prevSlide
                        } else {
                            let prevSlide = slides[i];
                            return prevSlide;
                        }
                    } else {
                        continue;
                    }
                } else {
                    continue
                }
            }
        }
        prevBtn.addEventListener('click', () => {
            var prevSlide = getPrevSlide();
            prevSlide.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            })
        })
        nextBtn.addEventListener("click", () => {
            var nextSlide = getNextSlide();
            nextSlide.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            })
        })
    })
    
    

    

    // nextBtn.addEventListener('click', () => {
    //     let carouselRect = carousel.getBoundingClientRect();
    //     let carouselCenter = carouselRect.left + (carouselRect.width / 2);
    //     let carouselOneThird = carouselRect.left + (carouselRect.width / 6);

    //     let slide = slides[i]
    //     slideRect = slide.getBoundingClientRect();

    //     if (slideRect.right > carouselOneThird) {
    //         if (i >= 2) {
    //             i -= 1;
    //         } else {
    //             i += 1;
    //         }
    //         slides[i].scrollIntoView({
    //             behavior: "smooth",
    //             block: "nearest",
    //             inline: "center"
    //         })
    //     }
    // })

    


// nextBtn.addEventListener("click", () => {
//     let carouselBounds = carousel.getBoundingClientRect();
//     let carouselCenter = carouselBounds.left + (carouselBounds.width / 2);
//     var goNext = false
//     var goPrev = true
    
//     // for (let i = 0; i < slide.length; i++) {
//     //     let slide = document.getElementsByClassName("carousel-slide")
//     //     var currentSlide = slide[i];
//     //     var nextSlide = slide[i + 1];


//     //     if (goNext == true) {
//     //         nextSlide.scrollIntoView({
//     //             behavior: "smooth",
//     //             block: "nearest",
//     //             inline: "center"
//     //         })
//     //     }
//     // }

//     for (let i = 0; i < slide.length; i++) {
//         let slide = document.getElementsByClassName("carousel-slide")
//         var currentSlide = slide[i];
//         var nextSlide = slide[i + 1];
//         var prevSlide = slide[i - 1];
//         let currentSlideBounds = currentSlide.getBoundingClientRect();
//         let nextSlideBounds = nextSlide && nextSlide.getBoundingClientRect();
//         let prevSlideBounds = prevSlide && prevSlide.getBoundingClientRect();
//         if (nextSlide && nextSlideBounds.right > carouselCenter) {
//             goNext = true
//         }
//         // if (nextSlide && nextSlideBounds.left > carouselCenter) {
//         //     if (nextSlideBounds.left - carouselCenter > carouselCenter - prevSlide && prevSlideBounds.right) {
//         //         goNext = true
//         //     } else {
//         //         goNext = false
//         //     }
//         // } else if (!nextSlide) {
//         //     goNext = false
//         // }
//         if (goNext == true) {
//             nextSlide.scrollIntoView({
//                 behavior: "smooth",
//                 inline: "center"
//             })
//             break
//         }
//     }
    
    
// })
// function getCentered() {
//     let carouselBounds = carousel.getBoundingClientRect();
//     let carouselCenter = carouselBounds.left + (carouselBounds.width / 2);

//     for (let i = 0; i < slide.length; i++) {
//         let currentSlide = slide[i];
//         let nextSlide = slide[i + 1];
//         let currentSlideBounds = currentSlide.getBoundingClientRect();
//         let nextSlideBounds = nextSlide.getBoundingClientRect();
//         if (nextSlideBounds.left > carouselCenter) {
//             if (nextSlideBounds.left - center < center - currentSlideBounds.right) {
//                 return nextSlide;
//             } else {
//                 return currentSlide;
//             }
//         } else if (!nextSlide) {
//             return currentSlide;
//         }
//     }
    
// }