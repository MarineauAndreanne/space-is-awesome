import React from "react";
import "./App.css";
import Navbar from "./Navbar";

import astronaut from "./images/astronaut.svg";

function App() {
  return (
    <div className="App">
      <section className="full-banner">
        <Navbar />
        <section className="title-banner">
          <div className="title">
            <h1>
              Because
              <br />
              Space is
              <br />
              awesome.
            </h1>
          </div>
          <div className="logo">
            <img src={astronaut} alt={"logo"}></img>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
