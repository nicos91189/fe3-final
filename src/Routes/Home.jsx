import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';
import { useMedicoStates } from '../Components/utils/global.contextnico';
//import { useMedicoStates } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  //const { state, dispatch } = useMedicoStates();
  //const [fav, setFav] = useState([]);

  // const [medicos, setMedicos] = useState([]);-----------------------------------
  // const url = 'https://jsonplaceholder.typicode.com/users';

  // useEffect(() => {                    ----------este tramo lo lleve a contextnico
  //   axios(url).then((m) => setMedicos(m.data))
  // }, []);---------------------------------------------------------------
  const { medicos, setFav} = useMedicoStates();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {medicos.map((medico) => (
          <Card item={medico} key={medico.id}>
            {/* <button onClick={addFav} className="favButton">Add fav</button> */}
            <button onClick={() => setFav((prevState) => [...prevState, medico])} className="favButton">Add fav</button>
          </Card>
        ))}
      </div>
    </main>
  )
}

export default Home