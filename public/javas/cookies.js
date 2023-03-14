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
        window.close("https://www.inversionesbryan.com");
    }
};

function ventana2(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Términos y Condiciones");
    if (show === true) {

        window.open("https://www.inversionesbryan.com/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        window.close("https://www.inversionesbryan.com");
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
var slideIndex = 0;
// slides = [...slides];


// console.log(slides);








function plusSlidesA() {
    // let i;
    // slides = document.getElementsByClassName("proyecto");
    // for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
    // }

        

    if(true) {
        slideIndex++;
        // slides[slideIndex]
        // let i;
        // slides = document.getElementsByClassName("proyecto");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        
    }

    if (slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = "block";

    
};

function plusSlidesB() {
    let i;
    slides = document.querySelectorAll(".proyecto");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    };

    slideIndex--;

    if(slideIndex <= 0) {
        // slides[slideIndex]
        slideIndex = 4;
    } 
    // else if (slideIndex === 0) {
    //     slideIndex = -1;
    // }
    slides[slideIndex-1].style.display = "block";
    thumnail();
};


let galleries = document.querySelectorAll('.modal-gallery__thumnail');
galleries = [...galleries];
let slideThumnail = 0;

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


function showSlides() {
    
    let i;

    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    };
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.backgroundImage = `url('../pdefinitivo/public/img/${thumnails[slideIndex]}')`;
    // };
    
    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex-1].style.display = "block";
    
    setTimeout(showSlides,6000);
};


showSlides();




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