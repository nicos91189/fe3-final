import React from "react";
import Card from "../Components/Card";
// import { useGlobalContext } from '../Components/utils/global.context';  // Ajusta la ruta según sea necesario
import { useMedicoStates } from "../Components/utils/global.contextnico";

const Favs = () => {
  // const { state } = useGlobalContext();  // Usa useGlobalContext para acceder al contexto global
  // const { favoritos } = state;

  const {fav} = useMedicoStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Renderiza una Card por cada favorito */}
        {/* {favoritos.map(favorito => <Card key={favorito.id} item={favorito} />)} */}
        {fav.map(favorito => <Card key={favorito.id} item={favorito} />)}
      </div>
    </>
  );
};

export default Favs;
