import { INCREMENT, DECREMENT, increment, decrement } from './actions';

const initialState = {
  count: 20
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    return {
      count: state.count + action.payload,
    }
    case DECREMENT:
    // Fill in the body of this case
    return {
      count: state.count - action.payload,
    }
    default:
      return state;
  }
};

export default counterReducer;
