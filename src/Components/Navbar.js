import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="site-title">SPACE NEWS</div>
      <div className="links">
        <ul>
          <li>
            <a href="#go-to-tabs">Photo of the day</a>
          </li>
          <li>
            <a href="#tab:r1:1">Rocket Launches</a>
          </li>
          <li>
            <a href="#go-to-tabs">Asteroid tracker</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
