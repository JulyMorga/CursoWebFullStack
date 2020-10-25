console.log("----------------- Condicionales ------------");

console.log("----------------- if ------------");

if (5>4) { 
  console.log("5 es mayor")
}

// if - else
// Estoy comparando estrictamente iguales.  
//  un doble igual lleva a cabo una conversión de tipo (cast) cuando se comparan dos cosas;
//   el triple igual hace lo mismo pero sin realizar ninguna conversión de tipo (cast) 
//   (simplemente devuelve falso si los tipos de los elementos a comparar son diferentes); 
if ( "a" === "a") {   // true
    console.log("pasó la condición")
} else {
  console.log("no pasó la condición")
}

var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// both false, except in rare cases
console.log(obj == null);   //false
console.log(obj == undefined);    //false

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

/* Actua diferente.. */
console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false


// if anidados
let pepeEdad = 11;
let juanEdad = 11;
if (pepeEdad > juanEdad) {
  console.log("Pepe es mayor")
} else if (pepeEdad == juanEdad) {
  console.log("Tienen la misma edad")
} else {
  // la condición no se cumplió
  console.log("Juan es mayor");
}

console.log("----------------- switch ------------");
let numero = 5;
switch (numero) {
  case 1: 
    console.log("El número es 1");
    break;
  case 2: 
    console.log("El número es 2");
    break;
  case 3:
    console.log("El número es 3");
    break;
  case 4: 
    console.log("El número es 4");
    break;
  case 5:
    console.log("El número es 5");
    break;
  default:
    console.log("No hay coincidencias");
}

if (numero == 1) {
  console.log("El número es 1");
} else if (numero == 2) {
  console.log("El número es 2");
} else if (numero == 3) {
  console.log("El número es 3");
} else if (numero == 4) {
  console.log("El número es 4");
} else if (numero == 5) {
  console.log("El número es 5");
} else {
  console.log("No hay coincidencias");
} 