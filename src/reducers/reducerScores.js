import { GET_SCORES } from '../actions/index';

const INITIAL_STATE = { scores: null };

export default function(state = INITIAL_STATE, action){
  console.log("action", action);
  switch(action.type){
    case GET_SCORES:
      return { ...state, scores: action.payload}
    default:
      return state;
  }
};
