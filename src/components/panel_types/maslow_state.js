import React, { Component } from 'react';

import Panel from '../panel';
import { connect } from 'react-redux';

import { stateFinder, maslowFinder } from '../helpers/maslow_functions';


class MaslowState extends Component {

  render() {
    return (
      <Panel {...this.props}>
        <h4>{this.props.title}</h4>
        <div className="maslow-icon"><i className="material-icons">{stateFinder(maslowFinder())}</i></div>
        <div className="maslow-text">{maslowFinder()}</div>
      </Panel>
    )
  }
};

function mapStateToProps(state){
  return {}
};

export default connect(mapStateToProps, { })(MaslowState);
