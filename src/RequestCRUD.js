import axios from "axios";
import ENV from "./environment";

axios.defaults.baseURL = "http://192.168.56.1:8000";

export default {
  readTimer() {
    return axios.get("/timer/");
  },
  createTimer(data) {
    return axios.post("/timer/", data);
  },
  updateTimer(id) {
    return axios.update(+"/timer/" + String(id));
  },
  deleteTimer(id) {
    return axios.delete("/timer/" + String(id));
  },
  postLogin(data) {
    return axios.post("/api-auth/login/", data);
  },
  postJoin(data) {
    return axios.post("/join/", data);
  },

  postSignUp(data){
    return axios.post("/rest-auth/registration/",data);
  },
  

};
