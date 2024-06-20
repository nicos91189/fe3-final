import React from "react";
import Card from "../Components/Card";
import { useMedicoStates } from "../Components/utils/global.contextnico";

const Favs = () => {
  const {fav} = useMedicoStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Renderiza una Card por cada favorito */}
        {fav.map(favorito => <Card key={favorito.id} item={favorito} />)}
      </div>
    </>
  );
};

export default Favs;
