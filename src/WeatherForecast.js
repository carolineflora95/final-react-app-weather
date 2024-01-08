import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
  let city = "Skipton";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Tues</div>
          <div>
            <span className="Forecast-icon" role="img" aria-label="graph">
              ☀️
            </span>
          </div>
          <span className="Forecast-max">14º </span>
          <span className="Forecast-min">| 10º</span>
        </div>
      </div>
    </div>
  );
}
