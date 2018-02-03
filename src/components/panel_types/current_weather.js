import React, { Component } from 'react';
import Panel from '../panel';
import { connect } from 'react-redux';

import { getCurrentWeather } from '../../actions';

import { Today } from '../helpers/forecast_functions';


class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this._getWeather = this._getWeather.bind(this);
    this._intervalId = this._intervalId.bind(this);
  }

  componentWillMount() {
    this._getWeather();
  };

  componentDidMount() {
    this._intervalId();
    this._getWeather();
  };

  _getWeather(){
    this.props.getCurrentWeather(this.props.cityCode, this.props.openWeatherMapAPIKey);
  };

  _intervalId(){
    setInterval(() => this._getWeather(), 30000);
  };

  render() {
    if (this.props.CurrentWeather !== null){
      return (
        <Panel {...this.props}>
          <h4>{this.props.title}</h4>
          <p></p>
          <div id="current-weather-row">
            <Today {...this.props} />
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
    CurrentWeather: state.Weather.currentWeather
  }
};

export default connect(mapStateToProps, { getCurrentWeather })(CurrentWeather);
