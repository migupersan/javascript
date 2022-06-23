 function calculosRadio(){
            /* algoritmo secuencial para calcular:
                - la longitud de la circunferencia
                - el área del círculo
                - el volumen de la esfera
               versión: 2.0 

               CON FORMULARIO DE ENTRADA
               
            */

            /* entrada de datos */
            // let radio=Number(prompt("Dame un radio en centímetros:"));
            let radio=Number(document.getElementById("radio").value);
            const PI=3.1416;

            /* cálculos interno */
            let circunferencia=2*radio*PI;
            let circulo=radio**2*PI;
            let esfera=(4*radio**3*PI)/3;

            /* mostrar resultado */
            document.getElementById("resultados").style.visibility="visible";
            document.getElementById("circunfe").innerHTML=
            "La circunferencia es:"+circunferencia+"cm";
            document.getElementById("circulo").innerHTML=
            "El círculo es:"+circulo+"cm cuadrados";
            document.getElementById("esfera").innerHTML=
            "La esfera es:"+esfera+"cm cúbicos";
        }
