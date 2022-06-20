import ImageApi from "Api/ImageApi";

class ImageActions {
  getImages = (success: any, errorLoad: any) => {
    ImageApi
      .getImages()
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
}

export default new ImageActions();
