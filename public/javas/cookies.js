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


let slides = document.getElementsByClassName("proyecto");
var slideIndex = 0;



// console.log(slides);

function showSlides() {
    let i;
    // slides = document.getElementsByClassName("proyecto");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }

    // slideIndex = 0;

    slideIndex++;

    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    // slides[slideIndex-1].style.transition = "transform 0.6s ease-in-out";
    setTimeout(showSlides,6000);
    // console.log(slideIndex);
};




showSlides();

function plusSlidesA() {
    let i;
    slides = document.getElementsByClassName("proyecto");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }

        slideIndex++;

    if(true) {
        slides[slideIndex]}
    slides[slideIndex-1].style.display = "block";
    
};

function plusSlidesB() {
    let i;
    slides = document.getElementsByClassName("proyecto");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }

    slideIndex--;

    if(true) {
        slides[slideIndex-1]}
    slides[slideIndex-1].style.display = "block";
};


