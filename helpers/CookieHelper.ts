// @ts-ignore
import cookie from "js-cookie";

class CookieHelper {
    
  setCookie = (key: any, value: any) => {
    console.log(key, value);
    if (process.browser) {
      cookie.set(key, value, {
        expires: 1,
        path: "/",
      });
    }
  };

  removeCookie = (key: any) => {
    if (process.browser) {
      cookie.remove(key, {
        expires: 1,
      });
    }
  };
}

export default new CookieHelper();
