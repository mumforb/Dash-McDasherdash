import React, { Component } from 'react';
import Panel from '../panel';
import moment from 'moment';

class Badge extends Component {
  render() {
    return (
      <Panel {...this.props}>
        <h1>{this.props.title}</h1>
        <div className="badge">          
          <h4>{moment().format('dddd')}, {moment().format('MMMM Do YYYY')}</h4>
          <h2>{moment().format('h:mm A')}</h2>
        </div>
      </Panel>
    )
  }
};

export default Badge;
