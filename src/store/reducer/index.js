import {
  GET_RIGHT_POSITION,
  GET_LEFT_POSITION,
  GET_LEFT_WEIGHT,
  GET_RIGHT_WEIGHT,
  GET_HEIGHT
} from "../action/types";

function reducer(state = {}, action) {
  switch (action.type) {
    case GET_LEFT_POSITION:
      return {
        ...state,
        leftPosition: action.data,
      };
    case GET_RIGHT_POSITION:
      return {
        ...state,
        rightPosition: action.data,
      };
    case GET_LEFT_WEIGHT:
      return {
        ...state,
        leftWeight: action.data
      };
    case GET_RIGHT_WEIGHT:
      return {
        ...state,
        rightWeight: action.data
      };
    case GET_HEIGHT:
      return {
        ...state,
        innerHeight: action.data
      };
    default:
      return state;
  }
}

export default reducer;
