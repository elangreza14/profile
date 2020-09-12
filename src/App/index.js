import React from "react";
import TestContextProvider from "../contexts/TestContextProvider";
import MainRouter from "../routes/MainRouter";
import './App.css'

function App() {
  return (
    <TestContextProvider>
      <MainRouter />
    </TestContextProvider>
  );
}

export default App;
