import { GET_SCORES, GET_SCHEDULE } from '../actions/index';

const INITIAL_STATE = { scores: null, schedule: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_SCORES:
      return { ...state, scores: action.payload}
    case GET_SCHEDULE:
      return { ...state, schedule: action.payload}
    default:
      return state;
  }
};
