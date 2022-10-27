//Deficinión variables
let color;
let cuadro_1 = document.querySelector('#cuadro_1');
let cuadro_2 = document.querySelector('#cuadro_2');
let cuadro_3 = document.querySelector('#cuadro_3');
let cuadro_4 = document.querySelector('#cuadro_4');


//Definición Evento Keydown
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'brown';
    /* Cambiar a color 1 */
    } else if (event.key === 's') {
        color = 'yellowgreen';
    /* Cambiar a color 2 */
    } else if (event.key === 'd') {
        color = 'orange';
    /* Cambiar a color 3 */
    }
});


//Definición Función Pintar elementoCuadrado
function pintar(elementoCuadrado, cambiarColor) {
    elementoCuadrado.style.backgroundColor = cambiarColor;
}


//Llamar Función como argumento
cuadro_1.addEventListener('click', function() {
    pintar(cuadro_1, color)
});

cuadro_2.addEventListener('click', function() {
    pintar(cuadro_2, color)
});

cuadro_3.addEventListener('click', function() {
    pintar(cuadro_3, color)
});

cuadro_4.addEventListener('click', function() {
    pintar(cuadro_4, color)
});


    