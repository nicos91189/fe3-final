import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ item , children}) => {
 
  return (
    <div className="card">
      <Link to={"/detail/" + item.id}>
        <h4>{item.name}</h4>
        <h4>{item.username}</h4>
        <h4>{item.id}</h4>
        <h4>{item.id.address}</h4>
      </Link>
      {children}
    </div>
  );
};

export default Card;
