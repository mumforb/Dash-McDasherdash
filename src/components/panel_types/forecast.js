import React, { Component } from 'react';
import Panel from '../panel';
import { connect } from 'react-redux';

import { getWeather } from '../../actions';

import { Days } from '../helpers/forecast_functions';

class Forecast extends Component {
  constructor(props) {
    super(props);

    this._getFutureWeather = this._getFutureWeather.bind(this);
    this._intervalId = this._intervalId.bind(this);
  }

  componentWillMount() {
    this._getFutureWeather();
  };

  componentDidMount() {
    this._intervalId();
    this._getFutureWeather();
  };

  _getFutureWeather(){
    this.props.getWeather(this.props.cityCode, this.props.openWeatherMapAPIKey);
  };

  _intervalId(){
    setInterval(() => this._getFutureWeather(), 30000);
  };

  render() {
    if (this.props.weather.weather !== null){
      return (
        <Panel {...this.props}>
          <h4>{this.props.weather.weather.city.name} {this.props.title}</h4>
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
