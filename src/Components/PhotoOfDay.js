import React, { useState, useEffect } from "react"

import "../styles/PhotoOfDay.css"

const apiKey = process.env.REACT_APP_NASA_APIKEY

export default function PhotoOfDay() {
  const [photoData, setPhotoData] = useState(null)
  const today = new Date().toISOString().slice(0, 10)
  const [date, setDate] = useState(today)

  const changeDate = (e) => {
    setDate(e.target.value)
  }

  useEffect(() => {
    fetchPhoto()

    async function fetchPhoto() {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
      )
      const data = await response.json()
      setPhotoData(data)
    }
  }, [date])

  if (!photoData) return <div>Exploring space...</div>

  return (
    <div className="photo-of-day-container">
      <h2 className="title">{photoData.title}</h2>
      <p className="date-taken">Date: {photoData.date}</p>
      <label>Go back in time:</label>
      <input
        type="date"
        id="chosen-date"
        name="chosen-date"
        max={today}
        onChange={changeDate}
      ></input>
      <div className="photo-and-explanation">
        <div className="photo">
          {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title}></img>
          ) : (
            <iframe
              title="space-video"
              src={photoData.url}
              frameBorder="0"
              allow="encrypted-media"
              allowfullscreen="allowfullscreen"
            ></iframe>
          )}
          {photoData.copyright ? (
            <p>&#169; {photoData.copyright}</p>
          ) : (
            <div></div>
          )}
        </div>
        <div className="explanation">
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </div>
  )
}
