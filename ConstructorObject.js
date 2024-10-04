// constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}



let padre = new Persona('Luke', 'Skywalker', 'ls@MediaList.com');
console.log(padre);

let madre = new Persona('Leia', 'Skywalker', 'ls@mail.com');
console.log(madre);

padre.nombre = 'Harrison';
console.log(padre);

console.log(padre.nombreCompleto());

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola'; // mas recomendable

/* let miNumero = new Number(1);
let miNumero = 1; mas recomendable */

// Prototype
Persona.prototype.tel='13414141';
console.log(padre);
console.log(madre);



