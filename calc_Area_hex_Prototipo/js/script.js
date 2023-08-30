// Definindo uma função construtora para o Hexágono
function Hexagono(lado) {
    this.lado = lado;
}

// Adicionando um método ao protótipo para calcular a área do Hexágono
Hexagono.prototype.calcularArea = function () {
    return (((3 * Math.sqrt(3)) * Math.pow(this.lado, 2)) / 2);
};

// Função para calcular a área quando o botão é clicado
function calcularArea() {
    let lado = parseFloat(document.getElementById("lado").value);

    if (lado <= 0) {
        alert("Por favor, insira um comprimento de lado válido.");
        return;
    }

    let hexagono = new Hexagono(lado);
    let area = hexagono.calcularArea();
    let resultado = document.getElementById("resultado");
    resultado.textContent = area.toFixed(2);
}
