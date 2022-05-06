import React, { useState, useEffect } from "react";

import "./styles/PhotoOfDay.css";

// const apiKey = process.env.REACT_APP_APIKEY;
const apiKey = "Mh7uMyod6LSzZxOk11W2CiErh56aXvXfV7UVqEEM";

export default function PhotoOfDay() {
  const [photoData, setPhotoData] = useState(null);
  var todayDate = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(todayDate);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2022-05-05`
      );
      const data = await response.json();
      setPhotoData(data);
    }
  }, []);

  function changeDate(event) {
    setDate(event.target.value);
    console.log(event.target.value);
    alert("fix this and .env");
  }

  if (!photoData) return <div>Exploring space...</div>;

  return (
    <div>
      <h2 className="title">{photoData.title}</h2>
      <p className="date-taken">{photoData.date}</p>
      <label>Choose date:</label>
      <input
        type="date"
        id="chosen-date"
        name="chosen-date"
        onChange={changeDate}
        max={todayDate}
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
            ></iframe>
          )}
          <small className="copyright">
            &#169; {photoData.copyright}
            <br />
            Data propulsed by NASA.
          </small>
        </div>
        <div className="explanation">
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
}
