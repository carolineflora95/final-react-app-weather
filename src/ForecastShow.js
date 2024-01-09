import React from "react";

export default function ForecastShow(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <div>
        <img
          className="weatherIcon"
          src={props.data.condition.icon_url}
          alt="Weather Icon"
        />
      </div>
      <span className="Forecast-max">
        {Math.round(props.data.temperature.maximum)}º
      </span>
      <span className="Forecast-min">
        {""}|{Math.round(props.data.temperature.minimum)}º
      </span>
    </div>
  );
}
