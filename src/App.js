import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Board from "./components/Boad/Board";
import "./Style.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Board />
    </div>
  );
}

export default App;
