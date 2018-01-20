import React, { Component } from 'react';
import Panel from '../panel';
import { connect } from 'react-redux';

import { dashboard_config } from '../../dashboard_config';

import { getMessage } from '../../actions';

const messageDisplay = (m, i) => {
  return (
    <div className="message-single" key={i}>{m.content}</div>
  )
}

const MessageLoop = (props) => {
  let messageArray = [];
  props.message.message.map((m, i) => {
    messageArray.push (
      messageDisplay(m, i)
    )
  });
  return messageArray;
}

class Message extends Component {

  componentWillMount() {
    this.props.getMessage(dashboard_config.todoist_personal_api_token, dashboard_config.todoist_messaging_project_id);
  }

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
