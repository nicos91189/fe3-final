import React from "react";
import Card from "../Components/Card";
import { useMedicoStates } from "../Components/utils/global.context";

const Favs = () => {
  const {state} = useMedicoStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.fav.map(favorito => <Card key={favorito.id} item={favorito} />)}
      </div>
    </>
  );
};

export default Favs;
