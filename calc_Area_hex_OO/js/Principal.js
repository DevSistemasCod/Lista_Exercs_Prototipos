import Hexagono from './Hexagono.js';

document.addEventListener("DOMContentLoaded", function () {
    let inputLado = document.getElementById("lado");
    let buttonCalcular = document.getElementById("calcular");
    let resultado = document.getElementById("resultado");

    buttonCalcular.addEventListener("click", function () {
        let lado = parseFloat(inputLado.value);
        if (lado > 0) {
            let hexagono = new Hexagono(lado);
            let area = hexagono.calcularArea();
            // O método toFixed(2) é usado para formatar o valor de área em uma string com exatamente duas casas decimais.
            resultado.textContent = area.toFixed(2);
        } else {
            resultado.textContent = "Valor inválido. Digite um número positivo.";
        }
    });
});
