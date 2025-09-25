const cidades = [
    "Fortaleza",
    "Recife",
    "São Paulo",
    "Rio de Janeiro",
    "Salvador",
];

console.log(cidades);

console.log(cidades[4]);

cidades[1] = "Manaus";

cidades[5] = "Recife";

delete cidades[3];

console.log(cidades);

console.log(cidades.length);

cidades.push("Natal");
cidades.pop();

console.log(cidades);

console.log(cidades.includes("Porto Alegre"));

console.log(cidades.join(", "));

cidades.sort();

console.log(cidades);

cidades.splice(3, 1);

console.log(cidades);

console.log(cidades.indexOf("Curitiba"));

for (let item of cidades) {
    console.log(item);
}

cidades.forEach(item => console.log(item));

const filtro = cidades.filter(item => item.includes("l"));

console.log(filtro);

const numeros = [23, 35, 75, 68, 54, 21, 48, 64];
const multOito = numeros.filter(n => n % 8 == 0);

console.log(numeros);
console.log(multOito);

const numero = numeros.filter(n => n % 7 == 0);

console.log(numero);

const nomes = ["danilo", "carlos", "geovana"];
console.log(nomes);

const copiaNomes = nomes.map(nome => nome.toUpperCase());

console.log(copiaNomes);

const copiaNumeros =  numeros.map(n => n * 2);
console.log(copiaNumeros);

const m2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(m2);

console.log(m2[2][0]);

const cliente = {
    nome: "Daniel",
    email: "daniel@email.com",
    telefone: "00 0000-0000",
    idade: 22,
    habilitado: true,
    endereco: {
        logradouro: "Av. Abc",
        cidade: "Fortaleza",
    },
    perfis: ["Administrador", "Técnico"],
    "data-nascimento": "12/12/1979"
};

console.log(cliente);

console.log(cliente.nome);
console.log(cliente.email);
console.log(cliente["data-nascimento"]);
console.log(cliente.endereco.logradouro);
console.log(cliente.perfis[0]);

cliente.nome = "Rafael";

console.log(cliente);

console.log(cliente.cartao?.numero);

delete cliente.telefone;

console.log(cliente);

cliente.cpf = "000.000.000-00";

console.log(cliente);

let a = { n: 4 };
let b = a;

b.n = 3;
a.m = 5;

console.log(a, b);

let c = {...a};
c.n = 8;

console.log(a, c);