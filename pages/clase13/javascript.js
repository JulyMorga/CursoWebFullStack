// comentarios
/*  Esto
  	es un
  	Comentario  */

// Variables nombres Validos
let usuario;
let _apellido;
let $edad;		// undefined
let camelCaseLoRecomienda;
let nombreApellido;
let spake_case;
let nombre_apellido;
let PascalCase;
let NombreApellido;


// Ejemplos Invalidos
/*
let 123nombre;
let nombre-apellido;
let break;


*/

console.log("----- var, let y const ------");   // Manda mensaje a la consola.
var nombre;
nombre = "Julian Morganella";
// var nombre = "Julian Morganella2";	// ES VALIDO VOLVER A DECLARAR.


// let
let miEdad = 21;
miEdad = 26;
// let miEdad = 30;	// ERROR NO SE PUEDE VOLVER A DECLARAR.
console.log("Tengo " + miEdad + " años.");

// const
const usuario2 = "Pepe";
// usuario2 = "Juan";		// Error las constantes no se pueden reasignar.


function Ejemplo() {
	let variableLocal;
	/*
	ambito de mi variable local.
	 */
}

// String 

let str = "String con comillas dobles";
let str2 = 'String con comillas simple';
let str3 = `String con acento agudo`;	// alt+96
let str4 = `${str} y ${str2}`;		// Es lo mismo que let str4 = str + " y " +  str2;


// Number
let num = 123;
let num2 = 123.20;
let num3 = -123.55;

console.log("no es un number"*2)		//NaN  -> Not a number
let num4 = num * num2;
let num5 = num3 / num4;
let num6 = num3 / num4;


// Boolean true o false
let soyVerdadero = true;
let soyFalso = false;
let soyMenor = 4 < 1;
console.log(soyMenor);	// true

// null
let valorAdefinir = null;	//valor sin definir.

// undefined
let sinDefinir;

//genera un cuadro de dialogo

let username = prompt("¿Cómo te llamas?");	// Pedirle datos al usuario.

alert("Hola "+ username); 		// pasamos un contenido y mostramos un contenido.

console.error("Este es un mensaje de Error");
console.warn("Este es un mensaje de advertencia");
console.info("Este mensaje es de informacion");
// console.clear();	//Borra la consola.

document.write("<h1> Introduccion a javascript </h1>");		// Escribir nuestro codigo.

// document es un objeto. Y write es una funcion.
// objeto.funcion();

console.log("----- Funciones String ------");		// No es necesario el ;
let cantidad = 'sasas'
console.log(cantidad.length)	// 5

// string.repeat(n)
let repetir = "bla "
let repetir7 = repetir.repeat(7)
console.log(repetir7)

// String reemplace  (valor que busca, valor que reemplaza)
let hola = "hola Juliaan!"
console.log(hola)
console.log(hola.replace("hola","chau"))

parseInt("12")  	// intenta pasar un string a entero.
12 
parseInt()			// NaN

parseInt("12.323224") 	// 12

parseInt("      12.323224     ") 	// 12

parseInt("  50 dias") 	    // 50   porque empieza con numero.
parseInt(" Hace 50 dias") 	// NaN  
parseInt("  50asas50")   	// 50
parseInt(null) 	// NaN

parseFloat("112232.1132")		//112232.1132
//El resto es igual el comportamiento.
