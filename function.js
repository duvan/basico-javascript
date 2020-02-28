function greeting(){
	console.log('hello');

}
	greeting();  // se ejecuta esto primero, luego se hace la funcion
	greeting();

//  parametro

function greeting(person){ // el name es como una espacie de variable que al ejecutarse greeting  retorna markus
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

/*
----------------------------------------------------------------------------------
*/

var numero = prompt("Introduce un número entero");

var resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}

/*
----------------------------------------------------------------------------------
*/

//	mostrar mensajes complejos
var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \"comillas dobles\" ";
  alert(mensaje);

/*
----------------------------------------------------------------------------------
*/
// Array que almacena los 12 meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

/*
----------------------------------------------------------------------------------
*/
//Estructuras de control, IF
var numero1 = 5;
var numero2 = 8;

if(numero1 <= numero2) {
  alert("numero1 no es mayor que numero2");
}
if(numero2 >= 0) {
  alert("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  alert("numero1 es negativo o distinto de cero");
}
if(++numero1 < numero2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
/*
----------------------------------------------------------------------------------
*/
//calculo o validacion de la letra DNI
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();

if(numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    alert("La letra o el número proporcionados no son correctos");
  }
  else {
    alert("El número de DNI y su letra son correctos");
  }
}

/*
----------------------------------------------------------------------------------
*/
//factorial de un numero entero
var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
alert(resultado);
/*
----------------------------------------------------------------------------------
*/
//
var numero = prompt("Introduce un número entero");

var resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
/*
----------------------------------------------------------------------------------
*/
//




