console.log("===== Inicio del sistema de Factura Compra =====");

// Factura De Compra simple

//Solicita el nombre de un producto, su precio y la cantidad comprada.
//Calcula el total a pagar.
//Muestra: "El total a pagar por [cantidad] [producto] es: [total]".



const producto = prompt("Nombre del producto que desea:")
const precio = parseFloat(prompt("Ingrese el precio del producto:"));
const cantidad = parseFloat(prompt("Ingrese la cantidad comprada: "));

const total = precio * cantidad;

console.log("El total a pagar por " + cantidad  + producto + " es " + total);