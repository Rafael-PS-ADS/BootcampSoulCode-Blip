const pessoa = {
    nomes: "Antônio",
    idade: 50,
    cidade: "Fortaleza"
};
for (let prop in pessoa) {
    console.log(prop, pessoa[prop]);
}