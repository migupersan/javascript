/* VERSIÓN CON PUNTOS ADICIONALES POR TRABAJO A ELEGIR:
           - PUNTO POR TRABAJO EN WP O
           - PUNTO POR TRABAJO EN JS
           UN RADIO BUTTON ME OBLIGA A ESCOGER UNO DE LOS DOS 
           TRABAJOS */
           function calculoNota(){
            /* entrada de datos */
            let notaWordpress=Number(document.getElementById("wordPress").value);
            let notaJs=Number(document.getElementById("js").value);
 
            // cuando cojo el dato de un radio button, cojo el value tb
            // solo es un dato, trabajo, pero tiene 2 valores posibles
 
            let trabajo=document.getElementById("trabajo").value;
            
 
            /* calculo de nota */
            let notaFinal=(75*notaWordpress+25*notaJs)/100;
 
            /* vamos a ver si hay trabajos adicionales */
            if (trabajo=="trabajowp"){  // si has marcado trabajojs
                notaFinal++;
                alert("programa no funciona....sin terminar");
            } else {
                if (trabajo=="trabajojs") { // si has marcado trabajowp
                    notaFinal++;
                    alert("programa no funciona....sin terminar");
                } // si no has pulsado ni uno ni otro, no suma nada
            }
 
 
            /* comprobamos que el resultado está dentro del rango */
 
            if (notaFinal>10) {
                notaFinal=10;
            }
 
            /* salida de resultados */
 
            document.getElementById("resultado").innerHTML=
            "La nota final es: "+notaFinal;
 
            if (notaFinal>=5){
             document.getElementById("indicacion").innerHTML=
            "Enhorabuena, estás aprobado!";
            } else {
             document.getElementById("indicacion").innerHTML=
            "Ánimo, tendrás que volver a intentarlo";
            }
         }