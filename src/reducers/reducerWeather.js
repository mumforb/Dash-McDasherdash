import { GET_WEATHER } from '../actions/index';
import { GET_CURRENT_WEATHER } from '../actions/index';

const INITIAL_STATE = { weather: null, currentWeather: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_WEATHER:
      return { ...state, weather: action.payload }
    case GET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload }
    default:
      return state;
  }
};
