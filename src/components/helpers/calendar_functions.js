import axios from 'axios';

const CALENDAR_ID = 'a3q49pg7p2jqbut0hqg9s363tg@group.calendar.google.com';
const API_KEY = 'AIzaSyAwpwCxDZ0pBp9qeaMrmwWc56MAy8ZSqCk';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  axios.get(url)
    .then((response) => {
      console.log("response", response);
      const events = [];
      response.data.items.map((event) => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        })
      })
      callback(events)
    });
}
