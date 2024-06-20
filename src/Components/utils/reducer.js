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