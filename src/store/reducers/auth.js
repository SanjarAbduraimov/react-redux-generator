import actionTypes from "../actions";
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: null,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
}

export default authReducer;
