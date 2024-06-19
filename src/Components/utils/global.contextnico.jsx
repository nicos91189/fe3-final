import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {
  theme: "",
  data: []
}

const MedicoStates = createContext(undefined);

// const lsCart = JSON.parse(localStorage.getItem("cart")) || []; agregar

export const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [medicos, setMedicos] = useState([]);
  const [fav, setFav] = useState(lsFav);
  // const [favs,setFavs]= useState();
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(url)
      .then((m) => setMedicos(m.data))
      .catch((err) => console.log(err))
  }, []);

  const lsFav = JSON.parse(localStorage.getItem('fav')) || [];
  
  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav))
  }, [fav]);

  return (
    <MedicoStates.Provider value={{ medicos, fav, setFav }}>
      {children}
    </MedicoStates.Provider>
  );
};

export const useMedicoStates = () => {
  return useContext(MedicoStates);
};

