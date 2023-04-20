function compruebaAceptaCookies() {
    if (localStorage.aceptaCookies == 'true') {
        cajacookies.style.display = 'none';
    }
};

function aceptarCookies() {
    localStorage.aceptaCookies == 'true';
        cajacookies.style.display = 'none';
};

$(document).ready(function() {
    compruebaAceptaCookies();
});

function ventana(url) {
	localStorage.aceptaCookies === 'true';
    let show = window.confirm("Política de privacidad");
    if (show === true) {

        window.open("https://www.inversionesbryan.com/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        window.close();
    }
};

function ventana2(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Términos y Condiciones");
    if (show === true) {

        let uno = window.open("https://www.inversionesbryan.com/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        window.close();
    }
    
};

let slides = document.querySelectorAll(".proyecto");
let slideIndex = 0;

function showSlides() {
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    };

    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
};

let tiempoSlide = setInterval(showSlides, 6000);


function plusSlidesA() {
    clearInterval(tiempoSlide);
    if(true) {
        slideIndex++;
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        };
    };

    if (slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
};

function plusSlidesB() {
    clearInterval(tiempoSlide);
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    };

    slideIndex--;

    if(slideIndex <= 0) {
        slides[slideIndex]
        slideIndex = 4;
    };
    slides[slideIndex-1].style.display = "block";
};



const terreno = document.querySelector('.publicidadIB');
const close = document.querySelector('.closeP');

function showAds() {
    // terreno.style.display = 'flex'
    close.style.display = 'flex'
};

// showAds();
setTimeout(showAds,3000);

close.addEventListener('click', () => {
    let fadeOut = terreno.style.opacity = '0';
    terreno.style.transition = "opacity 3s ease-in-out"
    close.style.display = 'none';

    fadeOut = function(){ terreno.style.display = 'none'};
    setTimeout(fadeOut, 4000);
});

terreno.addEventListener('click', () => {
    window.open("https://api.whatsapp.com/send?phone=50762926292", "ventana", "width=120 height=300 scrollbars=YES");
});


let galeria = document.querySelector(".proyecto");

galeria.addEventListener('click', sliderGaleria); 


function sliderGaleria() {

    let lightBox = document.querySelectorAll(".light-box");
    let light = document.querySelector(".light");
    light.style.display = "flex";
};


// sliderGaleria();

        
        

        
        // light.slider.src = lightBox[0];
        // lightBox.style.transform = "scale(1)";
    
    // let img = document.getElementsByTagName('img');
// };

// sliderGaleria();