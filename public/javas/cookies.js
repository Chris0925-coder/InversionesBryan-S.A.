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







let galeria = document.querySelector(".proyectos");

// galeria.addEventListener('click', sliderGaleria); 


// function sliderGaleria() {

//     let lightBox = document.querySelectorAll(".light-box");
//     let light = document.querySelector(".light");
//     light.style.display = "flex";
// };


// sliderGaleria();



// const photos = document.querySelector('#photo');


const slidePhoto = [
    'public/img/Mejorandocaminos.jpg',
    'public/img/camino.jpg',
    'public/img/proyecto9.jpg',
    'public/img/pbrisas.jpg',
    'public/img/Lasnaves.jpg',
    'public/img/casap1.jpg',
    'public/img/casap2.jpg',
    'public/img/casap3.jpg',
    'public/img/remode1.jpg',
    'public/img/remode2.jpg',
    'public/img/remode3.jpg',
    'public/img/remode4.jpg',
    'public/img/remode5.jpg',
    'public/img/proyecto9-n.jpg'
];

var album = 0;
// var j = 0;

let lightBox = document.querySelectorAll(".light-box");
let light = document.querySelector(".light");
let next = document.querySelector(".next");
let imageX = document.querySelector(".imagenX");
let cerrar = document.querySelector(".closePhoto");
let atras = document.querySelector(".back");
// let lightcierre = document.querySelector(".lightcierre")
 
galeria.addEventListener('click', addPhotos);


// let crear = document.createElement("div");
//         crear.className = "light-box";
        // article += crear;
        
next.addEventListener('click', () => {
    // let i = 0;
    // if (i < slidePhoto.length)  {
        // do {
        // i++;
        
    for (i = 0; i < slidePhoto.length; i++) {
        // console.log(i);
        imageX.style.backgroundImage = `url(${slidePhoto[i]})`;
    };

    album++;
     if (album > slidePhoto.length) {album = 1};
     imageX.style.backgroundImage = `url(${slidePhoto[album-1]})`;
});



cerrar.addEventListener('click', () => {
    // light.classList.toggle = lightcierre;
    light.style.display = 'none';
});

atras.addEventListener('click', () => {
    for (i = 0; i < slidePhoto.length; i++) {
        // console.log(i);
        imageX.style.backgroundImage = `url(${slidePhoto[i-1]})`;
    };

    // album++;
    album--;

    // if(album <= 0) {
        // slidePhoto[album]
        // slidePhoto = -1;
    // };
     if (album <= 0) {album = 12};
     imageX.style.backgroundImage = `url(${slidePhoto[album]})`;
})

// function siguiente() {
    // clearInterval(tiempoSlide);
    // if(true) {
        // album++;
        // for (i = 0; i < slidePhoto.length; i++) {
        // slidePhoto[album];
        // };
    // };

    // if (album > slidePhoto.length) {album = 1};
    // slidePhoto[album-1];

    
    // };
// };

// next.addEventListener('click', siguiente);


function addPhotos() {
    // let i = 0; 
    // i++;
    light.style.display = 'flex';
    // for (i = 0; i < slidePhoto.length; i++) {
    // if (album < slidePhoto.length) { 
        //    if (j < slidePhoto[i]) {
        //     light.style.display = "none";
        //     slidePhoto[j];
        // };
    // };

        // j++

        // };
    // album++;
    // if (j > slidePhoto.length) {j = 1};
    //     article = `
    //         <article class="light-box" id="image1">
    //         <a class="next"><i class="bi bi-box-arrow-in-left"></i></a>
    //         <img src="${slidePhoto[j]}" width="300" loading="lazy" alt="fotocamino">
    //         <a class="next"><i class="bi bi-box-arrow-in-right"></i></a>
    //         <a href="#closed" class="close"><i class="bi bi-x-circle"></i></a>
    //     `;
 

        
        // photos.insertAdjacentHTML("afterend", slidePhoto[i]);
        // crear.innerHTML = `${article}`;
        // for (i = 0; i < slidePhoto.length; i++) {
        //     if (slidePhoto[i] > slidePhoto.length) {
        //     light.style.display = 'none';
        // }
    // }

        // light[album-1].style.display = "block";

        
        
        // crear.innerHTML = article;
        // light.appendChild(crear);
    // photos.innerHTML = article;

    // photos.insertAdjacentHTML("afterend", article);
};




// function plusSlidesA() {

    // addPhotos();
        

        
        // light.slider.src = lightBox[0];
        // lightBox.style.transform = "scale(1)";
    
    // let img = document.getElementsByTagName('img');
// };

// sliderGaleria();