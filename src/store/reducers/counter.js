import actionTypes from "../actions";
const initialState = {
  counter: 0,
  result: 0,
  error: null,
  loading: false,
};

function conuterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: (action.value += 1),
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: (action.value -= 1),
      };
    case actionTypes.CLEAR:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
}

export default conuterReducer;
