// let autos = new Array('BMW', 'Mercedez'); deprecated

const autos = ['BMW', 'Mercedez', 'Volvo'];
console.log(autos)

// recorrer un Array

console.log(autos[0]);
console.log(autos[2]);

for (let i = 0; i < autos.length; i++){
    console.log(i + ': ' +autos[i]);
}

// update and add an elements in a array

autos[1] = 'Mercedez';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Ford';
console.log(autos);

autos[6] = 'Porsche'
console.log(autos);
autos[5] = 'Porsche';
console.log(autos);

console.log(typeof autos);
console.log(Array.isArray(autos));

console.log(autos instanceof Array);