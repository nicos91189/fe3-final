import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const params = useParams();
  const [medico, setMedico] = useState([]);
  //llamado a la API con la endpoint
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url).then((m) => setMedico(m.data))//console.log(m))//setMedicos(m.data.medicos))
  }, []);
    //console.log(medico)

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h4> Nombre: {medico.name} {medico.username}</h4>
      <h4>Email: {medico.email}</h4>
      <h4>Telefono: {medico.phone}</h4>
      <h4>Sitio Web: {medico.website}</h4>
      {/* <h4>{medico.company.name}</h4> */}
    </>
  )
}

export default Detail