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
// let st = setTimeout(showSlides,6000);


function ventana(url) {
	localStorage.aceptaCookies === 'true';
    let show = window.confirm("Política de privacidad");
    if (show === true) {

        window.open("https://www.inversionesbryan.com/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        window.close();
        // history.back()
        // window.close("https://www.inversionesbryan.com");
    }
};

function ventana2(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Términos y Condiciones");
    if (show === true) {

        let uno = window.open("https://www.inversionesbryan.com/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        window.close();
        // window.close("https://www.inversionesbryan.com");
    }
    
};

// ventana();


// $(document).ready(function() {
//     compruebaAceptaCookies()
// });


// if(confirm('Are you sure you want to do this?'))
// {
      // Do these things
//       $('input[type=text]').each(function(index, value) {
//            total += parseInt($(value).val() || 0);
//       });
//       $("#chkTotal").html(total);
// }

// document.querySelector("")


let slides = document.querySelectorAll(".proyecto");
let slideIndex = 0;
// let p2 = document.querySelectorAll(".proyecto2");

// slides = [...slides];


// console.log(slides);

function showSlides() {
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    };

    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
};

showSlides();

let tiempoSlide = setInterval(showSlides, 6000);

// showSlides();


// tiempoSlide;



function plusSlidesA() {
    clearInterval(tiempoSlide);
    // tiempoSlide;
        // clearTimeout(showSlides);
    // let i;
    // slides = document.getElementsByClassName("proyecto");
    // for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
    // }
    if(true) {

        // clearTimeout(showSlides, 6000);
        slideIndex++;
        // slides[slideIndex]
        // let i;
        // slides = document.getElementsByClassName("proyecto");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        };
        // setTimeout(showSlides, 12000);
    };

    if (slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
};

function plusSlidesB() {
    clearInterval(tiempoSlide);
    // let i;
    // slides = document.querySelectorAll(".proyecto");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    };

    slideIndex--;

    if(slideIndex <= 0) {
        slides[slideIndex]
        slideIndex = 4;
    };
    // else if (slideIndex === 0) {
    //     slideIndex = -1;
    // }
    slides[slideIndex-1].style.display = "block";
    // thumnail();

    // clearTimeout(showSlides,6000);
};

// clearTimeout(tiempoSlide);


// let galleries = document.querySelectorAll('.modal-gallery__thumnail');
// galleries = [...galleries];
// let slideThumnail = 0;

// const thumnails = [
//     '../img/proyecto9(1).jpg',
//     '../img/casap1(1).jpg',
//     '../img/Mejorandoelcampo(1).jpg',
//     '../img/remode1(1).jpg'
// ];

// slides.addEventListener('touchmove', () => {

// })



// console.log(type(thumnails));

// function thumnail() {

//     for (i = 0; i < galleries.length; i++) {
//     galleries[i].style.boxShadow = "none";
//     };

//     slideThumnail++;

//     if(slideThumnail > galleries.length) {slideThumnail = 1};
//     galleries[slideThumnail-1].style.boxShadow = "2px 5px 20px black";

//     setTimeout(thumnail,6000);

// };


// thumnail();



// let fotos = document.getElementsByClassName('modal-gallery__thumnails');

// let thum1 = fotos[0];
// thum1.addEventListener('click', () => {
//     slides[0]
// });










// function showSlidesThum() {
//     let i;
//     for (i = 0; i < thumnails.length; i++) {
//     slides[i].style.backgroundImage = `url('../pdefinitivo/public/img/${thumnails[slideThumnail]}')`;
//     };

//     slideThumnail++;

//     if(slideThumnail > thumnails.length) {slideThumnail = 1};

//     setTimeout(showSlides,6000);
// }


// galleries.forEach(thumbnail => {
    
//     thumbnail.addEventListener('click', () => {
//          slides.length[0];
//     });
// });



const terreno = document.querySelector('.publicidadIB');
const close = document.querySelector('.closeP');
// const invisible = document.querySelector('.terreno_invisible');
// const body = document.querySelector('body');

// let ads = function showAds() {
    // body.addEventListener('scroll', () => {
    //     terreno.style.display = 'flex';
    //     close.style.display = 'flex';
        // setTimeout(ad, 5000)
        
        // setTimeout(function(){
        //     function showAds() {
        //         body.addEventListener('scroll', (callback) => {
        //             terreno.style.display = 'flex';
        //             close.style.display = 'flex';
        // }, 5500);

    // });

// };

// terreno.addEventListener('scroll', ());
function showAds() {
    terreno.style.display = 'flex'
    close.style.display = 'flex'
};

// showAds();
setTimeout(showAds,2500);
// ads;
// setTimeout(ads, 5000);
// setTimeout(ads,5500);

// clearTimeout(ads);
// ads();
 
// showAds();
// setTimeout(ads(showAds), 5000);
// ads(setTimeout(5000));



// let closed = 
// terreno.style.display = 'none';

// setTimeout(ad, 5500);
// ad();
// 



close.addEventListener('click', () => {
    // e.preventDefault();
    let fadeOut = terreno.style.opacity = '0';
    terreno.style.transition = "opacity 3s ease-in-out"
    close.style.display = 'none';

    // if (true) {
        // terreno.style.zIndex = "0"
        // let timeSet = terreno.style.display = "none"
        // let timeSet;
    fadeOut = function(){ terreno.style.display = 'none'};
    setTimeout(fadeOut, 4000);
    // }

    // terreno.style.display = "none"
    // terreno.style.right = '100%';
    // terreno.classList.toggle('terreno_invisible');

    // terreno.style.transform = 'scaleX(3.0)';
    // return;
    // if (true) {
    //     ads = false;
    // }
    // clearTimeout();
    // showAds() = break;
    // return
    

    // terreno.classList.toggle("terreno_invisible")
    // body.removeEventListener('scroll', ads);
    ;
    // return {
        // ads.close
    // };
    // return
});



// ad;
// ads = false;

    // return;



// close.addEventListener('click', () => {

// })

terreno.addEventListener('click', () => {
    window.open("https://api.whatsapp.com/send?phone=50762926292", "ventana", "width=120 height=300 scrollbars=YES");
});

// setTimeout(terreno, 3000);



// let inner = function() {
//     console.log('inner 1');
//     }
    
//     let outer = function(callback) {
//     console.log('outer 1');
//     let timerId = setInterval(callback, 1000) /*ms*/;
//     console.log('outer 2');
    
//     setTimeout(function(){
//         clearInterval(timerId);
//     }, 5500);
//     }
    
//     console.log('test 1');
//     outer(inner);
//     console.log('test 2');

    
    // window.addEventListener("click", function() {
    //     console.log("clicked!");
    // });

