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

const send = document.querySelector(".btn");
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
const comm = document.querySelector("#taskname");
let mail = document.querySelector("[name=email]").value;
let control = document.querySelector("[name=control]").value;
const form = document.querySelector("#formulario");


const enviarFormulario = (event) => {
    // event.preventDefault();
    
    console.log(
        event.target.email.value, 
        event.target.control.value
        );
};


// form.addEventListener('submit', enviarFormulario);

// comm.appendChild(mail);

// console.log(mail);


send.addEventListener("click", () => {
    mail = document.querySelector("[name=email]").value;
    control = document.querySelector("[name=control]").value;
    // mail = document.querySelector("[name=email]").value;
    // form = document.querySelector("#formulario");
    // const mail = document.getElementsByName("mail").value;
    // const control = document.getElementsByName("control").value;
    localStorage.aceptaCookies = "true";
    
    if (mail !== "" || control !== "") {
        
        // comm = document.querySelector("#task");

     
    let html = 
        `<div id="task">
            <span id="taskname">
                ${"Usuario: " + mail + "<br>" + "Comenta: " + control}
            </span>
        </div>`;

    comm.insertAdjacentHTML("afterend", html);
    alert("¡GRACIAS POR SU COMENTARIO!");
    form.addEventListener('submit', enviarFormulario);

    document.querySelector(".form-control").value="";

} else {
    alert("Rellene los espacios en blanco");
    
}
});






// function orne (click) {
//      mail = document.querySelector(".form-group .form-control").value;
//       comm = document.querySelector(".task");
//     if (mail == "") {
//     alert("Rellene los espacios en blanco");
// } else {
    // localStorage.aceptaCookies = "true";
    // comm.innerHTML +=
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
//     comm.innerHTML +=
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

// comm.push(mail);

// const comm = comments;
// comm.push(mail)
// comm;

// const comm = document.querySelector(".demo");




// let comm = document.querySelector(".demo").innerHTML += 
//         `<div class="task">
//             <span id="taskname">
//                 ${document.querySelector(".form-group input").value}
//             </span>
//             <button class="delete">
//                 <i class="far fa.trash-alt"></i>
//             </button>
//         </div>`;

// comm.push(4);


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





// const arrow = document.querySelectorAll(".arrow");
// const pro = document.querySelectorAll(".proyectos1");

// arrow.addEventListener("click", () => {
//     pro.classList.toggle("proyecto")
// });


