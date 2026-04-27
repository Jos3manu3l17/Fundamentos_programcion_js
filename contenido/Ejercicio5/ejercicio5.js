console.log("===== Icicio del sistema de conversion de temperatura =====");

// 5. Conversión de temperatura
// • Solicita una temperatura en Celsius.
// • Convierte a Fahrenheit usando la fórmula: F = (C × 9/5) + 32.
let temperatura = parseFloat(prompt("Ingrese la temperatura en grados celcius"));
let fahrenheit = (temperatura * 9/5) + 32;

console.log("La temperatura en Fahrenheit es: " + fahrenheit);

console.log("===== Fin del sistema de conversion de temperatura =====");
