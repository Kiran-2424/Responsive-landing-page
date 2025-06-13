let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
let autoSlideInterval;

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
  resetAutoSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // 5 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

window.onload = () => {
  startAutoSlide();
};
