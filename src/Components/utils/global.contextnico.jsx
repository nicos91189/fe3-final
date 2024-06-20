import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import { reducer } from "./reducer";

const initialState = {
  theme: "light",
  // data: [],
  medicos: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MEDICO":
      return { ...state, medicos: action.payload };
      case "SET_THEME":
    return { ...state, theme: action.payload };
    // case "ADD_CART":
    //   return { ...state, cart: [...state.cart, action.payload] };
    // case "DELETE_CART":
    //   const filteredCart = state.cart.filter(
    //     (item) => item.id !== action.payload.id
    //   );
    //   return { ...state, cart: filteredCart };
    default:
      throw new Error();
  }
};

const MedicoStates = createContext(undefined);

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const lsFav = JSON.parse(localStorage.getItem('fav')) || [];
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const [medicos, setMedicos] = useState([]);   ------comente esto
  const [fav, setFav] = useState(lsFav);
  const url = 'https://jsonplaceholder.typicode.com/users';

  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   document.body.className = newTheme;
  // }

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
    document.body.className = newTheme;
    // dispatch({ type: 'SET_THEME', payload: state.theme === "light" ? "dark" : "light" });
    // setTheme(newTheme);
    // document.body.className = newTheme;
  }

  // useEffect(() => {
  //   axios(url)
  //     .then((m) => setMedicos(m.data))
  //     .catch((err) => console.log(err))
  // }, []);

  useEffect(() => {
    axios(url)
      .then((med) =>
        dispatch({ type: "GET_MEDICO", payload: med.data })
      )
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav))
  }, [fav]);

  // medicos, toggleTheme ---------los saque del value
  return (
    <MedicoStates.Provider value={{ state, dispatch, toggleTheme, fav, setFav }}>
      {children}
    </MedicoStates.Provider>
  );
};

export const useMedicoStates = () => {
  return useContext(MedicoStates);
};

