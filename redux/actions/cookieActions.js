import CookieHelper from "helpers/CookieHelper";
import {PUT, REMOVE} from "redux/types";

class cookieActions {
  try = () => {
    return {
      type: PUT,
    };
  };

  putIt = (status) => (dispatch) => {
    CookieHelper.setCookie("status", status);
    dispatch({type: PUT, payload: status});
  };

  removeIt = () => {
    return (dispatch) => {
      CookieHelper.removeCookie("status");
      dispatch({type: REMOVE});
    };
  };
}

export default new cookieActions();
