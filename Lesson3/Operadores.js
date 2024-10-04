let a = 3, b = 2;
let z = a + b;
console.log("Result: " + z);

z= a - b;
console.log("Result: " + z);

// Preincremento ++ antes de la vble
z = ++a;

console.log(z);

z= --a;

console.log(z);

// Postincremento se usa primero el valor de la vble (b) z = b++

//Precedencia de operadores


/* let a = 1;
a += 3; //ac = ac +3
 */

//  && se usa como AND, || se usa como OR -> regresa true si cualquiera de los operandos es true

// operador ternario => Condition ? Expr1: Expr2
let resultado = (3>2) ? "true": "false";
console.log(resultado);

let numero = 9;
resultado = (numero % 2 ==0) ? "Par" : "Impar";

console.log(resultado);

//  conversion Str a number

/* let mynumber = "17";
let age = Number(mynumber); 

console.log(typeof age)
resultado = (age>=18) ? "puede votar":"no puede votar";
console.log(resultado); */

// Function isNaN (not a number)

let mynumber = "17x";
let age = Number(mynumber); 
console.log(age)



     
if (isNaN(age)){
    console.log("No is a number")
} else{
    resultado = (age>=18) ? "puede votar":"no puede votar";
    console.log(resultado);

}
    
    

