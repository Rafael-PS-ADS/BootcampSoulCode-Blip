for (let i = 0; i < 10; i++) {
    console.log("Gol!")
}

for(let i = 1; i <= 5; i++) {
    console.log(i, "Show de bola");
}

for (let i = 8; i >= 1; i--) {
    console.log(i);
}

const produto = {nome: "IPhone 17", preco: 15000};
for (let prop in produto) {
    console.log(prop);
}

const alunos = ["Caique", "Felipe", "Erick"];

for (let index in alunos) {
    console.log(index);
}

for (let aluno of alunos) {
    console.log(aluno);
}

for (let letra of "Batata Doce") {
    console.log(letra);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

for (let i = 1; i <= 100; i++) {
    if (i !=7 && i % 7 == 0){
        console.log(i);
        break;
    }
}

for (let i = 1; i <= 60; i++) {
    if (i % 5 == 0) {
        continue;
    }
    console.log(i);
}

function cumprimentar(nome){
    console.log("Olá!", nome);
}

cumprimentar("Maria");
cumprimentar("Felipe");
cumprimentar("Ana");
cumprimentar("João");

function gerarAleatorio(inicio = 0, fim = 10) {
    let n = Math.random();
    n = n * (fim - inicio) + inicio;
    n = parseInt(n);
    return n;
}

const numero = gerarAleatorio(5, 15);
console.log(numero);

const numero2 = gerarAleatorio(100, 200);
console.log(numero2);

const numero3 = gerarAleatorio();
console.log(numero3);