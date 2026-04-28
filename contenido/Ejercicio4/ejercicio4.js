console.log("===== Inicio del sistema de conversion de monedas =====");

// 4. Conversión de monedas
// • Solicita un valor en pesos colombianos.
// • Convierte a dólares (suponiendo 1 USD = 4000 COP).

let pesos = parseFloat(prompt("Ingrese el valor en pesos colombianos"));
let dolares = pesos / 4000;

console.log("El valor en dolares es: " + dolares + " (USD)");
