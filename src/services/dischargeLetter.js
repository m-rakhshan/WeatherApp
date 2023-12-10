import axios from "axios";
//custom import
import { URLS } from "../constants/apis";

export const generateLetter = (requirement) => {
  return new Promise((resp, rej) => {
    axios
      .get(URLS.AZURE_TUNER(requirement), {
        headers: {
          Accept: "*/*",
          Connection: "keep-alive",
          "x-api-key": "tunertest7638",
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

export const sendLetterReview = (data) => {
  return new Promise((resp, rej) => {
    //form data
    const formData = new FormData();
    formData.append("letter ", data.letter);
    formData.append("feedback", data.feedback);
    formData.append("email", "rakshan.mughal@txend.com");
    formData.append("page", "Brief View");
    formData.append("issue_tags", data.issue_tags);
    formData.append("review_part", data.review_part);
    formData.append("letter_id", data.letter_id);
    //axios call
    axios
      .post(URLS.SEND_LETTER_REVIEW, formData, {
        headers: {
          Accept: "*/*",
          Connection: "keep-alive",
          "Content-Type": `multipart/form-data`,
          "x-api-key": "tunerprod763644328",
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
