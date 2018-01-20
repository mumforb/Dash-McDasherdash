import React, { Component } from 'react';
import axios from 'axios';

import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getLocks } from '../../actions';

const lockModes = (m) => {
  switch(m){
    case "locked":
      return `lock`
    case "unlocked":
      return `lock_open`
    default:
      return "";
  }
}

const LocksBox = (c) => {
  return (
    <div className="climate-box">
      <div>{c.data.attributes.friendly_name}</div>
      <div className="climate-icon"><i className="material-icons" aria-hidden="true">{lockModes(c.data.state)}</i></div>
    </div>
  )
}

class Locks extends Component {

  componentWillMount() {
    // lock.front_door
    this.props.getLocks(dashboard_config.hassio_address, dashboard_config.hassio_http_password, dashboard_config.locks[0].hassio_lock_entity_id);
  }

  render() {
    const l = this.props.Locks.data;
    if (l !== null){
      return (
        <Panel {...this.props}>
          <h4>{this.props.title}</h4>
          <LocksBox data={l} />
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
    Locks: state.Locks
  }
};

export default connect(mapStateToProps, { getLocks })(Locks);
