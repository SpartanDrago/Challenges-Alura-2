/* Llamado */
document.getElementById('box-word').style.display = "none";
document.getElementById('box-game').style.display = "none";

var btnIniciarJuego = document.getElementById('go');
var btnAgregarPalabra = document.getElementById('add');
var btnGuardarEmpezar = document.getElementById('save');
var btnCancelarPalabra = document.getElementById('cancelar');
var btnJugar = document.getElementById('jugar');

let nombres = ["JOSE", "LUIS", "PACO", "LILIANA", "CARMEN", "XIMENA"];

/* Btn - ABRIR Y CERRAR VENTANAS*/
function ventanaIniciarJuego() {
    document.getElementById('box-init').style.display = "none";
    document.getElementById('box-word').style.display = "none";
    document.getElementById('box-game').style.display = "";
}

function ventanaNP() {
    document.getElementById('box-init').style.display = "none";
    document.getElementById('box-game').style.display = "none";
    document.getElementById('box-word').style.display = "";
}

function cerrarNP() {
    document.getElementById('box-init').style.display = "";
    document.getElementById('box-game').style.display = "none";
    document.getElementById('box-word').style.display = "none";
}

/* Agregar Nueva Palabra */
function GuardaEmpieza() {/* Toma y guarda la palabra */
    let addnewword = document.getElementById('inputAddPal').value;
    var maxLetras = 8;
    var minLetras = 3;

    if ($('#inputAddPal').val().length == 0) {
        
        alert ("--- DEBE DE AGREGAR UNA PALABRA ---");

    }else{
        if (addnewword.length >= minLetras && addnewword.length <= maxLetras) {
            nombres.push(addnewword.toUpperCase());/*Minusculas a Mayusculas*/
    
            document.getElementById('box-init').style.display = "none";
            document.getElementById('box-word').style.display = "none";
            document.getElementById('box-game').style.display = "";
        
        }else{
            document.getElementById('inputAddPal').value = "";
            alert ("--- DEBE DE SER ENTRE 3 y 8 CARACTERES---");
        }
    }

}

/* VENTANA JUGAR */
function PalabrasAleatorias() {
    var randon = Math.floor(Math.random()*nombres.length);
    var aleatorio = nombres[randon];
    var separarName = aleatorio.split('');

    console.log(separarName);/* POSIBLE ARRAY */
        
    /* CANTIDAD DE CARACTERES */
    for (let i = 0; i < separarName.length; i++) {
        var n = i + 1;
        $('.palabras').append(
            $('<div>').prop({
                id: 'innerdiv',
                innerHTML: '<p></p>',
                className: 'divpalabra'
            })
        );
    }

    var separar2 = separarName;

    function shuffleArray(inputArray){
        inputArray.sort(()=> Math.random() - 0.5);
    }

    shuffleArray(separar2);
    console.log(separar2);

    /* CANTIDAD DE CARACTERES */
    for (let x = 0;x < separar2.length; x++) {
        var m = x + 1;
        $('.letras').append(
            $('<div>').prop({
                id: 'innerdiv',
                innerHTML: '<button class = "dado">'+ separar2[m-1] +'</button>',
                className: 'divletra'
            })
        );
    }
    prueba();
}  


function prueba() {
    document.addEventListener('keydown', (event) => {
        var keyValue = event.key;
        var codeValue = event.code;
       
        console.log("keyValue: " + keyValue);/* VALOR */
        console.log("codeValue: " + codeValue);/* CODIGO */

        

    }, false);
}







/* Ejecucion */
btnIniciarJuego.onclick = ventanaIniciarJuego;
btnAgregarPalabra.onclick = ventanaNP;
btnCancelarPalabra.onclick = cerrarNP;
btnGuardarEmpezar.onclick = GuardaEmpieza;
btnJugar.onclick = PalabrasAleatorias;
