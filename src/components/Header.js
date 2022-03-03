import React from 'react';
import axios from 'axios';

function Header({setIps,datosIP}) {

  const [value, setSearchValue] = React.useState('');

  const onChange = (event) => {

    setSearchValue(event.target.value);

  }


  const onSubmit = (event) => {

    event.preventDefault();
    if (value != "")
    {
      const getIp = async () => {
      try 
      { 
        const res = await axios.get('https://api.country.is/'+value)
        console.log(res.data);
        res.data.IPv4 = value;
        res.data.city = "";
        res.data.country_name = res.data.country;
        res.data.state = "";

        datosIP.push(res.data);
        setIps(datosIP);
      
      } catch (e) {

        alert("Ocurrió un error al buscar la IP introducida. Comprueba que está en un formato correcto y es válida. El error devuelto ha sido: "+e);
        console.log(e);

      }
      

      }

      getIp()
   }
   else
   {
     alert("Introduce una IP");
   }
  
 

 }

    return (
     <React.Fragment>
        <h1 className="textCenter">IP GeoLocation</h1>
        <form method="POST" onSubmit={onSubmit}>
            <input type="text" className="form-control" placeholder="Busca una IP. Ejemplo: 8.8.8.8" onChange={onChange}/>
            <input type="submit" className="btn btn-success" value="Buscar" />
        </form>
      </React.Fragment>   
    )

}

export {Header};