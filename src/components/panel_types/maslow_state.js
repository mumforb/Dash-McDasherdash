import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';


const stateFinder = (m) => {
  switch(m){
    case "hygge":
      return `weekend`
    case "unlocked":
      return `insert_emoticon`
    case "work":
      return `monetization_on`
    case "unlocked":
      return `local_dining`
    case "coffee":
      return `local_cafe`
    case "sleep":
      return `local_hotel`
    case "unlocked":
      return `cake`
    case "bus":
      return `directions_bus`;
    case "homework":
      return `local_library`;
    default:
      return "";
  }
}

const maslowFinder = () => {
  const currMin = moment(new Date()).minute();
  const currHour = moment(new Date()).hour();
  const currDay = moment(new Date()).day();
  if (currDay < 6 ) {
    if (currHour <= 5) {
      if (currMin <= 45) {
        return "sleep";
      } else {
        return "coffee";
      }
    } else if (currHour > 6 && currHour <= 8) {
      return "coffee";
    } else if (currHour > 9 && currHour <= 2) {
      if (currMin < 30) {
        return "work";
      } else {
        return "bus";
      }
    } else if (currHour >= 15 && currHour < 18) {
      if (currMin < 15) {
        return "bus";
      } else {
        return "homework";
      }
    } else if (currHour >= 18 && currHour <= 19) {
      return "dinner";
    } else if (currHour > 19 && currHour <= 22){
      return "hygge";
    } else {
      return "sleep";
    }
  } else {
    return "hygge";
  }
}



class MaslowState extends Component {

  render() {
    return (
      <Panel {...this.props}>
        <h4>{this.props.title}</h4>
        <div className="maslow-icon"><i className="material-icons">{stateFinder(maslowFinder())}</i></div>
      </Panel>
    )
  }
};



function mapStateToProps(state){
  return {
  }
};

export default connect(mapStateToProps, { })(MaslowState);
