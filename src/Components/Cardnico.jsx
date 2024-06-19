import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ item , setFav}) => { //name, username, id

  const addFav = () => {
    setFav((prevState =>[...prevState, item]))
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to= {"/detail/" + item.id}>
        <h4>{item.name}</h4>
        <h4>{item.username}</h4>
        <h4>{item.id}</h4>
      </Link>
      {/* En cada card deberan mostrar en name - username y el id  -----ok*/}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle ----ok*/}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
