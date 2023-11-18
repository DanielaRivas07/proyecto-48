// nav con scroll tema blanco 

const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled')
    } else if (window.screenY < 56) {
        navEl.classList.remove('navbar-scrolled')
    }
});

// nav con scroll tema oscuro

const navEla = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEla.classList.add('nav-scrolled')
    } else if (window.screenY < 56) {
        navEla.classList.remove('nav-scrolled')
    }
});

// boton de tema blanco y oscuro al hacerle click cambie el tema

const swith = document.querySelector(".switch");

swith.addEventListener("click", e => {
    swith.classList.toggle("active");
    document.body.classList.toggle("active")
});

// sonido al hacerle click al corazón

const heart = document.querySelector("footer.main span[title='<3']");
let beat;
heart.addEventListener("mousedown", () => {
    if (!beat)
        beat = new Audio("img/corazonlatiendo.mp3");
    beat.currentTime = 0;
    beat.play();
});
// Agrandado del corazon al hacerle click 
function agrandarTexto(elemento) {
    elemento.classList.add('agrandado');
    elemento.removeEventListener('click', agrandarTexto);
}