import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';
export const GET_UPSTAIRS_THERMOSTAT = 'GET_UPSTAIRS_THERMOSTAT';
export const GET_DOWNSTAIRS_THERMOSTAT = 'GET_DOWNSTAIRS_THERMOSTAT';

export const getWeather = (c, o) => {
  return (dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?id=${c}&APPID=${o}`)
    .then((response) => {
      dispatch({
        type: GET_WEATHER,
        payload: response.data
      });
    });
  });
};

export const getDownstairsThermostat = (h, p, c) => {
  return (dispatch => {
    axios.get(`${h}/api/states/climate.${c}`, {
      headers: {
        'x-ha-access': p
      }
    }).then((response) => {
      dispatch({
        type: GET_DOWNSTAIRS_THERMOSTAT,
        payload: response.data
      });
    });
  });
};

export const getUpstairsThermostat = () => {
  return (dispatch => {
    axios.get(`http://192.168.1.248:8123/api/states/climate.upstairs`, {
      headers: {
        'x-ha-access': 'awesome'
      }
    })
    .then((response) => {
      dispatch({
        type: GET_UPSTAIRS_THERMOSTAT,
        payload: response.data
      });
    });
  });
};
