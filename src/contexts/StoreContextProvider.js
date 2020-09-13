import React, { useReducer } from "react";
import { StoreContext } from ".";
import { TestReducer } from "../reducers";

const StoreContextProvider = (props) => {
  const initialState = [];
  const [cart, dispatch] = useReducer(TestReducer, initialState);
  return (
    <StoreContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
