import React from "react";

function ListadoIP(props)
{
    return (
      <main>
        <ul>
            {props.children}
        </ul>
      </main>
    )
}

export {ListadoIP};