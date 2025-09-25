const img = document.querySelector("#semaforo");
let indexImg = 0;
let interval = 0;
const frames = [
    "./images/vermelho.png",
    "./images/amarelo.png",
    "./images/verde.png"
];

function iniciar() {
    if (!interval) {
        interval = setInterval(() => {
            indexImg = (indexImg + 1) % 3;
            img.src = frames[indexImg];
        }, 500);
    }
}

function pausar() {
    clearInterval(interval);
    interval = 0;
}

export { iniciar, pausar };