import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import ForecastShow from "./ForecastShow";
import axios from "axios";

export default function WeatherForecast(props) {
  let [done, setDone] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setDone(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setDone(true);
  }

  if (done) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastShow data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
