let names = ['ryan','joe','john','mario'];
//console.log(names[0]); // imprime el nombre en la posicion cero
//console.log(names.length);
for (let i = 0 ; i < names.length ; i++){
	console.log(names[i]);
}

//   imprime al reverso.
for (let i = names.length - 1 ; i >= 0; i--){
	console.log(names[i]);
}


let animales = ["cat","dog","bear","fish"];
animales.push("lion"); // mete un elemento al final del arreglo
animales[2];
animales.unshift('mariquita');  //mete un elemento al inicio del arreglo
animales.pop();     // remueve el ultimo elemento
for (let i = 0 ; i < animales.length ; i++){
	console.log('animal:',animales[i]);
}

let admitidos = animales.filter(function(animal){  //toma los animales del arreglo animales, los mete en una nueva funcion de admitidos 
    return animal != 'dog'; //saco al perro 
});
admitidos;  // imprime los admitidos, 