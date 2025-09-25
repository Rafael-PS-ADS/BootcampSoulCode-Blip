const mensagemCarro = (carro) => {
    return `Carro: ${carro.marca} ${carro.modelo}`;
}
console.log(mensagemCarro({
    marca: "Toyota",
    modelo: "Hilux"
}));
