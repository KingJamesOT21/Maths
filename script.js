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



const links = document.querySelector(".mobile-links");
const menu = document.querySelector('.menu');
const legal = document.querySelector('.mobile-legal')

menu.addEventListener('click', function() {
    if (menu.classList.contains('menu')) {
        // Open the menu
        links.style.opacity = '1';
        links.style.pointerEvents = 'all';
        legal.style.opacity = '1';
        legal.style.pointerEvents = 'all';
        menu.classList.add('close');
        menu.classList.remove('menu');
        body.classList.add('no-scroll');
        html.classList.add('no-scroll');
        // Scroll to top
        window.scrollTo({ 
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Close the menu
        links.style.opacity = '0';
        links.style.pointerEvents = 'none';
        legal.style.opacity = '0';
        legal.style.pointerEvents = 'none';
        menu.classList.remove('close');
        menu.classList.add('menu');
        body.classList.remove('no-scroll');
        html.classList.remove('no-scroll');
    }
});