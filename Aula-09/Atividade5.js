var endereco = { cidade: "São Paulo", estado: "SP", cep: "12345-67" };

for (var propriedade in endereco) {
    console.log(propriedade + ": " + endereco[propriedade]);
}