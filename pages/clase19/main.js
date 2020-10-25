console.log("==================== Eventos ====================")

// Event
const foo = event => {
	// evento, evt or e
	console.log(event); 
};

const btn = document.querySelector("#alert");
btn.addEventListener("click", foo); 

let header = document.querySelector("h1");
header.addEventListener("click", funcionEvento);

function funcionEvento(evento) {
	console.log(evento.target)
}

// On Events: nos permiten asignar funciones a los eventos 
function miFuncion() {
	console.log("Ejecutamos un on event en una propiedad html")
}

let elementoOn = document.querySelector("#miFuncion");
elementoOn.onclick = function() {
	console.log("Ejecutamos un on event sin necesidad de llamar a la función en html")
}

// eventos del mouse
 const mouseEventos = evento => {
    const { type } = evento;
    const mouseEvent = document.querySelector('#mouseEvent');
        mouseEvent.textContent = `Qué evento se está ejecutando? ${type}`;
}
const gridItem = document.querySelector("#grid-item");
gridItem.addEventListener("click", mouseEventos);
gridItem.addEventListener("dblclick", mouseEventos);
gridItem.addEventListener("mouseenter", mouseEventos);
gridItem.addEventListener("mouseleave", mouseEventos);
gridItem.addEventListener("mousemove", mouseEventos);
gridItem.addEventListener("mousedown", mouseEventos);
gridItem.addEventListener("mouseup", mouseEventos);


// eventos del teclado 

const tecladoEventos = evento => {
	const { type } = evento;
	console.log(`Se ejecuto: ${type}`)
};
window.addEventListener("keydown", tecladoEventos);
window.addEventListener("keyup", tecladoEventos);
window.addEventListener("keypress", tecladoEventos);

let keyActions = evento => {
	let {type, keyCode, key, code} = evento;
	let tecla = document.querySelector("#teclado");
	tecla.innerHTML = `<ul> 
							<li>keyCode: ${keyCode}</li>
							<li>key: ${key}</li>
							<li>code: ${code}</li>
						</ul>
	`
}
window.addEventListener("keypress", keyActions);

// event.preventDefault: elimina la función por defecto de un elemento
let cargarEnlace = evento => {
	console.log("No podes");
	evento.preventDefault(); // eliminamos la función x defecto de a
}
let link = document.querySelector("a");
link.addEventListener("click", cargarEnlace);

// remove event: para eliminar un evento de un elemento
let eliminar = document.querySelector("a");
eliminar.removeEventListener("click", cargarEnlace); 

// eventos para formularios: focus, blur, change
const txt = document.querySelector("input[type='text']");
txt.addEventListener("focus", (evento) => {
	evento.target.style.background = "tomato";
});

txt.addEventListener("blur", (evento) => {
	evento.target.style.background = "blue";
})

const selectElement = document.querySelector(".select");
selectElement.addEventListener("change", (evento) => {
	console.log(evento);
	const result = document.querySelector(".result");
	  result.textContent = `Seleccionaste ${evento.target.value}`;
})

// operador ternario: condicional() ? true : false
let condicion = true;
condicion ? console.log("paso la condición") : console.log("no paso la condición")

if (condicion) { // lo mismo
	console.log("paso la condición")
} else {
	console.log("no paso la condición")
}

let otroEjemplo = Math.PI > 4 ? "Si" : "No";


// Objetos
const persona = {
	nombre: "pepito",
	edad: 35,
	direccion: "calle 123",
} 
// 2 formas de acceder a los objetos: [] o .
console.log(persona.nombre, persona.edad) // pepito
console.log(persona["edad"]);

let str = "inmutable";
console.log(str[0]) // i
str[0] = "ñ";
console.log(str[0]) // i

let arr = ["uno", "dos", "tres", "cuatro"]
console.log(arr); // "uno", "dos", "tres", "cuatro"
arr[0] = "mutable";
console.log(arr); // "mutable", "dos", "tres", "cuatro"

/* for .. of | for(variable of iterable) // {sentencia}
No se puede usar en objetos */
const miArray = ["A", "B", "C", "D", "E", "F", "G"]
for(let elementos of miArray) {
	console.log(elementos)
}
/* for .. in | for(variable in objeto) { // sentencia } */
let colores = {
	a: "rojo",
	b: "azul",
	c: "verde",
}
for(const prop in colores) {
	console.log(`El color ${prop} es ${colores[prop]}`);
}



window.onfocus();
// document.form1.button1.onclick = setBGColor();	//agrega esa funcionalidad al hacer click.
// 

//Metodo privados
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }   
})();

alert(Counter.value()); /* Muestra 0 */
Counter.increment();

// Función tradicional
function (a, b){
  return a + b + 100;
}
 
// Función flecha
(a, b) => a + b + 100;
// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;

// Función flecha
let suma = a => a + 100;
(param1, paramN) => expression

//This se refiere a la instancia. Las instancias se crean cuando se invoca la palabra clave new.
//De lo contrario, this se establecerá —de forma predeterminada— en el ámbito o alcance de window.

//flecha no tiene su propio this.
function Person() {
  this.age = 42; // <-- acá
  setTimeout(() => {// <-- Función flecha ejecutándose en el ámbito de "p" (una instancia de Person)
    console.log("this.age", this.age); // genera "42" porque la función se ejecuta en el ámbito de Person
  }, 100);
}


let s1 = '2 + 2'              // crea una string primitiva
let s2 = new String('2 + 2')  // crea un objeto String
console.log(eval(s1))         // devuelve el número 4
console.log(eval(s2))         // devuelve la cadena "2 + 2"

//Por estas razones, el código se puede romper cuando encuentra objetos String y 
//espera una string primitiva en su lugar, aunque generalmente los programadores 
//no necesitan preocuparse por la distinción.


//Un objeto String siempre se puede convertir a su contraparte primitiva con el método valueOf().

console.log(eval(s2.valueOf()))  // devuelve el número 4

Constructor String()

//Crea un nuevo objeto String. Realiza la conversión de tipos cuando se llama como función, en lugar de como constructor, lo cual suele ser más útil.

//Métodos estáticos

String.fromCharCode(num1 [, ...[, numN]])
//Devuelve una cadena creada utilizando la secuencia de valores Unicode especificada.

String.fromCodePoint(num1 [, ...[, numN]])
//Devuelve una cadena creada utilizando la secuencia de puntos de código especificada.

String.raw()
//Devuelve una cadena creada a partir de una plantilla literal sin formato.

//Propiedades de la instancia

String.prototype.length
//Refleja la length de la cadena. Solo lectura.

//Métodos de instancia

String.prototype.charAt(index)
//Devuelve el caracter (exactamente una unidad de código UTF-16) en el index especificado.

String.prototype.charCodeAt(index)
//Devuelve un número que es el valor de la unidad de código UTF-16 en el index dado.

String.prototype.codePointAt(pos)
//Devuelve un número entero no negativo que es el valor del punto de código del punto de código codificado en UTF-16 que comienza en la pos especificada.

String.prototype.concat(str[, ...strN])
//Combina el texto de dos (o más) cadenas y devuelve una nueva cadena.

String.prototype.includes(searchString [, position])
//Determina si la cadena de la llamada contiene searchString.

String.prototype.endsWith(searchString[, length])
//Determina si una cadena termina con los caracteres de la cadena searchString.

String.prototype.indexOf(searchValue[, fromIndex])
//Devuelve el índice dentro del objeto String llamador de la primera aparición de searchValue, o -1 si no lo encontró.

String.prototype.lastIndexOf(searchValue[, fromIndex])
//Devuelve el índice dentro del objeto String llamador de la última aparición de searchValue, o -1 si no lo encontró.

String.prototype.localeCompare(compareString[, locales[, options]])
//Devuelve un número que indica si la cadena de referencia compareString viene antes, después o es equivalente a la cadena dada en el orden de clasificación.

String.prototype.match(regexp)
//Se utiliza para hacer coincidir la expresión regular regexp con una cadena.

String.prototype.matchAll(regexp)
//Devuelve un iterador de todas las coincidencias de regexp.

String.prototype.normalize([form])
//Devuelve la forma de normalización Unicode del valor de la cadena llamada.

String.prototype.padEnd(targetLength[, padString])
//Rellena la cadena actual desde el final con una cadena dada y devuelve una nueva cadena de longitud targetLength.

String.prototype.padStart(targetLength[, padString])


//agrego de una forma los eventos. Ventaja, los puedo eliminar.
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);

//addEventListener()y removeEventListener().

// Obtiene todos los div.

var divs = document.querySelectorAll('div');
 
for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}

//Modifico y le cambio la funcionalidad al boton de onsubmit para que no cambie de pag.
var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');
 
form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'Completá ambos datos!';
  }
}


let iterable = new Uint8Array([0x00, 0xff]);
 
for (let value of iterable) {
  console.log(value);
}
// 0
// 255

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);
let iterable = new Set([1, 1, 2, 2, 3, 3]);


let articleParagraphs = document.querySelectorAll("article > p");
//el siguiente ejemplo añade la clase "read" a los párrafos (<p>) que son descendientes directos de un (<article>)
for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}


function* fibonacci() { // una función generador
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}
//No se deben reutilizar los generadores
//
//El bucle for...in iterará sobre todas las propiedades de un objeto.
// Más técnicamente, iterará sobre cualquier propiedad en el objeto que 
// haya sido internamente definida con su propiedad [[Enumerable]] configurada como true.
// 
// 
// 
// ¿Por qué usar for...in?
// Dado que for...in está construido para iterar propiedades de objeto,
// no se recomienda su uso con arreglos y opciones como Array.prototype.forEach()
//  y existe for...of, ¿cuál podría ser el uso de for...in?

