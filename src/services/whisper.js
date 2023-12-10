import axios from "axios";
import mime from "mime";
//custom import
import { URLS } from "../constants/apis";

export const speechToText = (audioUri) => {
  const filetype = audioUri.split(".").pop();
  const filename = audioUri.split("/").pop();
  return new Promise((resp, rej) => {
    //form data
    const formData = new FormData();
    formData.append("language", "en");
    formData.append("file", {
      uri: audioUri,
      type: mime.getType(audioUri),
      name: filename,
    });
    //axios call
    axios
      .post(URLS.TRANSCRIPTION, formData, {
        headers: {
          Accept: "application/json",
          "content-type": `multipart/form-data`,
          Connection: "keep-alive",
        },
      })
      .then((response) => {
        resp(response.data);
      })
      .catch((error) => {
        rej(error);
      });
  });
};
