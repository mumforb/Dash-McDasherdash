import React, { Component } from 'react';
import axios from 'axios';

import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getUpstairsThermostat, getDownstairsThermostat } from '../../actions';

const modes = (m) => {
  switch(m){
    case "off":
      return `highlight_off`
    case "heat":
      return `whatshot`
    case "cool":
      return `ac_unit`
    case "auto":
      return `autorenew`
    case "eco":
      return `filter_vintage`
    default:
      return "";
  }
}

const ClimateBox = (c) => {
  return (
    <div className="climate-box">
      <div className="climate-icon"><i className="material-icons" aria-hidden="true">{modes(c.data.attributes.operation_mode)}</i></div>
      <div>{c.data.attributes.friendly_name}</div>
      <div className="climate-block">
        <div className="climate-temps">
          <div className="climate-individual-temp"><span>Current:</span>&nbsp;<span>&nbsp;{c.data.attributes.current_temperature}{c.data.attributes.unit_of_measurement}</span></div>
          <div className="climate-individual-temp"><span>Set:</span>&nbsp;<span>&nbsp;{c.data.attributes.temperature}{c.data.attributes.unit_of_measurement}</span></div>
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
