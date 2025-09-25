console.log(window);
console.log(document.head);
console.log(document.body);

const paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

for (let p of paragrafos) {
    console.log(p);
}

const subtitulos = document.getElementsByClassName("subtitulo");
console.log(subtitulos);

const titulo = document.getElementById("titulo-principal");
console.log(titulo);

const resultados = document.querySelectorAll("p");
console.log(resultados);

const resultado = document.querySelector("#ttulo-principal");
console.log(resultado);

resultado.textContent = "Objeto Modelo de Documento";
resultado.id = "Titulo-inicial";
resultado.setAttribute("title", "Titulo Principal do site");
resultado.style.color = "darkblue";

setInterval(() => {
    if (resultado.style.color == "darkblue") {
        resultado.style.color = "darkred";
    } else {
        resultado.style.color = "darkblue";
    }
}, 300);

const lista = document.querySelector("#lista-alunos");
const alunos = ["Caique", "Fernando", "Arthur", "Bruna"];
for (const aluno of alunos) {
    lista.innerHTML += `<li>${aluno}</li>`;
}