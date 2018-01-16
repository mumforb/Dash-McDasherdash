import React from 'react';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';
import _ from 'lodash';

import { IconMap } from './forecast_constants';

export const Days = (props) => {
  let x = [];
  if (props.weather.weather.list !== undefined){
    let w = props.weather.weather.list.splice(0, 5);
    w.map((e, i) => {
      x.push (
        <Day {...e} key={i} />
      )
    })
  };

  return x;
}


export const Day = (e) => {
  console.log("e", e);
  const className = `wi wi-${IconMap[e.weather[0].id.toString()].icon}`;
  const min = _.split(kelvinToFahrenheit(e.temp.min), '.');
  const max = _.split(kelvinToFahrenheit(e.temp.max), '.');
  return (
    <div className="weather-day">
      <div className="weather-icon"><i className={className}></i></div>
      <div className="weather-temprange">{min[0]}&#8457;  {max[0]}&#8457;</div>
      <div className="weather-main">{e.weather[0].main}</div>
    </div>
  )
};





//  city name
//  city.name

//  weather loop

//  list[x].main.humidity
//  list[x].main.temp
//  list[x].main.pressure
//  list[x].main.max
//  list[x].main.min
//  list[x].weather.description

// this is how you select the icon class
//  list[x].weather.id

// these may not exist
//  list[x].rain.3h
//  list[x].snow.3h

//  list[x].wind.speed
//  list[x].wind.deg
