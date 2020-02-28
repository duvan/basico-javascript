//function calculate area of tringle
var b = parseInt(prompt("Enter width of Triangle : "));
var h = parseInt(prompt("Enter height of Triangle : "));
var solvingTriangle = (b * h)/2;
console.log(solvingTriangle);

//function that return the mayor value over 3 numbers
let array = [23423,234234,878,122221];
let max = Math.max(...array);
console.log(max); 

function maxOfArray(array) {
    return Math.max.apply(Math, array);
  }  
  let array = [1,2,3,4,5,6];
  console.log(maxOfArray(array));

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






