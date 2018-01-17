import { GET_DOWNSTAIRS_THERMOSTAT } from '../actions/index';

const INITIAL_STATE = { data: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_DOWNSTAIRS_THERMOSTAT:
      return { ...state, data: action.payload}
    default:
      return state;
  }
};
