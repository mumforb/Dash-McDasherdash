import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


import Panel from '../panel';
// import { dashboard_config } from '../../dashboard_config';

import { getScores, getSchedule } from '../../actions';


const winningTeam = (x) => {
  if (parseInt(x.vTeam.score, 10) > parseInt(x.hTeam.score, 10)) {
    return 'vBold';
  } else {
    return 'hBold';
  }
};

const ScoreDisplay = (s) => {
  let a = [];
  s.forEach((g, i) => {
    a.push(
      <div key={i} className="scoreContainer">
        <div className="score">
          <div className={`vTeam ${winningTeam(g)}`}>
            <div>{g.vTeam.triCode}<br /><span className="record">({g.vTeam.win}-{g.vTeam.loss})</span></div>
            {g.vTeam.score}
          </div>
          <div className={`hTeam ${winningTeam(g)}`}>
            <div>{g.hTeam.triCode}<br /><span className="record">({g.hTeam.win}-{g.hTeam.loss})</span></div>
            {g.hTeam.score}
          </div>
        </div>
        <span className="record">{g.nugget.text}</span>
      </div>
    )
  });
  return a;
};

const natBroadcast = (b) => {
  if (b.national.length === 0) {
    return "League Pass";
  } else {
    return b.national[0].longName;
  }
};

const ScheduleDisplay = (c) => {
  let b = [];
  c.forEach((g, i) => {
    b.push(
      <span key={i} className="scheduledGame">
        {g.vTeam.triCode} <span className="record">({g.vTeam.win}-{g.vTeam.loss})</span> @ {g.hTeam.triCode} <span className="record">({g.hTeam.win}-{g.hTeam.loss})</span>
        <br />
        <span className="record">{g.arena.name}, {g.arena.city}<br />{moment(g.startTimeUTC).format('h:mm a')} - {natBroadcast(g.watch.broadcast.broadcasters)}</span>
        <br />
      </span>
    )
  });
  return b;
};

class Scores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScores: false
    };

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
    this.setState({
      showScores: !this.state.showScores
    });

    const todayTimeStamp = new Date(); // Unix timestamp in milliseconds
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
      if (this.state.showScores === false){
        return (
          <Panel {...this.props}>
            <h4>{this.props.title}</h4>
            <div className="schedule-holder">
              {ScheduleDisplay(this.props.schedule.data.games)}
            </div>
          </Panel>
        )
      } else {
        return (
          <Panel {...this.props}>
            <h4>Last Night's Games</h4>
            <div className="score-holder">
              {ScoreDisplay(this.props.scores.data.games)}
            </div>
          </Panel>
        )
      }

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
