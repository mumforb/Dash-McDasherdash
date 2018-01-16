import React, { Component } from 'react';
import Panel from '../panel';
import moment from 'moment';

class Badge extends Component {
  render() {
    return (
      <Panel {...this.props}>
        <h1>{this.props.title}</h1>
        <h4>{moment().format('dddd')}, {moment().format('MMMM Do YYYY')}</h4>
      </Panel>
    )
  }
};

export default Badge;
