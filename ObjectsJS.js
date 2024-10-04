/* let persona = {
    nombre: 'Luke',
    apellido: 'Skywalker',
    email: 'jp@mail.com',
    age: 50,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellidos;
    }
}

console.log(persona.nombre);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Harrison';
persona2.apellido = 'Ford';


console.log(persona['apellido']);

// for in
for ( nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}

persona.tel = '858896969';

console.log(persona);

delete persona.tel;



console.log(persona);

let personaArray = Object.values( persona );
console.log(personaArray);

let personaString = JSON.stringify( persona );
console.log(personaString); */

// Get
let persona = {
    nombre: 'Luke',
    apellido: 'Skywalker',
    email: 'jp@mail.com',
    age: 50,
    idioma:'de',
    get lang(){
        return this.idioma.toLocaleUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toLocaleUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);

// Set
console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);

