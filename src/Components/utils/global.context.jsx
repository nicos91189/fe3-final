import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  theme: "light",
  fav: JSON.parse(localStorage.getItem('fav')) || [],
  medicos: []
}

const MedicoStates = createContext(undefined);

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users';

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
    document.body.className = newTheme;
  }

  useEffect(() => {
    axios(url)
      .then((med) =>
        dispatch({ type: "GET_MEDICOS", payload: med.data })
      )
      .catch((err) => console.log(err));
  }, []);
  

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(state.fav))
  }, [state.fav]);

  return (
    <MedicoStates.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </MedicoStates.Provider>
  );
};

export const useMedicoStates = () => {
  return useContext(MedicoStates);
};

