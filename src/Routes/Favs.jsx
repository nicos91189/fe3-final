import React from "react";
import Card from "../Components/Card";
import { useMedicoStates } from "../Components/utils/global.context";

const Favs = () => {
  const { state, dispatch } = useMedicoStates();
  const sortedFavs = state.fav.sort((a, b) => a.id - b.id);
  const deleteFav = (medico) =>{
    dispatch({ type: "DELETE_FAV", payload: medico });
  };
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {sortedFavs.map(favorito => (
          <Card key={favorito.id} item={favorito}>
            <button onClick={() => deleteFav(favorito)} className="favButton">Delete fav</button>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Favs;
