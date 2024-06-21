export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MEDICOS":
      return { ...state, medicos: action.payload };
    case "GET_MEDICO":
      return { ...state, medicos: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload }; 
    case "ADD_FAV":
      return { ...state, fav: [...state.fav, action.payload] };
    case "DELETE_FAV":
      const filteredFav = state.fav.filter((item) => item.id !== action.payload.id);
      return { ...state, fav: filteredFav };
    default:
      throw new Error();
  }
};