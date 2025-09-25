const altura = 5;
for (let i = 1; i <= altura; i++) {
    for (let j = 1; j <= i; j++) {
        linha += "*";
    }
    console.log(linha);
}

renderizarTorre(10);