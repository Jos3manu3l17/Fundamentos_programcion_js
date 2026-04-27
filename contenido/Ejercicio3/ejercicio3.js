console.log("===== Inicio del sistema de calculo de promedio de tres notas =====");

// 3. Promedio de tres notas
// • Solicita tres calificaciones.
// • Calcula y muestra el promedio.

let nota1 = parseFloat(prompt("Ingrese la primera nota: "));
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
let nota3 = parseFloat(prompt("Ingrese la tercera nota: "));

let promedio =  (nota1 + nota2 + nota3) / 3;

console.log("El promedio de las notas agregadas es: " + promedio);

console.log("===== Fin del sistema de calculo de promedio de tres notas =====");
