import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import { getEvents } from '../helpers/calendar_functions';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

require('react-big-calendar/lib/css/react-big-calendar.css');

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cal: ''
    };

  }

  componentWillMount() {
    getEvents();
  }

  render() {
    return (
      <div>
        hi {this.state.cal}
        <BigCalendar
          events={[]}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    );
  }
}

export default Calendar;
