import {PUT, REMOVE, SETUSER, OUT} from "redux/types";

const initialState = {
  status: 1,
  name: "",
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case PUT:
      return {...state, status: state.status + action.payload};
    case REMOVE:
      return {...state, status: 0};
    case SETUSER:
      return {...state, name: action.payload};
    case OUT:
      return {...state, name: null};
    default:
      return state;
  }
};

export default main;
