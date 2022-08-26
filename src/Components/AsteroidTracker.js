import React, { useState, useEffect } from "react"

import "../styles/AsteroidTracker.css"

const apiKey = "It5ubxeaaIqB1nCYPvQeTM4YmzT5HQK9VvYRneWn"

export default function AsteroidTracker() {
  const [count, setCount] = useState(0)
  const [asteroidData, setAsteroidData] = useState(null)

  const date = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    fetchAsteroidData()

    async function fetchAsteroidData() {
      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`
      )
      const data = await response.json()
      setCount(data.element_count)
      setAsteroidData(data.near_earth_objects[date])
    }
  }, [date])

  if (!asteroidData) return <div>Exploring space...</div>

  return (
    <>
      <div className="all-neo">
        <h2 className="neo-count-title">
          Total near earth objects (NEO) today, {date}:{" "}
          <span className="neo-count">{count} Asteroids</span>
        </h2>

        {asteroidData.map(function (data, index) {
          return (
            <div className="individual-neo" key={index}>
              <div className="neo-name">Name: {asteroidData[index].name}</div>

              <div className="neo-estimated-diameter">
                Estimated diameter:{" "}
                {parseFloat(
                  asteroidData[index].estimated_diameter.meters
                    .estimated_diameter_min
                ).toFixed(2)}{" "}
                -{" "}
                {parseFloat(
                  asteroidData[index].estimated_diameter.meters
                    .estimated_diameter_min
                ).toFixed(2)}{" "}
                m
              </div>

              <div>
                Orbiting body:{" "}
                {asteroidData[index].close_approach_data[0].orbiting_body ===
                "Earth" ? (
                  <span>Earth 🌎</span>
                ) : (
                  <span>Other 🪐</span>
                )}
              </div>

              <div>
                Close approach relative velocity:{" "}
                {parseFloat(
                  asteroidData[index].close_approach_data[0].relative_velocity
                    .kilometers_per_second
                ).toFixed(2)}{" "}
                km/s
              </div>

              <div>
                Miss distance from orbiting body:{" "}
                {parseFloat(
                  asteroidData[index].close_approach_data[0].miss_distance
                    .kilometers
                ).toFixed(2)}{" "}
                km
              </div>

              <div className="neo-danger-potential">
                Is potentially dangerous as per NASA?{" "}
                {asteroidData[index].is_potentially_hazardous_asteroid ? (
                  <span>
                    Yes 🫣
                    <br />
                    <em>
                      As per NASA, a potentially hazardous object (PHO) is a
                      near-Earth object whose orbit brings it within 7.5 million
                      km of Earth's orbit, and is greater than 140 meters in
                      size.
                    </em>
                  </span>
                ) : (
                  <span>No 🔭</span>
                )}
              </div>
              <br />
            </div>
          )
        })}
      </div>
    </>
  )
}
