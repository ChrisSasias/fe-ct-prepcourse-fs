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

// function suma(x, y) {
//     // Retorna el resultado de su suma.
//     // Tu código:
//     let sumando = x + y;
//     let resta = x-y;
//     let multiplicacion = x*y;
//     let division = x/y;

//     return console.log(sumando, resta, multiplicacion, division);
//  }

// suma(10,10);

// Lenght
// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

// let listaDeCompras = [];
// // Lista de compras
// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';
// // Ver lista de compras
// let elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);

// let colores = ["amarillo","azul"];

// colores.push("rojo");
// colores.unshift("verde")

// console.log(colores)

//             0    1     2     3       4   posiciones 
// let mercy =["hola","fea", 4, true, ["henry"]]; // elementos

// mercy.push(7,"perros");
// mercy.unshift("hola mundo");
// mercy.pop(); // quita al final
// mercy.shift(); // quita al principio

// let includedate = mercy.includes(4);

// console.log(includedate)
// console.log(mercy); 

// console.log(typeof(mercy)) ;

// let number =[8, 7, 1, 3, 9];

// let numerosmayores = number.every((num) => {
//     return num >=1;
// });

// console.log(numerosmayores);

// let palabra= "henri";

// let palabraseparada = palabra.split(""); // nos permite transformar strings en arreglos ("") separa la palabra por cada caracter
// console.log(palabraseparada);
// palabraseparada.shift(); // elimina la primera 
// palabraseparada.unshift("H"); // agrega al principio

// palabraseparada.splice(-2); //elimina al final 
// palabraseparada.push("r", "r","y") //agrega al final
// console.log(palabraseparada);

// palabraarreglada=palabraseparada.join("");// nos permite transformar arreglos en strings
// console.log(palabraarreglada);


// let numeros = [1,2,3,4];
 
// let masUno = numeros.map((num)=>{ // crea una copia del arreglo original y le puede agregar cambios
//     return num +1;
// });

// console.log(masUno);

// // FOREACH

// numeros.forEach( (num) => { console.log(num) } ) // nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.

// // FOR
// var arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// // WHILE
// var arr = [];
// while (arr.length < 5) {
//    arr.push('Camilo');
// }
// console.log(arr);


// let palabras = ["hola","la","hermanita"]

// function dePalabrasAFrase(palabras) {
  
 
//    return palabras.join(" ")

 
   
//  }


//  console.log(dePalabrasAFrase(pal));

//  let pal = ["hola"]

// function dePalabrasAFrase(pal) {
  
 
//    return pal.split(" ")

 
   
//  }


//  console.log(dePalabrasAFrase(pal));

// function breakStatement(num) {
//     // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
//     // Guardar cada nuevo valor en un arreglo y retornarlo.
//     // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
//     // la ejecución y retornar el string: "Se interrumpió la ejecución".
//     // [PISTA]: utiliza el statement 'break'.
//     // Tu código:
 
//    const resultado = [];
 
//    for(let i = 0; i < 10; i++) {
 
//      resultado.push(num += 2);
 
//      if(resultado[i] === i) {
 
//        break;
    
//      }
 
//    }
 
//    if(i < 10) {
     
//      return "Se interrumpió la ejecución";
   
//    }
//    breakStatement()
//    console.log(resultado)
//    return resultado;

 
// //  }


// let numeros = [16, 9, 8, 5, 1];

// let sigue =  true;

// funcMasGrande(numeros) {
//     let sigue =  true;

//     while(sigue) {

//         sigue = false;

//         for (let i = 0; i < numeros.length-1; i++) {

//             if (numeros[i] > numeros[i + 1]) {

//                 let refe = numeros[i];
//                 numeros[i] = numeros[i + 1];
//                 numeros[i + 1] = refe
//                 sigue = true;
//             }
            
//         }

//         return numeros[numeros.length -1] ;
//     }
//    console.log(funcMasGrande(resultados));   
// }


// function funcMasGrande(numeros) {
//     let sigue = true;

//     while (sigue) {
//         sigue = false;

//         for (let i = 0; i < numeros.length - 1; i++) {

//             if (numeros[i] > numeros[i + 1]) {

//                 let refe = numeros[i];
//                 numeros[i] = numeros[i + 1];
//                 numeros[i + 1] = refe;
//                 sigue = true;
//             }
//         }
//     }

//     return numeros[numeros.length - 1];
// }

// const resultados = [16, 9, 8, 5, 1];
// console.log(funcMasGrande(resultados)); 


// HAS OWN PROPERTY
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('autor');

// console.log(tienePropiedad);

// // KEYS
// // var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var todasLasPropiedades = Object.keys(libro);

// console.log(todasLasPropiedades);

// var mundo = { autor: 'Borges', genero: 'Policial', año: 1990 };

// for (let prop in mundo) {
//     console.log('Esta es la propiedad: ', prop);
//     console.log('Este es el valor: ', mundo[prop]);
//  }

 //THIS


var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function(){
        // var pito = mascota;
       console.log('Mi perro es un  ' + this.raza);
    },
 };

 mascota.info();