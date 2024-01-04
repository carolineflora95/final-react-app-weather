import React from "react";
import NiceDate from "./NiceDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <NiceDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-6">
          <img src={props.info.iconUrl} alt={props.info.description}></img>
          <span className="temperature">
            {Math.round(props.info.temperature)}
          </span>
          <span className="units">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>✅ Feels Like: {Math.round(props.info.feelsLike)}ºC</li>
            <li>📈Humidity: {props.info.humidity}%</li>
            <li>˳༄꠶ Wind Speed: {Math.round(props.info.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
