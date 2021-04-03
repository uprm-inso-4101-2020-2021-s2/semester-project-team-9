/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainMenu from "./scenes/MainMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainMenu />
      </BrowserRouter>
    </div>
  );
}
export default App;
