function calcularTiempo() {
    var distancia = document.getElementById('distancia').value;
    var velocidad = document.getElementById('velocidad').value;
    var tiempo = distancia / velocidad;
    document.getElementById('resultado').innerText = "Tiempo: " + tiempo + " horas";
}