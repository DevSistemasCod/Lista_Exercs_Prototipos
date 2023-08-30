export default class Hexagono {
    #lado;

    constructor(lado) {
        this.#lado = lado;
    }

    calcularArea() {
        //Math.sqrt(3): calcula a raiz quadrada de 3
        //Math.pow(this.#lado, 2): eleva o valor do comprimento do lado (this.#lado) ao quadrado.
        return (((3 * Math.sqrt(3)) * Math.pow(this.#lado, 2)) / 2);
    }
}