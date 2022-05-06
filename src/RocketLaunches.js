import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles/RocketLaunches.css";
import rocket from "./images/rocket.svg";

export default function RocketLaunches() {
  const [launchesData, setLaunchesData] = useState(null);

  useEffect(() => {
    fetchLaunchesData();

    async function fetchLaunchesData() {
      const response = await axios(
        `https://fdo.rocketlaunch.live/json/launches/next/5`
      );

      setLaunchesData(response.data.result);
    }
  }, []);

  if (!launchesData) return <div>Exploring space...</div>;

  return (
    <>
      <h2 className="rocket-launches-title">
        Stay tuned to stay updated on the next five rocket launches...
      </h2>
      <div className="all-launches">
        {launchesData.map(function (launchData, index) {
          return (
            <div className="individual-launch" key={index}>
              <p className="launch-description">
                {launchesData[index].launch_description}
              </p>
              <p className="pad-location">
                Pad Location: {launchesData[index].pad.location.name},{" "}
                {launchesData[index].pad.location.statename},{" "}
                {launchesData[index].pad.location.country}
              </p>
            </div>
          );
        })}
        <div className="data-source-info">
          <img src={rocket} alt="rocket" className="rocket"></img>
          <small>Data propulsed by RocketLaunch.Live</small>
        </div>
      </div>
    </>
  );
}
