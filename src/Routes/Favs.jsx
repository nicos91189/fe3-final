import React from "react";
import Card from "../Components/Card";
import {useMedicoStates} from "../Components/utils/global.context"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favs} = useMedicoStates()//agrege esta linea

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map(favorito => <Card item={favorito} key={favorito.id}/>)}//agregue esta linea
      </div>
    </>
  );
};

export default Favs;

// import { useBeerContext } from "../Context/Context";
// import Card from "../components/Card";

// const Cart = () => {
//   const { cart } = useBeerContext();
//   return (
//     <div className="grid">
//       {cart.map((beer) => (  <Card data={beer} key={beer.id} />
//       ))}
//     </div>
//   );
// };

// export default Cart;
