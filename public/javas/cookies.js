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
// let vix = document.querySelector(".ver");
let cajaProjectos =document.querySelector(".proyectos");
let slides = document.querySelectorAll(".pro");
let slides1 = document.querySelectorAll(".pro1");
let slides2 = document.querySelectorAll(".pro2");
let slides3 = document.querySelectorAll(".pro3");
let more = document.querySelector(".more");
let remodelaciones = document.querySelector(".remodelaciones");
let slideIndex = 0;
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;

more.addEventListener('click', () => {
    // cajaProjectos.style.display="none";
    cajaProjectos.classList.toggle("ver");
    remodelaciones.classList.toggle("re");
});

function showSlides() {
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides1[i].style.display = "none";
    slides2[i].style.display = "none";
    slides3[i].style.display = "none";
    };

    slideIndex++;
    slideIndex1++;
    slideIndex2++;
    slideIndex3++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
        slideIndex1 = 1;
        slideIndex2 = 1;
        slideIndex3 = 1;
};
    slides[slideIndex-1].style.display = "block";
    slides1[slideIndex1-1].style.display = "block";
    slides2[slideIndex2-1].style.display = "block";
    slides3[slideIndex3-1].style.display = "block";
};

let tiempoSlide = setInterval(showSlides, 8000);


function plusSlidesA() {
    clearInterval(tiempoSlide);
    if(true) {
        slideIndex++;
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides1[i].style.display = "none";
        slides2[i].style.display = "none";
        slides3[i].style.display = "none";
        };
    };

    if (slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
    slides1[slideIndex-1].style.display = "block";
    slides2[slideIndex-1].style.display = "block";
    slides3[slideIndex-1].style.display = "block";
};

function plusSlidesB() {
    clearInterval(tiempoSlide);
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides1[i].style.display = "none";
    slides2[i].style.display = "none";
    slides3[i].style.display = "none";
    };

    slideIndex--;

    if(slideIndex <= 0) {
        slides[slideIndex]
        slideIndex = 3;
    };
    slides[slideIndex-1].style.display = "block";
    slides1[slideIndex-1].style.display = "block";
    slides2[slideIndex-1].style.display = "block";
    slides3[slideIndex-1].style.display = "block";

};











// let fotos = document.getElementsByClassName("fotos");

// galeria.addEventListener('click', sliderGaleria); 


// function sliderGaleria() {

//     let lightBox = document.querySelectorAll(".light-box");
//     let light = document.querySelector(".light");
//     light.style.display = "flex";
// };


// sliderGaleria();



// const photos = document.querySelector('#photo');


let slidePhoto = [
    'public/img/proyecto9-n.jpg',
    'public/img/pbrisas.jpg',
    'public/img/proyecto4.jpg',
    'public/img/Mejorandocaminos.jpg',
    'public/img/camino.jpg',
    'public/img/Mejorandoelcampo.jpg',
    'public/img/casap1.jpg',
    'public/img/casap2.jpg',
    'public/img/casap3.jpg',
    'public/img/remode1.jpg',
    'public/img/remode2.jpg',
    'public/img/remode3.jpg',
    'public/img/remode4.jpg',
    'public/img/remode5.jpg'
];

let album = 0;
let album1 = 0;
let album2 = 0;
let album3 = 0;
// var j = 0;

let lightBox = document.querySelectorAll(".light-box");
let light = document.querySelector(".light");
let next = document.querySelector(".next");
let imageX = document.querySelector(".imagenX");
let cerrar = document.querySelector(".closePhoto");
let atras = document.querySelector(".back");
let caja1 = document.querySelector('#caja1');
let caja2 = document.querySelector('#caja2');
let caja3 = document.querySelector('#caja3');
let caja4 = document.querySelector('#caja4');
// let lightcierre = document.querySelector(".lightcierre")
 
caja1.addEventListener('click', () => {
    addPhotos();
    

    imageX.style.backgroundImage = "url('public/img/proyecto4.jpg')";
    slidePhoto = [
        'public/img/proyecto9.jpg',
        'public/img/proyecto1.jpg',
        'public/img/proyecto2.jpg',
        'public/img/proyecto3.jpg',
        'public/img/proyecto5.jpg',
        'public/img/proyecto6.jpg',
        'public/img/proyecto7.jpg',
        'public/img/proyecto8.jpg',
        'public/img/proyecto4.jpg'
    ];
    // retroceso();
    // album = 2;
    atras.addEventListener('click', () => {
        album--;
        if (album < 0) {
            album = 8;
            };
            imageX.style.backgroundImage = `url(${slidePhoto[album]})`;   
    });
});
caja2.addEventListener('click', () => {
    addPhotos();
    // album = 0;
    // album = 2;
    slidePhoto = [
        'public/img/casap1.jpg',
        'public/img/casap2.jpg',
        'public/img/casapenonome.jpg',
        'public/img/casap3.jpg'
    ];

    imageX.style.backgroundImage = `url(${slidePhoto[album1]})`;
    // album = 0;
    atras.addEventListener('click', () => {
        // for (i = 0; i < slidePhoto.length; i++) {
            // console.log(i);
        //     imageX.style.backgroundImage = `url(${slidePhoto[i-1]})`;
        // };
    //     slidePhoto = [
    //     'public/img/casap1.jpg',
    //     'public/img/casap2.jpg',
    //     'public/img/casapenonome.jpg',
    //     'public/img/casap3.jpg'
    // ];
        // slidePhoto;
        // album = 0;
        album1--;
        if (album1 < 0) {album1 = 3};
        imageX.style.backgroundImage = `url(${slidePhoto[album1]})`;   
    });
});

caja3.addEventListener('click', () => {
    addPhotos();
    // album = 0;
    slidePhoto = [
        'public/img/Mejorandocaminos.jpg',
        'public/img/camino.jpg',
        'public/img/Mejorandoelcampo.jpg'
    ];
    imageX.style.backgroundImage = `url(${slidePhoto[album2]})`;
    
    // album = 2;
    // album++;
     atras.addEventListener('click', () => {
        // for (i = 0; i < slidePhoto.length; i++) {
            // console.log(i);
        //     imageX.style.backgroundImage = `url(${slidePhoto[i-1]})`;
        // };
    //     slidePhoto = [
    //     'public/img/Mejorandocaminos.jpg',
    //     'public/img/camino.jpg',
    //     'public/img/Mejorandoelcampo.jpg'
    // ];
    // album = 0;
        album2--;
        if (album2 < 0) {album2 = 2};
        imageX.style.backgroundImage = `url(${slidePhoto[album2]})`;   
    });
});

caja4.addEventListener('click', () => {
    addPhotos();
    // album = 0;
    imageX.style.backgroundImage = "url('public/img/remode5.jpg')";
    slidePhoto = [
        'public/img/remode1.jpg',
        'public/img/remode2.jpg',
        'public/img/remode3.jpg',
        'public/img/remode4.jpg',
        'public/img/remode5.jpg'
    ];

    
    // album++;
    atras.addEventListener('click', () => {
        // album3 = 0;
        album3--;
        if (album3 < 0) {album3 = 4};
            imageX.style.backgroundImage = `url(${slidePhoto[album3]})`;   
    });

});




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


// function retroceso() {
    
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
            // light.style.display = "flex";
        //     slidePhoto[j];
        // };
    // };

        // i++;

        // };
    // album++;
    // if (i > slidePhoto.length) {i = 1};
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