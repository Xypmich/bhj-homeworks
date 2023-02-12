const btnPrev = document.getElementsByClassName('slider__arrow slider__arrow_prev')[0];
const btnNext = document.getElementsByClassName('slider__arrow slider__arrow_next')[0];
const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');

let slideCount = 0;
sliderDots[slideCount].className = 'slider__dot slider__dot_active';

function currentSlide(counter) {
    sliderItems.forEach(slide => slide.className = 'slider__item');
    sliderItems[counter].className = 'slider__item slider__item_active';
    if (!sliderDots[counter].className.includes('slider__dot_active')) {
        sliderDots.forEach(dot => dot.className = 'slider__dot');
        sliderDots[counter].className = 'slider__dot slider__dot_active';
    }
}

btnNext.onclick = () => {
    slideCount++;
    if (slideCount > sliderItems.length - 1) {
        slideCount = 0;
    }
    currentSlide(slideCount);
    sliderDots.forEach(dot => dot.className = 'slider__dot');
    sliderDots[slideCount].className = 'slider__dot slider__dot_active';
}
btnPrev.onclick = () => {
    slideCount -= 1;
    if (slideCount < 0) {
        slideCount = sliderItems.length - 1;
    }
    currentSlide(slideCount);
}

sliderDots.forEach(dot => {
    dot.onclick = () => {
        sliderDots.forEach(dot => dot.className = 'slider__dot');
        dot.className = 'slider__dot slider__dot_active';
        slideCount = Array.from(sliderDots).indexOf(document.querySelector('.slider__dot_active'));
        currentSlide(slideCount);
    }
})