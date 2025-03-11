let navToggle = document.querySelector(".navbar-toggler");
let navLink = document.querySelector(".navbar-nav");

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
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

// $(document).ready(function() {
    compruebaAceptaCookies();
// });

function ventana(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Política de privacidad");
    if (show === true) {

        window.open("https://www.inversionesbryan.es/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        window.close("https://www.inversionesbryan.es/aboutus.html");
    }
};

function ventana2(url) {
    localStorage.aceptaCookies === 'true';
    let show = window.confirm("Términos y Condiciones");
    if (show === true) {

        let uno = window.open("https://www.inversionesbryan.es/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
    } else {
        window.close("https://www.inversionesbryan.es/aboutus.html");
    }
    
};




// function compruebaAceptaCookies() {
//     if (localStorage.aceptaCookies == 'true') {
//         cajacookies.style.display = 'none';
//     }
// };

// function aceptarCookies() {
//     localStorage.aceptaCookies == 'true';
//     cajacookies.style.display = 'none';
// };

// $(document).ready(function() {
//     compruebaAceptaCookies();
// });

// let st = setTimeout(showSlides,6000);


// function ventana(url) {
//     localStorage.aceptaCookies === 'true';
//     let show = window.confirm("Política de privacidad");
//     if (show === true) {

//         window.open("https://www.inversionesbryan.es/cookies.html", "ventana", "width=120 height=300 scrollbars=YES");
//     } else {
//         window.close();
//     }
// };

// function ventana2(url) {
//     localStorage.aceptaCookies === 'true';
//     let show = window.confirm("Términos y Condiciones");
//     if (show === true) {

//         let uno = window.open("https://www.inversionesbryan.es/terminosycondiciones.html", "ventana", "width=120 height=300 scrollbars=YES");
//     } else {
//         window.close();
//     }
    
// };

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
let comm = document.querySelector("#taskname");
let mail = document.querySelector("[name=email]").value;
let message = document.querySelector("[name=control]").value;
let form = document.querySelector("#form1");


// const enviarFormulario = (event) => {
    // event.preventDefault();
    
//     console.log(
//         event.target.email.value, 
//         event.target.message.value
//         );
// };

// event.preventDefault();


// form.addEventListener('submit', enviarFormulario);

// comm.appendChild(mail);

// console.log(mail);


send.addEventListener("click", () => {
    mail = document.querySelector("[name=email]").value;
    message = document.querySelector("[name=control]").value;
    // mail = document.querySelector("[name=email]").value;
    // form = document.querySelector("#formulario");
    // const mail = document.getElementsByName("mail").value;
    // const control = document.getElementsByName("control").value;
    localStorage.aceptaCookies === "true";
    response = grecaptcha.getResponse();
    console.log(response);
    if (mail !== "" && message !== "" && response.length !== 0) {

        // comm = document.querySelector("#task");
        // const enviarFormulario = (event) => {
        // event.preventDefault();
    
        // console.log(
        //     event.target.email.value, 
        //     event.target.control.value
        // );
    // };
     
    let message1 =
        `<div id="task">
            <span id="taskname">
                ${"Usuario: " + mail + "<br>" + "Comenta: " + message}
            </span>
        </div>`;

        // comm = message1;

    
    alert("¡GRACIAS POR SU COMENTARIO!");

    let div = document.createElement("div");
    div.id = "div_id";
    div.className = "div_class";
    // div.style.display = "flex";
    // div.style.position = "relative";
    // message1.style = "color: white"
    div.style = "background-color: rgba(0,0,0,0.7)";
    // message1.style = "align-items: center";
    div.style.maxWidth = "400px";
    div.style.height = "200px";

    // div = message1;
    // div.insertAdjacentHTML("afterend", message1);
    div.innerHTML = `${message1}`;
    comm.append(div);


    // return true;
    // mes.insertAdjacentHTML("afterend", message1);
    
} else {
    document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
    alert("Rellene los espacios en blanco");
    // return;
}
});


// function sendMail(name, email, subject, message) {
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.set('Authorization', 'Basic ' + base64.encode('2f6d5a98b80a1972ba267fe3d24b20e8'+":" +'94767ea856c646e40d8d93a717f5c80f'));
//   localStorage.aceptaCookies === "true";

//   const enviarFormulario = (event) => {
//         event.preventDefault();
    
//         console.log(
//             event.target.email.value, 
//             event.target.control.value
//         );
//     };


//   const data = JSON.stringify({
//     "Messages": [{
//       "From": {"christianguardia@outlook.es": "", "Christian": ""},
//       "To": [{"Email": email, "Name": name}],
//       "TemplateID": 4480517,
//         "TemplateLanguage": true,
//       "Subject": subject,
//       "TextPart": message
//       "Variables": {mail, message}
//     }]
//   });

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: data,
//   };

//   fetch("https://api.mailjet.com/v3.1/send", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// };

// sendMail();

// sendMail();
// form.addEventListener('submit', sendMail);



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

// function sendMail(name, email, subject, message) {
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.set('Authorization', 'Basic ' + base64.encode('2f6d5a98b80a1972ba267fe3d24b20e8'+":" +'94767ea856c646e40d8d93a717f5c80f'));

//   const data = JSON.stringify({
//     "Messages": [{
//       "From": {"Email": "christianguardia@outlook.es", "Name": "Christian"},
//       "To": [{"Email": email, "Name": name}],
//       "Subject": subject,
//       "TextPart": message
//     }]
//   });

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: data,
//   };

//   fetch("https://api.mailjet.com/v3.1/send", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }


// function preventDefault() {
//     window.pop("Hola Mundo");
// };

// preventDefault();

function submitUserForm() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    };
    return true;
};

function verifyCaptcha() {
    document.getElementById('g-recaptcha-error').innerHTML = '';
};


// let date = document.querySelector('.date');

// date.append(new Date ().getFullYear ());