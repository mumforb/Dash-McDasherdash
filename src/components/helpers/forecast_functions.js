import React from 'react';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import _ from 'lodash';
import moment from 'moment';

import { IconMap } from './forecast_constants';

export const Days = (props) => {
  let x = [];
  if (props.weather.weather.list !== undefined){
    let w = props.weather.weather.list.splice(0, 5);
    console.log("w", w);
    w.forEach((e, i) => {
      x.push (
        <Day {...e} key={i} />
      )
    })
  };
  return x;
}


export const Day = (e) => {
  const className = `wi wi-${IconMap[e.weather[0].id.toString()].icon}`;
  let min = _.split(kelvinToFahrenheit(e.temp.min), '.');
  let max = _.split(kelvinToFahrenheit(e.temp.max), '.');
  return (
    <div className="weather-day">
      <div className="weather-day-of-week">{moment(e.dt * 1000).format('dddd')}</div>
      <div className="weather-icon"><i className={className}></i></div>
      <div className="weather-temprange">{max[0]}&#8457;  {min[0]}&#8457;</div>
      <div className="weather-main">{e.weather[0].main}</div>
    </div>
  )
};

export const WindDirection = (w) => {
  if (w < 23) {
    return 'wi wi-wind towards-0-deg';
  } else if (w < 45) {
    return 'wi wi-wind towards-23-deg';
  } else if (w < 68){
    return 'wi wi-wind towards-45-deg';
  } else if (w < 90){
    return 'wi wi-wind towards-68-deg';
  } else if (w < 113){
    return 'wi wi-wind towards-90-deg';
  } else if (w < 135){
    return 'wi wi-wind towards-113-deg';
  } else if (w < 158){
    return 'wi wi-wind towards-135-deg';
  } else if (w < 180){
    return 'wi wi-wind towards-158-deg';
  } else if (w < 203){
    return 'wi wi-wind towards-180-deg';
  } else if (w < 225){
    return 'wi wi-wind towards-203-deg';
  } else if (w < 248){
    return 'wi wi-wind towards-225-deg';
  } else if (w < 270){
    return 'wi wi-wind towards-248-deg';
  } else if (w < 293){
    return 'wi wi-wind towards-270-deg';
  } else if (w < 313){
    return 'wi wi-wind towards-293-deg';
  } else if (w < 336){
    return 'wi wi-wind towards-313-deg';
  } else {
    return 'wi wi-wind towards-336-deg';
  }
}


export const Today = (props) => {
  const currentWeather = props.CurrentWeather;

  const className = `wi wi-${IconMap[currentWeather.weather[0].id.toString()].icon}`;
  let temp = _.split(kelvinToFahrenheit(currentWeather.main.temp), '.');
  const sunrise =  new Date(currentWeather.sys.sunrise * 1000);
  const sunset =  new Date(currentWeather.sys.sunset * 1000);
  const wind = _.split(currentWeather.wind.deg, '.');
  return (
    <div className="current-weather-day">
      <div className="current-weather-topline">
        <div className="current-weather-icon">
          <i className={className}></i>
          <div className="current-weather-desc">{currentWeather.weather[0].main}</div>
        </div>
        <div className="current-weather-temp">{temp[0]}<i className="wi wi-fahrenheit"></i></div>
      </div>
      <div>&nbsp;</div>
      <div className="current-weather-bottomline">
        <div className="current-weather-sunrise current-weather-bottom-element">
          <div>Sunrise:</div>
          <div>&nbsp;</div>
          <div>{moment(sunrise).format('h:mm:ss a')} <i className="wi wi-sunrise"></i></div>
        </div>
        <div className="current-weather-sunset current-weather-bottom-element">
          <div>Sunset:</div>
          <div>&nbsp;</div>
          <div>{moment(sunset).format('h:mm:ss a')} <i className="wi wi-sunset"></i></div>
        </div>
        <div className="current-weather-humidity current-weather-bottom-element">
          <div>Humidity:</div>
          <div>&nbsp;</div>
          <div>{currentWeather.main.humidity}% <i className="wi wi-humidity"></i></div>
        </div>
        <div className="current-weather-pressure current-weather-bottom-element">
          <div>Pressure:</div>
          <div>&nbsp;</div>
          <div>{currentWeather.main.pressure}mb <i className="wi wi-barometer"></i></div>
        </div>
        <div className="current-weather-speed current-weather-bottom-element">
          <div>Wind Speed:</div>
          <div>&nbsp;</div>
          <div>{currentWeather.wind.speed}mph  <i className="wi wi-strong-wind"></i></div>
        </div>
        <div className="current-weather-direction current-weather-bottom-element">
          <div>Wind Direction:</div>
          <div>&nbsp;</div>
          <div>{wind[0]} <i className={WindDirection(wind[0])}></i></div>
        </div>
      </div>
    </div>
  )
}
