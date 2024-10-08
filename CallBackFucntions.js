let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, functionCallBack){
    let res = op1 + op2;
    functionCallBack(`Resultado: ${res}`);
}

sumar(5, 3, imp);

//Llamadas asíncronas con uso setTimeout

function miFunctionCallback(){
    console.log('Asynchronous greetings after 3 seconds')
}

setTimeout(miFunctionCallback, 3000);

setTimeout(function(){console.log('Asynchronous greetings 2')}, 4000);

setTimeout(() => console.log('Asynchronous greetings 3'), 1000);