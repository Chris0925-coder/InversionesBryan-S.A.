let navToggle = document.querySelector(".navbar-toggler");
let navLink = document.querySelector(".navbar-nav");

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});

// let comment = document.querySelector(".btn"); 
// let ff = document.querySelector("form-control"); 


// comment.addEventListener("click", send);
// ff.addEventListener(Function, send);
// 	function send() {
// 		ff.addEventListener()
// 	if (ff === String) {
// 	alert("¡Gracias!, su comentario ha sido enviado.")
// }
// 	else {
// 		alert("Rellene las casillas en blanco")
// 	}
// };	

// let nav = document.getElementById("navjava");
// nav.innerHTML("ind1");

// let getImport = document.querySelector('link[rel=import]');
// let getContent = getImport.import.querySelector('#ind1');
// document.body.appendChild(document.importNode(getContent, true));

// import __ from '../../partials/navigation.html';

let send = document.querySelector(".btn");
// const coments = document.querySelector(".comentarios");
document.querySelector(".form-control").focus();


// function message() {
    
//     if (mail !== "") {
//         alert("¡GRACIAS POR SU COMENTARIO!")
//     } else {
//         alert("Rellene los espacios en blanco")
//     }
// };

// const meg = mail.addEventListener("keywords", () => {
//     if (mail !== String) {
//         return alert("¡GRACIAS POR SU COMENTARIO!")
//     } else {
//         alert("Rellene los espacios en blanco")
//     }
// });
// console.log(mail);
let mail = document.querySelector(".form-control");

send.addEventListener("click", () => {
    mail = document.querySelector(".form-control").value;
    // mail.focus() = tt9;
    // window.alert('¡GRACIAS POR SU COMENTARIO!');
    console.log(mail);
    if (mail == "") {
    alert("Rellene los espacios en blanco");
} else {
    alert("¡GRACIAS POR SU COMENTARIO!");
    // let addM = document.querySelector(".comentarios").innerHTML = `"<p>${mail}</p>"` + "<br>";
    // addM;    
    // let addM = document.querySelector(".comentarios").innerHTML = `${mail}` + "<p>Hola</p>";
    // addM;
}
});

// let mail = document.querySelector(".form-control").value;
// let addM = document.querySelector(mail).innerHTML(".comentarios");
// console.log(`"<p>${mail}</p>"` + "<br>");


// console.log(addM);

// function comments() {
    // document.querySelector(".comentarios").innerHTML = `"<p>${mail}</p>"` + "<br>";

// };

// comments();






