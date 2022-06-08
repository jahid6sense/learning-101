import {PUT, REMOVE} from "redux/types";

const main = (state = {status: null}, action: any) => {
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
