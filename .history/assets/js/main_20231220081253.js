//COMO DECLARAR UN ARREGLO...
//const arreglo = [];

//para que nos sirve un arreglo nos pemite almacenar mas de un valor....
//como imprimir arreglos en general
const arreglo_numero = [5, 27, 47, 12, 8, 7, 0];
console.log("arreglo completo", arreglo_numero);
console.log("esta es la impresion del arreglo posicion 2:", arreglo_numero[2]);

const arreglo_letras = ["A", "B", "C", "D", "E", "F", "G"];
console.log("este es un arreglo de letras", arreglo_letras);
console.log("esta es la imprecion de la letra:", arreglo_letras[3]);

const Arreglos_nombres = ["luis", "lucas", "pedro", "marcos", "juan", "mario"];
console.table("este es el Arreglo de nombres", Arreglos_nombres);
console.warn("este es un objeto de precaucion");
console.error("este es un consol de error");

var nombre = "edvin";
var apellido = "Juarez";

function concatenacion_String(String1, String2) {
  return String1 + " " + String2;
}
console.log(
  "esta es la concatenacion de string",
  concatenacion_String(nombre, apellido)
);

arreglo_nombres.push("diego");
console.log("agregando nuevo nombre",Arreglos_nombres);
hras = 2.26;
