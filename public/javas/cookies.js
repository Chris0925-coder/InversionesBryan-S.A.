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

// let about = document.querySelector('.about');
// let sobre = document.querySelector('.sobre');
//     about.addEventListener('mouseover', () => {    
//         sobre.classList.toggle('closeSobre');
//     });


// let slides = document.querySelectorAll(".pro");
// let slides1 = document.querySelectorAll(".pro1");
// let slides2 = document.querySelectorAll(".pro2");
// let slideIndex = 0;
// let slideIndex1 = 0;
// let slideIndex2 = 0;



// function showSlides() {
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     slides2[i].style.display = "none";
//     };

//     for (j = 0; j < slides1.length; j++) {
//         slides1[j].style.display = "none";
//     }

//     slideIndex++;
//     slideIndex1++;
//     slideIndex2++;

//     if(slideIndex > slides.length) {
//         slideIndex = 1;
//         slideIndex2 = 1;
// };

//     if(slideIndex1 > slides1.length) {
//         slideIndex1 = 1;
// };


//     slides[slideIndex-1].style.display = "block";
//     slides1[slideIndex1-1].style.display = "block";
//     slides2[slideIndex2-1].style.display = "block";
// };

// let tiempoSlide = setInterval(showSlides, 8000);





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
    terreno.style.transition = "opacity 3s ease-in-out";
    close.style.display = 'none';

    fadeOut = function(){ terreno.style.display = 'none'};
    setTimeout(fadeOut, 4000);
});

terreno.addEventListener('click', () => {
    window.open("https://api.whatsapp.com/send?phone=50762926292", "ventana", "width=120 height=300 scrollbars=YES");
});

// let myPage = ("https://www.inversionesbryan.com/");



function ventana(url) {
	localStorage.aceptaCookies === 'true';
    let show = window.confirm("Política de privacidad");
    if (show === true) {

        window.open("https://www.inversionesbryan.com/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        localStorage.aceptaCookies === 'false';
        // history.go(-1);
        // let one = 
        window.open("https://www.google.com/", "_self");
        
        window.close();
        // return false;
    }
    // return false;
};

function ventana2(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Términos y Condiciones");
    if (show === true) {

        window.open("https://www.inversionesbryan.com/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        localStorage.aceptaCookies === 'false';
        // history.go(-1);
        // let one = 
        window.open("https://www.google.com/", "_self");
        
        window.close();
        // return false;
    }
    
};
// let vix = document.querySelector(".ver");
// let cajaProjectos =document.querySelector(".proyectos");







// ***BOTON DE VER MAS***

// let more = document.querySelector(".more");
// let more1 = document.querySelector(".more1");
// let remodelaciones = document.querySelector(".remodelaciones");
// let suma = 1;

// more.addEventListener('click', () => {
//     cajaProjectos.classList.toggle("ver");
//     remodelaciones.classList.toggle("re");
//     suma++;
//     console.log(suma );
//     if (suma % 2 == 0) {
//         more.innerHTML = "Regresar";
//     } else {
//         more.innerHTML = "Más";
//     }
// });


// ***BOTON DE VER MAS***







// more1.addEventListener('click', () => {
//     remodelaciones.style.display = 'none';
//     cajaProjectos.style.display = 'block';
//         more1.style.display = 'none';
//         more.style.display = 'flex'; 
// });

// let slideIndexA = 0;


// function plusSlidesA() {
//     clearInterval(tiempoSlide);
//         for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         slides2[i].style.display = "none";
        
//         };

//         for (j = 0; j < slides1.length; j++) {
        
//         slides1[j].style.display = "none";
//         };

//     slideIndex++;
//     slideIndexA++;

//     if (slideIndex > slides.length) {slideIndex = 1};
//     if (slideIndexA > slides1.length) {slideIndexA = 1};
//     slides[slideIndex-1].style.display = "block";
//     slides1[slideIndexA-1].style.display = "block";
//     slides2[slideIndex-1].style.display = "block";
// };

// function plusSlidesB() {
//     clearInterval(tiempoSlide);
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     slides2[i].style.display = "none";
//     };

//     for (j = 0; j < slides1.length; j++) {
//     slides1[j].style.display = "none";
//     };

//     slideIndex--;
//     slideIndexA--;

//     if(slideIndex < 0) {
//         slideIndex = 2;
//     };
//     if(slideIndexA < 0) {
//         slideIndexA = 3;
//     }
//     slides[slideIndex].style.display = "block";
//     slides1[slideIndexA].style.display = "block";
//     slides2[slideIndex].style.display = "block";
// };











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
let atras = document.querySelector(".back");
let caja1 = document.querySelector('#caja1');
let caja2 = document.querySelector('#caja2');
let caja3 = document.querySelector('#caja3');
// let caja4 = document.querySelector('#caja4');
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
        'public/img/remode1.jpg',
        'public/img/remode2.jpg',
        'public/img/remode3.jpg',
        'public/img/remode4.jpg',
        'public/img/remode5.jpg',
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
        if (album1 < 0) {album1 = 8};
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

// caja4.addEventListener('click', () => {
//     addPhotos();
//     imageX.style.backgroundImage = "url('public/img/remode5.jpg')";
//     slidePhoto = [
//         'public/img/remode1.jpg',
//         'public/img/remode2.jpg',
//         'public/img/remode3.jpg',
//         'public/img/remode4.jpg',
//         'public/img/remode5.jpg'
//     ];
//     atras.addEventListener('click', () => {
//         album3--;
//         if (album3 < 0) {album3 = 4};
//             imageX.style.backgroundImage = `url(${slidePhoto[album3]})`;   
//     });

// });




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



let cerrar = document.querySelector(".closePhoto2");


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

cerrar.addEventListener('click', () => {
    // light.classList.toggle = lightcierre;
    light.style.display = 'none';
});


// function plusSlidesA() {

    // addPhotos();
        

        
        // light.slider.src = lightBox[0];
        // lightBox.style.transform = "scale(1)";
    
    // let img = document.getElementsByTagName('img');
// };

// sliderGaleria();
// let fotos = document.querySelector('.proyectos');
// let load = document.querySelector('#cargando');
// let bodyW = document.querySelector("body");
// const bodyW = $(document).width();
// W = fotos.width();
// console.log(load);



// function displayPhotos() {
    // if (tiempoSlide) {
    
    // load.style.display = 'none';
    // if (bodyW <= 900) {
    //     fotos.style.display = 'block';
    // } else {
    //     fotos.style.display = 'flex';
    // }
    // if (bodyW.width() <= 900) {
    //     fotos.style.display = 'block';
    // }
// };




// fotos.addEventListener('load',fotos.style.display = 'flex');
// let p = fotos.style.display = 'flex';


// displayPhotos();
// setTimeout(p, 4000);
// setTimeout(displayPhotos,8000);