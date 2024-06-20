import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  theme: "",
  data: []
}

const MedicoStates = createContext(undefined);

export const Context = ({ children }) => {
  const lsFav = JSON.parse(localStorage.getItem('fav')) || [];
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [medicos, setMedicos] = useState([]);
  const [fav, setFav] = useState(lsFav);
  const url = 'https://jsonplaceholder.typicode.com/users';

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  }

  useEffect(() => {
    axios(url)
      .then((m) => setMedicos(m.data))
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav))
  }, [fav]);

  return (
    <MedicoStates.Provider value={{ medicos ,fav, setFav, toggleTheme}}> 
      {children}
    </MedicoStates.Provider>
  );
};

export const useMedicoStates = () => {
  return useContext(MedicoStates);
};

