let navToggle = document.querySelector(".navbar-toggler");
let navLink = document.querySelector(".navbar-nav");

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});

// let comment = document.querySelector(".btn"); 
// let ff = document.querySelector("form-control"); 


// comment.addEventListener("click", send);
// ff.addEventListener(Function, send);
//  function send() {
//      ff.addEventListener()
//  if (ff === String) {
//  alert("¡Gracias!, su comentario ha sido enviado.")
// }
//  else {
//      alert("Rellene las casillas en blanco")
//  }
// };   

// let nav = document.getElementById("navjava");
// nav.innerHTML("ind1");

// let getImport = document.querySelector('link[rel=import]');
// let getContent = getImport.import.querySelector('#ind1');
// document.body.appendChild(document.importNode(getContent, true));

// import __ from '../../partials/navigation.html';

let send = document.querySelector(".btn");
// const coments = document.querySelector(".comentarios");
// document.querySelector(".form-control").focus();


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
// let mail = document.querySelector(".form-group .form-control");
let comments = document.querySelector(".task");
let mail = document.querySelector(".form-group .form-control").value;

send.addEventListener("click", () => {
    mail = document.querySelector(".form-group .form-control").value;
    if (mail == "") {
    alert("Rellene los espacios en blanco");
} else {
    localStorage.aceptaCookies = "true";
    comments.innerHTML +=
        `<div class="task">
            <span id="taskname">
                ${mail}
            </span>
            <button class="delete">
                <i class="bi bi.trash-alt"></i>
            </button>
        </div>`;
    alert("¡GRACIAS POR SU COMENTARIO!");
}	
});

// function orne (click) {
//      mail = document.querySelector(".form-group .form-control").value;
//       comments = document.querySelector(".task");
//     if (mail == "") {
//     alert("Rellene los espacios en blanco");
// } else {
    // localStorage.aceptaCookies = "true";
    // comments.innerHTML +=
    //     `<div class="task">
    //         <span id="taskname">
    //             ${mail}
    //         </span>
    //         <button class="delete">
    //             <i class="bi bitrash-alt"></i>
    //         </button>
    //     </div>`;
    // alert("¡GRACIAS POR SU COMENTARIO!");
    // comments.push = mail;
// }
// };

// function ana () {
//      localStorage.aceptaCookies = "true";
//     comments.innerHTML +=
//         `<div class="task">
//             <span id="taskname">
//                 ${mail}
//             </span>
//             <button class="delete">
//                 <i class="bi bitrash-alt"></i>
//             </button>
//         </div>`;
//     alert("¡GRACIAS POR SU COMENTARIO!");
// }

// orne();

// comments.push(mail);

// const comm = comments;
// comm.push(mail)
// comm;

// const comments = document.querySelector(".demo");




// let comments = document.querySelector(".demo").innerHTML += 
//         `<div class="task">
//             <span id="taskname">
//                 ${document.querySelector(".form-group input").value}
//             </span>
//             <button class="delete">
//                 <i class="far fa.trash-alt"></i>
//             </button>
//         </div>`;

// comments.push(4);


// console.log(mail);

// const x = document.forms["form"]; console.log(x);
// let text = document.querySelector(".form-control").value;
// for (let i = 0; i < x.length; i++) {
//   text += x.elements[i].value + "<br>";
// } 
// let demo = document.querySelector(".demo");
// let mail = document.querySelector(".form-control").value;
// console.log(text);
// send.addEventListener("click", () => {
//     mail = document.querySelector(".form-control").value;
//     console.log(text);
//     document.querySelector(".demo").innerHTML = text + `<div><div>`;

//     document.appendChild(text) = demo;
// });


// let mail = document.querySelector(".form-control").value;
// let addM = document.querySelector(mail).innerHTML(".comentarios");
// console.log(`"<p>${mail}</p>"` + "<br>");


// console.log(addM);

// function comments() {
    // document.querySelector(".comentarios").innerHTML = `"<p>${mail}</p>"` + "<br>";

// };

// comments();



// let come = querySelector("img.bien");
// let bien = querySelector(".bienvenido");

// bien.addEventListener("", () => {
//     come.classList.toggle("#");
// });





