console.log("==================== Repaso ====================")
// forEach()	
// ejecuta la función indicada una vez por cada elemento del array
let array = [3, 4, 5];
array.forEach(elemento => {
	console.log(elemento) // 3, 4, 5
})
// every()
// verifica si todos los elementos en el arreglo 
// pasan la prueba implementada por la función dada.
console.log(array.every(num => num > 4)) // false

// some()
// verifica si algún elemento de un array cumple
//  con el test implementado por la función brindada
console.log(array.some(num => num > 4)) // true

// map()
//  crea un nuevo array a partir del resultado de cada ejecución por elemento.
let multiplicar = array.map(num => num*2);
console.log(multiplicar) //[6, 8, 10];

// find()
let buscar = array.find(elemento => elemento > 6)
console.log(buscar) // undefined

// filter
// crea un nuevo array con los elementos que cumplen cierta condición 
let array2 = ["uno", "dos", "tres", "cuatro", "cinco"];
let nuevoArray = array2.filter(elemento => elemento.length >= 4);
console.log(array2);
console.log(nuevoArray);

// reduce()
// ejecuta algo a cada elemento y devuelve un único valor conocido como acumulado
const suma = [10, 20, 20, 30].reduce((acumulador,elemento) => acumulador + elemento); // (acumulador, elemento) 
console.log(suma); // 80
const loMismo = [10, 20, 20, 50].reduce(function(a,b) {
	return a+b;
});
console.log(loMismo); // 100
console.log("-------------------------------")
const alumnos = [[9, 8, 7], [1, 5, 1], [8, 8, 7]];
const promedios = alumnos.map((alumnos) => { 
	let suma = alumnos.reduce((acumulador, elemento) => acumulador + elemento)
	return suma / alumnos.length;
});
console.log(promedios)
console.log("-------------------------------")
const nombres = ["pepe", "pepe2", "pepe", "pepe2", "pepito", "pepito", "pepe"];
const cantidad = nombres.reduce((acumulador,nombres) => {
	acumulador[nombres] = (acumulador[nombres] || 0) + 1;
	return acumulador;
}, {});
console.log(cantidad);


console.log("==================== getElementBy ====================")
// por ID
let elementoID = document.getElementById("id");
// por Clase
let elementoClase = document.getElementsByClassName("clase");
// por etiqueta
let elementoEtiqueta = document.getElementsByTagName("p");
// por el atributo Name
let elementoName = document.getElementsByName("name");


console.log("==================== querySelector ====================")
let elemento1 = document.querySelector("#selectorID");
let elemento2 = document.querySelector(".selectorClase");
let elemento3 = document.querySelector("h1");
let elemento4 = document.querySelector("div > p");
let elementos = document.querySelectorAll("p");
let array_elementos = Array.from(document.querySelectorAll("p")); // convertir el NodeList es un Array
console.log(array_elementos);


console.log("==================== Modificar elementos ====================")
// innerText - innerHTML
// innerText
console.log(document.querySelector("h1").innerText);
let modificarElemento = document.querySelector("h1");
modificarElemento.innerText = "JavaScript"; // reemplazo 
modificarElemento.innerText += ": DOM"; // si solo usamos = estamos reemplazando y si usamos += agregamos
// innerHTML
modificarElemento.innerHTML += "<p> Clase 18 </p>";


console.log("==================== Modificar CSS ====================")
// una vez q accedemos a un elemento podemos acceder a sus propiedades CSS con la propiedad .style
let modificarCSS = document.querySelector("p");
modificarCSS.style.display = "flex"; // .style.propiedad = valor css
modificarCSS.style.margin = "1rem";
modificarCSS.style.backgroundColor = "black"; // camelCase (el guión medio es resta en js)
modificarCSS.style.width = "35vw";
modificarCSS.style.padding = "2rem";
modificarCSS.style.color = "white";


console.log("==================== classList ====================")
// add - remove - replace - toggle - contains 

// add
let unElemento = document.querySelector("body");
unElemento.classList.add("bg-danger", "pt-5", "pl-3");
// remove
unElemento.classList.remove("pl-3");
// replace 
unElemento.classList.replace("bg-danger", "bg-warning");
// toggle 
unElemento.classList.toggle("agregoClase"); // la crea si no existe
unElemento.classList.toggle("agregoClase"); // la borra si ya existe
unElemento.classList.toggle("agregoClase", false) // con true agrega y con false saca
// contains
console.log(unElemento.classList.contains("bg-warning")); // true


// Crea un nodo de tipo Element.
var newDiv = document.createElement("div"); 

// Crea un nodo de tipo Text que almacena el contenido textual
var newContent = document.createTextNode("EstoyCreandoUnNuevoTextNode, esto va a aparecer" + 
										 "adentro del div"); 

// Añade un nodo como hijo de otro nodo.
newDiv.appendChild(newContent); //añade texto al div creado. 

// añade el elemento creado y su contenido al DOM 
var currentDiv = document.getElementById("div1"); 
document.body.insertBefore(newDiv, currentDiv); 


var nested = document.getElementById("div");
//eliminar un nodo
// var garbage = top.removeChild(nested);
// 


// childNodes: (propiedad) es una matriz que contiene todos los hijos de un nodo (pero no los hijos de éstos).
// firstChild y lastChild: (propiedades) contienen, respectivamente, el primer y último hijo de un nodo (es decir, son atajos para facilitar el uso de la matriz anterior).
// parentNode: (propiedad) permite acceder al nodo padre, esto es, al nodo del que cuelga el actual.
// previousSibling y nextSibling: (propiedades) permiten acceder a los hermanos del nodo.
// parentNode: (propiedad) permite acceder al nodo padre, esto es, al nodo del que cuelga el actual.
// hasChildNodes(): (método) devuelve un valor lógico indicando si el nodo tiene o no nodos hijos.


// Objetos:
var mycar = {
   marca: "Honda",
   modelo: "Accord",
   año: 1998
 };

  /* Mostrando 'Honda' */
 window.alert(mycar.marca);

 function fuerade(x) {
   function dentro(y) {
      return x + y;
   }
   return dentro;
}
resultado = fuerade(3)(5); // retorna 8

function addCuadrado(a,b) {
   function cuadrado(x) {
      return x * x;
   }
   return cuadrado(a) + cuadrado(b);
}
a = addCuadrado(2,3); // retorna 13
b = addCuadrado(3,4); // retorna 25
c = addCuadrado(4,5); // retorna 41

//definida con el constructor:
var multiply = new Function("x", "y", "return x * y;");
Una declaración de una función denominada multiply                                                 
function multiply(x, y) {
   return x * y;
}

 //función anónima
 var multiply = function(x, y) {
   return x * y;
}

var multiply = function func_name(x, y) {
   return x * y;
}