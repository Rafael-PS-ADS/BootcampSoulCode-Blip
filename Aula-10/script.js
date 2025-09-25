//const somar = function (n1, n2) {
    //return n1 + n2;
//}

const somar = (n1,n2) => {
    return n1 + n2;
}

console.log(somar(4, 5));

const dobrar = n => n * 2;

console.log(dobrar(7));

console.log("Antes do Timeout")

setTimeout(() => {
    console.log("Olá função de seta!");
}, 5000);

console.log("Depois do Timeout")


async function assincrona() {
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios";
    const resposta = await fetch(url);
    const json = await resposta.json();
    console.log(json);
} cath (erro) {
    console.log(erro);
}

assincrona();
