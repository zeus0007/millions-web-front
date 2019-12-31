import axios from "axios";
//import ENV from "./environment";

axios.defaults.baseURL = "http://127.0.0.1:8000"; // Global axios defaults

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
    return axios.get("/timer/", {
      auth: {
        username: window.sessionStorage.getItem('user_name'),
        password: window.sessionStorage.getItem('user_pw')
      }
    });
  },

  createTimer(data) {
    return axios.post("/timer/", data);
  },

  updateTimer(id, hour, minute, second, category) {
    const url = "/timer/" + String(id) + "/";
    console.log(hour + ":" + minute + ":" + second)
    return axios
      .put(
        url,
        {
          pk: id,
          category,
          hour,
          minute,
          second,
          is_main_category: false
        },
        {
          auth: {
            username: window.sessionStorage.getItem('user_name'),
            password: window.sessionStorage.getItem('user_pw')
          }
        }
      )
      .catch(error => {
        console.log(error);
      })
      .then(response => {
        console.log(response);
      });
  },

  deleteTimer(id) {
    return axios.delete("/timer/" + String(id));
  },

  postLogin(data) {
    return axios.post("/rest-auth/login/", data);
  },

  postJoin(data) {
    return axios.post("/rest-auth/registration/", data);
  }
};
