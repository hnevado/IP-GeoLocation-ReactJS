import React from "react";

function Ip(props)
{
  

  if (props.city == "" || props.state == "")
  {
    return (

        <li>Tu IP es: <a href="/infoIP">{props.IPv4}</a> y eres de {props.country}</li>

    )
  }
  else
  {
    return (

        <li>Tu IP es: <a href="/infoIP">{props.IPv4}</a> y eres de {props.city}, {props.state}, {props.country}</li>
    
    )

  }

}

export {Ip};