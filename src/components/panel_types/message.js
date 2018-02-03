import React, { Component } from 'react';
import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getMessage } from '../../actions';
import { MessageLoop } from '../helpers/message_functions';



class Message extends Component {
  constructor(props) {
    super(props);

    this._getMessage = this._getMessage.bind(this);
    this._intervalId = this._intervalId.bind(this);
  }

  componentWillMount() {
    this._getMessage();
  };

  componentDidMount() {
    this._intervalId();
    this._getMessage();
  };

  _getMessage(){
    this.props.getMessage(dashboard_config.todoist_personal_api_token, dashboard_config.todoist_messaging_project_id);
  };

  _intervalId(){
    setInterval(() => this._getMessage(), 30000);
  };

  render() {
    if (this.props.message.message !== null){
      return (
        <Panel {...this.props}>
          <h4>{this.props.title}</h4>
          {MessageLoop(this.props)}
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
    message: state.Message
  }
};

export default connect(mapStateToProps, { getMessage })(Message);
