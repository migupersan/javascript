/**** función de Euclides para la división entera  */

function diviEntera(){

    // captura de datos del formulario
        let divi=Number(document.getElementById("divi").value);
        let disor=Number(document.getElementById("disor").value);

    // valido los datos para comprobar que son positivos y enteros
    // solo realizo el algoritmo si resultan correctos los datos

     if (divi>=0 && disor>0 && Number.isInteger(divi) &&
         Number.isInteger(disor))   {

        // resto al dividendo el divisor, tantas veces como se pueda    
        let cociente=0;
        while (divi>=disor){
             divi-=disor;// el montón se reduce en la cantidad a repartir
             cociente++;
            }

        // salida de resultados: cociente y resto
          document.getElementById("solucion").innerHTML="El cociente es "+
          cociente+" y el resto es "+divi;
        } else {

          // si la validación falla, no entro en el bucle, y muestro
          // información de error
          document.getElementById("solucion").innerHTML="Los datos de entrada son erróneos. Vuelve a intentarlo"
        }
    }
