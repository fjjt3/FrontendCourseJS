class Persona{

    static contadorObjetosPersona = 0;
    email = 'Valor default';

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador: ' + Persona.contadorObjetosPersona);
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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludar desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' '+ persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // calls father constructor
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobrescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Luke', 'Skywalker');
console.log(persona1);

let persona2 = new Persona('Anakin', 'Skywalker');
console.log(persona2);


console.log(persona1.nombre);
persona1.nombre = 'John' // get nombre
console.log(persona1.nombre);

let empleado1 = new Empleado('Jhon', 'Doe', 'IT' );
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
// persona1.saludar(); no es posible llamar un método static desde un objeto pero si desde una clase
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);