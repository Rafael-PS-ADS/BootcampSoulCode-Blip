
async function buscarEstados() {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

async function buscarCidades(uf) {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

export { buscarEstados, buscarCidades };