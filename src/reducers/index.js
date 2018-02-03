import { combineReducers } from 'redux';

import WeatherReducer from './reducerWeather';
import DownstairsThermostatReducer from './reducerDownstairsThermostat';
import UpstairsThermostatReducer from './reducerUpstairsThermostat';
import LocksReducer from './reducerLocks';
import MessageReducer from './reducerMessage';
import LightsReducer from './reducerLights';
import ScoresReducer from './reducerScores';

export default combineReducers({
  Weather: WeatherReducer,
  DownstairsThermostat: DownstairsThermostatReducer,
  UpstairsThermostat: UpstairsThermostatReducer,
  Locks: LocksReducer,
  Message: MessageReducer,
  Lights: LightsReducer,
  Scores: ScoresReducer,
});
