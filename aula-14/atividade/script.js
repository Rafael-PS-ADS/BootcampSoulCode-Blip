import { iniciar, pausar } from "./semaforo.js";

const btnIniciar = document.querySelector("#iniciar");
const btnPausar = document.querySelector("#pausar");

btnIniciar.addEventListener("click", iniciar);
btnPausar.addEventListener("click", pausar);