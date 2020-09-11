import React, { useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { AuthContext } from "./index";

const AuthContextProvider = (props) => {
  const initialState = {
    isLoggedIn: false,
    userId: "",
    employee_code: "",
    token: "",
    timeout: "",
  };

  const [auth, dispatch_auth] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ auth, dispatch_auth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
