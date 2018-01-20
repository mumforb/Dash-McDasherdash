import { GET_LOCKS } from '../actions/index';

const INITIAL_STATE = { data: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_LOCKS:
      return { ...state, data: action.payload}
    default:
      return state;
  }
};
