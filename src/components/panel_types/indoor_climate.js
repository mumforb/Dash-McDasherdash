import React, { Component } from 'react';
import axios from 'axios';

import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getUpstairsThermostat, getDownstairsThermostat } from '../../actions';

const modes = (m) => {
  switch(m){
    case "off":
      return `fa fa-toggle-off`
    case "heat":
      return `fa fa-fire`
    case "cool":
      return `fa fa-snowflake-o`
    case "auto":
      return `fa fa-refresh`
    case "eco":
      return `fa fa-leaf`
    default:
      return "";
  }
}

const ClimateBox = (c) => {
  return (
    <div className="climate-box">
      <div className="climate-icon"><i className={modes(c.data.attributes.operation_mode)} aria-hidden="true"></i></div>
      <div>{c.data.attributes.friendly_name}</div>
      <div className="climate-block">
        <div className="climate-temps">
          <div className="climate-individual-temp"><span>Current:</span>&nbsp;<span><i className="fa fa-thermometer-full" aria-hidden="true"></i>&nbsp;{c.data.attributes.current_temperature}{c.data.attributes.unit_of_measurement}</span></div>
          <div className="climate-individual-temp"><span>Set:</span>&nbsp;<span><i className="fa fa-thermometer-full" aria-hidden="true"></i>&nbsp;{c.data.attributes.temperature}{c.data.attributes.unit_of_measurement}</span></div>
        </div>
      </div>
    </div>
  )
}

class IndoorClimate extends Component {

  componentWillMount() {
    this.props.getUpstairsThermostat();
    this.props.getDownstairsThermostat(dashboard_config.hassio_address, dashboard_config.hassio_http_password, dashboard_config.thermostats[0].hassio_climate_name);
  }

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
