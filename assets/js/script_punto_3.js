/*//FUNCIÓN EJERCICIO

function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);

//----------------------------------------------------

//3.1 FUNCION COMO ARGUMENTO 

//Definición Variable
let ele = document.querySelector('#ele1');

//Definición Función
function pintar(elemento){
    elemento.style.backgroundColor = 'yellow';
}
//llamado función
    ele.addEventListener("click", function() { pintar(ele)});

*/
//----------------------------------------------------


// 3.2 FUNCIÓN POR DEFECTO    
    
//Definición Variable
let ele = document.querySelector('#ele1');

//Definición Función
function pintar(elemento, color = 'green'){
    elemento.style.backgroundColor = color;
}
//llamado función
    ele.addEventListener("click", function() { pintar(ele)}); 