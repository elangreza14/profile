import React, { useReducer } from "react";
import { TestReducer } from "../reducers/TestReducers";
import { TestContext } from ".";

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
