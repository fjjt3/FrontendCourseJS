class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Empleado){
        console.log("objeto tipo empleado");
        console.log(tipo.departamento)
    }
    else if(tipo instanceof Gerente){
        console.log("objeto tipo gerente");
    }
    else if(tipo instanceof Object){
        console.log("objeto tipo Object");
    }
}

let empleado1 = new Empleado('Juan', 3000);
console.log( empleado1.obtenerDetalles() );

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log( gerente1.obtenerDetalles() );

imprimir(empleado1);
imprimir(gerente1);