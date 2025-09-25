function dataAgora() {
    const hoje = new Date();
    return hoje.toLocaleDateString("pt-br");
}

const horaAgora = () => {
    const hoje = new Date();
    return hoje.toLocaleTimeString("pt-br");
}

export { dataAgora, horaAgora };