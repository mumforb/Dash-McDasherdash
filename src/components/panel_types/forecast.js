import React, { Component } from 'react';
import Panel from '../panel';
import { connect } from 'react-redux';

import { getWeather } from '../../actions';

import { Days } from '../helpers/forecast_functions';

class Forecast extends Component {

  componentWillMount() {
    this.props.getWeather(this.props.cityCode, this.props.openWeatherMapAPIKey);
  }

  render() {
    console.log("tpww", this.props.weather.weather);
    if (this.props.weather.weather !== null){
      return (
        <Panel {...this.props}>
          <h4>{this.props.title} for {this.props.weather.weather.city.name}</h4>
          <div id="weather-row">
            <Days {...this.props} />
          </div>
        </Panel>
      )
    } else {
      return (
        <div>one moment</div>
      )
    }
  }
};



function mapStateToProps(state){
  return {
    weather: state.Weather
  }
};

export default connect(mapStateToProps, { getWeather })(Forecast);
