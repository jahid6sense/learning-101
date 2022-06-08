import CookieHelper from "helpers/CookieHelper";
import {PUT, REMOVE} from "redux/types";

class cookieActions {
  putIt = (status: any) => (dispatch: any) => {
    CookieHelper.setCookie("status", status);
    dispatch({type: PUT, payload: status});
  };

  removeIt = () => {
    return (dispatch: any) => {
      CookieHelper.removeCookie("status");
      dispatch({type: REMOVE});
    };
  };
}

export default new cookieActions();
