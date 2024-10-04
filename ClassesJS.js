class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

class Empleado extends Persona{
    constructor(departamento){
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento
    }
}

let persona1 = new Persona('Luke', 'Skywalker');
console.log(persona1);

let persona2 = new Persona('Anakin', 'Skywalker');
console.log(persona2);

console.log(persona1.nombre);
persona1.nombre = 'John' // get nombre
console.log(persona1.nombre);