import React, { Component } from 'react';
import axios from 'axios';

import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getLights } from '../../actions';

const modes = (m) => {
  switch(m){
    case "off":
      return `brightness_low`
    case "on":
      return `brightness_high`
    default:
      return "";
  }
}



class Lights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLightArray: [],
      lightArray: []
    }

    this._DisplayLights = this._DisplayLights.bind(this);
  }

  componentWillMount() {
    let lightsArray = [];
    dashboard_config.lights.map((l, i) => {
      axios.get(`${dashboard_config.hassio_address}/api/states/light.${l.entity_id}`, {
        headers: {
          'x-ha-access': dashboard_config.hassio_http_password
        }
      })
      .then((response) => {
        lightsArray.push(response.data);
        this.setState({
          initialLightArray: lightsArray
        })
      });
    });
    console.log("lightsArray", lightsArray);
    this.props.getLights(lightsArray);
    this._DisplayLights(lightsArray);
  }

  _DisplayLights(l){
    let lightDisplayArray = [];
    l.map((e, i) => {
      lightDisplayArray.push (
        <div className="light-box" key={i}>
          <div>{e.attributes.friendly_name}</div>
          <div>{e.attributes.brightness}</div>
          <div className="light-icon"><i className="material-icons" aria-hidden="true">{modes(e.state)}</i></div>
        </div>
      );
    });
    return lightDisplayArray;
  }


  render() {
    const l = this.props.Lights.data;
    if (l !== null){
      return (
        <Panel {...this.props}>
          <h4>{this.props.title}</h4>
          <div className="light-list">
            {this._DisplayLights(l)}
          </div>
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
    Lights: state.Lights
  }
};

export default connect(mapStateToProps, { getLights })(Lights);
