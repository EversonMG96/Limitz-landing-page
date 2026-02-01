const slides = document.querySelector('.carouselimg');
let curentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    curentSlide = (curentSlide + 1) % slides.length;
    slides[curentSlide].classList.add('active');
});