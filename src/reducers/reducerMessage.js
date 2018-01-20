import { GET_MESSAGE } from '../actions/index';

const INITIAL_STATE = { message: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_MESSAGE:
      return { ...state, message: action.payload}
    default:
      return state;
  }
};
