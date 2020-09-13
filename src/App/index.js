import React from "react";
import StoreContextProvider from "../contexts/StoreContextProvider";
import MainRouter from "../routes/MainRouter";
import './App.css'

function App() {
  return (
    <StoreContextProvider>
      <MainRouter />
    </StoreContextProvider>
  );
}

export default App;
