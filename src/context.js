import React, { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialValue = {
  loading: false,
  items: [],
  total: 0,
  amount: 3,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "FETCH_DATA", data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.items]);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEARALL" });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        clearCart,
        removeItem,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
