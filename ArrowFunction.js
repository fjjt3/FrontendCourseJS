let miFuncion = function (){
    console.log('Hallo Function');
}
/* let miFuncionFlecha = () => {
    console.log('Hallo Arrow Function');
} */

/* const miFuncionFlecha= () => console.log('Hallo Arrow Function');

miFuncionFlecha() */

/* const saludar = () => {
    return 'Hallo aus Function Arrow';
} */

const saludar = () => 'Hallo aus Function Arrow';

console.log(saludar());

const regresaObjeto = () => ({nombre: 'Luke', apellido: 'Skywalker'});
console.log(regresaObjeto());

// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Hallo mit parameters');

const funcionConVariosParametros = (op1, op2) => op1 + op2;
console.log(funcionConVariosParametros(3, 5));