import axios from 'axios';

export const GET_WEATHER = 'GET_WEATHER';

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
