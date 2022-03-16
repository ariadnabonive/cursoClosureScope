a = 2;
var a;
console.log(a); //2


// Hoisting, elevación: puedes acceder al valor de la variable aunque sea declarada despues del llamado 
//var solo la declaración, no en la inicializacion
// function completo
// import completo
// class no 

console.log(a); // error al intentar acceder a una variable no declarada
var a = 2;

//es hoisting funciona en el siguiente ejemplo porque javaScript 
//lee primero todas las funciones y las guarda en memoria
//y luego ejecuta el llamado 

nameOfDog('Baco');

function nameOfDog(name) {
    console.log(name);
}
