(function() {

    const slides = document.querySelectorAll('.fade-slider__item');
    const slideMoveClass = "fade-slider__item--visible";
    let index = 0;

    setInterval(function() {
        slides[index].classList.remove(slideMoveClass);
        index++;

        if (index + 1 > slides.length) {
            index = 0;
        }
        slides[index].classList.add(slideMoveClass);

    }, 5000);

}());