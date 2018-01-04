function calcular() {
    var massa = parseFloat(document.getElementById('massa').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = massa / (altura ** 2);

    document.getElementById('resultado').innerHTML = imc.toFixed(2);

}

function unidadeMassa() {
    var massa = parseFloat(document.getElementById('massa').value);
    document.getElementById('massa').value = massa + ' kg';
}

function unidadeAltura() {
    var altura = parseFloat(document.getElementById('altura').value);
    document.getElementById('altura').value = altura + ' m';
}