import React, { Component } from 'react';

import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getUpstairsThermostat, getDownstairsThermostat } from '../../actions';
import {  ClimateBox } from '../helpers/climate_functions';



class IndoorClimate extends Component {
  constructor(props) {
    super(props);

    this._getClimate = this._getClimate.bind(this);
    this._intervalId = this._intervalId.bind(this);
  }

  componentWillMount() {
    this._getClimate();
  };

  componentDidMount() {
    this._intervalId();
    this._getClimate();
  };

  _getClimate(){
    this.props.getDownstairsThermostat(dashboard_config.hassio_address, dashboard_config.hassio_http_password, dashboard_config.thermostats[0].hassio_climate_name);
    this.props.getUpstairsThermostat(dashboard_config.hassio_address, dashboard_config.hassio_http_password, dashboard_config.thermostats[1].hassio_climate_name);
  };

  _intervalId(){
    setInterval(() => this._getClimate(), 30000);
  };



  render() {
    const ut = this.props.UpstairsThermostat.data;
    const dt = this.props.DownstairsThermostat.data;
    if (ut !== null && dt !== null){
      return (
        <Panel {...this.props}>
          <h4>{this.props.title}</h4>
          <ClimateBox data={ut} />
          <ClimateBox data={dt} />
        </Panel>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
};



function mapStateToProps(state){
  return {
    UpstairsThermostat: state.UpstairsThermostat,
    DownstairsThermostat: state.DownstairsThermostat,
  }
};

export default connect(mapStateToProps, { getUpstairsThermostat, getDownstairsThermostat })(IndoorClimate);
