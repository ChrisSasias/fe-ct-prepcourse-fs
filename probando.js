// let suma = 0;

// for(let i =0; i <5; i++){

//     suma = suma + i;
//     console.log("variable de iteracion:" + i);


// }
// console.log('variable Suma:', suma);

// while(suma < 1000000){

//     suma=suma +1;
//     console.log(suma);
// }

function suma(x, y) {
    // Retorna el resultado de su suma.
    // Tu código:
    let sumando = x + y;
    let resta = x-y;
    let multiplicacion = x*y;
    let division = x/y;

    return console.log(sumando, resta, multiplicacion, division);
 }

suma(10,10);