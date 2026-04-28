function convertirMinutos() {
    var minutos = document.getElementById('minutos').value;
    var horas = Math.floor(minutos / 60);
    var restoMinutos = minutos % 60;
    document.getElementById('resultado').innerText = horas + " horas y " + restoMinutos + " minutos";
}