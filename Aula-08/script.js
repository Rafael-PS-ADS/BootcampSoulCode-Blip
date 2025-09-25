let nome = "Rafael";
let idade = 24;
let nota = 9.5;

nota = 8;

console.log(nome, idade, nota);

const nacionalidade = "Brasileiro";

console.log(nacionalidade);

console.log(typeof nota);
console.log(typeof idade);
console.log(typeof nome);
console,log(typeof false);
console.log(typeof {});
console.log(typeof []);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof (() => {}));

const n1 = 5;
const n2 = 3;

console.log(n1, n2);
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(n1 ** n2);

console.log (5 * 9 - 10 + 12 / 3);

let num = 3;
num = 5;
num += 3;
num *= 3;
num -= 2;
num /= 2;
console.log(num);

let c = 0;

console.log(c++);
console.log(++c);
console.log(c--);
console.log(--c);

console.log(5 == 7);
console.log(5 != 7);
console.log(4 > 4);
console.log(4 >= 4);
console.log(5 < 9);
console.log(5 <= 9);
console.log("Maria" == "maria");
console.log(true != false);
console.log (new Date().toLocaleDateString() == "2025-09-15");
console.log(4 === "4");

console.log(false == 0);
console.log(false == "");
console.log(true + 1);
console.log(true + true + false + 3);
console.log(false == 10);

console.log(false && true);
console.log(true || false);
console.log(!false && true);

console.log(((45 / 9 * 4 - 35) == 7) || (30 / 7) >= (3 + 7 * 2));

const altura = 150;
if (altura >= 160) {
    console.log("traque-traque-traque");
}

const nota1 = 7, nota2 = 6, nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

const x = 57;
console.log((x % 2 == 0) ? "Par" : "Ímpar");

const dia = 5;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
    }

    const cor = "azul";
    switch (cor) {
        case "verde":
        case "azul":
        case "amarelo":
            console.log("Cor primaria");
            break;
        case "vermelho":
        default:
    }