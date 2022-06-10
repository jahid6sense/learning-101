import http from "./Common";

class userData {
  static endpoint = {
    users: "/users",
  };

  getHeaders = (token: string) => {
    return {
      "Content-type": "application/json",
      //   Authorization: "Bearer " + token,
    };
  };

  getUserData = () => {
    return http.get(`${userData.endpoint.users}`, {
      // headers: this.getHeaders(token),
    });
  };
}

export default new userData();
