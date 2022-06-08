import CookieHelper from "helpers/CookieHelper";
import {REMOVE} from "redux/types";

class cookieActions {
  putIt = (status: string) => (dispatch: any) => {
    return (dispatch: any) => {
      CookieHelper.setCookie(status, "I am here");
      dispatch({type: REMOVE});
    };
  };

  removeIt = () => {
    return (dispatch: any) => {
      CookieHelper.removeCookie("status");
      dispatch({type: REMOVE});
    };
  };
}

export default new cookieActions();
