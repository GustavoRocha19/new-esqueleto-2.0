const carrossel = document.querySelector('.carrossel');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function avancarSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    mostrarSlide(currentIndex);
}

function retrocederSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    mostrarSlide(currentIndex);
}

setInterval(avancarSlide, 7000); // Troca de slide a cada 3 segundos

mostrarSlide(currentIndex);

