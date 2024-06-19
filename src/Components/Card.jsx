import React from "react";
import { Link } from 'react-router-dom';
import { useGlobalContext } from './utils/global.context';  // Ajusta la ruta según sea necesario
import { useMedicoStates } from '../Components/utils/global.contextnico';


const Card = ({ item , children}) => {
  // const { dispatch } = useGlobalContext();
  
  // const { setFav } = useMedicoStates();


  // const addFav = () => {
  //   dispatch({ type: 'ADD_FAV', payload: item });
  // };

  return (
    <div className="card">
      <Link to={"/detail/" + item.id}>
        <h4>{item.name}</h4>
        <h4>{item.username}</h4>
        <h4>{item.id}</h4>
        <h4>{item.id.address}</h4>
      </Link>
      {children}
      {/* <button onClick={addFav} className="favButton">Add fav</button> */}
      {/* <button onClick={()=> setFav((prevState)=>[...prevState, item])} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
