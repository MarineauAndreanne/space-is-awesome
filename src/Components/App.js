import React from "react";
import Navbar from "./Navbar";
import NewsTabs from "./NewsTabs";

import "../styles/App.css";
import astronaut from "../images/astronaut.svg";
import space from "../images/space.svg";

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
            <img src={astronaut} alt={"logo"} className="banner-logo"></img>
          </div>
        </section>
      </section>

      <section className="news">
        <NewsTabs />
      </section>

      <footer>
        <h3>
          Visit us daily for <span>SPACE NEWS </span>; because space is
          awesooome !
        </h3>
        <img src={space} alt="space" className="space-logo"></img>
        <small className="signature">Coded by Andreanne Marineau 2022</small>
      </footer>
    </div>
  );
}

export default App;
