import React from "react";
import "./styles/global.css";

export default function Navbar() {
  return (
    <nav>
      <div className="site-title">SPACE NEWS</div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Photo of the day</a>
          </li>
          <li>
            <a href="#">Space sounds</a>
          </li>
          <li>
            <a href="#">Mars Rover</a>
          </li>
          <li>
            <a href="#">Asteroid tracker</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
