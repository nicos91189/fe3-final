import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './utils/routes';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {

  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  }
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
    </nav>
  )
}

export default Navbar