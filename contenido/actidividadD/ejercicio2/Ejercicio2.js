console.log("===== Inicio del sistema de saludo perzonalizado =====");

//2. Salario semanal 
// Solicita el número de horas trabajadas y el valor por hora. 
// Calcula el salario semanal.

const horas = parseFloat(prompt("Ingrese el numero de horas trabajas:"));
const valorhora = parseFloat(prompt("Ingrese el valor de la hora:"))

const salario = horas * valorhora;

console.log("El salario semanal es: " + salario);