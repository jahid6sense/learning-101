import http from "./Common";

class ImageApi {
  static endpoint = {
    users: "/photos",
  };

  getHeaders = (token: string) => {
    return {
      "Content-type": "application/json",
      //   Authorization: "Bearer " + token,
    };
  };

  getImages = () => {
    return http.get(`${ImageApi.endpoint.users}`, {
    });
  };
}

export default new ImageApi();
