const slider = document.querySelector(".slider");
const textBoxes = document.querySelector(".text-boxes");
const boxes = document.querySelectorAll(".text-boxes .box");
const dots = document.querySelectorAll(".dot");
const body = document.body;
const html = document.documentElement;

let currentIndex = 0;
const totalBoxes = boxes.length;
let autoSlide;

function updateSliderPosition() {
    const offset = -currentIndex * (300 / totalBoxes);
    textBoxes.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalBoxes;
    updateSliderPosition();
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSliderPosition();
        resetAutoSlide();
    });
});

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

updateSliderPosition();
startAutoSlide();

slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});
slider.addEventListener('mouseleave', () => {
    startAutoSlide();
});

