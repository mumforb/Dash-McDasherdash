import React, { Component } from 'react';
import axios from 'axios';

import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getLights } from '../../actions';
import { lightModes } from '../helpers/light_functions';



class Lights extends Component {
  constructor(props) {
    super(props);

    this._getLights = this._getLights.bind(this);
    this._intervalId = this._intervalId.bind(this);
    this._DisplayLights = this._DisplayLights.bind(this);
  }

  componentWillMount() {
    this._getLights();
  };

  componentDidMount() {
    this._intervalId();
    this._getLights();
  };

  _getLights(){
    let lightsArray = [];
    dashboard_config.lights.forEach((l, i) => {
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
    this.props.getLights(lightsArray);
    this._DisplayLights(lightsArray);
  };

  _intervalId(){
    setInterval(() => this._getLights(), 30000);
  };

  _DisplayLights(l){
    let lightDisplayArray = [];
    l.forEach((e, i) => {
      lightDisplayArray.push (
        <div className="light-box" key={i}>
          <div className="hidden">{e.attributes.friendly_name}</div>
          <div>Light {i}</div>
          <div className="light-brightness">{e.attributes.brightness}</div>
          <div className="light-icon"><i className="material-icons" aria-hidden="true">{lightModes(e.state)}</i></div>
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
