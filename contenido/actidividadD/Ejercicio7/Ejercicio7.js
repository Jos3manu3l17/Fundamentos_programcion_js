function calcularDescuento() {
    var precio = document.getElementById('precio').value;
    var descuento = precio * 0.10;
    var precioFinal = precio - descuento;
    document.getElementById('resultado').innerText = "Precio con descuento: " + precioFinal;
}