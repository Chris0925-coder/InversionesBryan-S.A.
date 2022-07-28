/*var myAge = 35;

let compraRealizada = false;

if (compraRealizada === true) {
	let subsidioAdiocional = 10;
} 	else {
	let subsidioAdiocional = 5;

}*/

/*
const para = document.querySelector('p');

	para.addEventListener('click', updateName);

	function updateName() {
		let name = prompt('Enter a new name');
		para.textContent = 'Player 1 ' + name;
}


function createParagraph() {
	let para = document.createElement('em');
	para.textContent = 'You clicked the button!';
	document.body.appendChild(para);
}


const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
	buttons[i].addEventListener('click', createParagraph);
}




let title = ("Name " + " " + "Phone " + " " + "Email");


let name = "Maxwell Wright";
let nameRaj = "Raja Villereal";

let nameHel = "Helen Richards";


let phone = "(0191) 719 6495";

let phoneRaj = "0866 398 2895";

let phoneHel = "0800 1111";


let mail = "curabitur.egestas.nunc@nonummyac.co.uk";

let mailRaj = "posuere.vulputate@sed.com";

let mailHel = "libero@convallis.edu";


//console.log("Name ", "Phone ", "Email");

console.log(title.split(' '));

console.log(name , phone , mail);

console.log(nameRaj , phoneRaj , mailRaj);

console.log(nameHel , phoneHel , mailHel);*/
/*
const btn = document.querySelector('button');
btn.addEventListener('click', displayMessage);

function displayMessage() {

	const body = document.body;

	const panel = document.createElement('div');
	panel.setAttribute('class', 'msgBox');
	body.appendChild(panel);

	const msg = document.createElement('p');
	msg.textContent = 'This is a message box';
	panel.appendChild(msg);

	const closeBtn = document.createElement('button');
	closeBtn.textContent = 'x';
	panel.appendChild(closeBtn);

	closeBtn.addEventListener('click',() => panel.parentNode.removeChild(panel));
*/
/*	var conteo = 0;

	function contarCartas(carta) {
		var decision;

		switch (carta) {
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				conteo++;
				break;
			case 10:
			case "J":
			case "Q":
			case "K":
			case "A":
				conteo--;
				break;
		}
	if (conteo > 0) {
		decision = "Apostar";

	} else {
		decision = "Esperar";
	}

	return conteo + " " + decision;
}


console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));
*/


// let contacts = [{
// name: "Maxwell Wright",
// phone: "(0191) 719 6495",
// email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
// name: "Raja Villarreal",
// phone: "0866 398 2895",
// email: "posuere.vulputate@sed.com"
// }, {
// name: "Helen Richards",
// phone: "0800 1111",
// email: "libero@convallis.edu"
// }];

// write your code here

// let contacts1 = {
//     name: prompt("Add your name"), 
//     phone: prompt("Add your phone"),
//     email: prompt("Add your email")
// };  
// console.log(contacts1);
// let decision = window.confirm("Is it OK?");
// console.log(decision);
    
// let remove = confirm("Remove all data?");
// let message = remove ? "Deleting Data" : "Cancelled"
// console.log(message);
// contacts.push(contacts1, contacts); 
// console.log(contacts1.length);

// let last = contacts.length - 1;
// console.log(contacts.length);
// console.log(contacts[5]);
// console.log(contacts[0].name, contacts[0].phone, contacts[0].email);
// console.log(contacts[3].name, contacts[3].phone, contacts[3].email);
// document.write(contacts)

// navbar-toggler navbar-nav_visible

// createElement

// .removeChild

const navToggle = document.querySelector(".navbar-toggler");
const navLink = document.querySelector(".navbar-nav");
// const closeBtn = document.querySelector(".nana");

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});

// const closeBtn = document.querySelector(navToggle);
// const btn = document.querySelector('button');
// btn.addEventListener('click', displayMessage);
// 	closeBtn.textContent = 'x';
// 	navLink.appendChild(closeBtn);

// navLink.addEventListener('click',() => {
// 	navLink.classList.toggle("nana")
// });
