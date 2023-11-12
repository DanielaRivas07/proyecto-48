const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled')
    }else if(window.screenY < 56){
        navEl.classList.remove('navbar-scrolled')
    }
});

const navEla = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEla.classList.add('nav-scrolled')
    }else if(window.screenY < 56){
        navEla.classList.remove('nav-scrolled')
    }
});

const swith = document.querySelector(".switch");

swith.addEventListener("click", e =>{
    swith.classList.toggle("active");
    document.body.classList.toggle("active")
})