import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <BigCalendar
            {...props}
            events={events}
            step={15}
            timeslots={8}
            defaultView="week"
            defaultDate={new Date(2015, 3, 12)}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
