import axios from "axios";
import ENV from "./environment";

axios.defaults.baseURL = ENV.BACKEND_HOST; // Global axios defaults

// Axios 관련 Document : https://github.com/axios/axios
// Django rest-auth Document : https://django-rest-auth.readthedocs.io/en/latest/
// Django rest-auth Q&A : https://stackoverflow.com/questions/tagged/django-rest-auth
// React.js Document : https://ko.reactjs.org/docs

// Cross-Orgin-Resource-Sharing Issue in AXIOS
// --------------------------------------------------------------------------------------------
// #1) About CORS secuirty issue : https://fkkmemi.github.io/nembv/nembv-10-front-end-api-test/
// => 이것은 express에 cors를 사용하면 해결이 된다.

// #2) About CORS security issue : https://velog.io/@wlsdud2194/cors
// => Client 요청에 대한 cross-origin HTTP 요청을 허가하는 헤더를 추가. (1)
// --------------------------------------------------------------------------------------------

export default {
  
  readTimer() {
    return axios.get("/timer/");
  },

  createTimer(data) {
    return axios.post("/timer/", data);
  },

  updateTimer(id) {
    return axios.update("/timer/" + String(id));
  },

  deleteTimer(id) {
    return axios.delete("/timer/" + String(id));
  },

  postLogin(data) {
    return axios.post("/api-auth/login/", data);
  },

  postJoin(data) {
    return axios.post("/rest-auth/registration/", data);
  },

};
