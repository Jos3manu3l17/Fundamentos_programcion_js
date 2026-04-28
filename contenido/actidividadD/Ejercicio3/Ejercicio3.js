console.log("===== Inicio del sistema de promedio de edad =====");

//3. Promedio de edad en un grupo
//Solicita las edades de 4 personas.
//Calcula el promedio de edad.

let edad1 = parseFloat(prompt("Ingrese la primera edad: "));
let edad2 = parseFloat(prompt("Ingrese la segunda edad: "));
let edad3 = parseFloat(prompt("Ingrese la tercera edad: "));
let edad4 = parseFloat(prompt("Ingrese la cuarta edad: "));

let promedio =  (edad1 + edad2 + edad3 + edad4) / 4;


console.log("El promedio de edad del grupo de 4 personas es: " + promedio);


