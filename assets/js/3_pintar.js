
/* 3.1 Comentado

//definición de función
function pintar(elemento){
    elemento.style.backgroundColor = 'yellow';
}

//llamar función
ela = document.getElementById("color");
ela.addEventListener("click", function() {pintar(ela)
});

*/


/*3.2 */
//definición de función
function pintar(elemento, color ='green'){
    elemento.style.backgroundColor = color;
}

//llamar función
ela = document.getElementById("color");
ela.addEventListener("click", function() {
    pintar(ela, 'yellow')
});

