import React from "react";
import TestContextProvider from "../contexts/TestContextProvider";
import MainRouter from "../routes/MainRouter";

function App() {
  return (
    <TestContextProvider>
      <MainRouter />
    </TestContextProvider>
  );
}

export default App;
