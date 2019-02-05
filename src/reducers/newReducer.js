import { FETCHING, ERROR, COMPLETE } from '../actions';

const initialState = { FETCHING: false, ERROR: false }

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { FETCHING: true };
    case COMPLETE:
      return { FETCHING: false };
    case ERROR:
      return Object.create({}, state, { ERROR: true, FETCHING: false });
    default:
      return state;
  }
}