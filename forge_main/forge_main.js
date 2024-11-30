const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');

// Set slide width
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to each other
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Helper function to move to a specific slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Set the initial slide as current
slides[0].classList.add('current-slide');

// Event listener for previous button
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide =
        currentSlide.previousElementSibling || slides[slides.length - 1];
    moveToSlide(track, currentSlide, prevSlide);
});

// Event listener for next button
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    moveToSlide(track, currentSlide, nextSlide);
});
