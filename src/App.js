import {Header} from './components/Header';
import {ListadoIP} from './components/ListadoIP';
import {Ip} from './components/Ip';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {InfoIP} from './components/InfoIP';

import logo from './logo.svg';
import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Header.css';
import './components/ListadoIP.css';
import './components/Ip.css';
import './components/InfoIP.css';
import './App.css';

function App() {


  const [ip, setIps] = React.useState([]);
  const [searchValue, setValue] = React.useState([]);
  const datosIP=[];

  const getIp = async () => {

   try 
   { 
    const res = await axios.get('https://geolocation-db.com/json/')
    //console.log(res.data);
    datosIP.push(res.data);
    console.log(res.data);
    setIps(datosIP);
   } catch (e)
   {
    alert(e);
    console.log(e);

   }

  }
  
  React.useEffect(() => {
    //passing getData method to the lifecycle method
    getIp()

  }, [])

  return (
    <React.Fragment>


      

      <Router>
        <Routes>
        <Route exact path="/" element={<ListadoIP>
          <Header setIps={setIps} datosIP={datosIP}/>
          {ip.map(dataip => ( 
            
            <Ip 
              key="1"
              IPv4={dataip.IPv4}
              city={dataip.city}
              country={dataip.country_name}
              state={dataip.state}
            />

            ))}
      </ListadoIP>}></Route>
           <Route exact path="/infoip" element={<InfoIP />}></Route>
        </Routes>
      </Router>


    </React.Fragment>
  );
}

export default App;
