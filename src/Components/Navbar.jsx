import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './utils/routes';
import { useMedicoStates } from '../Components/utils/global.contextnico';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useMedicoStates();

  return (
    <nav>
      <button onClick={() => navigate(-1)}>volver</button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Favoritos</h4>
      </Link>
      <button onClick={toggleTheme}>Change theme</button>
      {/* <button onClick={() => dispatch({ type: "SET_THEME"})}>Change theme</button> */}
      
    </nav>
  )
}

export default Navbar