import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="www.linkedin.com/in/caroline-flora-knight-48a24b118">
            Caroline Knight{" "}
          </a>
          and is open-sourced on{" "}
          <a href="https://github.com/carolineflora95/final-react-app-weather">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
