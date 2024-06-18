import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const initialState = {
  theme: "",
   data: []
  }

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [medico, setMedico] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() =>{
    axios(url).then((m)=> setMedico(m.data.medico));
  }, []);

  return (
    <ContextGlobal.Provider value={{medico}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useMedicoStates = () => {
  return useContext(ContextGlobal);
};

