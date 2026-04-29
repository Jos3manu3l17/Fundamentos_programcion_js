console.log("===== Inicio del sistema de Consumo de gasolina =====");


//4.Consumo de gasolina
//Solicita la cantidad de kilómetros recorridos y el consumo por kilómetro(litros / km).
//Calcula los litros totales consumidos.


let nombre = (prompt("Ingrese su nombre usuario"));


let kilometros = parseFloat(prompt("Ingrese los kilometros recorridos"));
let consumo = parseFloat(prompt("Ingrese el consumo por kilometros (litros/km)"));


let litrostotales = kilometros * consumo;


console.log("señor " + nombre + " Los litros totales consumidos son: " + litrostotales + " Km");