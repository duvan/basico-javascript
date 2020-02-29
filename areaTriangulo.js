//function calculate area of tringle
var b = parseInt(prompt("Enter width of Triangle : "));
var h = parseInt(prompt("Enter height of Triangle : "));
var solvingTriangle = (b * h)/2;
console.log(solvingTriangle);

//
function solvingTriangle(base,height){
    var area = (base * height)/2;
        return solvingTriangle;
}
solvingTriangle (4,7)
//


//function that return the mayor value over 3 numbers
let array = [23423,234234,878,122221];
let max = Math.max(...array);
console.log(max); 

function maxOfArray(array) {
    return Math.max.apply(Math, array);
  }  
  let array = [1,2,3,4,5,6];
  console.log(maxOfArray(array));

  //
  var n1 = 8;
  var n2 = 4;
  var n3 = 5;

function mayor (n1,n2,n3){
    if (n1 > n2 && n1 > n3){
          return n1;
    }else if(n2 > n3){
        return n2;
    }else{
        return n3;
    }
}    
    mayor (4, 12, 1);

//Escribir una función que reciba el nombre y la edad y retorne true si puede votar, en caso contrario false
//function

var canVote = function(age) {
    return age >= 18;
  }
  var name = parseFloat(prompt("Enter name"));
  var age = parseInt(prompt("Enter age"));
  if(canVote(age)){
    alert("Can vote")
  } else {
    alert("Must be > 18 to vote")
  }

//

function votacion(age){
    if (edad >=18){
        return true;
    }else{
        return false
    }
}

function votacion2(age){
    if (edad >=18){
        return true;
    }else{
        return false
    }
}


function votacion2 (edad){
    return edad >=18 ? true : false;
}


//función que determine si un día de la semana es laboral o no (L-V)

function dayOfWeek(dayNumber){
    switch(dayNumber){
        case 0:
            return "saturday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday"
        default:
            throw "incorrect number representing day of the week";
    }
}

function testDayOfWeek (){
    var dayName = dayOfWeek(parseInt(prompt("Number of the week")));
    
    alert(dayName);
}
testDayOfWeek()

//

function laboral(day){
    switch(day){
        case 'sabado':
            return false;
        case 'domingo':
            return  false;
        default:
            return true;
    }

}
//

function loboralArreglo(day){
    var arregloNoLaborales = ['sabado', 'domingo'];
    return arregloNoLaborales.indexOf(day) === -1 ? true : false; //si no lo encuentra
}


//


var diasLaborales = ["L", "M", "W", "J", "V"]

function oelo(dia) {
    if(diasLaborales.includes(parseInt(prompt("Leter of the day")))) {
      return true
    }else{
      return false
    }
 }

 function oelo(dia) {
    var diasLaborales = ["L", "M", "W", "J", "V"]
    if(diasLaborales.includes(dia)) {
      return true
    }else{
      return false
    }
 }



//Escribir una función que reciba las notas de un estudiante y retorne el promedio


function promedio(notas){
    
    //return (n1 + n2 + n3)/3
    var suma = 0;
    for(var i = 0; i < notas.length; i ++){
       // suma = suma + notas[i];
        suma += notas[i];
    }
        return suma / notas.length;
}
 promedio ([5,4,3]);


 // sumatoria de un arreglo

 function sumatoria(numeros){
    
    //return (n1 + n2 + n3)/3
    var suma = 0;
    for(var i = 0; i < notas.length; i ++){
       // suma = suma + notas[i];
        suma += numeros[i];
    }
        return suma;
}
 sumatoria ([5,4,3]);

 // Escribir una función que reciba una lista de nombres de perros y retorne cuales empiezan por "p" 

function perros(nombre){
        var nombreP = [];
        for (var i = 0; i < nombres.length; i++){
            var nombre = nombres[i];
            if (nombres[0].toLowerCase() == "P" ){
                nombresP.push(nombre);
            }
        }
        return nombresP;
}

perros(['firulais', 'pepe', 'pecas', 'fabio', 'pecas', 'tono', 'paco']);




function perros2(nombres){
    var nombreP = nombre.filter(function(nombre){
        return nombre[0].toLowerCase() == "p"
    });
    return nombreP
}

perros2(['firulais', 'pepe', 'pecas', 'fabio', 'pecas', 'tono', 'paco']);


//Escribir una función que reciba un un arreglo el siguiente arreglo con objetos y retorne cuantos son modelos superiores a 2018

var carros = [
    { marca: 'Mazda', modelo: 2029 },
    { marca: 'Chevrolet', modelo: 2017 },
    { marca: 'Jeep', modelo: 2018 },
    { marca: 'Ferrari', modelo: 2015 },
    { marca: 'Nissan', modelo: 2021 },
]

function carrosModelos(carros){
     modelos = carros.filter(function(carro){ //funcion anonima no esta definida con el nombre si no como parametro de otra funcion
        return carro.modelo >2018;
    });
    return modelos.length;
}

carrosModelos(carros);