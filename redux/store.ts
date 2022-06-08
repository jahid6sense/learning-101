//@ts-ignore
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createWrapper} from "next-redux-wrapper";
import root from "./reducers/root";

const middleware = [thunk];

const makeStore = (): any => {
  createStore(root, compose(applyMiddleware(...middleware)));
};

export const wrapper = createWrapper(makeStore);
