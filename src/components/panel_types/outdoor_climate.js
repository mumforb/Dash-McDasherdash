import React, { Component } from 'react';

import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';

class Weather extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <ReactWeather
            forecast="5days"
            unit="imperial"
            apikey="b36600e66d1c49deb43204414181201"
            type="auto"
            city="27587"
          />
        </div>
      </div>
    );
  }
}

export default Weather;
