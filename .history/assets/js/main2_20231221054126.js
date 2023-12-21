//iteraciones.js
console.log("estoy en iteraciones");

var array_states = [
  "Escuintla",
  "San marcos",
  "Xela",
  "La nueva",
  "palin",
  "siquinala",
  "antigua",
  "la gomera",
  "el bosque",
  "canales",
  "tiquisate",
  "guastatoya",
  "guatemala",
  "altaverapaz",
  "el manantial",
  "hidalgo",
  "jalisco",
  "chiapas",
  "mexico",
  "quintana",
  "sonora",
  "tabasco",
  "tlaxcala",
  "yucanan",
  "zacateca",
  "baja california",
  "campeche",
  "puebla",
  "manantial",
  "jalisco",
  "cacao",
];

// for (let index = 0; index <= array_states.length; index++) {
//   console.log(array_states[index]); // esta funcion nos permite inprimir todos los estados en un bucle....
//   //console.log(index); // esta funcion nos permite imprimir las posiciones de cada estado en el bucle...
// }

var arreglo_nombres = [
  "juan",
  "pedro",
  "mario",
  "maria",
  "marcos",
  "juan",
  "David",
  "samuel",
  "lorena",
  "patria",
];

for(var index = 0; index < arreglo_nombres.length; index++){
  console.log(arreglo_nombres[index]);
}
 
opcion = promp("que opcion quieres tomar");

switch(opcion){
  case "prestamo":
  break;
alert("quieres hacer un prestamo");

case "retiro":
  break;
alert("quieres hacer un retiro");

case "ayuda":
  break;
alert("quieres ayuda?");

  default:
    alert("quieres hacer una cosa no contemplada");
    break;
}
