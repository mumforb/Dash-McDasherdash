import { combineReducers } from 'redux';

import WeatherReducer from './reducerWeather';

export default combineReducers({
  Weather: WeatherReducer
});
