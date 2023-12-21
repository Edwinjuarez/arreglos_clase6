//COMO DE CLARAR UN ARREGLO...
//const arreglo = [];

//para que nos sirve un arreglo nos pemite almacenar mas de un valor....
//como imprimir arreglos en general
const arreglo = [5, 27, 47, 12, 8, 7, 0];
console.log("arreglo General:", arreglo);
//como imprimir arreglos por unidad ...
console.log ("imprimiendo posicion 0 :",arreglo[0]);
console.log ("imprimiendo posicion 1 :",arreglo[1]);
console.log ("imprimiendo posicion 2 :",arreglo[2]);
console.log ("imprimiendo posicion 3 :",arreglo[3]);
console.log ("imprimiendo posicion 4 :",arreglo[4]);
console.log ("imprimiendo posicion 5 :",arreglo[5]);
console.log ("imprimiendo posicion 6 :",arreglo[6]);

const arreglo_letras = ["a", "b", "c", "d", "e", "f", "g"];
console.log(arreglo_letras);
console.log("imprimiendo el arreglo position 3:", arreglo_letras[3]);

const arreglos_nombres = ["jesus", "juan", "pedro", "marcos", "edvin gorro rojo",];

console.table("este es el arreglo completo nombres:", arreglos_nombres);
console.log("este es la posicion 2:", arreglos_nombres[2]);

//estas propiedades hay en console.
console.warn("esta es un warning");
console.error("este es un error");

var nombre = "edvin";
var apellido = "juarez";
console.log(nombre +" "+ apellido);