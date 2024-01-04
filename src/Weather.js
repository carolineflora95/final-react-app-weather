import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Wednesday 14:00</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <br />
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>✅ Feels Like: {Math.round(weatherData.feelsLike)}ºC</li>
              <li>📈Humidity: {weatherData.humidity}%</li>
              <li>˳༄꠶ Wind Speed: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="📍"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
    let city = "Wakefield";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
