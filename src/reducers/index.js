import { combineReducers } from 'redux';

import WeatherReducer from './reducerWeather';
import DownstairsThermostatReducer from './reducerDownstairsThermostat';
import UpstairsThermostatReducer from './reducerUpstairsThermostat';

export default combineReducers({
  Weather: WeatherReducer,
  DownstairsThermostat: DownstairsThermostatReducer,
  UpstairsThermostat: UpstairsThermostatReducer  
});
