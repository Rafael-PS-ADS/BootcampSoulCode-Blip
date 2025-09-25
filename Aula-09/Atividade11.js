function calcularMedia(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma / numeros.length;
}