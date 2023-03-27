
const boton = document.querySelector(".btn");
const form = document.querySelector("#form2");
let respuesta = document.querySelector(".resultado");
let valorA = document.querySelector(".valorA");
let valorB = document.querySelector(".valorB");
valorA == parseInt(valorA.value);
valorB == parseInt(valorB.value);
// console.log(valorA);

// document.write("Hola Mundo");
	
function add(a, b) {
	// valorA = document.querySelector("[name=valorA]").value;
	// valorB = document.querySelector("[name=valorB]").value;
	return a * b;
	// return res;
};



// console.log(add(4, 4));

// console.log(valorA, valorB);

boton.addEventListener("click", () => {
	event.preventDefault();
	// add(valorA, valorB);
	let resultado = add(valorA.value, valorB.value);
	// resultado == parseInt(resultado.value)
	// console.log(resultado);
	
	// add(a, b);
	
	// document.write(resultado);
	
	let message = 
        `<div id="task">
            <span id="taskname">
                ${"El area a calcular: " + resultado + " m2"}
            </span>
        </div>`;
        // respuesta.innerHTML = message;
	// if (true) {
		// add(valorA + valorB);
		respuesta.insertAdjacentHTML("afterEnd",message);
	// }
});
