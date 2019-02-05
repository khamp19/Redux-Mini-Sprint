export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';
export const COMPLETE = 'COMPLETE';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  return {
    type: 'INCREMENT',
    payload: 1
  }
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
    payload: 1
  }
};

export const asyncIncrement = () => {
  const action = { type: 'INCREMENT', payload: 5 }
  //fake server call- axios.get goes here
  return dispatch => {
    dispatch({ type: FETCHING});
    setTimeout(()=> {
      dispatch(action)
      dispatch({ type: COMPLETE });
    }, 2000)
  }
}

