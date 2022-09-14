/* LLamado */
document.getElementById('box-word').style.display = "none";
document.getElementById('box-game').style.display = "none";

/* Botones */
var iniciarJuego = document.getElementById('go');
var jugar = document.getElementById('jugar');
var addpal = document.getElementById('add');
var btnguardaPalabra = document.getElementById('save');

/* Funciones */
function goJuego() {
    document.getElementById('box-init').style.display = "none";
    document.getElementById('box-game').style.display = "";

}

function ventanaPalabra() {
    document.getElementById('box-init').style.display = "none";
    document.getElementById('box-game').style.display = "none";
    document.getElementById('box-word').style.display = "";
}

function name() {
    let addnewword = document.getElementById('inputAddPal').value;
    console.log(addnewword);
}

function addDiv() {

    for (let i = 0; i < 8; i++) {
        $('.palabras').append(
            $('<div>').prop({
                id: 'innerdiv',
                innerHTML: '<p>'+i+'</p>',
                className: 'divpalabra'
            })
        );

        $('.letras').append(
            $('<div>').prop({
                id: 'innerdiv',
                innerHTML: '<h1>A</h1>',
                className: 'divletra'
            })
        );
    }

    addpalabra();

}

function jugare() {
    addDiv();
    const btnjugar = document.getElementById('jugar');
    btnjugar.disabled = true;
}

/*function names() {
    let nombres = ["JOSE", "LUIS", "MANUEL", "CARMEN", "TERESA"];

    var randon = Math.floor(Math.random()*nombres.length);
    var send = nombres[randon];

    console.log(send)
}

function addpalabra() {
    let nombres = ["JOSE", "LUIS", "MANUEL", "CARMEN", "TERESA"];

    nombres.push("PACO");
    let datos = nombres[3];

    console.log(datos);

}*/

/* Ejecucion */
iniciarJuego.onclick = goJuego;
addpal.onclick = ventanaPalabra;
jugar.onclick = jugare;
btnguardaPalabra.onclick = name;
