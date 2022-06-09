import {PUT, REMOVE} from "redux/types";

const initialState = {
  status: null,
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case PUT:
      return {...state, status: action.payload};
    case REMOVE:
      return {status: null};
    default:
      return state;
  }
};

export default main;
