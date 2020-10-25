console.log("--------- Funciones --------")

function funcionSinParametros() { // función anónima
	return 5 * 8
}
function miPrimeraFuncion(num1, num2) { // función declarativa
	return num1 * num2
}
miPrimeraFuncion(5,2) // llamamos a una función con parametros

let multiplicacion = miPrimeraFuncion(2, 2) // guardar la función en una variable

/* Funcion anonima, solo la declaro, sin nombre pero para llamarla le tengo que llamar como la variable  */
let funcionExpresiva = function() { // función expresiva
	let a = "Podemos definir variables dentro de las funciones"
	console.log(a)
}

/* Llamo a la funcion anonima */
funcionExpresiva() // llamamos a una función sin parametros

function misDatos(nombre, apellido, edad) {
	return 'Me llamo ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años';
}
console.log(misDatos('Julian', 'Morga', 26))

let valor = 150;
let dolarAPesos = function(dolar) {
	return dolar * valor
};
console.log(dolarAPesos(1));


console.log("--------- Scope --------")

let otraFuncion = function() {
	let x = "Hola"
	var y = 1;

	if(true) {
		console.log(`let x vale ${x}`)
		console.log(`var y vale ${y}`)
	}

   console.log(`let x vale ${x}`)
   console.log(`var y vale ${y}`)
}

otraFuncion()


console.log("--------- Callback --------")

function saludar(callback) {
	console.log("Estoy haciendo algo!");
	callback() // ejectamos la función pero NO la creamos, solo estamos llamando a algo que todavía no existe como si existiera
}

saludar(function() { // acá va a existir la función callback
console.log("Respuesta!");
}); // solo estamos definiendo la función NO la estamos ejecutando