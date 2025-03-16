console.log("Script starting...");

const slider = document.querySelector(".slider");
const textBoxes = document.querySelector(".text-boxes");
const boxes = document.querySelectorAll(".text-boxes .box");
const dots = document.querySelectorAll(".dot");

console.log("Elements found:", {
    slider: !!slider,
    textBoxes: !!textBoxes,
    boxes: boxes.length,
    dots: dots.length
});

let currentIndex = 0;
const totalBoxes = boxes.length;
let autoSlide;

function updateSliderPosition() {
    const offset = -currentIndex * (300 / totalBoxes);
    console.log("Sliding to offset:", offset);
    textBoxes.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    console.log("Updating dots for index:", currentIndex);
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalBoxes;
    console.log("Next slide, new index:", currentIndex);
    updateSliderPosition();
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        console.log("Dot clicked, index:", index);
        currentIndex = index;
        updateSliderPosition();
        resetAutoSlide();
    });
});

function startAutoSlide() {
    console.log("Starting auto-slide");
    autoSlide = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    console.log("Resetting auto-slide");
    clearInterval(autoSlide);
    startAutoSlide();
}

console.log("Initializing slider...");
updateSliderPosition();
startAutoSlide();

slider.addEventListener('mouseenter', () => {
    console.log("Hover: pausing auto-slide");
    clearInterval(autoSlide);
});
slider.addEventListener('mouseleave', () => {
    console.log("Hover out: resuming auto-slide");
    startAutoSlide();
});