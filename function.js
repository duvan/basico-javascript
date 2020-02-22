function greeting(){
	console.log('hello');

}
	greeting();  // se ejecuta esto primero, luego se hace la funcion
	greeting();

//  parametro

function greeting(person) // el name es como una espacie de variable que al ejecutarse greeting  retorna markus
	console.log(name);
	console.log('hello' + person);

}
	greeting('markus');
	greeting('carla');
	greeting('connor');

// parametros sumar

function add(n1, n2){
	console.log(n1 + n2);
}
	add(3, 2);
	add(2, 4);
	add(234,sdfgsdfg); //concatena por que es un entero y un string

/*
---------------------------------------------------------------------------------
*/

function saludar(nombre){ // en los parentesis defino el parametro= variable que ingresa a la funcion 
   // console.log(`hola ${nombre}` ) // es la variable que queremos concatenar en el string completo
    return `hola ${nombre}`;
}
let mensaje = saludar('Duvan'); //argumento de lo que le entra al parametro
mensaje;
/*

---------------------------------------------------------------------------------
*/

function saludar(nombre){ // en los parentesis defino el parametro= variable que ingresa a la funcion 
    console.log(`hola ${nombre}` ) // es la variable que queremos concatenar en el string completo
     
 }
saludar('Duvan'); //argumento de lo que le entra al parametro
 

/*
---------------------------------------------------------------------------------
*/

function sumar (a,b){
    return a + b;
}    
var resultado = sumar (2, 5);
resultado;


