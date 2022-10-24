//Definición elemento

let color;
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');

//Definición de evento 1 

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'orange';
/* Cambiar a color 1 */
    } else if (event.key === 's') {
        color = 'green';
/* Cambiar a color 2 */
    } else if (event.key === 'd') {
        color = 'black';
    }
});


//Definición de función

function pintar(elemento, tinta){
    elemento.style.backgroundColor = tinta;
}

//Definición de evento 2 

//llamar función
a.addEventListener("click", function() {
    pintar(a, color)
});

b.addEventListener("click", function() {
    pintar(b, color)
});

c.addEventListener("click", function() {
    pintar(c, color)
});

d.addEventListener("click", function() {
    pintar(d, color)
});