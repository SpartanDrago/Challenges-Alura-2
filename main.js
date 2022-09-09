document.getElementById('btn-word').style.display = "none";
document.getElementById('game').style.display = "none";

const IniciarJuego = document.querySelector("#go");
const NuevaPalabra = document.querySelector("#add");
const Medoy = document.querySelector("#rendirse");
const cancel = document.querySelector("#cancelar")

function Iniciar() {
    document.getElementById('btn-init').style.display = "none";
    document.getElementById('game').style.display = "";
}

function NewWord() {
    document.getElementById('btn-word').style.display = "";
    document.getElementById('btn-init').style.display = "none";
}

function regresar() {
    document.getElementById('game').style.display = "none";
    document.getElementById('btn-init').style.display = "";
}

function cancelar() {
    document.getElementById('btn-word').style.display = "none";
    document.getElementById('btn-init').style.display = "";
}

IniciarJuego.onclick = Iniciar;
NuevaPalabra.onclick = NewWord;
Medoy.onclick = regresar;
cancel.onclick = cancelar;
