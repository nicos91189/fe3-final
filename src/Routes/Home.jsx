import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
//import { useMedicoStates } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  //const { state, dispatch } = useMedicoStates();
   
  //let medicos =

    //const [fav, setFav] = useState([]);
    const [medicos, setMedicos] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() =>{
      axios(url).then((m) => setMedicos(m.data))//console.log(m))//setMedicos(m.data.medicos))
      //console.log(medicos)
    },[]);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      
        {medicos.map((medico) => <Card item={medico} key={medico.id} />)}
     
        
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home