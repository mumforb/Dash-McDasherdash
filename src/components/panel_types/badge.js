import React, { Component } from 'react';
import Panel from '../panel';
import moment from 'moment';

class Badge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currDate: `${moment().format('dddd')}, ${moment().format('MMMM Do YYYY')}`,
      currTime: `${moment().format('h:mm A')}`
    }

    this._updateTime = this._updateTime.bind(this);
    this._intervalId = this._intervalId.bind(this);
  }

  componentWillMount() {
    this._updateTime();
  };

  componentDidMount() {
    this._intervalId();
    this._updateTime();
  };

  _updateTime(){
    this.setState({
      currDate: `${moment().format('dddd')}, ${moment().format('MMMM Do YYYY')}`,
      currTime: `${moment().format('h:mm A')}`
    })
  };

  _intervalId(){
    setInterval(() => this._updateTime(), 30000);
  };


  render() {
    return (
      <Panel {...this.props}>
        <h1 id="site-title">{this.props.title}</h1>
        <div className="badge">
          <h4>{moment().format('dddd')}, {moment().format('MMMM Do YYYY')}</h4>
          <h2>{moment().format('h:mm A')}</h2>
        </div>
      </Panel>
    )
  }
};

export default Badge;
