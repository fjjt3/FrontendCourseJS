/* function myFunction(a, b){
    console.log("Suma: " + (a + b));
}

myFunction(3, 2); */

function myFunction(a, b){
    return (a + b);
}

let result = myFunction(3, 2);
console.log(result);

// tipo expresión

let sumar = function(a, b){return (a + b)}

resultado = sumar(1, 2);
console.log(resultado);

// self invoking

(function(a, b){
    console.log('function running: ' + (a + b))
})(3, 4);

// arrow function , similar to expresion type

const sumFunctionArrow = (a, b) => a + b;

resultado = sumFunctionArrow(3, 5);
console.log(resultado);



