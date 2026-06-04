let navToggle = document.querySelector(".navbar-toggler");
let navLink = document.querySelector(".navbar-nav");

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});

function ventana(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Política de privacidad");
    if (show === true) {

        window.open("https://inversionesbryan-s-a.pages.dev/pages/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        localStorage.aceptaCookies === 'false';
        // history.go(-1);
        // let one = 
        window.close();
        window.open("https://www.google.com/", "_self");
        
    }

};

function ventana2(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Términos y Condiciones");
    if (show === true) {

        window.open("https://inversionesbryan-s-a.pages.dev/pages/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        localStorage.aceptaCookies === 'false';
        // history.go(-1);
        // let one = 
        window.close();
        window.open("https://www.google.com/", "_self");
        
        
        // return false;
    }
    
};