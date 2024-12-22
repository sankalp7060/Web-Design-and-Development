// JavaScript for the slider functionality

let currentSlideIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show the current slide
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    showSlide(currentSlideIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the first slide
showSlide(currentSlideIndex);
