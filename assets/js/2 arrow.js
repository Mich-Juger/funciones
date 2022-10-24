/*Función como expresión 

suma = function(a, b){
    return a + b
}
*/

//Arrow fuction--> más rápido que como expresión

suma = (a,b) => a + b;

//Definición de elemento  aplicar if - if else - else
let sumar_1 = document.querySelector('#sumar_1');
let sumar_2 = document.querySelector('#sumar_2');
let button_total = document.querySelector('#calculo');
let total = document.querySelector('#total');
//Definición de elemento

//Definición de eventos
button_total.addEventListener('click', function() {
    let valor_total = suma(Number(sumar_1.value),Number(sumar_2.value));
    total.innerHTML = valor_total;
});
//Definición de eventos







