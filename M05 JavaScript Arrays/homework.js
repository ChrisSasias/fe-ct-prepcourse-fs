/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:

   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

let arr =[];

   for(let i=0;i< array.length; i++){

      arr.push(array[i] + 1);
   }
  return arr;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);

   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);

   return array;

}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   return palabras.join(" ");

  
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   let includedate = array.includes(elemento);
   return includedate;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma=0;

   for(let i=0; i < arrayOfNums.length; i++){

      suma+=arrayOfNums[i];

   }

   return suma; 
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   let suma= 0
 

   for(let i =0; i<resultadosTest.length; i++){

      suma += resultadosTest[i];
     
      
   }
   const promedio = suma / resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {

   // Suponer que el primer número es el más grande
   let mayor = arrayOfNums[0];
 
   if (arrayOfNums.length === 0) {
      return null; // Si el arreglo está vacío, no hay número más grande.
    }
   // Recorrer todos los demás números
   for(let i = 1; i < arrayOfNums.length; i++) {
 
     // Comparar con el número actual
     if(arrayOfNums[i] > mayor) {
       mayor = arrayOfNums[i]; 
     }
 
   }
    // Retornar el número más grande
   return mayor;
 
 }


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
    }

   let producto = 1;

   for(let i=0; i<arguments.length; i++){

      producto*= arguments[i];

   }
    
   return producto;
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   let contador = 0;


   for(let i=0; i<array.length;i++){

      if(array[i] > 18){

         contador += +1;
      }

   }
return contador;
}

function diaDeLaSemana(numeroDeDia) {


if(numeroDeDia === 7 || numeroDeDia === 1){
   return "Es fin de semana";
}else{ 
   return "Es dia laboral";
}

   // switch(numeroDeDia) {
   //   case 1: 
   //   case 7:
   //     return "Es fin de semana";
   //   default:
   //     return "Es dia laboral";  
   // }
 
 }

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   let number = num.toString().split("");

   let primerInt = number[0];

   for(let i=0; i<number.length; i++){

      if ( primerInt === "9"){

         return true;
      }
      else {
         return false;
      }

   }



}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
let primero =array[0];

for (let i= 1; i<array.length; i++){

   if(array[i] !== primero){

      return false
   }


 }

return true
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   let contenedor= [];

   for(let i=0; i<array.length; i++){

      if (array[i] === "Enero" || array[i] === "Marzo"|| array[i] ===  "Noviembre"){
         contenedor.push(array[i]);
      }
   }

      if (contenedor.length === 3){
         return contenedor; // Se encontraron los tres meses.
      } else {
         return "No se encontraron los meses pedidos"; // Al menos uno de los meses no se encontró.
      }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
let resultados = [];

   for(let i=0; i<=10; i++){

      let resultado = 6*i;

      resultados.push(resultado);
   }

return resultados;

}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   let contenedor = [];

   for(let i =0; i<array.length; i++){

      if (array[i] > 100){

         contenedor.push(array[i]);
      }
   
   }

   return contenedor;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   const resultado = [];
 
   for (let i = 0; i < 10; i++) {
     num += 2;
     resultado.push(num);
 
     if (num === i) {
       return "Se interrumpió la ejecución"; // Debes devolver el mensaje aquí y salir del bucle.
      }
     
   }
 
   return resultado; // Esto se ejecutará solo si el bucle se completa sin interrupciones.
 
}


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
 
      const res = [];
   
      for (let i = 0; i < 10; i++) {
         if (i === 5) {
            continue; // Cuando i es igual a 5, omitir la iteración actual y continuar con la siguiente.
         }
         num += 2;
         res.push(num);
      }
   
      return res;
   }


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
