function calcular() {
    var massa = parseFloat(document.getElementById('massa').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = massa / (altura ** 2);

    document.getElementById('resultado').innerHTML = imc.toFixed(2);

    if (imc < 17) {
        document.getElementById('situacao').innerHTML = "Muito abaixo do peso!";
    } else if (imc >= 17 && imc < 18.5) {
        document.getElementById('situacao').innerHTML = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById('situacao').innerHTML = "Peso Ideal";
    } else if (imc >= 25 && imc < 30) {
        document.getElementById('situacao').innerHTML = "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
        document.getElementById('situacao').innerHTML = "Obesidade I";
    } else if (imc >= 35 && imc < 40) {
        document.getElementById('situacao').innerHTML = "Obesidade II";
    } else {
        document.getElementById('situacao').innerHTML = "Obesidade III";
    }
}

function unidadeMassa() {
    var massa = parseFloat(document.getElementById('massa').value);
    document.getElementById('massa').value = massa + ' kg';
}

function unidadeAltura() {
    var altura = parseFloat(document.getElementById('altura').value);
    document.getElementById('altura').value = altura + ' m';
}

var contador = 0; // Feito especialmente para a função mostrarTabela(), para executá-la somente uma vez

function mostrarTabela() {

    if (contador < 1){
        var elemento = document.getElementById('elemento');
        var left = 33.7;

        function deslocamento() {
            left = left - 0.5; // incrementando contador

            elemento.style.left = left + '%'; // aplicando estilo no elemento
            if (left < 19) { // verificando se chegou ao ponto desejado
                clearInterval(id); // interrompe o processo de deslocamento 
            }
        }
        var id = setInterval(deslocamento, 12);
        contador++;             
    }
    
}