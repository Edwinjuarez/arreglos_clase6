//COMO DECLARAR UN ARREGLO...
//const arreglo = [];

//para que nos sirve un arreglo nos pemite almacenar mas de un valor....
//como imprimir arreglos en general
const arreglo_numero = [5, 27, 47, 12, 8, 7, 0];
console.log("arreglo completo", arreglo_numero);
console.log("esta es la impresion del arreglo posicion 2:", arreglo_numero[2]);

const arreglo_letras = ["A", "B", "C", "D", "E", "F", "G"];
console.log("este es un arreglo de letras",arreglo_letras);
console.log("esta es la imprecion de la letra:",arreglo_letras[3]);

const Arreglos_nombres =["luis", "lucas", "pedro", "marcos", "juan", "mario",];
console.table("este es el Arreglo de nombres", Arreglos_nombres);
hras = 2.23;

// for (let index = 90; index <=100; index++) {
//     console.log(index);     
// }
   
// var contraseña_correcta = "1235";
// var contraseña_usuario = "";
// contraseña_usuario = prompt("ingresa una contraseña");
// if (contraseña_correcta == contraseña_usuario){
//     alert("contraseña correctra.");
// }else{
//     alert("contraseña incorrecta losiento.....");

// }

// opcion = prompt("que opcion quieres hacer?");
// if (opcion == "prestamo") {
//     alert("quieres hacer un prestamo");
// }else if (opcion == "retiro"){
//     alert("quieres hacer un retiro");
// }else if(opcion == "ayuda"){
//     alert("quieres ayuda");
// }else{
//     alert("quieres hacer una cosa no contemplada");
// }


//  opcion = prompt("que opcion quieres hacer?");
//  switch (opcion) {
//     case "prestamo":
//         alert("quieres un prestamo");
//         break;

//         case "retiro":
//         alert("quieres ejecutar un retiro");
//         break;
        
//         case "ayuda":
//         alert("en que te puedo ayudar");
//         break;
        
        
 
//     default:
//         alert("quieres hacer algo no valido");
//         break;
//  }

// for (let index = 3; index <= 5; index++) {
// console.log(index);
    
// }

function valor_sumatoria (numero1 , numero2) {
    var suma = numero1 + numero2;
    return suma;
    
}
console.log("este es el valor de la suma.", valor_sumatoria (30 ,10));


var Nombre ="edvin rene";
var Apellido = "juarez mejia"

function Nombre_completo(String1 , String2) {
   return Nombre + " " + Apellido;
   
}
console.log(" este es el nombre completo::",(Nombre , Apellido)); 