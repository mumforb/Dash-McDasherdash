import React, { Component } from 'react';

import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getLocks } from '../../actions';
import { LocksBox } from '../helpers/lock_functions';



class Locks extends Component {
  constructor(props) {
    super(props);

    this._getLocks = this._getLocks.bind(this);
    this._intervalId = this._intervalId.bind(this);
  }

  componentWillMount() {
    this._getLocks();
  };

  componentDidMount() {
    this._intervalId();
    this._getLocks();
  };

  _getLocks(){
    this.props.getLocks(dashboard_config.hassio_address, dashboard_config.hassio_http_password, dashboard_config.locks[0].hassio_lock_entity_id);
  };

  _intervalId(){
    setInterval(() => this._getLocks(), 30000);
  };


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
