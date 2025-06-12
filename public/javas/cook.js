
// const bloqueRGPD = document.querySelector(".cookies");
const btnCookies = document.querySelector(".btn-cookies");
const url = `https://wvlhqwzk-5000.use2.devtunnels.ms/analytics`;
// const aceptaCookies = document.cookie;


// function compruebaAceptaCookies() {
//     if (localStorage.aceptaCookies == 'true') {
//         cajacookies.style.display = 'none';
//     }
// };

// function aceptarCookies() {
//     localStorage.aceptaCookies == 'true';
//         cajacookies.style.display = 'none';
// };

// $(document).ready(function() {
    // compruebaAceptaCookies();
// });

// function ventana(url) {
//     localStorage.aceptaCookies === 'true';
//     let show = window.confirm("Política de privacidad");
//     if (show === true) {

//         window.open("https://www.inversionesbryan.es/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
//     } else {
//         window.close("https://www.inversionesbryan.es/aboutus.html");
//     }
// };

// function ventana2(url) {
//     localStorage.aceptaCookies === 'true';
//     let show = window.confirm("Términos y Condiciones");
//     if (show === true) {

//         let uno = window.open("https://www.inversionesbryan.es/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
//     } else {
//         window.close("https://www.inversionesbryan.es/aboutus.html");
//     }
    
// };








function setCookie(cname, cvalue, exdays) {
    let d = new Date();

    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function removeCookie(cname){
    setCookie(cname,"",-1);
};

function detectCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0 && (name.length != c.length))  {
            return true;
        }
    }
    return false;
};

const dominio = window.location.origin;
let d = localStorage.getItem("acceptedCookies");

function count() {
    let analyticsData = {
        id: 4,
        count: 1,
        domain: dominio,
    };

    window.addEventListener("load", function() {
      navigator.sendBeacon(url, JSON.stringify(analyticsData));
    });

};

init();

count();

function init(){
    bloqueRGPD = document.querySelector('.cookies');
    if (localStorage.acceptedCookies != 'true') {
    bloqueRGPD.style.display = 'inline-block';    
    }

    if(detectCookie("rgpdOK")){
        eliminarBloqueRGPD();
    }else{
        btnCookies.addEventListener("click", () => {
            eliminarBloqueRGPD();
            // navigator.sendBeacon(url, JSON.stringify({
            //     id: 4,
            //     count: 1,
            //     domain: dominio,
            // }));
            setCookie("rgpdOK",1,365);
        });
    }
};

function eliminarBloqueRGPD(){
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
    localStorage.acceptedCookies = 'true';
};



let navToggle = document.querySelector(".navbar-toggler");
let navLink = document.querySelector(".navbar-nav");

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});


function ventana(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Política de privacidad");
    if (show === true) {

        window.open("https://www.inversionesbryan.es/pages/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
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

        window.open("https://www.inversionesbryan.es/pages/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        localStorage.aceptaCookies === 'false';
        // history.go(-1);
        // let one = 
        window.close();
        window.open("https://www.google.com/", "_self");
        
        
        // return false;
    }
    
};




let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());