import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {

  const params = useParams();
  const [medico, setMedico] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((m) => setMedico(m.data))
  }, []);

  return (
    <>
      <h1>Detail Dentist {medico.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h4>{medico.name} {medico.username}</h4>
      <h5>Email: {medico.email}</h5>
      <h5>Telefono: {medico.phone}</h5>
      <h5>Ciudad:{medico.address?.city} - Direccion: {medico.address?.street + medico.address?.suite}</h5>
      <h5>Sitio Web: {medico.website}</h5>
      <h5>Compania: {medico.company?.name}</h5>
    </>
  )
}

export default Detail