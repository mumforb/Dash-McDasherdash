import React, { Component } from 'react';
import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getScores } from '../../actions';


const ScoreDisplay = (s) => {
  let a = [];
  s.map((g, i) => {
    a.push(
      <span key={i} className="score">
        {g.hTeam.triCode} vs {g.vTeam.triCode}
        <br />
        {g.hTeam.score} &nbsp;&nbsp; {g.vTeam.score}
        <hr />
      </span>
    )
  });
  return a;
}


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
    this.props.getScores("date");
  };

  _intervalId(){
    setInterval(() => this._getScores(), 30000);
  };



  render() {
    if (this.props.scores !== null){
      console.log("sciores", this.props.scores.data);
      return (
        <Panel {...this.props}>
          <h4>{this.props.title}</h4>
          <div className="score-holder">
            {ScoreDisplay(this.props.scores.data.games)}
          </div>
        </Panel>
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
    scores: state.Scores.scores
  }
};

export default connect(mapStateToProps, { getScores })(Scores);
