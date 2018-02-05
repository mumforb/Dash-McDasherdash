import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


import Panel from '../panel';
import { dashboard_config } from '../../dashboard_config';

import { getScores, getSchedule } from '../../actions';


const ScoreDisplay = (s) => {
  let a = [];
  s.map((g, i) => {
    a.push(
      <span key={i} className="score">
        {g.vTeam.triCode} <span className="record">({g.vTeam.win}-{g.vTeam.loss})</span> vs {g.hTeam.triCode} <span className="record">({g.hTeam.win}-{g.hTeam.loss})</span>
        <br />
        {g.vTeam.score} &nbsp;&nbsp; {g.hTeam.score}
        <br />
        {g.nugget.text}
        <hr />
      </span>
    )
  });
  return a;
};

const ScheduleDisplay = (c) => {
  let b = [];
  c.map((g, i) => {
    b.push(
      <span key={i} className="score">
        {g.vTeam.triCode} <span className="record">({g.vTeam.win}-{g.vTeam.loss})</span> @ {g.hTeam.triCode} <span className="record">({g.hTeam.win}-{g.hTeam.loss})</span>
        <br />
        {g.arena.name}, {g.arena.city}
        <hr />
      </span>
    )
  });
  return b;
};

class Scores extends Component {
  constructor(props) {
    super(props);

    this._getScores = this._getScores.bind(this);
    this._intervalId = this._intervalId.bind(this);
  }

  componentWillMount() {
    this._getScores();
  };

  componentDidMount() {
    this._intervalId();
    this._getScores();
  };

  _getScores(){
    const todayTimeStamp = new Date; // Unix timestamp in milliseconds
    const oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
    const diff = todayTimeStamp - oneDayTimeStamp;
    const yesterdayDate = new Date(diff);

    const y = moment(yesterdayDate).format('YYYYMMDD');
    const t = moment().format('YYYYMMDD');
    this.props.getScores(y);
    this.props.getSchedule(t);
  };

  _intervalId(){
    setInterval(() => this._getScores(), 30000);
  };



  render() {
    if (this.props.scores !== null && this.props.schedule !== null){
      return (
        <div>
          <Panel {...this.props}>
            <h4>{this.props.title}</h4>
            <div className="score-holder">
              {ScheduleDisplay(this.props.schedule.data.games)}
            </div>
          </Panel>
          <Panel {...this.props}>
            <h4>Last Night's Games</h4>
            <div className="score-holder">
              {ScoreDisplay(this.props.scores.data.games)}
            </div>
          </Panel>
        </div>
      )
    } else {
      return (
        <div>one moment</div>
      )
    }
  }
};



function mapStateToProps(state){
  return {
    scores: state.Scores.scores,
    schedule: state.Scores.schedule
  }
};

export default connect(mapStateToProps, { getScores, getSchedule })(Scores);
