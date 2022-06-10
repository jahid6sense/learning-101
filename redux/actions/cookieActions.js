import userData from "../../Api/userData";
import CookieHelper from "helpers/CookieHelper";
import {PUT, REMOVE, OUT, SETUSER} from "redux/types";
import {useDispatch} from "react-redux";

const dispatch = useDispatch;

class cookieActions {
  putIt = (number = 1) => {
    CookieHelper.setCookie("status", number);
    return {
      type: PUT,
      payload: number,
    };
  };

  removeIt = () => {
    CookieHelper.removeCookie("status");
    return {
      type: REMOVE,
    };
  };

  getData = (success, errorLoad) => {
    userData
      .getUserData()
      .then((response) => {
        if (response.status == 201 || response.status == 200) {
          success(response.data);
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.data)
          errorLoad(err.response.data);
      });
  };

  setUser = (name) => {
    CookieHelper.setCookie("name", name);
    return {
      type: SETUSER,
      payload: name,
    };
  };

  outUser = () => {
    CookieHelper.removeCookie("name");
    return {
      type: OUT,
    };
  };

}

export default new cookieActions();
