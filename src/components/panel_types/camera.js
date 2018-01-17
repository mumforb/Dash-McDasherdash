import React, { Component } from 'react';
import axios from 'axios';



import Panel from '../panel';
import { connect } from 'react-redux';

class Camera extends Component {

  componentWillMount() {
    // axios.get('http://hassio.local:8123/api/states/climate.3120_downstairs_thermostat?api_password=awesome');
  }

  render() {
    return (
      <Panel {...this.props}>

      </Panel>
    )
  }
};



function mapStateToProps(state){
  return {  }
};

export default connect(mapStateToProps, {  })(Camera);
