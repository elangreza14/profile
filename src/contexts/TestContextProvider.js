import React, { useReducer } from "react";
import { TestContext } from ".";
import { TestReducer } from "../reducers";

const TestContextProvider = (props) => {
  const initialState = [];
  const [cart, dispatch] = useReducer(TestReducer, initialState);
  return (
    <TestContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
