import * as cidades from "./cidades.js";
import { dataAgora, horaAgora } from "./util.js";
import config from "./config.js";

const form = document.querySelector("#formulario");
const inputs = document.querySelectorAll("#formulario input");
const btnSend = document.querySelector("#formulario button[type=submit]");
const btnBack = document.querySelector("#formulario button[type=button]");

console.log(form);
console.log(inputs);
console.log(btnSend);

btnSend.textContent = "Enviar";
btnSend.style.fontSize = "1rem";
// btnSend.disabled = true;

const cliqueBtn = (event) => {
    event.stopPropagation();
    console.log("Clique.");
}

btnBack.addEventListener("click", cliqueBtn);

btnBack.addEventListener("dblclick", () => {
    console.log("Clique duplo.");
    btnBack.removeEventListener("click", cliqueBtn);
});

inputs.forEach(input => {
    input.addEventListener("mouseenter", () => {
        input.focus();
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulário enviado.");
});

document.body.addEventListener("click", (event) => {
    btnBack.style.transition = "all 0.2s linear";
    btnBack.style.position = "absolute";
    btnBack.style.top = `${event.clientY}px`;
    btnBack.style.left = `${event.clientX}px`;
});

console.log(dataAgora());
console.log(horaAgora());

console.log(config);


// Controles dos campos Cidade e Estado

const estado = document.querySelector("#estado");
const cidade = document.querySelector("#cidade");

cidade.disabled = true;

const estados = await cidades.buscarEstados();
estados.forEach(uf => {
    const option = document.createElement("option");
    option.textContent = uf.nome;
    option.value = uf.sigla;
    estado.append(option);
});

estado.addEventListener("change", async () => {
    const uf = estado.value;
    const municipios = await cidades.buscarCidades(uf);
    cidade.innerHTML = "";
    cidade.disabled = false;
    municipios.forEach(municipio => {
        const option = document.createElement("option");
        option.textContent = municipio.nome;
        cidade.append(option);
    });
});