import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]); // always return a new object!!!
      return [ action.payload.data, ...state ]; // works the same
  }
  return state;
}