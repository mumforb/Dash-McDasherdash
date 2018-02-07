import React, { Component } from 'react';

import Panel from '../panel';
import { connect } from 'react-redux';

import { stateFinder, maslowFinder } from '../helpers/maslow_functions';


class MaslowState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maslowState: maslowFinder()
    };

    this._intervalId = this._intervalId.bind(this);
    this._getMaslow = this._getMaslow.bind(this);
  }

  componentDidMount() {
    this._intervalId();
    this._getMaslow();
  };

  _getMaslow(){
    const m = maslowFinder();
    this.setState({
      maslowState: m
    });
  };

  _intervalId(){
    setInterval(() => this._getMaslow(), 10000);
  };

  render() {
    return (
      <Panel {...this.props}>
        <h4>{this.props.title}</h4>
        <div className="maslow-icon"><i className="material-icons">{stateFinder(this.state.maslowState)}</i></div>
        <div className="maslow-text">{this.state.maslowState}</div>
      </Panel>
    )
  }
};

function mapStateToProps(state){
  return {}
};

export default connect(mapStateToProps, { })(MaslowState);
