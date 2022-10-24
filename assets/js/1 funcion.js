
//Función clásica

/*
function example(a, b, c){
    return a+b+c
}
*/

//Función como expresión
example = function(a,b,c) {
    return a+b+c;
}
//Función como expresión 

//Definición de elemento  
let number_1 = document.querySelector('#number_1');
let number_2 = document.querySelector('#number_2');
let number_3 = document.querySelector('#number_3');
let button_total = document.querySelector('#calculo');
let total = document.querySelector('#total');
//Definición de elemento

//Definición de eventos
button_total.addEventListener('click', function() {
    let valor_total = example(Number(number_1.value),Number(number_2.value),Number(number_3.value));
    total.innerHTML = valor_total;
});
//Definición de eventos

