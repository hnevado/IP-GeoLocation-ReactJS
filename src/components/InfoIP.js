import React from 'react';

function InfoIP()
{

    return (

        <div id="explicacion">
          <p><a href="/">VOLVER ATRÁS</a></p>
          <p>
              
          La dirección IP es una etiqueta numérica, por ejemplo "37.114.74.240" que identifica, 
          de manera lógica y jerárquica, a una interfaz en la red (elemento de comunicación/conexión) 
          de un dispositivo (computadora, laptop, teléfono inteligente) que utilice el protocolo (Internet Protocol) 
          o que corresponde al nivel de red del modelo TCP/IP.

          </p>

          <p>
           En otras palabras, digamos que <strong>tu IP es como tu documento de identidad</strong> (DNI / Pasaporte / NIE ... ) que te identifica en internet.    
          </p>
          
          <div id="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8zEVA-Bxs-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
       
    )

}
export {InfoIP};