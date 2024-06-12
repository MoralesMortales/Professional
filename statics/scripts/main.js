ScrollReveal().reveal('.section', {
    duration: 1000, // Animation duration in milliseconds
});

document.getElementById('switch');

  
  document.getElementById("switch").addEventListener("click", function(event) {
    var nav = document.getElementById("nav-bar");
    var bottom = document.getElementById("switch");
    nav.classList.toggle("hidden");
    bottom.classList.toggle("hidden");
    event.stopPropagation(); // Evita que el clic en el botón propague al div
  });
  
  // Event listener para cerrar el div cuando se haga clic en otra parte de la pantalla
  document.addEventListener("click", function(event) {
    let nav = document.getElementById("nav-bar");
    var bottom = document.getElementById("switch");
     
    if (!nav.contains(event.target)) {
      nav.classList.add("hidden");
      bottom.classList.remove("hidden");

    }
  });

  // scripts.js
  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#Programming-languages-boxes');
    let currentIndex = 0;
    let interval;

    const updateCarousel = (index) => {
        const totalSlides = carousel.children.length;
        const slideWidth = carousel.children[0].offsetWidth + parseFloat(getComputedStyle(carousel.children[0]).marginRight) * 2;
        const offset = -index * slideWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    };

    const nextSlide = () => {
        const totalSlides = carousel.children.length;
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(currentIndex);
    };

    const resetInterval = () => {
        clearInterval(interval);
        interval = setInterval(nextSlide, 3000); // Cambiar de diapositiva cada 3 segundos
    };

    window.addEventListener('resize', () => {
        // Actualizar la posición del carrusel al redimensionar la ventana para mantenerlo centrado
        updateCarousel(currentIndex);
    });

    interval = setInterval(nextSlide, 3000); // Cambio automático inicial de diapositiva cada 3 segundos
});
